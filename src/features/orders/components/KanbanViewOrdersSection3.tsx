import { Link } from 'react-router-dom';
import { Input } from '@/shared/components/ui/input';
import { Icon } from '@/shared/components/icon';

export function KanbanViewOrdersSection3() {
  return (
    <div className={'flex items-center justify-between flex-wrap gap-3 pb-6 mb-6 border-b'}>
      <h5 className={'mb-0'}>{'Orders'}</h5>{' '}
      <div className={'flex items-center justify-between flex-wrap gap-2'}>
        <div
          className={
            'active-item flex items-center justify-between gap-1 p-1 border rounded-md bg-card'
          }
        >
          <Link
            to={'/orders'}
            className={'h-8 text-xs size-9 p-0 preview-button preview-button-outline'}
            aria-label={'grid'}
          >
            <Icon name={'grid-2x2'} className={''} />
          </Link>{' '}
          <Link
            to={'/kanban-view'}
            className={'h-8 text-xs size-9 p-0 preview-button preview-button-primary'}
            aria-label={'kanban'}
          >
            <Icon name={'square-kanban'} className={''} />
          </Link>{' '}
        </div>{' '}
        <div className={'relative flex items-center w-auto'}>
          <Input type={'text'} placeholder={'Search'} aria-label={'Search'} />
          <span className={'flex items-center px-3 text-muted-foreground'}>
            <Icon name={'search'} className={'text-foreground'} />
          </span>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}
