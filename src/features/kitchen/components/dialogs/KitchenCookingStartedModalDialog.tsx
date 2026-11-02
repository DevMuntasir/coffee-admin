import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';

export function KitchenCookingStartedModalDialog() {
  return (
    <PreviewDialog id={'cooking_started_modal'} title={'Cooking Started'}>
      <div className={'modal-body text-center p-6'}>
        <div className={'mb-6'}>
          <span className={'avatar avatar-xxl rounded-full bg-orange-subtle'}>
            <img
              className={'max-w-full h-auto w-auto'}
              src={'/assets/img/icons/start-icon.svg'}
              alt={'trash'}
            />
          </span>{' '}
        </div>{' '}
        <h4 className={'mb-1'}>{'Cooking Started'}</h4>{' '}
        <p className={'mb-6'}>{'Vegetarian Lasagna Cooking has begun in the kitchen.'}</p>{' '}
        <div className={'flex justify-between gap-2'}>
          <DialogDismiss variant={'default'} className={'w-full'}>
            {'Close'}
          </DialogDismiss>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
