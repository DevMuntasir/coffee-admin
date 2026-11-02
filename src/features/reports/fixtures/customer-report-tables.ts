import type { PreviewTableModel } from '@/shared/types/preview-table';

export const tables: PreviewTableModel[] = [
  {
    columns: ['Customer ID', 'Customer', 'Total Orders', 'Grand Total'],
    rows: [
      {
        id: 'customer-report-1-1',
        cells: [
          {
            text: '#CUS0016',
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
            text: '32',
          },
          {
            text: '$1000',
          },
        ],
      },
      {
        id: 'customer-report-1-2',
        cells: [
          {
            text: '#CUS0015',
          },
          {
            text: 'Sue Allen',
            image: {
              src: '/assets/img/profiles/avatar-33.jpg',
              alt: 'category',
            },
          },
          {
            text: '45',
          },
          {
            text: '$1500',
          },
        ],
      },
      {
        id: 'customer-report-1-3',
        cells: [
          {
            text: '#CUS0014',
          },
          {
            text: 'Frank Barrett',
            image: {
              src: '/assets/img/profiles/avatar-34.jpg',
              alt: 'category',
            },
          },
          {
            text: '70',
          },
          {
            text: '$1200',
          },
        ],
      },
      {
        id: 'customer-report-1-4',
        cells: [
          {
            text: '#CUS0013',
          },
          {
            text: 'Kelley Davis',
            image: {
              src: '/assets/img/profiles/avatar-35.jpg',
              alt: 'category',
            },
          },
          {
            text: '53',
          },
          {
            text: '$800',
          },
        ],
      },
      {
        id: 'customer-report-1-5',
        cells: [
          {
            text: '#CUS0012',
          },
          {
            text: 'Jim Vickers',
            image: {
              src: '/assets/img/profiles/avatar-36.jpg',
              alt: 'category',
            },
          },
          {
            text: '34',
          },
          {
            text: '$750',
          },
        ],
      },
      {
        id: 'customer-report-1-6',
        cells: [
          {
            text: '#CUS0011',
          },
          {
            text: 'Nancy Chapman',
            image: {
              src: '/assets/img/profiles/avatar-37.jpg',
              alt: 'category',
            },
          },
          {
            text: '40',
          },
          {
            text: '$1300',
          },
        ],
      },
      {
        id: 'customer-report-1-7',
        cells: [
          {
            text: '#CUS0010',
          },
          {
            text: 'Ron Jude',
            image: {
              src: '/assets/img/profiles/avatar-38.jpg',
              alt: 'category',
            },
          },
          {
            text: '55',
          },
          {
            text: '$1100',
          },
        ],
      },
      {
        id: 'customer-report-1-8',
        cells: [
          {
            text: '#CUS0009',
          },
          {
            text: 'Andrea Aponte',
            image: {
              src: '/assets/img/profiles/avatar-39.jpg',
              alt: 'category',
            },
          },
          {
            text: '35',
          },
          {
            text: '$600',
          },
        ],
      },
      {
        id: 'customer-report-1-9',
        cells: [
          {
            text: '#CUS0008',
          },
          {
            text: 'David Belcher',
            image: {
              src: '/assets/img/profiles/avatar-40.jpg',
              alt: 'category',
            },
          },
          {
            text: '27',
          },
          {
            text: '$1300',
          },
        ],
      },
      {
        id: 'customer-report-1-10',
        cells: [
          {
            text: '#CUS0007',
          },
          {
            text: 'Julie Kangas',
            image: {
              src: '/assets/img/profiles/avatar-41.jpg',
              alt: 'category',
            },
          },
          {
            text: '22',
          },
          {
            text: '$800',
          },
        ],
      },
    ],
  },
];
