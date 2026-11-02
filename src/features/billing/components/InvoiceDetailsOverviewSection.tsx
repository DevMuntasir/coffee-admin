import { Link } from 'react-router-dom';
import { Icon } from '@/shared/components/icon';

export function InvoiceDetailsOverviewSection() {
  return (
    <Link to={'/invoices'} className={'inline-flex items-center mb-6'}>
      <Icon name={'arrow-left'} className={'mr-2'} />
      {'Back'}
    </Link>
  );
}
