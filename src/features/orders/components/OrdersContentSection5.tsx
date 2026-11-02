import { Button } from '@/shared/components/ui/button';
import { Icon } from '@/shared/components/icon';

export function OrdersContentSection5() {
  return (
    <nav className={'pagination-nav'}>
      <ul className={'flex items-center gap-1 justify-center mb-0'}>
        <li className={'page-item'}>
          <Button
            variant="ghost"
            className={'rounded-md border px-3 py-2 hover:bg-muted flex items-center'}
            aria-label={'Previous'}
          >
            <span className={'mr-1'} aria-hidden={'true'}>
              <Icon name={'chevron-left'} className={''} />
            </span>{' '}
            {' Pre '}
          </Button>{' '}
        </li>{' '}
        <li className={'page-item'}>
          <Button variant="ghost" className={'rounded-md border px-3 py-2 hover:bg-muted'}>
            {'1'}
          </Button>{' '}
        </li>{' '}
        <li className={'page-item'}>
          <Button variant="ghost" className={'rounded-md border px-3 py-2 hover:bg-muted'}>
            {'2'}
          </Button>{' '}
        </li>{' '}
        <li className={'page-item'}>
          <Button variant="ghost" className={'rounded-md border px-3 py-2 hover:bg-muted'}>
            {'3'}
          </Button>{' '}
        </li>{' '}
        <li className={'page-item'}>
          <Button
            variant="ghost"
            className={'rounded-md border px-3 py-2 hover:bg-muted flex items-center'}
            aria-label={'Previous'}
          >
            {' Next '}
            <span className={'ml-1'} aria-hidden={'true'}>
              <Icon name={'chevron-right'} className={''} />
            </span>{' '}
          </Button>{' '}
        </li>{' '}
      </ul>{' '}
    </nav>
  );
}
