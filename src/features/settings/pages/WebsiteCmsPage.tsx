import { useEffect, useMemo, useRef, useState } from 'react';
import {
  Check,
  ChevronRight,
  CloudUpload,
  ExternalLink,
  Image as ImageIcon,
  RotateCcw,
  Save,
} from 'lucide-react';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';
import { defaultCmsContent, type CmsContent } from '../../cms/data/default-content';

const STORAGE_KEY = 'coffee-admin.website-cms.v1';
const groups = [
  { id: 'brand', label: 'Brand & logo', hint: 'Logo, favicon and identity' },
  { id: 'header', label: 'Header', hint: 'Navigation actions' },
  { id: 'hero', label: 'Hero section', hint: 'Main headline and artwork' },
  // { id: 'about', label: 'About section', hint: 'Story, quote and image' },
  { id: 'menu', label: 'Menu section', hint: 'Section heading and copy' },
  // { id: 'journey', label: 'Coffee journey', hint: 'Process section copy' },
  // { id: 'whyUs', label: 'Why choose us', hint: 'Benefits and image' },
  { id: 'gallery', label: 'Gallery', hint: 'Gallery introduction' },
  { id: 'testimonials', label: 'Testimonials', hint: 'Review section copy' },
  { id: 'booking', label: 'Booking CTA', hint: 'Reservation call to action' },
  { id: 'contact', label: 'Contact page', hint: 'Address and opening hours' },
  { id: 'footer', label: 'Footer & social', hint: 'Footer copy and profiles' },
  // { id: 'seo', label: 'SEO & sharing', hint: 'Metadata and social preview' },
] as const;
type GroupId = (typeof groups)[number]['id'];
type Field = { key: string; label: string; type?: 'textarea' | 'image'; placeholder?: string };

const fields: Record<GroupId, Field[]> = {
  brand: [
    { key: 'name', label: 'Website name' },
    { key: 'tagline', label: 'Tagline' },
    { key: 'logo', label: 'Main logo', type: 'image' },
    { key: 'favicon', label: 'Favicon', type: 'image' },
  ],
  header: [
    { key: 'announcement', label: 'Mobile menu message' },
    { key: 'reserveLabel', label: 'Reserve button label' },
    { key: 'accountLabel', label: 'Account link label' },
  ],
  hero: [
    { key: 'eyebrow', label: 'Eyebrow' },
    { key: 'title', label: 'Headline' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'primaryLabel', label: 'Primary button label' },
    { key: 'primaryUrl', label: 'Primary button link' },
    { key: 'secondaryLabel', label: 'Secondary button label' },
    { key: 'image', label: 'Hero image', type: 'image' },
  ],
  about: [
    { key: 'eyebrow', label: 'Eyebrow' },
    { key: 'title', label: 'Heading' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'quote', label: 'Featured quote', type: 'textarea' },
    { key: 'image', label: 'About image', type: 'image' },
  ],
  menu: [
    { key: 'eyebrow', label: 'Eyebrow' },
    { key: 'title', label: 'Heading' },
    { key: 'description', label: 'Description', type: 'textarea' },
  ],
  journey: [
    { key: 'eyebrow', label: 'Eyebrow' },
    { key: 'title', label: 'Heading' },
    { key: 'description', label: 'Description', type: 'textarea' },
  ],
  whyUs: [
    { key: 'eyebrow', label: 'Eyebrow' },
    { key: 'title', label: 'Heading' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'image', label: 'Section image', type: 'image' },
  ],
  gallery: [
    { key: 'eyebrow', label: 'Eyebrow' },
    { key: 'title', label: 'Heading' },
    { key: 'description', label: 'Description', type: 'textarea' },
  ],
  testimonials: [
    { key: 'eyebrow', label: 'Eyebrow' },
    { key: 'title', label: 'Heading' },
    { key: 'description', label: 'Description', type: 'textarea' },
  ],
  booking: [
    { key: 'eyebrow', label: 'Eyebrow' },
    { key: 'title', label: 'Heading' },
    { key: 'description', label: 'Description', type: 'textarea' },
    { key: 'buttonLabel', label: 'Button label' },
    { key: 'background', label: 'Background image', type: 'image' },
  ],
  contact: [
    { key: 'title', label: 'Page heading' },
    { key: 'description', label: 'Introduction', type: 'textarea' },
    { key: 'address', label: 'Address' },
    { key: 'phone', label: 'Phone' },
    { key: 'email', label: 'Email' },
    { key: 'hours', label: 'Opening hours' },
    { key: 'mapUrl', label: 'Google Maps URL' },
  ],
  footer: [
    { key: 'description', label: 'Footer description', type: 'textarea' },
    { key: 'copyright', label: 'Copyright text' },
    { key: 'facebook', label: 'Facebook URL' },
    { key: 'instagram', label: 'Instagram URL' },
    { key: 'twitter', label: 'X / Twitter URL' },
    { key: 'youtube', label: 'YouTube URL' },
  ],
  seo: [
    { key: 'title', label: 'Meta title' },
    { key: 'description', label: 'Meta description', type: 'textarea' },
    { key: 'keywords', label: 'Keywords' },
    { key: 'canonicalUrl', label: 'Canonical URL' },
    { key: 'ogImage', label: 'Social sharing image', type: 'image' },
    { key: 'robots', label: 'Robots directive' },
  ],
};

