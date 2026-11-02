import { PreviewTabTrigger } from '@/shared/components/preview';
import { Link } from 'react-router-dom';
import { Input } from '@/shared/components/ui/input';
import { Icon } from '@/shared/components/icon';

export function OrdersContentSection() {
  return (
    <div className={'flex items-center justify-between flex-wrap gap-3 pb-6 mb-6 border-b'}>
      <ul className={'flex flex-wrap gap-2 nav-tabs nav-tabs-solid border-0'} role={'tablist'}>
        <li className={'shrink-0'}>
          <PreviewTabTrigger
            group={'tabs-0'}
            value={'order-tab1'}
            className={'preview-tab rounded-md px-3 py-2 font-medium'}
          >
            {'All Orders (48)'}
          </PreviewTabTrigger>{' '}
        </li>{' '}
        <li className={'shrink-0'}>
          <PreviewTabTrigger
            group={'tabs-0'}
            value={'order-tab2'}
            className={'preview-tab rounded-md px-3 py-2 font-medium'}
          >
            {'Pending (12)'}
          </PreviewTabTrigger>{' '}
        </li>{' '}
        <li className={'shrink-0'}>
          <PreviewTabTrigger
            group={'tabs-0'}
            value={'order-tab3'}
            className={'preview-tab rounded-md px-3 py-2 font-medium'}
          >
            {'In Progress (12)'}
          </PreviewTabTrigger>{' '}
        </li>{' '}
        <li className={'shrink-0'}>
          <PreviewTabTrigger
            group={'tabs-0'}
            value={'order-tab4'}
            className={'preview-tab rounded-md px-3 py-2 font-medium'}
          >
            {'Completed (22)'}
          </PreviewTabTrigger>{' '}
        </li>{' '}
        <li className={'shrink-0'}>
          <PreviewTabTrigger
            group={'tabs-0'}
            value={'order-tab5'}
            className={'preview-tab rounded-md px-3 py-2 font-medium'}
          >
            {'Cancelled (2)'}
          </PreviewTabTrigger>{' '}
        </li>{' '}
      </ul>{' '}
      <div className={'flex items-center justify-between flex-wrap gap-3'}>
        <div
          className={
            'active-item flex items-center justify-between gap-1 p-1 border rounded-md bg-card'
          }
        >
          <Link
            to={'/orders'}
            className={'h-8 text-xs size-9 p-0 preview-button preview-button-primary'}
            aria-label={'grid'}
          >
            <Icon name={'grid-2x2'} className={''} />
          </Link>{' '}
          <Link
            to={'/kanban-view'}
            className={'h-8 text-xs size-9 p-0 preview-button preview-button-outline'}
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
