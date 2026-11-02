import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { Link } from 'react-router-dom';

export function KanbanViewDeleteModalDialog() {
  return (
    <PreviewDialog id={'delete_modal'} title={'Delete Confirmation'}>
      <div className={'modal-body text-center p-6'}>
        <div className={'mb-6'}>
          <span className={'avatar avatar-xxl rounded-full bg-danger-subtle'}>
            <img
              className={'max-w-full h-auto w-auto'}
              src={'/assets/img/icons/trash-icon.svg'}
              alt={'trash'}
            />
          </span>{' '}
        </div>{' '}
        <h4 className={'mb-1'}>{'Delete Confirmation'}</h4>{' '}
        <p className={'mb-6'}>{'Are you sure you want to delete?'}</p>{' '}
        <div className={'flex justify-between gap-2'}>
          <DialogDismiss variant={'outline'} className={'w-full'}>
            {'Close'}
          </DialogDismiss>{' '}
          <Link to={'/orders'} className={'w-full preview-button preview-button-outline'}>
            {'Delete'}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
