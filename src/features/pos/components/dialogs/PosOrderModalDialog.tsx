import { PreviewDialog } from '@/shared/components/preview';
import { Link } from 'react-router-dom';

export function PosOrderModalDialog() {
  return (
    <PreviewDialog id={'order_modal'} title={'Order Sent to Kitchen'}>
      <div className={'modal-body text-center p-6'}>
        <div className={'mb-6'}>
          <span className={'avatar avatar-xxl rounded-full bg-success-subtle shadow-lg'}>
            <img
              className={'max-w-full h-auto w-auto'}
              src={'/assets/img/icons/checked-img.svg'}
              alt={'trash'}
            />
          </span>{' '}
        </div>{' '}
        <h4 className={'mb-1'}>{'Order Sent to Kitchen'}</h4>{' '}
        <div className={'flex items-center justify-center gap-2 mb-6'}>
          <p className={'mb-0'}>
            {' Token No : '}
            <span className={'text-foreground'}>{'7'}</span>{' '}
          </p>{' '}
          <span className={'even-line'}></span>{' '}
          <p className={'mb-0'}>
            {' Order ID : '}
            <span className={'text-foreground'}>{'#26598'}</span>{' '}
          </p>{' '}
        </div>{' '}
        <div className={'flex justify-between gap-2'}>
          <Link to={'/pos'} className={'w-full preview-button preview-button-outline'}>
            {'Close'}
          </Link>{' '}
          <Link to={'/pos'} className={'w-full preview-button preview-button-primary'}>
            {'Print Token'}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
