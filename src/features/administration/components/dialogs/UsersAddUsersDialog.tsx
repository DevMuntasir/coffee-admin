import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Select } from '@/shared/components/ui/select';
import { Icon } from '@/shared/components/icon';

export function UsersAddUsersDialog() {
  return (
    <PreviewDialog id={'add_users'} title={'Add New User'}>
      <div className={'modal-body p-6 pt-1'}>
        <div className={'flex items-center gap-3 flex-wrap mb-6'}>
          <div className={'avatar avatar-3xl border bg-muted'}>
            <Icon name={'images'} className={'text-[28px] text-foreground'} />
          </div>{' '}
          <div>
            <label className={'mb-2 block font-medium text-foreground'}>
              {'User Image'}
              <span className={'text-red-600'}>{' *'}</span>{' '}
            </label>{' '}
            <p className={'text-[13px] mb-4'}>{'Image should be with in 5 MB'}</p>{' '}
            <div className={'flex items-center'}>
              <div className={'size-9 p-0 h-8 text-xs rounded-full relative mr-2'}>
                <input
                  className={'absolute w-full h-full top-0 left-0 opacity-0'}
                  type={'file'}
                  aria-label={'file'}
                />
                <Icon name={'upload'} className={''} />
              </div>{' '}
              <Button
                variant={'outline'}
                className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                aria-label={'trash-2'}
              >
                <Icon name={'trash-2'} className={''} />
              </Button>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'grid grid-cols-12 gap-x-6 algin-items-center justify-center'}>
          <div className={'col-span-12 lg:col-span-6'}>
            <div className={'mb-4'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'First Name'}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Input type={'text'} aria-label={'First Name *'} />
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-6'}>
            <div className={'mb-4'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Last Name'}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Input type={'text'} aria-label={'Last Name *'} />
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Role'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Select aria-label={'Role *'}>
            <option>{'Select'}</option> <option>{'Admin / Owner'}</option>{' '}
            <option>{'Supervisor'}</option> <option>{'Cashier'}</option> <option>{'Chef'}</option>{' '}
            <option>{'Waiter'}</option>{' '}
          </Select>{' '}
        </div>{' '}
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Phone Number'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Input type={'text'} aria-label={'Phone Number *'} />
        </div>{' '}
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Status'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Select aria-label={'Status *'}>
            <option>{'Select'}</option> <option>{'Active'}</option>{' '}
            <option>{'Inactive'}</option>{' '}
          </Select>{' '}
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