function ImageField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  const input = useRef<HTMLInputElement>(null);
  const read = (file?: File) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result));
    reader.readAsDataURL(file);
  };
  return (
    <div className="space-y-2">
      <span className="text-sm font-semibold">{label}</span>
      <button
        type="button"
        onClick={() => input.current?.click()}
        className="group flex min-h-32 w-full items-center gap-4 rounded-xl border border-dashed border-border bg-muted/30 p-4 text-left transition hover:border-primary/60 hover:bg-primary/5"
      >
        {value ? (
          <img src={value} alt="" className="h-24 w-32 rounded-lg bg-white object-contain" />
        ) : (
          <span className="grid size-16 place-items-center rounded-xl bg-card">
            <ImageIcon />
          </span>
        )}
        <span>
          <strong className="block text-foreground">Choose or replace image</strong>
          <small className="text-muted-foreground">
            PNG, JPG, SVG or WebP · recommended under 2 MB
          </small>
          <span className="mt-2 block break-all text-xs text-primary">
            {value && !value.startsWith('data:')
              ? value
              : value
                ? 'Uploaded image'
                : 'No image selected'}
          </span>
        </span>
      </button>
      <input
        ref={input}
        hidden
        type="file"
        accept="image/*"
        onChange={(event) => read(event.target.files?.[0])}
      />
    </div>
  );
}

