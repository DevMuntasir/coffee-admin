import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';

export function KitchenCookingDoneModalDialog() {
  return (
    <PreviewDialog id={'cooking_done_modal'} title={'Cooking Completed'}>
      <div className={'modal-body text-center p-6'}>
        <div className={'mb-6'}>
          <span className={'avatar avatar-xxl rounded-full bg-success-subtle'}>
            <img
              className={'max-w-full h-auto w-auto'}
              src={'/assets/img/icons/checked-img.svg'}
              alt={'trash'}
            />
          </span>{' '}
        </div>{' '}
        <h4 className={'mb-1'}>{'Cooking Completed'}</h4>{' '}
        <p className={'mb-6'}>
          {'Order '}
          <span className={'text-foreground font-semibold'}>{'#14751'}</span>{' '}
          {' has been completed & ready in kitchen to serve'}
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
