import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';
import { Select } from '@/shared/components/ui/select';
import { Icon } from '@/shared/components/icon';

export function AddonsEditModifierDialog() {
  return (
    <PreviewDialog id={'edit_modifier'} title={'Edit Addon'}>
      <div className={'modal-body p-6 pt-1'}>
        <div className={'mb-4 flex items-center flex-wrap gap-3'}>
          <div className={'avatar avatar-3xl border bg-muted'}>
            <img
              className={'max-w-full h-auto'}
              src={'/assets/img/coffee/latte.png'}
              alt={'addon'}
            />
          </div>{' '}
          <div>
            <label className={'mb-2 block font-medium text-foreground'}>
              {'Category Image'}
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
            {'Item'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Select aria-label={'Item *'}>
            <option>{'Select'}</option> <option>{'Hot Coffee'}</option>{' '}
            <option>{'Espresso'}</option> <option>{'Salad'}</option> <option>{'Sauce'}</option>{' '}
            <option>{'Topping'}</option>{' '}
          </Select>{' '}
        </div>{' '}
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Addon'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Input type={'text'} defaultValue={'Extra Cheese'} aria-label={'Addon *'} />
        </div>{' '}
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Price'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Input type={'text'} defaultValue={'$10'} aria-label={'Price *'} />
        </div>{' '}
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Description'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Textarea
            rows={4}
            aria-label={'Description *'}
            defaultValue={'Extra cheese for your pizza.'}
          ></Textarea>{' '}
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
