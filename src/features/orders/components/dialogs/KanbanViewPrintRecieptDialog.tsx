import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';

export function KanbanViewPrintRecieptDialog() {
  return (
    <PreviewDialog id={'print_reciept'} title={'Print Reciept'}>
      <div className={'modal-body'}>
        <div className={'mb-4 pb-4 border-b'}>
          <h5 className={'mb-4 text-[16px]'}>{'Order Info'}</h5>{' '}
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
            {'Date & Time '}
            <span className={'font-medium text-foreground'}>{'25/11/2026 - 08:45 PM'}</span>{' '}
          </h6>{' '}
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
            {' Order No '}
            <span className={'font-medium text-foreground'}>{' #54654'}</span>{' '}
          </h6>{' '}
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
            {' Token No '}
            <span className={'font-medium text-foreground'}>{' 20'}</span>{' '}
          </h6>{' '}
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
            {' No of Items '}
            <span className={'font-medium text-foreground'}>{' 4'}</span>{' '}
          </h6>{' '}
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-0'}>
            {' Order Type'}
            <span className={'font-medium text-foreground'}>{' Take Away '}</span>{' '}
          </h6>{' '}
        </div>{' '}
        <div className={'mb-4 pb-4 border-b'}>
          <h5 className={'mb-4 text-[16px]'}>{'Ordered Menus'}</h5>{' '}
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
            {'Iced Americano ×1 '}
            <span className={'font-medium text-foreground'}>{'$49'}</span>{' '}
          </h6>{' '}
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
            {' Café Latte ×2 '}
            <span className={'font-medium text-foreground'}>{' $66'}</span>{' '}
          </h6>{' '}
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
            {' Café Mocha ×1 '}
            <span className={'font-medium text-foreground'}>{' $76'}</span>{' '}
          </h6>{' '}
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-0'}>
            {' Iced Americano ×1 '}
            <span className={'font-medium text-foreground'}>{' $62'}</span>{' '}
          </h6>{' '}
        </div>{' '}
        <div className={'mb-4 pb-4 border-b'}>
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
            {'Sub Total'}
            <span className={'font-medium text-foreground'}>{'$267'}</span>{' '}
          </h6>{' '}
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
            {' Tax (10%)'}
            <span className={'font-medium text-foreground'}>{' $268'}</span>{' '}
          </h6>{' '}
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-0'}>
            {' Service Charge '}
            <span className={'font-medium text-foreground'}>{' $15'}</span>{' '}
          </h6>{' '}
        </div>{' '}
        <h5 className={'mb-0 flex items-center justify-between'}>
          {'Total '}
          <span>{'$274'}</span>{' '}
        </h5>{' '}
      </div>{' '}
      <div className={'modal-footer flex items-center justify-between flex-nowrap gap-2'}>
        <DialogDismiss variant={'outline'} className={'w-full m-0'} type={'button'}>
          {'Close'}
        </DialogDismiss>{' '}
        <Button variant={'default'} className={'w-full m-0'} type={'button'}>
          {'Print'}
        </Button>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
