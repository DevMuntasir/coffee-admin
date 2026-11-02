import { PreviewDialog } from '@/shared/components/preview';

export function PosItemViewDialog() {
  return (
    <PreviewDialog id={'item_view'} title={'Item Added'}>
      <div className={'modal-body text-center p-6'}>
        <div className={'mb-6'}>
          <span className={'avatar avatar-xxl rounded-full bg-success-subtle'}>
            <img
              className={'max-w-full h-auto w-auto'}
              src={'/assets/img/icons/checked-img.svg'}
              alt={'trash'}
            />
          </span>{' '}
        </div>{' '}
        <h4 className={'mb-1'}>{'Item Added'}</h4>{' '}
        <p className={'mb-0'}>{'Café Mocha Added to the cart'}</p>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
