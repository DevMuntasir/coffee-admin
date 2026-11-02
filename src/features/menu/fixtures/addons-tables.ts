import type { PreviewTableModel } from '@/shared/types/preview-table';

export const tables: PreviewTableModel[] = [
  {
    columns: ['Item', 'Addon', 'Price', 'Status', 'Actions'],
    rows: [
      {
        id: 'addons-1-1',
        cells: [
          {
            text: 'Pizza',
          },
          {
            text: 'Extra Cheese',
          },
          {
            text: '$10',
          },
          {
            text: '',
            badge: {
              text: 'Active',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_modifier',
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
        id: 'addons-1-2',
        cells: [
          {
            text: 'Sauce',
          },
          {
            text: 'Garlic Butter Sauce',
          },
          {
            text: '$5',
          },
          {
            text: '',
            badge: {
              text: 'Active',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_modifier',
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
        id: 'addons-1-3',
        cells: [
          {
            text: 'Sea Food',
          },
          {
            text: 'Grilled Shrimp',
          },
          {
            text: '$20',
          },
          {
            text: '',
            badge: {
              text: 'Active',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_modifier',
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
        id: 'addons-1-4',
        cells: [
          {
            text: 'Salad',
          },
          {
            text: 'Avocado Slices',
          },
          {
            text: '$5',
          },
          {
            text: '',
            badge: {
              text: 'Active',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_modifier',
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
        id: 'addons-1-5',
        cells: [
          {
            text: 'Sauce',
          },
          {
            text: 'Spicy Mayo',
          },
          {
            text: '$10',
          },
          {
            text: '',
            badge: {
              text: 'Active',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_modifier',
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
        id: 'addons-1-6',
        cells: [
          {
            text: 'Topping',
          },
          {
            text: 'Crispy Bacon Bits',
          },
          {
            text: '$5',
          },
          {
            text: '',
            badge: {
              text: 'Active',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_modifier',
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
        id: 'addons-1-7',
        cells: [
          {
            text: 'Side Dish',
          },
          {
            text: 'Side Fries',
          },
          {
            text: '$10',
          },
          {
            text: '',
            badge: {
              text: 'Active',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_modifier',
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
        id: 'addons-1-8',
        cells: [
          {
            text: 'Topping',
          },
          {
            text: 'Guacamole',
          },
          {
            text: '$12',
          },
          {
            text: '',
            badge: {
              text: 'Active',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_modifier',
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
        id: 'addons-1-9',
        cells: [
          {
            text: 'Sauce',
          },
          {
            text: 'Extra Dressing',
          },
          {
            text: '$15',
          },
          {
            text: '',
            badge: {
              text: 'Active',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_modifier',
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
        id: 'addons-1-10',
        cells: [
          {
            text: 'Garnish',
          },
          {
            text: 'Lemon Wedge',
          },
          {
            text: '$10',
          },
          {
            text: '',
            badge: {
              text: 'Active',
              className: 'bg-emerald-50 text-emerald-700',
            },
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_modifier',
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
