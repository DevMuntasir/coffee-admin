import { DialogAction } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Icon } from '@/shared/components/icon';

export function ReservationsHeaderSection() {
  return (
    <div className={'flex sm:items-center sm:flex-row flex-col flex-wrap gap-3 mb-6'}>
      <div className={'grow'}>
        <h3 className={'mb-0'}>
          {'Reservations '}
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
        <div className={'relative flex items-center w-auto'}>
          <Input type={'text'} placeholder={'Search'} aria-label={'Search'} />
          <span className={'flex items-center px-3 text-muted-foreground'}>
            <Icon name={'search'} className={'text-foreground'} />
          </span>{' '}
        </div>{' '}
        <DialogAction
          target={'add_reservation'}
          variant={'default'}
          className={'inline-flex items-center'}
        >
          <Icon name={'circle-plus'} className={'mr-1'} />
          {'Add New'}
        </DialogAction>{' '}
      </div>{' '}
    </div>
  );
}
