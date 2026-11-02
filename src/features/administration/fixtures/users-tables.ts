import type { PreviewTableModel } from '@/shared/types/preview-table';

export const tables: PreviewTableModel[] = [
  {
    columns: ['Name', 'Role', 'Phone Number', 'Status', 'Actions'],
    rows: [
      {
        id: 'users-1-1',
        cells: [
          {
            text: 'John Smith',
            image: {
              src: '/assets/img/users/user-01.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Admin / Owner',
          },
          {
            text: '+1 23456 78901',
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
                icon: 'shield',
                label: 'Shield',
                target: 'user_permission',
              },
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_users',
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
        id: 'users-1-2',
        cells: [
          {
            text: 'Emily Johnson',
            image: {
              src: '/assets/img/users/user-02.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Supervisor',
          },
          {
            text: '+1 34567 89012',
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
                icon: 'shield',
                label: 'Shield',
                target: 'user_permission',
              },
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_users',
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
        id: 'users-1-3',
        cells: [
          {
            text: 'David Williams',
            image: {
              src: '/assets/img/users/user-03.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Cashier',
          },
          {
            text: '+1 45678 90123',
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
                icon: 'shield',
                label: 'Shield',
                target: 'user_permission',
              },
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_users',
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
        id: 'users-1-4',
        cells: [
          {
            text: 'Ashley Brown',
            image: {
              src: '/assets/img/users/user-04.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Chef',
          },
          {
            text: '+1 56789 01234',
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
                icon: 'shield',
                label: 'Shield',
                target: 'user_permission',
              },
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_users',
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
        id: 'users-1-5',
        cells: [
          {
            text: 'Michael Davis',
            image: {
              src: '/assets/img/users/user-05.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Waiter',
          },
          {
            text: '+1 67890 12345',
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
                icon: 'shield',
                label: 'Shield',
                target: 'user_permission',
              },
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_users',
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
        id: 'users-1-6',
        cells: [
          {
            text: 'Brittany Miller',
            image: {
              src: '/assets/img/users/user-06.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Delivery',
          },
          {
            text: '+1 78901 23456',
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
                icon: 'shield',
                label: 'Shield',
                target: 'user_permission',
              },
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_users',
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
        id: 'users-1-7',
        cells: [
          {
            text: 'Christopher Wilson',
            image: {
              src: '/assets/img/users/user-07.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Accountant',
          },
          {
            text: '+1 89012 34567',
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
                icon: 'shield',
                label: 'Shield',
                target: 'user_permission',
              },
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_users',
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
        id: 'users-1-8',
        cells: [
          {
            text: 'Jessica Moore',
            image: {
              src: '/assets/img/users/user-08.jpg',
              alt: 'category',
            },
          },
          {
            text: 'System Operator',
          },
          {
            text: '+1 90123 45678',
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
                icon: 'shield',
                label: 'Shield',
                target: 'user_permission',
              },
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_users',
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
        id: 'users-1-9',
        cells: [
          {
            text: 'Matthew Taylor',
            image: {
              src: '/assets/img/users/user-09.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Chef',
          },
          {
            text: '+1 01234 56789',
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
                icon: 'shield',
                label: 'Shield',
                target: 'user_permission',
              },
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_users',
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
        id: 'users-1-10',
        cells: [
          {
            text: 'Sarah Anderson',
            image: {
              src: '/assets/img/users/user-10.jpg',
              alt: 'category',
            },
          },
          {
            text: 'Chef',
          },
          {
            text: '+1 12345 67890',
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
                icon: 'shield',
                label: 'Shield',
                target: 'user_permission',
              },
              {
                icon: 'pencil-line',
                label: 'Pencil line',
                target: 'edit_users',
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
  {
    columns: ['Module', 'View', 'Add', 'Edit', 'Delete', 'Export', 'Approved/Void'],
    rows: [
      {
        id: 'users-2-1',
        cells: [
          {
            text: 'Dashboard',
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'View for row 1',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Add for row 1',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Edit for row 1',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Delete for row 1',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Export for row 1',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Approved/Void for row 1',
              },
            ],
          },
        ],
      },
      {
        id: 'users-2-2',
        cells: [
          {
            text: 'POS',
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'View for row 2',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Add for row 2',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Edit for row 2',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Delete for row 2',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Export for row 2',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Approved/Void for row 2',
              },
            ],
          },
        ],
      },
      {
        id: 'users-2-3',
        cells: [
          {
            text: 'Hold/Resume Sale',
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'View for row 3',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Add for row 3',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Edit for row 3',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Delete for row 3',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Export for row 3',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Approved/Void for row 3',
              },
            ],
          },
        ],
      },
      {
        id: 'users-2-4',
        cells: [
          {
            text: 'Refund / Return',
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'View for row 4',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Add for row 4',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Edit for row 4',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Delete for row 4',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Export for row 4',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Approved/Void for row 4',
              },
            ],
          },
        ],
      },
      {
        id: 'users-2-5',
        cells: [
          {
            text: 'Products',
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'View for row 5',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Add for row 5',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Edit for row 5',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Delete for row 5',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Export for row 5',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Approved/Void for row 5',
              },
            ],
          },
        ],
      },
      {
        id: 'users-2-6',
        cells: [
          {
            text: 'Categories',
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'View for row 6',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Add for row 6',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Edit for row 6',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Delete for row 6',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Export for row 6',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Approved/Void for row 6',
              },
            ],
          },
        ],
      },
      {
        id: 'users-2-7',
        cells: [
          {
            text: 'Customers',
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'View for row 7',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Add for row 7',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Edit for row 7',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Delete for row 7',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Export for row 7',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Approved/Void for row 7',
              },
            ],
          },
        ],
      },
      {
        id: 'users-2-8',
        cells: [
          {
            text: 'Reports',
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'View for row 8',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Add for row 8',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Edit for row 8',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Delete for row 8',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Export for row 8',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Approved/Void for row 8',
              },
            ],
          },
        ],
      },
      {
        id: 'users-2-9',
        cells: [
          {
            text: 'Settings',
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'View for row 9',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Add for row 9',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Edit for row 9',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Delete for row 9',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Export for row 9',
              },
            ],
          },
          {
            text: '',
            controls: [
              {
                type: 'checkbox',
                checked: false,
                label: 'Approved/Void for row 9',
              },
            ],
          },
        ],
      },
    ],
  },
];
