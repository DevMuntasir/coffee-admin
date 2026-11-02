import { Link } from 'react-router-dom';
import { Button } from '@/shared/components/ui/button';
import { Icon } from '@/shared/components/icon';

export function KanbanViewOrdersSection() {
  return (
    <div className={'flex sm:items-center sm:flex-row flex-col gap-3 mb-6'}>
      <div className={'grow'}>
        <h3 className={'mb-0'}>
          {'Orders '}
          <Button
            variant={'outline'}
            className={'size-9 p-0 h-8 text-xs rounded-full ml-2'}
            aria-label={'refresh-ccw'}
          >
            <Icon name={'refresh-ccw'} className={''} />
          </Button>{' '}
        </h3>{' '}
      </div>{' '}
      <div className={'gap-2 flex items-center flex-wrap'}>
        <div className={'daterangepick custom-date w-auto flex items-center justify-between'}>
          <Icon name={'calendar-fold'} className={'text-foreground text-[14px] mr-2'} />
          <span className={'reportrange-picker'}></span>{' '}
        </div>{' '}
        <Link
          to={'/pos'}
          className={'inline-flex items-center preview-button preview-button-primary'}
        >
          <Icon name={'circle-plus'} className={'mr-1'} />
          {'Add New'}
        </Link>{' '}
      </div>{' '}
    </div>
  );
}
