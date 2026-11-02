import type { PreviewTableModel } from '@/shared/types/preview-table';

export const tables: PreviewTableModel[] = [
  {
    columns: ['Transaction ID', 'Order ID', 'Token No', 'Customer', 'Type', 'Menus', 'Grand Total'],
    rows: [
      {
        id: 'payments-1-1',
        cells: [
          {
            text: '#23588',
          },
          {
            text: '#57005',
          },
          {
            text: '16',
          },
          {
            text: 'Walk-in Customer',
            actions: [
              {
                icon: 'user',
                label: 'User',
              },
            ],
          },
          {
            text: 'Dine In',
          },
          {
            text: '3',
          },
          {
            text: '$34.50',
          },
        ],
      },
      {
        id: 'payments-1-2',
        cells: [
          {
            text: '#23587',
          },
          {
            text: '#57004',
          },
          {
            text: '15',
          },
          {
            text: 'Sue Allen',
            image: {
              src: '/assets/img/profiles/avatar-33.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Take Away',
          },
          {
            text: '7',
          },
          {
            text: '$78.20',
          },
        ],
      },
      {
        id: 'payments-1-3',
        cells: [
          {
            text: '#23586',
          },
          {
            text: '#57003',
          },
          {
            text: '14',
          },
          {
            text: 'Frank Barrett',
            image: {
              src: '/assets/img/profiles/avatar-34.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Delivery',
          },
          {
            text: '4',
          },
          {
            text: '$45.10',
          },
        ],
      },
      {
        id: 'payments-1-4',
        cells: [
          {
            text: '#23585',
          },
          {
            text: '#57002',
          },
          {
            text: '13',
          },
          {
            text: 'Kelley Davis',
            image: {
              src: '/assets/img/profiles/avatar-35.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Dine In',
          },
          {
            text: '9',
          },
          {
            text: '$92.80',
          },
        ],
      },
      {
        id: 'payments-1-5',
        cells: [
          {
            text: '#23584',
          },
          {
            text: '#57001',
          },
          {
            text: '12',
          },
          {
            text: 'Jim Vickers',
            image: {
              src: '/assets/img/profiles/avatar-36.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Take Away',
          },
          {
            text: '6',
          },
          {
            text: '$61.40',
          },
        ],
      },
      {
        id: 'payments-1-6',
        cells: [
          {
            text: '#23583',
          },
          {
            text: '#57000',
          },
          {
            text: '11',
          },
          {
            text: 'Nancy Chapman',
            image: {
              src: '/assets/img/profiles/avatar-37.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Take Away',
          },
          {
            text: '5',
          },
          {
            text: '$57.20',
          },
        ],
      },
      {
        id: 'payments-1-7',
        cells: [
          {
            text: '#23582',
          },
          {
            text: '#56999',
          },
          {
            text: '10',
          },
          {
            text: 'Ron Jude',
            image: {
              src: '/assets/img/profiles/avatar-38.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Take Away',
          },
          {
            text: '4',
          },
          {
            text: '$45.30',
          },
        ],
      },
      {
        id: 'payments-1-8',
        cells: [
          {
            text: '#23581',
          },
          {
            text: '#56998',
          },
          {
            text: '09',
          },
          {
            text: 'Andrea Aponte',
            image: {
              src: '/assets/img/profiles/avatar-39.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Take Away',
          },
          {
            text: '7',
          },
          {
            text: '$72.60',
          },
        ],
      },
      {
        id: 'payments-1-9',
        cells: [
          {
            text: '#23580',
          },
          {
            text: '#56997',
          },
          {
            text: '08',
          },
          {
            text: 'David Belcher',
            image: {
              src: '/assets/img/profiles/avatar-40.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Take Away',
          },
          {
            text: '3',
          },
          {
            text: '$32.10',
          },
        ],
      },
      {
        id: 'payments-1-10',
        cells: [
          {
            text: '#23579',
          },
          {
            text: '#56996',
          },
          {
            text: '07',
          },
          {
            text: 'Julie Kangas',
            image: {
              src: '/assets/img/profiles/avatar-41.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Take Away',
          },
          {
            text: '4',
          },
          {
            text: '$40.30',
          },
        ],
      },
    ],
  },
];
