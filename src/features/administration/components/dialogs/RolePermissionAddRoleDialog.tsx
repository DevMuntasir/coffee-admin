import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';

export function RolePermissionAddRoleDialog() {
  return (
    <PreviewDialog id={'add_role'} title={'Add Role'}>
      <div className={'modal-body p-6 pt-1'}>
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Role Name'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Input type={'text'} aria-label={'Role Name *'} />
        </div>{' '}
        <div className={'flex items-center justify-between gap-2 pt-1'}>
          <DialogDismiss variant={'outline'} className={'w-full'} type={'button'}>
            {'Cancel'}
          </DialogDismiss>{' '}
          <Button variant={'default'} className={'w-full'} type={'button'}>
            {'Save'}
          </Button>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
