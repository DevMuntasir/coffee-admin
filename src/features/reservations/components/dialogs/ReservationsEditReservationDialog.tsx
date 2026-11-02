import { DialogDismiss, PreviewDialog, PreviewForm } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';
import { Select } from '@/shared/components/ui/select';
import { Icon } from '@/shared/components/icon';

export function ReservationsEditReservationDialog() {
  return (
    <PreviewDialog id={'edit_reservation'} title={'Edit  Reservation'}>
      <div className={'modal-body'}>
        <PreviewForm>
          <div className={'grid grid-cols-12 gap-x-6 gap-6'}>
            <div className={'col-span-12 lg:col-span-12'}>
              <div>
                <label className={'mb-2 block font-medium text-foreground'}>
                  {'Customer '}
                  <span className={'text-red-600'}>{' *'}</span>{' '}
                </label>{' '}
                <Select aria-label={'Customer  *'}>
                  <option>{'Select'}</option> <option>{'Adrian Hawk ( +1 66898 98985 )'}</option>{' '}
                  <option>{'Adam Clark - +1 45474 21456'}</option>{' '}
                  <option>{'Create “Ad”'}</option>{' '}
                </Select>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'col-span-12 lg:col-span-6'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Date & Time '}
                <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
              </label>{' '}
              <div className={'relative flex items-center w-auto'}>
                <Input type={'text'} placeholder={'10/05/2026'} aria-label={'10/05/2026'} />
                <span className={'flex items-center px-3 text-muted-foreground'}>
                  <Icon name={'calendar-fold'} className={''} />
                </span>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'col-span-12 lg:col-span-6'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'No of Guests '}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Input type={'number'} defaultValue={'10'} aria-label={'No of Guests  *'} />
            </div>{' '}
            <div className={'col-span-12 lg:col-span-6'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Status '}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Select aria-label={'Status  *'}>
                <option>{'Select'}</option> <option>{'Booked'}</option>{' '}
                <option>{'Cancelled'}</option> <option>{'Paid'}</option>{' '}
              </Select>{' '}
            </div>{' '}
            <div className={'col-span-12 lg:col-span-12'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Notes'}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Textarea rows={4} aria-label={'Notes *'}></Textarea>{' '}
            </div>{' '}
          </div>{' '}
        </PreviewForm>{' '}
      </div>{' '}
      <div className={'modal-footer flex items-center justify-between flex-nowrap gap-2'}>
        <DialogDismiss variant={'outline'} className={'w-full m-0'} type={'button'}>
          {'Close'}
        </DialogDismiss>{' '}
        <Button variant={'default'} className={'w-full m-0'} type={'button'}>
          {'Save Reservation'}
        </Button>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
