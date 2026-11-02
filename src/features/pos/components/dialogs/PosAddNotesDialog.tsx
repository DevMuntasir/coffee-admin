import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Textarea } from '@/shared/components/ui/textarea';

export function PosAddNotesDialog() {
  return (
    <PreviewDialog id={'add_notes'} title={'Add Note'}>
      <div className={'modal-body'}>
        <label className={'mb-2 block font-medium text-foreground'}>
          {'Notes'}
          <span className={'text-red-600'}>{' *'}</span>{' '}
        </label>{' '}
        <Textarea rows={4} aria-label={'Notes *'}></Textarea>{' '}
        <p className={'font-medium mb-0 mt-1'}>{'Add Minimum 200 Characters'}</p>{' '}
      </div>{' '}
      <div className={'modal-footer flex items-center justify-between flex-nowrap gap-2'}>
        <DialogDismiss variant={'outline'} className={'w-full m-0'} type={'button'}>
          {'Cancel'}
        </DialogDismiss>{' '}
        <Button variant={'default'} className={'w-full m-0'} type={'button'}>
          {'Add Note'}
        </Button>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
