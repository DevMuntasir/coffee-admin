import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Select } from '@/shared/components/ui/select';
import { Icon } from '@/shared/components/icon';

export function CustomerEditCustomerDialog() {
  return (
    <PreviewDialog id={'edit_customer'} title={'Edit Customer'}>
      <div className={'modal-body p-6 pt-1'}>
        <div className={'mb-4 flex items-center flex-wrap gap-3'}>
          <div className={'avatar avatar-3xl avatar-rounded border'}>
            <img
              className={'max-w-full h-auto'}
              src={'/assets/img/profiles/avatar-32.jpg'}
              alt={'category'}
            />
          </div>{' '}
          <div>
            <label className={'mb-2 block font-medium text-foreground'}>
              {'Customer Image'}
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
                <Icon name={'pencil-line'} className={''} />
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
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Customer Name'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Input type={'text'} defaultValue={'Adrian James'} aria-label={'Customer Name *'} />
        </div>{' '}
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Phone'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Input type={'text'} defaultValue={'+1 56985 65895'} aria-label={'Phone *'} />
        </div>{' '}
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Email'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Input type={'mail'} defaultValue={'adrian@example.com'} aria-label={'Email *'} />
        </div>{' '}
        <div className={'grid grid-cols-12 gap-x-6 algin-items-center justify-center'}>
          <div className={'col-span-12 lg:col-span-6'}>
            <div className={'mb-4'}>
              <label className={'mb-2 block font-medium text-foreground'}>{'Date of Birth'}</label>{' '}
              <div className={'relative flex items-center w-auto'}>
                <Input
                  type={'text'}
                  placeholder={'dd/mm/yyyy'}
                  defaultValue={'25/12/2026'}
                  aria-label={'dd/mm/yyyy'}
                />
                <span className={'flex items-center px-3 text-muted-foreground'}>
                  <Icon name={'calendar-fold'} className={''} />
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-6'}>
            <div className={'mb-4'}>
              <label className={'mb-2 block font-medium text-foreground'}>{'Gender'}</label>{' '}
              <Select aria-label={'Gender'}>
                <option>{'Select'}</option> <option>{'Male'}</option>{' '}
                <option>{'Female'}</option>{' '}
              </Select>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>{'Status'}</label>{' '}
          <Select aria-label={'Status'}>
            <option>{'Select'}</option> <option>{'Active'}</option>{' '}
            <option>{'Disabled'}</option>{' '}
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