export default function WebsiteCmsPage() {
  const [content, setContent] = useState<CmsContent>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || '') || defaultCmsContent;
    } catch {
      return defaultCmsContent;
    }
  });
  const [saved, setSaved] = useState<CmsContent>(content);
  const [active, setActive] = useState<GroupId>('brand');
  const [status, setStatus] = useState<'idle' | 'draft' | 'published'>('idle');
  const dirty = useMemo(() => JSON.stringify(content) !== JSON.stringify(saved), [content, saved]);
  useEffect(() => {
    if (dirty) setStatus('idle');
  }, [dirty]);
  const update = (key: string, value: string) =>
    setContent((current) => ({ ...current, [active]: { ...current[active], [key]: value } }));
  const persist = (publish = false) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    setSaved(content);
    setStatus(publish ? 'published' : 'draft');
  };
  const reset = () => {
    if (!window.confirm('Restore all CMS fields to their original content?')) return;
    setContent(defaultCmsContent);
    localStorage.removeItem(STORAGE_KEY);
    setSaved(defaultCmsContent);
    setStatus('idle');
  };
  const current = content[active] as Record<string, string>;
  const group = groups.find((item) => item.id === active)!;
  return (
    <div className="space-y-5 pb-10">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
      
          <h1>Website content</h1>

        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={reset}>
            <RotateCcw className="size-4" /> Reset
          </Button>
          <Button variant="outline" onClick={() => persist(false)} disabled={!dirty}>
            <Save className="size-4" /> Save draft
          </Button>
          <Button onClick={() => persist(true)}>
            <CloudUpload className="size-4" /> Publish changes
          </Button>
        </div>
      </header>
      <div className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
        <div className="flex items-center gap-3">
          <span
            className={`grid size-8 place-items-center rounded-full ${dirty ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}
          >
            <Check className="size-4" />
          </span>
          <div>
            <strong className="block text-sm">
              {dirty
                ? 'Unsaved changes'
                : status === 'published'
                  ? 'Website content published'
                  : status === 'draft'
                    ? 'Draft saved locally'
                    : 'All changes saved'}
            </strong>
            
          </div>
        </div>
        <a
          href="http://localhost:3000"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 text-sm font-semibold text-primary sm:flex"
        >
          View website <ExternalLink className="size-4" />
        </a>
      </div>
      <div className="grid gap-5 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="h-fit overflow-hidden rounded-2xl border border-border bg-card">
          <div className="border-b border-border p-4">
            <h2 className="text-base">Content areas</h2>
          </div>
          <nav className="max-h-[68vh] overflow-auto p-2">
            {groups.map((item) => (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition ${active === item.id ? 'bg-primary/10 text-primary' : 'hover:bg-muted'}`}
              >
                <span>
                  <strong className="block text-sm">{item.label}</strong>
                  <small className="text-muted-foreground">{item.hint}</small>
                </span>
                <ChevronRight className="size-4 shrink-0" />
              </button>
            ))}
          </nav>
        </aside>
        <section className="rounded-2xl border border-border bg-card">
          <div className="border-b border-border p-5">
        
            <h2 className="mt-1">Edit {group.label.toLowerCase()}</h2>
            {/* <p className="mt-1 text-sm">Changes remain private until they are published.</p> */}
          </div>
          <div className="grid gap-5 p-5 xl:grid-cols-2">
            {fields[active].map((field) => (
              <div
                key={field.key}
                className={
                  field.type === 'textarea' || field.type === 'image' ? 'xl:col-span-2' : ''
                }
              >
                {field.type === 'image' ? (
                  <ImageField
                    label={field.label}
                    value={current[field.key] || ''}
                    onChange={(value) => update(field.key, value)}
                  />
                ) : (
                  <label className="space-y-2">
                    <span className="text-sm font-semibold">{field.label}</span>
                    {field.type === 'textarea' ? (
                      <Textarea
                        value={current[field.key] || ''}
                        rows={4}
                        onChange={(event) => update(field.key, event.target.value)}
                      />
                    ) : (
                      <Input
                        value={current[field.key] || ''}
                        onChange={(event) => update(field.key, event.target.value)}
                      />
                    )}
                    {active === 'seo' && field.key === 'title' && (
                      <small className="block text-right text-muted-foreground">
                        {(current[field.key] || '').length}/60 characters
                      </small>
                    )}
                  </label>
                )}
              </div>
            ))}
          </div>
          {active === 'seo' && (
            <div className="mx-5 mb-5 rounded-xl border border-border bg-muted/30 p-4">
              <span className="text-xs text-muted-foreground">Search preview</span>
              <div className="mt-2 text-lg text-blue-700">
                {content.seo.title || content.brand.name}
              </div>
              <div className="text-sm text-emerald-700">
                {content.seo.canonicalUrl || 'https://yourwebsite.com'}
              </div>
              <p className="mt-1 max-w-2xl text-sm">{content.seo.description}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
