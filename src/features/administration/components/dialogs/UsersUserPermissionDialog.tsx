import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { PreviewDataTable } from '@/shared/components/preview-data-table';
import { tables } from '../../fixtures/users-tables';
import { Button } from '@/shared/components/ui/button';

export function UsersUserPermissionDialog() {
  return (
    <PreviewDialog id={'user_permission'} title={'Permissions'}>
      <div className={'modal-body p-6 pt-1'}>
        <div className={'flex justify-end mb-4'}>
          <div className={'flex items-center gap-2 form-check-md'}>
            <input className={'size-4 accent-primary'} type={'checkbox'} id={'select-all'} />
            <label htmlFor={'select-all'}>{'Revert All'}</label>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'overflow-x-auto mb-4'}>
          <PreviewDataTable model={tables[1]} />
        </div>{' '}
        <div className={'flex items-center justify-end gap-2 pt-1'}>
          <DialogDismiss variant={'outline'} type={'button'}>
            {'Cancel'}
          </DialogDismiss>{' '}
          <Button variant={'default'} type={'button'}>
            {'Save Permission'}
          </Button>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
