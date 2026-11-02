import type { PreviewTableModel } from '@/shared/types/preview-table';

export const tables: PreviewTableModel[] = [
  {
    columns: ['Category', 'No of Items', 'Created On', 'Status', 'Actions'],
    rows: [
      {
        id: 'categories-1-1',
        cells: [
          {
            text: 'Sea Food',
            image: {
              src: '/assets/img/category/category-01.png',
              alt: 'category',
            },
          },
          {
            text: '28',
          },
          {
            text: 'February 15, 2026',
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
                target: 'edit_category',
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
        id: 'categories-1-2',
        cells: [
          {
            text: 'Pizza',
            image: {
              src: '/assets/img/category/category-02.png',
              alt: 'category',
            },
          },
          {
            text: '42',
          },
          {
            text: 'March 10, 2026',
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
                target: 'edit_category',
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
        id: 'categories-1-3',
        cells: [
          {
            text: 'Salads',
            image: {
              src: '/assets/img/category/category-03.png',
              alt: 'category',
            },
          },
          {
            text: '66',
          },
          {
            text: 'April 5, 2026',
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
                target: 'edit_category',
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
        id: 'categories-1-4',
        cells: [
          {
            text: 'Tacos',
            image: {
              src: '/assets/img/category/category-04.png',
              alt: 'category',
            },
          },
          {
            text: '48',
          },
          {
            text: 'May 20, 2026',
          },
          {
            text: '',
            badge: {
              text: 'Expired',
              className: 'bg-red-50 text-red-700',
            },
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_category',
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
        id: 'categories-1-5',
        cells: [
          {
            text: 'Burgers',
            image: {
              src: '/assets/img/category/category-05.png',
              alt: 'category',
            },
          },
          {
            text: '24',
          },
          {
            text: 'June 30, 2026',
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
                target: 'edit_category',
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
        id: 'categories-1-6',
        cells: [
          {
            text: 'Ice Cream',
            image: {
              src: '/assets/img/category/category-06.png',
              alt: 'category',
            },
          },
          {
            text: '36',
          },
          {
            text: 'July 18, 2026',
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
                target: 'edit_category',
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
        id: 'categories-1-7',
        cells: [
          {
            text: 'Pasta',
            image: {
              src: '/assets/img/category/category-07.png',
              alt: 'category',
            },
          },
          {
            text: '48',
          },
          {
            text: 'August 12, 2026',
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
                target: 'edit_category',
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
        id: 'categories-1-8',
        cells: [
          {
            text: 'Beverages',
            image: {
              src: '/assets/img/category/category-08.png',
              alt: 'category',
            },
          },
          {
            text: '32',
          },
          {
            text: 'September 19, 2026',
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
                target: 'edit_category',
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
        id: 'categories-1-9',
        cells: [
          {
            text: 'Steaks',
            image: {
              src: '/assets/img/category/category-09.png',
              alt: 'category',
            },
          },
          {
            text: '22',
          },
          {
            text: 'October 7, 2026',
          },
          {
            text: '',
            badge: {
              text: 'Expired',
              className: 'bg-red-50 text-red-700',
            },
          },
          {
            text: '',
            actions: [
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_category',
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
        id: 'categories-1-10',
        cells: [
          {
            text: 'Soups',
            image: {
              src: '/assets/img/category/category-10.png',
              alt: 'category',
            },
          },
          {
            text: '18',
          },
          {
            text: 'November 25, 2026',
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
                target: 'edit_category',
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
