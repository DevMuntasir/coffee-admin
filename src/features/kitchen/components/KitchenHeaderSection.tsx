import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Icon } from '@/shared/components/icon';

export function KitchenHeaderSection() {
  return (
    <div
      className={'flex sm:items-center justify-between sm:flex-row flex-col flex-wrap gap-3 mb-6'}
    >
      <div>
        <h3 className={'mb-0'}>
          {'Kitchen '}
          <Button
            variant={'outline'}
            className={'size-9 p-0 h-8 text-xs rounded-full ml-2'}
            aria-label={'refresh-ccw'}
          >
            <Icon name={'refresh-ccw'} className={''} />
          </Button>{' '}
        </h3>{' '}
      </div>{' '}
      <div className={'flex items-center justify-center gap-3 flex-wrap'}>
        <div
          className={
            'inline-flex items-center justify-between rounded-full bg-card pl-2 pr-4 py-2 gap-3 border'
          }
        >
          <div className={'flex items-center gap-2'}>
            <div className={'avatar avatar-sm rounded-full bg-gray'}>
              <Icon name={'newspaper'} className={'text-[14px]'} />
            </div>{' '}
            <p className={'mb-0 text-foreground font-medium'}>{'New Order'}</p>{' '}
          </div>{' '}
          <h5 className={'fs-18px font-semibold mb-0'}>{'02'}</h5>{' '}
        </div>{' '}
        <div
          className={
            'inline-flex items-center justify-between rounded-full bg-card pl-2 pr-4 py-2 gap-3 border'
          }
        >
          <div className={'flex items-center gap-2'}>
            <div className={'avatar avatar-sm rounded-full bg-slate-500'}>
              <Icon name={'package-2'} className={'text-[14px]'} />
            </div>{' '}
            <p className={'mb-0 text-foreground font-medium'}>{'In Kitchen'}</p>{' '}
          </div>{' '}
          <h5 className={'fs-18px font-semibold mb-0'}>{'03'}</h5>{' '}
        </div>{' '}
        <div
          className={
            'inline-flex items-center justify-between rounded-full bg-card pl-2 pr-4 py-2 gap-3 border'
          }
        >
          <div className={'flex items-center gap-2'}>
            <div className={'avatar avatar-sm rounded-full bg-red-500'}>
              <Icon name={'clock-alert'} className={'text-[14px]'} />
            </div>{' '}
            <p className={'mb-0 text-foreground font-medium'}>{'Delayed'}</p>{' '}
          </div>{' '}
          <h5 className={'fs-18px font-semibold mb-0'}>{'01'}</h5>{' '}
        </div>{' '}
        <div
          className={
            'inline-flex items-center justify-between rounded-full bg-card pl-2 pr-4 py-2 gap-3 border'
          }
        >
          <div className={'flex items-center gap-2'}>
            <div className={'avatar avatar-sm rounded-full bg-emerald-500'}>
              <Icon name={'check-check'} className={'text-[14px]'} />
            </div>{' '}
            <p className={'mb-0 text-foreground font-medium'}>{'Completed'}</p>{' '}
          </div>{' '}
          <h5 className={'fs-18px font-semibold mb-0'}>{'02'}</h5>{' '}
        </div>{' '}
      </div>{' '}
      <div className={'gap-2 flex items-center flex-wrap'}>
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
