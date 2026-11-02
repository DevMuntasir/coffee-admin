import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';

export function KitchenOrderPauseDialog() {
  return (
    <PreviewDialog id={'order_pause'} title={'Order Paused'}>
      <div className={'modal-body text-center p-6'}>
        <div className={'mb-6'}>
          <span className={'avatar avatar-xxl rounded-full bg-info-subtle'}>
            <img
              className={'max-w-full h-auto w-auto'}
              src={'/assets/img/icons/pause-icon.svg'}
              alt={'trash'}
            />
          </span>{' '}
        </div>{' '}
        <h4 className={'mb-1'}>{'Order Paused'}</h4>{' '}
        <p className={'mb-6'}>
          {'Order '}
          <span className={'text-foreground font-semibold'}>{'#14751'}</span>{' '}
          {' has been paused in the kitchen'}
        </p>{' '}
        <div className={'flex justify-between gap-2'}>
          <DialogDismiss variant={'default'} className={'w-full'}>
            {'Close'}
          </DialogDismiss>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
