import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Select } from '@/shared/components/ui/select';

export function TaxSettingsEditTaxDialog() {
  return (
    <PreviewDialog id={'edit_tax'} title={'Edit Tax'}>
      <div className={'modal-body p-6 pt-1'}>
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Title'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Input type={'text'} defaultValue={'Inclusive / Exclusive'} aria-label={'Title *'} />
        </div>{' '}
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Tax Rate (%)'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Input type={'text'} defaultValue={'9%'} aria-label={'Tax Rate (%) *'} />
        </div>{' '}
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Tax Type'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Select aria-label={'Tax Type *'}>
            <option>{'Select'}</option> <option>{'Inclusive / Exclusive'}</option>{' '}
            <option>{'Exclusive'}</option>{' '}
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
