import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Icon } from '@/shared/components/icon';

export function OrdersCalculatorDialog() {
  return (
    <PreviewDialog id={'calculator'} title={'Add Discount'}>
      <div className={'modal-body py-0'}>
        <div className={'calculator-wrap'}>
          <div>
            <div>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Amount'}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Input
                className={'input'}
                type={'text'}
                placeholder={'Amount or %'}
                readOnly={true}
                aria-label={'Amount *'}
              />
            </div>{' '}
          </div>{' '}
          <div className={'calculator-body flex justify-between'}>
            <div className={'text-center'}>
              <Button variant={'outline'}>{'C'}</Button> <Button variant={'outline'}>{'7'}</Button>{' '}
              <Button variant={'outline'}>{'4'}</Button> <Button variant={'outline'}>{'1'}</Button>{' '}
              <Button variant={'outline'}>{','}</Button>{' '}
            </div>{' '}
            <div className={'text-center'}>
              <Button variant={'outline'}>{'÷'}</Button> <Button variant={'outline'}>{'8'}</Button>{' '}
              <Button variant={'outline'}>{'5'}</Button> <Button variant={'outline'}>{'2'}</Button>{' '}
              <Button variant={'outline'}>{'00'}</Button>{' '}
            </div>{' '}
            <div className={'text-center'}>
              <Button variant={'outline'}>{'%'}</Button> <Button variant={'outline'}>{'9'}</Button>{' '}
              <Button variant={'outline'}>{'6'}</Button> <Button variant={'outline'}>{'3'}</Button>{' '}
              <Button variant={'outline'}>{'.'}</Button>{' '}
            </div>{' '}
            <div className={'text-center'}>
              <Button variant={'outline'} aria-label={'arrow-left'}>
                <Icon name={'arrow-left'} className={''} />
              </Button>{' '}
              <Button variant={'outline'}>{'x'}</Button> <Button variant={'outline'}>{'-'}</Button>{' '}
              <Button variant={'outline'}>{'+'}</Button>{' '}
              <Button variant={'outline'}>{'='}</Button>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <div className={'modal-footer flex items-center justify-between flex-nowrap gap-2'}>
        <DialogDismiss variant={'outline'} className={'w-full m-0'} type={'button'}>
          {'Cancel'}
        </DialogDismiss>{' '}
        <Button variant={'default'} className={'w-full m-0'} type={'button'}>
          {'Submit'}
        </Button>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
