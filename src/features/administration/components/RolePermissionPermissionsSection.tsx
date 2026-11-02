import { DialogAction } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Icon } from '@/shared/components/icon';

export function RolePermissionPermissionsSection() {
  return (
    <div className={'flex sm:items-center sm:flex-row flex-col gap-3 mb-6'}>
      <div className={'grow'}>
        <h3 className={'mb-0'}>
          {'Permissions '}
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
        <DialogAction
          target={'add_role'}
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
