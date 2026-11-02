"""One-time source migration. Runtime uses compiled TSX, never HTML injection.
Run from react-app. Retained for provenance; edit the resulting feature components.
"""
from html.parser import HTMLParser
from pathlib import Path
from collections import Counter
import json, re, shutil

ROOT = Path(__file__).resolve().parents[2]
APP = ROOT / 'react-app'
VOID = set('area base br col embed hr img input link meta param source track wbr'.split())
class Node:
    def __init__(self, tag='', attrs=(), parent=None):
        self.tag, self.attrs, self.parent, self.children = tag, dict(attrs), parent, []
    def has(self, cls): return cls in (self.attrs.get('class') or '').split()
    def find(self, predicate):
        for c in self.children:
            if isinstance(c, Node):
                if predicate(c): return c
                found = c.find(predicate)
                if found: return found
    def all(self, predicate):
        result = []
        for c in self.children:
            if isinstance(c, Node):
                if predicate(c): result.append(c)
                result.extend(c.all(predicate))
        return result
    def text(self): return ' '.join(c.text() if isinstance(c, Node) else c for c in self.children).strip()
class Parser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node('root'); self.current = self.root
    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs, self.current); self.current.children.append(n)
        if tag not in VOID: self.current = n
    def handle_startendtag(self, tag, attrs): self.handle_starttag(tag, attrs); self.handle_endtag(tag)
    def handle_endtag(self, tag):
        n = self.current
        while n.parent:
            if n.tag == tag: self.current = n.parent; return
            n = n.parent
    def handle_data(self, data): self.current.children.append(data)

def pascal(s): return ''.join(p.capitalize() for p in s.replace('_','-').split('-'))
def write(path, content):
    p = APP / path; p.parent.mkdir(parents=True, exist_ok=True); p.write_text(content, encoding='utf-8')
def q(s): return json.dumps(s, ensure_ascii=False)
def qa(s): return '{'+q(s)+'}'

