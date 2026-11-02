import type { PreviewTableModel } from '@/shared/types/preview-table';

export const tables: PreviewTableModel[] = [
  {
    columns: ['Invoice ID', 'Customer', 'Date', 'Order Type', 'Amount', 'Status', 'Actions'],
    rows: [
      {
        id: 'invoices-1-1',
        cells: [
          {
            text: '#INV0016',
            href: '/invoice-details',
          },
          {
            text: 'Adrian James',
            image: {
              src: '/assets/img/profiles/avatar-32.jpg',
              alt: 'category',
            },
          },
          {
            text: '01 Nov 2026',
          },
          {
            text: 'Dine In',
          },
          {
            text: '$1000',
          },
          {
            text: '',
            badge: {
              text: 'Paid',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            href: '/invoice-details',
            actions: [
              {
                icon: 'download',
                label: 'Download',
              },
              {
                icon: 'eye',
                label: 'Eye',
                href: '/invoice-details',
              },
              {
                icon: 'trash-2',
                label: 'Trash 2',
                target: 'delete_modal',
              },
            ],
          },
        ],
      },
      {
        id: 'invoices-1-2',
        cells: [
          {
            text: '#INV0015',
            href: '/invoice-details',
          },
          {
            text: 'Sue Allen',
            image: {
              src: '/assets/img/profiles/avatar-33.jpg',
              alt: 'category',
            },
          },
          {
            text: '04 Sep 2026',
          },
          {
            text: 'Take Away',
          },
          {
            text: '$1500',
          },
          {
            text: '',
            badge: {
              text: 'Paid',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            href: '/invoice-details',
            actions: [
              {
                icon: 'download',
                label: 'Download',
              },
              {
                icon: 'eye',
                label: 'Eye',
                href: '/invoice-details',
              },
              {
                icon: 'trash-2',
                label: 'Trash 2',
                target: 'delete_modal',
              },
            ],
          },
        ],
      },
      {
        id: 'invoices-1-3',
        cells: [
          {
            text: '#INV0014',
            href: '/invoice-details',
          },
          {
            text: 'Frank Barrett',
            image: {
              src: '/assets/img/profiles/avatar-34.jpg',
              alt: 'category',
            },
          },
          {
            text: '18 Aug 2026',
          },
          {
            text: 'Delivery',
          },
          {
            text: '$1200',
          },
          {
            text: '',
            badge: {
              text: 'Paid',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            href: '/invoice-details',
            actions: [
              {
                icon: 'download',
                label: 'Download',
              },
              {
                icon: 'eye',
                label: 'Eye',
                href: '/invoice-details',
              },
              {
                icon: 'trash-2',
                label: 'Trash 2',
                target: 'delete_modal',
              },
            ],
          },
        ],
      },
      {
        id: 'invoices-1-4',
        cells: [
          {
            text: '#INV0013',
            href: '/invoice-details',
          },
          {
            text: 'Kelley Davis',
            image: {
              src: '/assets/img/profiles/avatar-35.jpg',
              alt: 'category',
            },
          },
          {
            text: '10 Jul 2026',
          },
          {
            text: 'Dine In',
          },
          {
            text: '$800',
          },
          {
            text: '',
            badge: {
              text: 'Paid',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            href: '/invoice-details',
            actions: [
              {
                icon: 'download',
                label: 'Download',
              },
              {
                icon: 'eye',
                label: 'Eye',
                href: '/invoice-details',
              },
              {
                icon: 'trash-2',
                label: 'Trash 2',
                target: 'delete_modal',
              },
            ],
          },
        ],
      },
      {
        id: 'invoices-1-5',
        cells: [
          {
            text: '#INV0012',
            href: '/invoice-details',
          },
          {
            text: 'Jim Vickers',
            image: {
              src: '/assets/img/profiles/avatar-36.jpg',
              alt: 'category',
            },
          },
          {
            text: '05 Jun 2026',
          },
          {
            text: 'Delivery',
          },
          {
            text: '$750',
          },
          {
            text: '',
            badge: {
              text: 'Paid',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            href: '/invoice-details',
            actions: [
              {
                icon: 'download',
                label: 'Download',
              },
              {
                icon: 'eye',
                label: 'Eye',
                href: '/invoice-details',
              },
              {
                icon: 'trash-2',
                label: 'Trash 2',
                target: 'delete_modal',
              },
            ],
          },
        ],
      },
      {
        id: 'invoices-1-6',
        cells: [
          {
            text: '#INV0011',
            href: '/invoice-details',
          },
          {
            text: 'Nancy Chapman',
            image: {
              src: '/assets/img/profiles/avatar-37.jpg',
              alt: 'category',
            },
          },
          {
            text: '03 May 2026',
          },
          {
            text: 'Dine In',
          },
          {
            text: '$1300',
          },
          {
            text: '',
            badge: {
              text: 'Paid',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            href: '/invoice-details',
            actions: [
              {
                icon: 'download',
                label: 'Download',
              },
              {
                icon: 'eye',
                label: 'Eye',
                href: '/invoice-details',
              },
              {
                icon: 'trash-2',
                label: 'Trash 2',
                target: 'delete_modal',
              },
            ],
          },
        ],
      },
      {
        id: 'invoices-1-7',
        cells: [
          {
            text: '#INV0010',
            href: '/invoice-details',
          },
          {
            text: 'Ron Jude',
            image: {
              src: '/assets/img/profiles/avatar-38.jpg',
              alt: 'category',
            },
          },
          {
            text: '15 Apr 2026',
          },
          {
            text: 'Take Away',
          },
          {
            text: '$1100',
          },
          {
            text: '',
            badge: {
              text: 'Paid',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            href: '/invoice-details',
            actions: [
              {
                icon: 'download',
                label: 'Download',
              },
              {
                icon: 'eye',
                label: 'Eye',
                href: '/invoice-details',
              },
              {
                icon: 'trash-2',
                label: 'Trash 2',
                target: 'delete_modal',
              },
            ],
          },
        ],
      },
      {
        id: 'invoices-1-8',
        cells: [
          {
            text: '#INV0009',
            href: '/invoice-details',
          },
          {
            text: 'Andrea Aponte',
            image: {
              src: '/assets/img/profiles/avatar-39.jpg',
              alt: 'category',
            },
          },
          {
            text: '22 Mar 2026',
          },
          {
            text: 'Delivery',
          },
          {
            text: '$600',
          },
          {
            text: '',
            badge: {
              text: 'Paid',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            href: '/invoice-details',
            actions: [
              {
                icon: 'download',
                label: 'Download',
              },
              {
                icon: 'eye',
                label: 'Eye',
                href: '/invoice-details',
              },
              {
                icon: 'trash-2',
                label: 'Trash 2',
                target: 'delete_modal',
              },
            ],
          },
        ],
      },
      {
        id: 'invoices-1-9',
        cells: [
          {
            text: '#INV0008',
            href: '/invoice-details',
          },
          {
            text: 'David Belcher',
            image: {
              src: '/assets/img/profiles/avatar-40.jpg',
              alt: 'category',
            },
          },
          {
            text: '15 Feb 2026',
          },
          {
            text: 'Take Away',
          },
          {
            text: '$1300',
          },
          {
            text: '',
            badge: {
              text: 'Paid',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            href: '/invoice-details',
            actions: [
              {
                icon: 'download',
                label: 'Download',
              },
              {
                icon: 'eye',
                label: 'Eye',
                href: '/invoice-details',
              },
              {
                icon: 'trash-2',
                label: 'Trash 2',
                target: 'delete_modal',
              },
            ],
          },
        ],
      },
      {
        id: 'invoices-1-10',
        cells: [
          {
            text: '#INV0007',
            href: '/invoice-details',
          },
          {
            text: 'Julie Kangas',
            image: {
              src: '/assets/img/profiles/avatar-41.jpg',
              alt: 'category',
            },
          },
          {
            text: '01 Jan 2026',
          },
          {
            text: 'Dine In',
          },
          {
            text: '$800',
          },
          {
            text: '',
            badge: {
              text: 'Paid',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            href: '/invoice-details',
            actions: [
              {
                icon: 'download',
                label: 'Download',
              },
              {
                icon: 'eye',
                label: 'Eye',
                href: '/invoice-details',
              },
              {
                icon: 'trash-2',
                label: 'Trash 2',
                target: 'delete_modal',
              },
            ],
          },
        ],
      },
    ],
  },
];
