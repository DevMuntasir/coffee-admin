import { navigation } from './navigation';

export type SidebarSectionId =
  'main' | 'menu-management' | 'operations' | 'administration' | 'cms' | 'pages' | 'settings';
function items(label: string) {
  const group = navigation.find((group) => group.label === label);
  if (!group) throw new Error(`Missing navigation group: ${label}`);
  return group.items;
}
export const sidebarSections = [
  {
    id: 'main',
    label: 'MAIN',
    title: 'Dashboard',
    icon: 'layout-dashboard',
    items: items('MAIN')
      .filter((item) => item.path !== '/kanban-view')
      .map((item) => (item.path === '/reservations' ? { ...item, label: 'Reservation' } : item)),
  },
  {
    id: 'cms',
    label: 'WEBSITE CMS',
    title: 'Website CMS',
    icon: 'panels-top-left',
    items: items('WEBSITE CMS'),
  },
  // {
  //   id: 'menu-management',
  //   label: 'MENU MANAGEMENT',
  //   title: 'Management',
  //   icon: 'layers',
  //   items: items('MENU MANAGEMENT'),
  // },
  // {
  //   id: 'operations',
  //   label: 'OPERATIONS',
  //   title: 'Operations',
  //   icon: 'merge',
  //   items: items('OPERATIONS'),
  // },
  // {
  //   id: 'administration',
  //   label: 'ADMINISTRATION',
  //   title: 'Administration',
  //   icon: 'user-cog',
  //   items: [...items('ADMINISTRATION'), { ...items('REPORTS')[0], label: 'Reports' }],
  // },
  // {
  //   id: 'pages',
  //   label: 'PAGES',
  //   title: 'Pages',
  //   icon: 'library-big',
  //   items: items('AUTHENTICATION'),
  // },
  // { id: 'settings', label: 'SETTINGS', title: 'Settings', icon: 'cog', items: items('SETTINGS') },
] as const;

/** Detail screens retain their parent's navigation category. */
export function sectionForPath(pathname: string): SidebarSectionId {
  if (pathname.endsWith('-report')) return 'administration';
  if (pathname === '/invoice-details') return 'operations';
  if (pathname === '/kanban-view') return 'main';
  return (
    sidebarSections.find((section) => section.items.some((item) => item.path === pathname))?.id ??
    'main'
  );
}

export const sidebarItemIcons: Readonly<Record<string, string>> = {
  '/dashboard': 'layout-dashboard',
  '/pos': 'combine',
  '/orders': 'list-todo',
  '/kitchen': 'drumstick',
  '/reservations': 'file-clock',
  '/categories': 'layers',
  '/items': 'layout-list',
  '/customer': 'user-round',
  '/invoices': 'file-spreadsheet',
  '/payments': 'badge-dollar-sign',
  '/users': 'users',
  '/role-permission': 'shield',
  '/earning-report': 'file-spreadsheet',
  '/login': 'lock-keyhole',
  '/register': 'user-round-plus',
  '/forgot-password': 'lock-keyhole-open',
  '/email-verification': 'mail',
  '/otp': 'blocks',
  '/reset-password': 'lock-keyhole',
  '/store-settings': 'warehouse',
  '/tax-settings': 'diamond-percent',
  '/print-settings': 'printer',
  '/payment-settings': 'circle-dollar-sign',
  '/delivery-settings': 'bike',
  '/notifications-settings': 'bell',
  '/integrations-settings': 'pin',
  '/website-cms': 'panels-top-left',
  '/contact-messages': 'messages-square',
};