mapping = {
'd-flex':'flex','d-inline-flex':'inline-flex','d-block':'block','d-inline-block':'inline-block','d-none':'hidden',
'align-items-center':'items-center','align-items-start':'items-start','align-items-end':'items-end','align-self-center':'self-center',
'justify-content-between':'justify-between','justify-content-center':'justify-center','justify-content-end':'justify-end','justify-content-start':'justify-start',
'flex-column':'flex-col','flex-row':'flex-row','flex-wrap':'flex-wrap','flex-nowrap':'flex-nowrap','flex-fill':'flex-1','flex-grow-1':'grow','flex-shrink-0':'shrink-0',
'position-relative':'relative','position-absolute':'absolute','position-fixed':'fixed','position-sticky':'sticky',
'top-50':'top-1/2','start-50':'left-1/2','translate-middle':'-translate-x-1/2 -translate-y-1/2','translate-middle-y':'-translate-y-1/2','end-0':'right-0','start-0':'left-0','top-0':'top-0','bottom-0':'bottom-0','z-n1':'-z-10',
'rounded-circle':'rounded-full','rounded-pill':'rounded-full','rounded':'rounded-md','rounded-0':'rounded-none',
'border-bottom':'border-b','border-top':'border-t','border-end':'border-r','border-start':'border-l',
'img-fluid':'max-w-full h-auto','text-end':'text-right','text-start':'text-left','text-truncate':'truncate','text-decoration-none':'no-underline',
'fw-medium':'font-medium','fw-semibold':'font-semibold','fw-bold':'font-bold','fw-normal':'font-normal',
'text-uppercase':'uppercase','text-capitalize':'capitalize','fst-italic':'italic','text-nowrap':'whitespace-nowrap',
'bg-white':'bg-card','bg-light':'bg-muted','text-muted':'text-muted-foreground','text-body':'text-muted-foreground',
'bg-primary':'bg-primary','text-primary':'text-primary','text-dark':'text-foreground','text-secondary':'text-muted-foreground',
'vh-100':'min-h-screen','h-100':'h-full','w-100':'w-full','w-50':'w-1/2','h-auto':'h-auto','w-auto':'w-auto',
'shadow-sm':'shadow-xs','shadow':'shadow-sm','table-responsive':'overflow-x-auto','table-nowrap':'whitespace-nowrap',
'row':'grid grid-cols-12 gap-x-6','container':'mx-auto max-w-7xl px-4','container-fluid':'w-full','container-fuild':'w-full',
'nav':'flex flex-wrap gap-2','nav-item':'shrink-0','nav-link':'preview-tab rounded-md px-3 py-2 font-medium',
'dropdown-item':'block rounded px-3 py-2 hover:bg-muted','dropdown-menu-end':'right-0',
'form-label':'mb-2 block font-medium text-foreground','form-check':'flex items-center gap-2','form-check-label':'text-foreground',
'form-check-input':'size-4 accent-primary','input-group':'relative flex items-center','input-group-text':'flex items-center px-3 text-muted-foreground',
'progress':'flex h-2 overflow-hidden rounded-full bg-muted','progress-bar':'h-full bg-primary',
'list-unstyled':'list-none','list-inline':'flex gap-2','list-inline-item':'inline-block','cursor-pointer':'cursor-pointer',
'btn-close':'inline-flex size-8 items-center justify-center rounded-md hover:bg-muted',
'clearfix':'flow-root','stretched-link':'after:absolute after:inset-0','overflow-auto':'overflow-auto',
'form-switch':'flex items-center gap-2','object-fit-cover':'object-cover','object-fit-contain':'object-contain',
'btn-icon':'size-9 p-0','btn-sm':'h-8 text-xs','btn-lg':'h-11 px-5',
'badge-sm':'text-[11px]','card-title':'font-semibold text-foreground',
'pagination':'flex items-center gap-1','page-link':'rounded-md border px-3 py-2 hover:bg-muted',
'form-control-lg':'h-11','form-control-sm':'h-8','fs-inherit':'text-inherit',
}
spacing = {'0':'0','1':'1','2':'2','3':'4','4':'6','5':'12','auto':'auto'}
breakpoints={'sm':'sm','md':'md','lg':'lg','xl':'xl','xxl':'2xl'}
colors={'success':'emerald','danger':'red','warning':'amber','info':'sky','purple':'violet','orange':'orange','pink':'pink','teal':'teal','indigo':'indigo','secondary':'slate'}
unknown=Counter()
def classes(value):
    out=[]
    for c in value.split():
        if c in {'fade','show','datatable','select2','select2-hidden-accessible','active','btn','card','card-body','card-header','card-footer','badge','form-control','select','table'}: continue
        if c in mapping: out.extend(mapping[c].split()); continue
        m=re.fullmatch(r'(m|p)([setbxy]?)(?:-(sm|md|lg|xl|xxl))?-(0|1|2|3|4|5|auto)',c)
        if m:
            base,side,bp,size=m.groups(); side={'s':'l','e':'r'}.get(side,side)
            out.append((breakpoints[bp]+':' if bp else '')+base+side+'-'+spacing[size]); continue
        m=re.fullmatch(r'col(?:-(sm|md|lg|xl|xxl))?-(\d+)',c)
        if m:
            bp,size=m.groups()
            if bp: out.append('col-span-12'); out.append(breakpoints[bp]+':col-span-'+size)
            else: out.append('col-span-'+size)
            continue
        if c in {'col','col-auto'}: out.append('col-span-12 md:col-span-6'); continue
        m=re.fullmatch(r'd-(sm|md|lg|xl|xxl)-(flex|block|none|inline-flex)',c)
        if m:
            bp,v=m.groups(); out.append(breakpoints[bp]+':'+{'none':'hidden'}.get(v,v)); continue
        m=re.fullmatch(r'(flex|align-items|justify-content)-(sm|md|lg|xl|xxl)-(\w+)',c)
        if m:
            p,bp,v=m.groups(); out.append(breakpoints[bp]+':'+mapping.get(p+'-'+v,p+'-'+v)); continue
        m=re.fullmatch(r'fs-(\d+)',c)
        if m: out.append('text-['+m[1]+'px]'); continue
        m=re.fullmatch(r'(bg|text|border|badge-soft)-(\w+)',c)
        if m and m[2] in colors:
            p,v=m.groups(); col=colors[v]
            out.append({'bg':f'bg-{col}-500','text':f'text-{col}-600','border':f'border-{col}-500','badge-soft':f'bg-{col}-50 text-{col}-700'}[p]); continue
        if c.startswith('btn-') or c in {'dropdown-toggle','input-group-flat','table-bordered','table-sm'}: continue
        if c.startswith('g-'):
            out.append('gap-'+spacing.get(c[2:],c[2:])); continue
        if c.startswith('icon-'): continue
        out.append(c); unknown[c]+=1
    return ' '.join(dict.fromkeys(out))

