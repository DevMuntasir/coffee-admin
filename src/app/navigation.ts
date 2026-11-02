import {
  LayoutDashboard,
  UtensilsCrossed,
  ListTodo,
  CalendarClock,
  Layers,
  LayoutList,
  UserRound,
  FileSpreadsheet,
  Wallet,
  Users,
  ChartColumn,
  Store,
  Receipt,
  CreditCard,
  LockKeyhole,
  UserRoundPlus,
  Mail,
  KeyRound,
} from 'lucide-react';
import type { NavigationGroup } from '@/shared/types/navigation';
export const navigation = [
  {
    label: 'MAIN',
    items: [
      { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
      { label: 'POS', path: '/pos', icon: UtensilsCrossed },
      { label: 'Orders', path: '/orders', icon: ListTodo },
      // { label: 'Kanban View', path: '/kanban-view', icon: PanelsTopLeft },
      // { label: 'Kitchen (KDS)', path: '/kitchen', icon: ChefHat },
      { label: 'Reservations', path: '/reservations', icon: CalendarClock },
    ],
  },
  {
    label: 'MENU MANAGEMENT',
    items: [
      { label: 'Categories', path: '/categories', icon: Layers },
      { label: 'Items', path: '/items', icon: LayoutList },
    ],
  },
  {
    label: 'OPERATIONS',
    items: [
      { label: 'Customers', path: '/customer', icon: UserRound },
      { label: 'Invoices', path: '/invoices', icon: FileSpreadsheet },
      { label: 'Payments', path: '/payments', icon: Wallet },
    ],
  },
  {
    label: 'ADMINISTRATION',
    items: [
      { label: 'Users', path: '/users', icon: Users },
      // { label: 'Permissions', path: '/role-permission', icon: Shield },
    ],
  },
  {
    label: 'REPORTS',
    items: ['Earning', 'Sales', 'Order', 'Customer', 'Audit'].map((label) => ({
      label: `${label} Report`,
      path: `/${label.toLowerCase()}-report`,
      icon: ChartColumn,
    })),
  },
  {
    label: 'SETTINGS',
    items: [
      { label: 'Store Settings', path: '/store-settings', icon: Store },
      { label: 'Tax', path: '/tax-settings', icon: Receipt },
      // { label: 'Print', path: '/print-settings', icon: Printer },
      { label: 'Payment Types', path: '/payment-settings', icon: CreditCard },
      // { label: 'Delivery', path: '/delivery-settings', icon: Bike },
      // { label: 'Notifications', path: '/notifications-settings', icon: Bell },
      // { label: 'Integrations / API', path: '/integrations-settings', icon: Plug },
    ],
  },
  {
    label: 'AUTHENTICATION',
    items: [
      { label: 'Sign In', path: '/login', icon: LockKeyhole },
      { label: 'Sign Up', path: '/register', icon: UserRoundPlus },
      { label: 'Forgot Password', path: '/forgot-password', icon: KeyRound },
      { label: 'Email Verification', path: '/email-verification', icon: Mail },
      { label: 'OTP', path: '/otp', icon: KeyRound },
      { label: 'Reset Password', path: '/reset-password', icon: LockKeyhole },
    ],
  },
] satisfies readonly NavigationGroup[];
