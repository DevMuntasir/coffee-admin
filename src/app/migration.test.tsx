import { describe, it, expect } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { createAppStore } from './store';
import { setTheme } from './ui-slice';
import manifest from './page-manifest.json';
import { navigation } from './navigation';

const pages = import.meta.glob<{ default: React.ComponentType }>('../features/*/pages/*Page.tsx', {
  eager: true,
});

describe('migration contract', () => {
  it('maps every active screen to an available page component', () => {
    expect(new Set(manifest.map((page) => page.slug)).size).toBe(manifest.length);
    for (const route of manifest) {
      expect(Object.keys(pages).some((path) => path.endsWith(`/${route.page}.tsx`))).toBe(true);
    }
  });
  for (const route of manifest) {
    it(`renders ${route.slug} as native React markup`, () => {
      const module = Object.entries(pages).find(([path]) =>
        path.endsWith(`/${route.page}.tsx`),
      )?.[1];
      expect(module).toBeDefined();
      const Page = module!.default;
      const html = renderToStaticMarkup(
        <MemoryRouter>
          <Page />
        </MemoryRouter>,
      );
      expect(html.length).toBeGreaterThan(100);
      expect(html).not.toMatch(/<script|data-bs-/);
    });
  }
  it('navigation destinations exist', () => {
    const paths = new Set(manifest.map((page) => `/${page.slug}`));
    for (const group of navigation)
      for (const item of group.items) expect(paths.has(item.path)).toBe(true);
  });
  it('keeps shared code independent from feature/app orchestration', () => {
    function check(directory: string) {
      for (const file of readdirSync(directory, { withFileTypes: true })) {
        const path = resolve(directory, file.name);
        if (file.isDirectory()) check(path);
        else if (/\.tsx?$/.test(file.name))
          expect(readFileSync(path, 'utf8')).not.toMatch(/from\s+['"]@\/(app|features)\//);
      }
    }
    check('src/shared');
  });
  it('keeps source assets available without loading legacy scripts', () => {
    function check(directory: string) {
      for (const file of readdirSync(directory, { withFileTypes: true })) {
        const path = resolve(directory, file.name);
        if (file.isDirectory()) check(path);
        else if (/\.(tsx?|css)$/.test(file.name)) {
          const source = readFileSync(path, 'utf8');
          for (const match of source.matchAll(/(?:["'])(\/assets\/[^"']+)(?:["'])/g))
            expect(
              existsSync(resolve('public', '.' + match[1])),
              `${dirname(path)}: ${match[1]}`,
            ).toBe(true);
          expect(source).not.toMatch(/dangerouslySetInnerHTML|bootstrap\.min|bootstrap\.bundle/);
        }
      }
    }
    check('src/features');
  });
});
describe('state ownership', () => {
  it('changes global theme without populating server state with demo data', () => {
    const store = createAppStore();
    store.dispatch(setTheme('dark'));
    expect(store.getState().ui.theme).toBe('dark');
    expect(store.getState().api.queries).toEqual({});
  });
});
