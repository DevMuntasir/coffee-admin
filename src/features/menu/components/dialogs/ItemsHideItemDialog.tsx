import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { Link } from 'react-router-dom';

export function ItemsHideItemDialog() {
  return (
    <PreviewDialog id={'hide_item'} title={'Hide Item Confirmation'}>
      <div className={'modal-body text-center p-6'}>
        <div className={'mb-6'}>
          <span className={'avatar avatar-xxl rounded-full bg-info-subtle'}>
            <img
              className={'max-w-full h-auto w-auto'}
              src={'/assets/img/icons/hide.svg'}
              alt={'trash'}
            />
          </span>{' '}
        </div>{' '}
        <h4 className={'mb-1'}>{'Hide Item Confirmation'}</h4>{' '}
        <p className={'mb-6'}>{'Are you sure you want to hide?'}</p>{' '}
        <div className={'flex justify-center gap-2'}>
          <DialogDismiss variant={'outline'} className={'w-full'}>
            {'Close'}
          </DialogDismiss>{' '}
          <Link to={'/items'} className={'w-full preview-button preview-button-outline'}>
            {'Hide'}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
