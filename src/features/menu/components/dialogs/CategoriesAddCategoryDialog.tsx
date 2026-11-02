import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Icon } from '@/shared/components/icon';

export function CategoriesAddCategoryDialog() {
  return (
    <PreviewDialog id={'add_category'} title={'Add Category'}>
      <div className={'modal-body p-6 pt-1'}>
        <div className={'mb-4 flex items-center flex-wrap gap-3'}>
          <div className={'avatar avatar-3xl border bg-muted'}>
            <Icon name={'images'} className={'text-[28px] text-foreground'} />
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
        <div className={'mb-4'}>
          <label className={'mb-2 block font-medium text-foreground'}>
            {'Category Name'}
            <span className={'text-red-600'}>{' *'}</span>{' '}
          </label>{' '}
          <Input type={'text'} aria-label={'Category Name *'} />
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
