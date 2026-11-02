export type ContactMessageStatus = 'new' | 'read' | 'replied' | 'archived';

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  status: ContactMessageStatus;
  createdAt: string;
};

export const sampleContactMessages: ContactMessage[] = [
  {
    id: 'msg-1002',
    name: 'Sadia Rahman',
    email: 'sadia@example.com',
    topic: 'Private event',
    message: 'Hello, I would like to arrange a small birthday gathering for around 18 people next Friday evening. Could you please share the available packages?',
    status: 'new',
    createdAt: '2026-11-02T06:18:00.000Z',
  },
  {
    id: 'msg-1001',
    name: 'Arif Hasan',
    email: 'arif@example.com',
    topic: 'Wholesale coffee',
    message: 'We run a small office in Banani and are interested in a recurring coffee bean delivery. Please let us know the minimum order and roast options.',
    status: 'read',
    createdAt: '2026-11-01T09:45:00.000Z',
  },
];
