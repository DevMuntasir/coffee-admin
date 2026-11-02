import type { PreviewTableModel } from '@/shared/types/preview-table';

export const tables: PreviewTableModel[] = [
  {
    columns: ['#', 'Item Details', 'Quantity', 'Rate', 'Amount'],
    rows: [
      {
        id: 'invoice-details-1-1',
        cells: [
          {
            text: '1',
          },
          {
            text: 'Grilled Salmon Steak',
          },
          {
            text: '2',
          },
          {
            text: '$200.00',
          },
          {
            text: '$396.00',
          },
        ],
      },
      {
        id: 'invoice-details-1-2',
        cells: [
          {
            text: '2',
          },
          {
            text: 'Crispy Bacon Bits',
          },
          {
            text: '1',
          },
          {
            text: '$350.00',
          },
          {
            text: '$365.75',
          },
        ],
      },
      {
        id: 'invoice-details-1-3',
        cells: [
          {
            text: '3',
          },
          {
            text: 'Side Fries',
          },
          {
            text: '1',
          },
          {
            text: '$399.00',
          },
          {
            text: '$398.90',
          },
        ],
      },
      {
        id: 'invoice-details-1-4',
        cells: [
          {
            text: '4',
          },
          {
            text: 'Lemon Wedge',
          },
          {
            text: '4',
          },
          {
            text: '$100.00',
          },
          {
            text: '$396.00',
          },
        ],
      },
    ],
  },
];
