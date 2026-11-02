import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Select } from '@/shared/components/ui/select';
import { Icon } from '@/shared/components/icon';

export function ReservationsAddCustomerDialog() {
  return (
    <PreviewDialog id={'add_customer'} title={'Add Customer'}>
      <div className={'modal-body pt-0'}>
        <div className={'grid grid-cols-12 gap-x-6 gap-6'}>
          <div className={'col-span-12 lg:col-span-12'}>
            <div>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Customer Name '}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Input type={'text'} aria-label={'Customer Name  *'} />
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-12'}>
            <div>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Phone '}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Input type={'text'} aria-label={'Phone  *'} />
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-12'}>
            <div>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Email '}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Input type={'text'} aria-label={'Email  *'} />
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-6'}>
            <label className={'mb-2 block font-medium text-foreground'}>{'Date of Birth'}</label>{' '}
            <div className={'relative flex items-center w-auto'}>
              <Input type={'text'} placeholder={'dd/mm/yyyy'} aria-label={'dd/mm/yyyy'} />
              <span className={'flex items-center px-3 text-muted-foreground'}>
                <Icon name={'calendar-fold'} className={''} />
              </span>{' '}
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-6'}>
            <label className={'mb-2 block font-medium text-foreground'}>{'Gender'}</label>{' '}
            <Select aria-label={'Gender'}>
              <option>{'Select'}</option> <option>{'Male'}</option> <option>{'Female'}</option>{' '}
              <option>{'Otherwise'}</option>{' '}
            </Select>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <div className={'modal-footer flex items-center justify-between flex-nowrap gap-2'}>
        <DialogDismiss variant={'outline'} className={'w-full m-0'} type={'button'}>
          {'Close'}
        </DialogDismiss>{' '}
        <Button variant={'default'} className={'w-full m-0'} type={'button'}>
          {'Save'}
        </Button>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
