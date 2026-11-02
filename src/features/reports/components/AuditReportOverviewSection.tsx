import { Link } from 'react-router-dom';
import { Icon } from '@/shared/components/icon';

export function AuditReportOverviewSection() {
  return (
    <ul
      className={'flex flex-wrap gap-2 nav-tabs nav-bordered nav-bordered-primary mb-6'}
      role={'tablist'}
    >
      <li className={'shrink-0'}>
        <Link
          to={'/earning-report'}
          className={'preview-tab rounded-md px-3 py-2 font-medium flex items-center'}
        >
          <Icon name={'badge-dollar-sign'} className={'mr-2'} />
          {'Earning Report'}
        </Link>{' '}
      </li>{' '}
      <li className={'shrink-0'}>
        <Link
          to={'/order-report'}
          className={'preview-tab rounded-md px-3 py-2 font-medium flex items-center'}
        >
          <Icon name={'list-todo'} className={'mr-2'} />
          {'Order Report'}
        </Link>{' '}
      </li>{' '}
      <li className={'shrink-0'}>
        <Link
          to={'/sales-report'}
          className={'preview-tab rounded-md px-3 py-2 font-medium flex items-center'}
        >
          <Icon name={'shopping-bag'} className={'mr-2'} />
          {'Sales Report'}
        </Link>{' '}
      </li>{' '}
      <li className={'shrink-0'}>
        <Link
          to={'/customer-report'}
          className={'preview-tab rounded-md px-3 py-2 font-medium flex items-center'}
        >
          <Icon name={'users'} className={'mr-2'} />
          {'Customer Report'}
        </Link>{' '}
      </li>{' '}
      <li className={'shrink-0'}>
        <Link
          to={'/audit-report'}
          className={'preview-tab rounded-md px-3 py-2 font-medium flex items-center'}
        >
          <Icon name={'hourglass'} className={'mr-2'} />
          {'Audit Logs'}
        </Link>{' '}
      </li>{' '}
    </ul>
  );
}