feature_map={
'index':'dashboard','pos':'pos','orders':'orders','kanban-view':'orders','kitchen':'kitchen','reservations':'reservations',
'categories':'menu','items':'menu','addons':'menu','coupons':'menu','table':'tables','customer':'customers',
'invoices':'billing','invoice-details':'billing','payments':'billing','users':'administration','role-permission':'administration',
}
auth={'login','register','forgot-password','email-verification','otp','reset-password'}
routes=[]
for path in sorted(ROOT.glob('*.html')):
    slug=path.stem; feature=feature_map.get(slug,'auth' if slug in auth else 'reports' if slug.endswith('report') else 'settings')
    parser=Parser(); parser.feed(path.read_text(encoding='utf-8-sig')); doc=parser.root
    wrapper=doc.find(lambda n:n.has('page-wrapper'))
    content=(wrapper.find(lambda n:n.has('content')) or wrapper) if wrapper else doc.find(lambda n:n.has('main-wrapper'))
    if content is None: raise RuntimeError(slug)
    page=pascal('dashboard' if slug=='index' else slug)+'Page'
    modal_nodes=doc.all(lambda n:n.has('modal') or n.has('offcanvas')) if wrapper else []
    referenced = {n.attrs.get('data-bs-target', '').lstrip('#') for n in content.all(lambda n: n.attrs.get('data-bs-toggle') in {'modal', 'offcanvas'})}
    for _ in range(len(modal_nodes)):
        for modal in modal_nodes:
            if modal.attrs.get('id') in referenced:
                referenced.update(n.attrs.get('data-bs-target', '').lstrip('#') for n in modal.all(lambda n: n.attrs.get('data-bs-toggle') in {'modal', 'offcanvas'}))
    modal_nodes = [n for n in modal_nodes if n.attrs.get('id') in referenced]
    target_groups={}; defaults={}
    for i,tc in enumerate(content.all(lambda n:n.has('tab-content')) + [tc for modal in modal_nodes for tc in modal.all(lambda n:n.has('tab-content'))]):
        panels=[n for n in tc.children if isinstance(n,Node) and n.has('tab-pane')]
        if not panels: continue
        group=f'tabs-{i}'
        for p in panels:
            if p.attrs.get('id'): target_groups[p.attrs['id']]=group
        initial=next((p for p in panels if p.has('active')),panels[0])
        defaults[group]=initial.attrs.get('id','')
    used=set()
    table_models=[]
    def render(n,depth=0):
        indent='  '*depth
        if isinstance(n,str):
            s=re.sub(r'\s+',' ',n)
            return '{'+q(s)+'}' if s.strip() else ''
        if n.tag in {'script','style','link','meta'}: return ''
        if n.has('modal') or n.has('offcanvas'): return ''
        children=lambda: ''.join(render(c,depth+1) for c in n.children)
        if n.tag == 'table':
            head = n.find(lambda c: c.tag == 'thead')
            body = n.find(lambda c: c.tag == 'tbody')
            header_cells = head.all(lambda c: c.tag == 'th') if head else []
            row_nodes = [c for c in body.children if isinstance(c, Node) and c.tag == 'tr'] if body else []
            if header_cells and row_nodes and all(len([c for c in row.children if isinstance(c, Node) and c.tag in {'td','th'}]) == len(header_cells) for row in row_nodes):
                model = {'columns': [re.sub(r'\s+', ' ', c.text()).strip() or 'Select' for c in header_cells], 'rows': []}
                for row_index, row in enumerate(row_nodes):
                    cells = []
                    for column_index, td in enumerate(c for c in row.children if isinstance(c, Node) and c.tag in {'td', 'th'}):
                        cell = {'text': re.sub(r'\s+', ' ', td.text()).strip()}
                        image = td.find(lambda c: c.tag == 'img')
                        if image:
                            cell['image'] = {'src': '/' + image.attrs.get('src','').lstrip('/'), 'alt': image.attrs.get('alt','')}
                        badge = td.find(lambda c: c.has('badge'))
                        if badge:
                            badge_text = re.sub(r'\s+', ' ', badge.text()).strip()
                            cell['badge'] = {'text': badge_text, 'className': classes(badge.attrs.get('class',''))}
                            cell['text'] = cell['text'].replace(badge_text, '', 1).strip()
                        link = td.find(lambda c: c.tag == 'a' and re.fullmatch(r'[\w-]+\.html', c.attrs.get('href','')))
                        if link: cell['href'] = '/' + link.attrs['href'].replace('.html','').replace('index','dashboard')
                        actions=[]
                        for action in td.all(lambda c: c.tag in {'a','button'} and c.find(lambda x:x.tag=='i') is not None):
                            icon = action.find(lambda c:c.tag=='i')
                            name = next((c[5:] for c in icon.attrs.get('class','').split() if c.startswith('icon-')), 'ellipsis')
                            item={'icon':name, 'label':action.attrs.get('title') or name.replace('-', ' ').capitalize()}
                            if action.attrs.get('data-bs-target'): item['target']=action.attrs['data-bs-target'].lstrip('#')
                            elif re.fullmatch(r'[\w-]+\.html', action.attrs.get('href','')): item['href']='/'+action.attrs['href'].replace('.html','')
                            actions.append(item)
                        if actions: cell['actions']=actions
                        controls=[]
                        for control in td.all(lambda c:c.tag=='input' and c.attrs.get('type') in {'checkbox','radio'}):
                            controls.append({'type':control.attrs['type'], 'checked':'checked' in control.attrs, 'label':f'{model["columns"][column_index]} for row {row_index+1}'})
                        if controls: cell['controls']=controls
                        cells.append(cell)
                    model['rows'].append({'id':f'{slug}-{len(table_models)+1}-{row_index+1}', 'cells':cells})
                table_index=len(table_models); table_models.append(model)
                used.add('PreviewDataTable')
                return f'<PreviewDataTable model={{tables[{table_index}]}} />'
        attrs=dict(n.attrs); cls=attrs.pop('class','') or ''; tag=n.tag
        tag_classes=cls.split(); component=None; extras=[]
        # Replace legacy icon fonts with one isolated, locally hosted icon adapter.
        if tag=='i' and any(c.startswith('icon-') for c in tag_classes):
            used.add('Icon'); name=next(c[5:] for c in tag_classes if c.startswith('icon-'))
            return f'<Icon name={qa(name)} className={qa(classes(cls))} />'
        if tag=='div' and 'chart' in attrs.get('id','') and not n.children:
            used.add('ChartPreview'); return f'<ChartPreview kind={qa(attrs["id"])} />'
        if n.has('dropdown'):
            tag='details'; extras.append('className="preview-dropdown relative"'); cls=''
        if 'dropdown-menu' in tag_classes:
            cls += ' preview-dropdown-menu'
        if n.parent and n.parent.has('dropdown') and attrs.get('data-bs-toggle')=='dropdown':
            tag='summary'; cls+=' cursor-pointer list-none'; attrs.pop('href',None)
        if attrs.get('data-bs-toggle') in {'modal','offcanvas'}:
            component='DialogAction' if tag in {'a','button'} else 'DialogCardAction'; used.add(component)
            extras.append('target='+qa((attrs.get('data-bs-target') or attrs.get('href') or '').lstrip('#')))
            attrs.pop('href',None)
        elif attrs.get('data-bs-toggle') in {'tab','pill'}:
            target=(attrs.get('data-bs-target') or attrs.get('href') or '').lstrip('#')
            if target in target_groups:
                component='PreviewTabTrigger'; used.add(component)
                extras += ['group='+qa(target_groups[target]), 'value='+qa(target)]
                attrs.pop('href',None); attrs.pop('role',None)
        if n.has('tab-pane') and attrs.get('id') in target_groups:
            component='PreviewTabPanel'; used.add(component)
            extras += ['group='+qa(target_groups[attrs['id']]),'value='+qa(attrs['id'])]
            attrs.pop('role',None)
        if attrs.get('data-bs-dismiss') in {'modal','offcanvas'} and not attrs.get('data-bs-target'):
            component='DialogDismiss'; used.add(component)
            attrs.pop('href',None)
        # Source-only controls stay local and never submit to legacy HTML/backend URLs.
        if tag=='form':
            used.add('PreviewForm'); component='PreviewForm'; attrs.pop('action',None); attrs.pop('method',None)
        if tag=='a':
            href=attrs.pop('href','#') or '#'
            if re.fullmatch(r'[\w-]+\.html(?:#[\w-]+)?',href):
                component='Link'; used.add('Link'); dest=href.replace('.html',''); dest='/' if dest=='index' else '/'+dest
                extras.append('to='+qa(dest))
            elif href.startswith(('https://','http://','mailto:','tel:')): extras.append('href='+qa(href))
            else:
                if not component: component='Button'; used.add('Button'); extras.append('variant="ghost"')
        if 'btn' in tag_classes and not component and tag=='button': component='Button'; used.add(component)
        if tag=='button' and not component: component='Button'; used.add(component)
        if tag=='input' and attrs.get('type') not in {'checkbox','radio','range','hidden','file','color'}:
            component='Input'; used.add(component)
        if tag=='textarea': component='Textarea'; used.add(component)
        if tag=='select': component='Select'; used.add(component)
        if n.has('card') and component != 'DialogCardAction': component='Card'; used.add(component)
        if n.has('card-body'): component='CardContent'; used.add(component)
        if n.has('card-header'): component='CardHeader'; used.add(component)
        if n.has('card-footer'): component='CardFooter'; used.add(component)
        if n.has('badge') and not component: component='Badge'; used.add(component)
        if tag=='table': component='Table'; used.add(component)
        if 'btn' in tag_classes:
            variant='default' if 'btn-primary' in tag_classes else 'destructive' if 'btn-danger' in tag_classes else 'outline'
            if component in {'Button','DialogAction','DialogDismiss'}:
                extras=[e for e in extras if not e.startswith('variant=')]; extras.append('variant='+qa(variant))
            elif component=='Link' or tag=='summary': cls+=' preview-button '+('preview-button-primary' if variant=='default' else 'preview-button-outline')
        tag=component or tag
        if not any(e.startswith('className=') for e in extras):
            converted=classes(cls)
            if n.has('search-input') and not n.find(lambda c:c.tag=='input'):
                used.add('Input'); n.children=[Node('input',[('placeholder','Search…'),('aria-label','Search records')],n)]+n.children
            if converted: extras.append('className='+qa(converted))
        for k,v in attrs.items():
            if k.startswith('data-') or k.startswith('on') or k in {'selected','autofocus','data-simplebar','data-toggle','data-target'}: continue
            if k=='style':
                styles={}
                for pair in (v or '').split(';'):
                    if ':' not in pair: continue
                    prop,val=pair.split(':',1); prop=prop.strip(); val=val.strip()
                    if val.endswith('!important'): val=val[:-10].strip()
                    prop=re.sub(r'-([a-z])',lambda m:m[1].upper(),prop)
                    if prop: styles[prop]=val
                if styles: extras.append('style={'+json.dumps(styles)+'}')
                continue
            if k=='value': k='defaultValue'
            if k=='checked': k='defaultChecked'
            if k=='src' and v and v.startswith('assets/'): v='/'+v
            if k=='type' and tag=='Button': v='button'
            if k in {'width','height'} and v and not v.isdigit(): continue
            k={'for':'htmlFor','tabindex':'tabIndex','readonly':'readOnly','maxlength':'maxLength','minlength':'minLength','colspan':'colSpan','rowspan':'rowSpan','cellpadding':'cellPadding','cellspacing':'cellSpacing','autocomplete':'autoComplete','srcset':'srcSet','contenteditable':'contentEditable','spellcheck':'spellCheck','allowfullscreen':'allowFullScreen','crossorigin':'crossOrigin','frameborder':'frameBorder','fill-rule':'fillRule','clip-rule':'clipRule','stroke-width':'strokeWidth'}.get(k,k)
            if k in {'required','disabled','multiple','readOnly','defaultChecked','hidden'}:
                extras.append(k+'={'+('false' if v=='false' else 'true')+'}'); continue
            if k in {'draggable','contentEditable','spellCheck'}: extras.append(k+'={'+('false' if v=='false' else 'true')+'}'); continue
            if k in {'maxLength','minLength','colSpan','rowSpan','tabIndex','rows','cols','size','aria-valuenow','aria-valuemin','aria-valuemax','aria-level','aria-setsize','aria-posinset'} and v:
                extras.append(k+'={'+v+'}'); continue
            if v is not None: extras.append(k+'='+qa(v))
        if n.tag in {'input','select','textarea'} and not any(e.startswith('aria-label=') or e.startswith('id=') for e in extras):
            label=n.parent.find(lambda c:c.tag=='label') if n.parent else None
            extras.append('aria-label='+qa(label.text().strip() if label else attrs.get('placeholder') or attrs.get('type','Field')))
        if tag in {'Button','DialogAction','DialogDismiss'} and not n.text() and not any(e.startswith('aria-label=') for e in extras):
            icon=n.find(lambda c:c.tag=='i')
            extras.append('aria-label='+qa(attrs.get('title') or (icon.attrs.get('class','Action').replace('icon-','') if icon else 'Action')))
        start='<'+tag+(' '+' '.join(extras) if extras else '')
        if n.tag in VOID: return start+' />'
        inner=children()
        if n.tag=='textarea' and inner:
            inner=''; start += ' defaultValue='+qa(n.text())
        return start+'>'+inner+'</'+tag+'> '
    # Split large screens by the source's top-level layout sections.
    elements=[n for n in content.children if isinstance(n,Node) and n.tag not in {'script','style'} and not n.has('modal') and not n.has('offcanvas')]
    sections=[]
    for i,n in enumerate(elements):
        jsx=render(n)
        if jsx.strip():
            heading=n.find(lambda c:c.tag in {'h3','h4','h5'})
            label=pascal(re.sub(r'[^a-zA-Z0-9 ]', '', heading.text()).strip().replace(' ','-'))[:65] if heading else ('Overview' if i == 1 else 'Content')
            label='Overview' if not label or label[0].isdigit() else label
            prefix=page.removesuffix('Page')
            if label.lower()==prefix.lower(): label='Header'
            name=page.removesuffix('Page')+label+'Section'
            if any(existing==name for existing,_ in sections): name+=str(i+1)
            sections.append((name,jsx))
    dialog_jsx=[]
    for modal in modal_nodes:
        mid=modal.attrs.get('id')
        if not mid: continue
        heading=modal.find(lambda n:n.tag in {'h4','h5','h6'})
        title=heading.text() if heading else pascal(mid)
        body=modal.find(lambda n:n.has('modal-body') or n.has('offcanvas-body'))
        footer=modal.find(lambda n:n.has('modal-footer'))
        if body:
            used.add('PreviewDialog')
            dialog_jsx.append((mid, f'<PreviewDialog id={qa(mid)} title={qa(title)}>'+render(body)+(render(footer) if footer else '')+'</PreviewDialog>'))
    # Only imports used by each independently editable section.
    imports={
      'PreviewDataTable': f"import {{ PreviewDataTable }} from '@/shared/components/preview-data-table';\nimport {{ tables }} from '../fixtures/{slug}-tables';",
      'Link':"import { Link } from 'react-router-dom';",
      'Button':"import { Button } from '@/shared/components/ui/button';",
      'Input':"import { Input } from '@/shared/components/ui/input';",
      'Textarea':"import { Textarea } from '@/shared/components/ui/textarea';",
      'Select':"import { Select } from '@/shared/components/ui/select';",
      'Badge':"import { Badge } from '@/shared/components/ui/badge';",
      'Table':"import { Table } from '@/shared/components/ui/table';",
      'Icon':"import { Icon } from '@/shared/components/icon';",
      'ChartPreview':"import { ChartPreview } from '@/shared/components/chart-preview';",
    }
    def imports_for(jsx):
        names=set(re.findall(r'<([A-Z]\w*)\b',jsx)); lines=[]
        card=sorted(names & {'Card','CardContent','CardHeader','CardFooter'})
        preview=sorted(names & {'DialogAction','DialogCardAction','DialogDismiss','PreviewDialog','PreviewTabPanel','PreviewTabTrigger','PreviewForm'})
        if card: lines.append("import { "+', '.join(card)+" } from '@/shared/components/ui/card';")
        if preview: lines.append("import { "+', '.join(preview)+" } from '@/shared/components/preview';")
        lines += [v for k,v in imports.items() if k in names]
        return '\n'.join(lines)
    folder=f'src/features/{feature}'
    section_imports=[]
    for name,jsx in sections:
        write(f'{folder}/components/{name}.tsx',imports_for(jsx)+f'\n\nexport function {name}() {{\n  return (\n    '+jsx+'\n  );\n}\n')
        section_imports.append(f"import {{ {name} }} from '../components/{name}';")
    if dialog_jsx:
        name=page.removesuffix('Page')+'Dialogs'
        dialog_imports=[]; dialog_elements=[]
        for mid, dialog_markup in dialog_jsx:
            dialog_name=page.removesuffix('Page')+pascal(mid)+'Dialog'
            # Dialog fixtures live one directory above the dialogs folder.
            import_code=imports_for(dialog_markup).replace("from '../fixtures/", "from '../../fixtures/")
            write(f'{folder}/components/dialogs/{dialog_name}.tsx', import_code+f'\n\nexport function {dialog_name}() {{ return ('+dialog_markup+'); }\n')
            dialog_imports.append(f"import {{ {dialog_name} }} from './dialogs/{dialog_name}';")
            dialog_elements.append('<'+dialog_name+' />')
        jsx=''.join(dialog_elements)
        write(f'{folder}/components/{name}.tsx','\n'.join(dialog_imports)+f'\n\nexport function {name}() {{ return (<>'+jsx+'</>); }\n')
        section_imports.append(f"import {{ {name} }} from '../components/{name}';")
    else: name=None
    page_jsx='\n      '.join('<'+n+' />' for n,_ in sections)+(('\n      <'+name+' />') if name else '')
    write(f'{folder}/pages/{page}.tsx',"import { PreviewProvider } from '@/shared/components/preview';\n"+'\n'.join(section_imports)+f'\n\nexport default function {page}() {{\n  return (\n    <PreviewProvider defaultTabs={{{json.dumps(defaults)}}}>\n      '+page_jsx+'\n    </PreviewProvider>\n  );\n}\n')
    if table_models:
        write(f'{folder}/fixtures/{slug}-tables.ts', "import type { PreviewTableModel } from '@/shared/types/preview-table';\n\nexport const tables: PreviewTableModel[] = "+json.dumps(table_models,indent=2,ensure_ascii=False)+';\n')
    title=doc.find(lambda n:n.tag=='title').text().split('|')[0].strip()
    routes.append({'slug':'dashboard' if slug=='index' else slug,'legacy':slug+'.html','feature':feature,'page':page,'title':title,'layout':'auth' if slug in auth else 'workspace'})

