import { PreviewDialog } from '@/shared/components/preview';

export function ItemsItemsDetailsDialog() {
  return (
    <PreviewDialog id={'items_details'} title={'Item Details'}>
      <div className={'modal-body p-6 pt-1'}>
        <div className={'grid grid-cols-12 gap-x-6 row-gap-3'}>
          <div className={'col-span-12 lg:col-span-6 sm:col-span-12'}>
            <div className={'bg-muted p-4 rounded-md'}>
              <img
                className={'max-w-full h-auto w-full'}
                src={'/assets/img/items/food-17.jpg'}
                alt={'item'}
              />
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-6 sm:col-span-12'}>
            <div className={'mb-4'}>
              <h5>{'Chicken Taco'}</h5>{' '}
              <p>
                {
                  'Tender grilled chicken wrapped in soft tortillas, topped with fresh lettuce, salsa, and creamy sauce.'
                }
              </p>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-b size-tabs'}>
              <h6>{'Sizes'}</h6>{' '}
              <div className={'flex gap-3'}>
                <div className={'size-tab'}>
                  <h6 className={'text-[13px] mb-0 font-medium'}>{'Small'}</h6>{' '}
                </div>{' '}
                <div className={'size-tab'}>
                  <h6 className={'text-[13px] mb-0 font-medium'}>{'Medium'}</h6>{' '}
                </div>{' '}
                <div className={'size-tab'}>
                  <h6 className={'text-[13px] mb-0 font-medium'}>{'Regular'}</h6>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
