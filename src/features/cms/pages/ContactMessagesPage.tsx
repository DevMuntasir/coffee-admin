import { useMemo, useState } from 'react';
import { Archive, CheckCheck, Inbox, Mail, MailOpen, Search, Send, UserRound } from 'lucide-react';
import { Badge } from '@/shared/components/ui/badge';
import { Button } from '@/shared/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/shared/components/ui/dialog';
import { Input } from '@/shared/components/ui/input';
import { Select } from '@/shared/components/ui/select';
import { sampleContactMessages } from '../data/contact-messages';
import type { ContactMessage, ContactMessageStatus } from '../data/contact-messages';

const STORAGE_KEY = 'coffee-admin.contact-messages.v1';

const statusStyle: Record<ContactMessageStatus, string> = {
  new: 'bg-amber-100 text-amber-800',
  read: 'bg-blue-100 text-blue-800',
  replied: 'bg-emerald-100 text-emerald-800',
  archived: 'bg-stone-200 text-stone-700',
};

function loadMessages() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as ContactMessage[]) : sampleContactMessages;
  } catch {
    return sampleContactMessages;
  }
}

function displayDate(value: string) {
  return new Intl.DateTimeFormat('en-BD', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Dhaka' }).format(new Date(value));
}

export default function ContactMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>(loadMessages);
  const [selected, setSelected] = useState<ContactMessage | null>(null);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'all' | ContactMessageStatus>('all');
  const save = (next: ContactMessage[]) => { setMessages(next); try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch { /* SSR preview */ } };
  const updateStatus = (id: string, status: ContactMessageStatus) => {
    const next = messages.map((item) => item.id === id ? { ...item, status } : item);
    save(next);
    setSelected((current) => current?.id === id ? { ...current, status } : current);
  };
  const open = (message: ContactMessage) => { setSelected(message); if (message.status === 'new') updateStatus(message.id, 'read'); };
  const visible = useMemo(() => messages.filter((item) => {
    const matchesStatus = filter === 'all' || item.status === filter;
    const haystack = `${item.name} ${item.email} ${item.topic} ${item.message}`.toLowerCase();
    return matchesStatus && haystack.includes(query.trim().toLowerCase());
  }), [messages, filter, query]);
  const stats = {
    total: messages.filter((item) => item.status !== 'archived').length,
    unread: messages.filter((item) => item.status === 'new').length,
    replied: messages.filter((item) => item.status === 'replied').length,
  };

  return <div className="space-y-5 pb-10">
    <header className="flex flex-wrap items-start justify-between gap-4">
      <h1>Contact messages</h1>
       <Button variant="outline" onClick={() => setFilter('new')}><Mail className="size-4" /> {stats.unread} unread</Button></header>

    <section className="grid gap-3 sm:grid-cols-3">{[
      { label: 'Active messages', value: stats.total, Icon: Inbox, color: 'bg-primary/10 text-primary' },
      { label: 'Unread', value: stats.unread, Icon: Mail, color: 'bg-amber-100 text-amber-700' },
      { label: 'Replied', value: stats.replied, Icon: CheckCheck, color: 'bg-emerald-100 text-emerald-700' },
    ].map(({ label, value, Icon, color }) => <div key={label} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4"><span className={`grid size-11 place-items-center rounded-xl ${color}`}><Icon className="size-5" /></span><div><strong className="block text-2xl">{value}</strong><span className="text-sm text-muted-foreground">{label}</span></div></div>)}</section>

    <section className="overflow-hidden rounded-2xl border border-border bg-card"><div className="flex flex-wrap gap-3 border-b border-border p-4"><div className="relative min-w-64 flex-1"><Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input className="pl-9" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search name, email, topic or message" /></div><Select value={filter} onChange={(event) => setFilter(event.target.value as typeof filter)} className="w-44"><option value="all">All messages</option><option value="new">Unread</option><option value="read">Read</option><option value="replied">Replied</option><option value="archived">Archived</option></Select></div>
      <div className="divide-y divide-border">{visible.length ? visible.map((item) => <button key={item.id} onClick={() => open(item)} className={`grid w-full gap-3 px-5 py-4 text-left transition hover:bg-muted/60 md:grid-cols-[minmax(180px,0.7fr)_minmax(180px,0.7fr)_minmax(260px,1.6fr)_150px] ${item.status === 'new' ? 'bg-primary/[0.035]' : ''}`}><div className="flex items-center gap-3"><span className={`grid size-9 shrink-0 place-items-center rounded-full ${item.status === 'new' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}><UserRound className="size-4" /></span><span><strong className="block truncate text-sm">{item.name}</strong><small className="block truncate text-muted-foreground">{item.email}</small></span></div><div><Badge className={statusStyle[item.status]}>{item.status}</Badge><span className="ml-2 text-xs font-medium">{item.topic}</span></div><p className={`line-clamp-2 text-sm ${item.status === 'new' ? 'font-medium text-foreground' : ''}`}>{item.message}</p><time className="text-xs text-muted-foreground md:text-right">{displayDate(item.createdAt)}</time></button>) : <div className="grid min-h-72 place-items-center p-8 text-center"><div><span className="mx-auto mb-3 grid size-14 place-items-center rounded-2xl bg-muted"><Inbox className="size-6 text-muted-foreground" /></span><h2 className="text-base">No messages found</h2><p className="mt-1 text-sm">Try changing your search or status filter.</p></div></div>}</div>
    </section>

    <Dialog open={Boolean(selected)} onOpenChange={(open) => !open && setSelected(null)}><DialogContent><DialogTitle>Contact enquiry</DialogTitle><DialogDescription>Submitted from the public website contact form.</DialogDescription>{selected && <div className="mt-6 space-y-5"><div className="flex flex-wrap items-start justify-between gap-3 rounded-xl bg-muted/50 p-4"><div><h3 className="text-base">{selected.name}</h3><a className="text-sm text-primary" href={`mailto:${selected.email}`}>{selected.email}</a></div><div className="text-right"><Badge className={statusStyle[selected.status]}>{selected.status}</Badge><div className="mt-1 text-xs text-muted-foreground">{displayDate(selected.createdAt)}</div></div></div><div><span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Topic</span><p className="mt-1 font-medium text-foreground">{selected.topic}</p></div><div><span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</span><p className="mt-2 whitespace-pre-wrap rounded-xl border border-border bg-background p-4 leading-6 text-foreground">{selected.message}</p></div><div className="flex flex-wrap justify-between gap-2 border-t border-border pt-5"><Button variant="outline" onClick={() => updateStatus(selected.id, 'archived')}><Archive className="size-4" /> Archive</Button><div className="flex gap-2"><Button variant="outline" onClick={() => updateStatus(selected.id, 'read')}><MailOpen className="size-4" /> Mark read</Button><Button asChild onClick={() => updateStatus(selected.id, 'replied')}><a href={`mailto:${selected.email}?subject=${encodeURIComponent(`Re: ${selected.topic}`)}`}><Send className="size-4" /> Reply by email</a></Button></div></div></div>}</DialogContent></Dialog>
  </div>;
}
