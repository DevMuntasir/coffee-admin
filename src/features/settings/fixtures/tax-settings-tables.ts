import type { PreviewTableModel } from '@/shared/types/preview-table';

export const tables: PreviewTableModel[] = [
  {
    columns: ['#', 'Tax Name', 'Rate', 'Type', 'Actions'],
    rows: [
      {
        id: 'tax-settings-1-1',
        cells: [
          {
            text: '1',
          },
          {
            text: 'CGST',
          },
          {
            text: '9%',
          },
          {
            text: 'Inclusive / Exclusive',
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_tax',
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
        id: 'tax-settings-1-2',
        cells: [
          {
            text: '2',
          },
          {
            text: 'SGST',
          },
          {
            text: '9%',
          },
          {
            text: 'Inclusive / Exclusive',
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_tax',
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
        id: 'tax-settings-1-3',
        cells: [
          {
            text: '3',
          },
          {
            text: 'IGST',
          },
          {
            text: '18%',
          },
          {
            text: 'Inclusive / Exclusive',
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_tax',
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
        id: 'tax-settings-1-4',
        cells: [
          {
            text: '4',
          },
          {
            text: 'VAT',
          },
          {
            text: '10%',
          },
          {
            text: 'Exclusive',
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_tax',
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
        id: 'tax-settings-1-5',
        cells: [
          {
            text: '5',
          },
          {
            text: 'Service Tax',
          },
          {
            text: '15%',
          },
          {
            text: 'Exclusive',
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_tax',
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