# Copy only actual presentation assets; no legacy scripts, Bootstrap, or mirrored HTML.
for source in (ROOT/'assets').rglob('*'):
    if source.is_file() and (source.suffix.lower() in {'.png','.jpg','.jpeg','.webp','.svg','.gif','.ico','.woff','.woff2','.ttf'} or source.name=='lucide.css'):
        dest=APP/'public'/source.relative_to(ROOT); dest.parent.mkdir(parents=True,exist_ok=True); shutil.copy2(source,dest)
write('src/app/page-manifest.json',json.dumps(routes,indent=2)+'\n')
write('docs/migration-classes.json',json.dumps(dict(unknown.most_common()),indent=2)+'\n')
write('src/app/route-pages.ts',"import { lazy } from 'react';\n\nexport const routePages = {\n"+'\n'.join(f"  '{r['slug']}': lazy(() => import('@/features/{r['feature']}/pages/{r['page']}'))," for r in routes)+'\n};\n')
# Remove only obsolete generated TSX; the original HTML and assets are never edited.
reachable=set()
def visit(p):
    p=p.resolve()
    if p in reachable or not p.exists(): return
    reachable.add(p)
    for module in re.findall(r"from ['\"]([^'\"]+)['\"]", p.read_text()):
        if module.startswith('.'):
            candidate=(p.parent/module).with_suffix('.tsx')
            if candidate.exists(): visit(candidate)
for p in (APP/'src/features').glob('*/pages/*.tsx'): visit(p)
for p in (APP/'src/features').rglob('*.tsx'):
    if p.resolve() not in reachable: p.unlink()
print(f'Migrated {len(routes)} source pages into native TSX feature components.')
