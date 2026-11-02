import { DialogAction, PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Icon } from '@/shared/components/icon';

export function PosItemsDetailsDialog() {
  return (
    <PreviewDialog id={'items_details'} title={'Chicken Taco'}>
      <div className={'modal-body p-6'}>
        <div className={'grid grid-cols-12 gap-x-6 gap-6'}>
          <div className={'col-span-12 lg:col-span-6'}>
            <div className={'items-img p-4 border rounded-md bg-muted'}>
              <img
                className={'max-w-full h-auto img-1'}
                src={'/assets/img/food/food-img-1.png'}
                alt={'food'}
              />
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-6'}>
            <div className={'items-content'}>
              <h4 className={'mb-2'}>{'Chicken Taco'}</h4>{' '}
              <p className={'mb-4'}>
                {
                  'Tender grilled chicken wrapped in soft tortillas, topped with fresh lettuce, salsa, and creamy sauce.'
                }
              </p>{' '}
              <div className={'items-info mb-6 pb-6 border-b'}>
                <h6 className={'font-semibold mb-4'}>{'Sizes'}</h6>{' '}
                <div className={'flex items-center flex-wrap gap-2 size-group'}>
                  <div className={'size-tab'}>
                    <Button className={'tag flex items-center justify-between gap-3'}>
                      {'Small '}
                      <span>{'$28'}</span>{' '}
                    </Button>{' '}
                  </div>{' '}
                  <div className={'size-tab'}>
                    <Button className={'tag flex items-center justify-between gap-3'}>
                      {'Medium '}
                      <span>{'$28'}</span>{' '}
                    </Button>{' '}
                  </div>{' '}
                  <div className={'size-tab'}>
                    <Button className={'tag flex items-center justify-between gap-3'}>
                      {'Regular '}
                      <span>{'$28'}</span>{' '}
                    </Button>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              {false && (
                <div className={'mb-6 pb-6 border-b'}>
                  <h6 className={'font-semibold mb-4'}>{'Add-ons & Upgrades'}</h6>{' '}
                  <div className={'upgrade-slider'}>
                    <div className={'slider-item'}>
                      <div className={'flex items-center gap-2 border p-2 rounded-md addon-item'}>
                        <div className={'avatar rounded-full border'}>
                          <img
                            className={'max-w-full h-auto img-1'}
                            src={'/assets/img/food/food-1.png'}
                            alt={'food'}
                          />
                        </div>{' '}
                        <div>
                          <p className={'font-medium mb-1 text-foreground'}>{'Extra Chicken'}</p>{' '}
                          <p className={'mb-0 font-medium'}>{'$2'}</p>{' '}
                        </div>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'slider-item'}>
                      <div className={'flex items-center gap-2 border p-2 rounded-md addon-item'}>
                        <div className={'avatar rounded-full border'}>
                          <img
                            className={'max-w-full h-auto img-1'}
                            src={'/assets/img/food/food-2.png'}
                            alt={'food'}
                          />
                        </div>{' '}
                        <div>
                          <p className={'font-medium mb-1 text-foreground'}>{'Grilled Chicken'}</p>{' '}
                          <p className={'mb-0 font-medium'}>{'$8'}</p>{' '}
                        </div>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'slider-item'}>
                      <div className={'flex items-center gap-2 border p-2 rounded-md addon-item'}>
                        <div className={'avatar rounded-full border'}>
                          <img
                            className={'max-w-full h-auto img-1'}
                            src={'/assets/img/food/food-3.png'}
                            alt={'food'}
                          />
                        </div>{' '}
                        <div>
                          <p className={'font-medium mb-1 text-foreground'}>{'Chicken Soup'}</p>{' '}
                          <p className={'mb-0 font-medium'}>{'$2'}</p>{' '}
                        </div>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>
              )}{' '}
              <div>
                <h5 className={'mb-6 flex items-center justify-between'}>
                  {'Total '}
                  <span>{'$274'}</span>{' '}
                </h5>{' '}
                <div className={'flex items-center gap-3'}>
                  <div className={'quantity-control'}>
                    <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                      <Icon name={'minus'} className={''} />
                    </Button>{' '}
                    <Input
                      className={'quantity-input'}
                      type={'text'}
                      defaultValue={'1'}
                      aria-label={'Quantity'}
                    />
                    <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                      <Icon name={'plus'} className={''} />
                    </Button>{' '}
                  </div>{' '}
                  <DialogAction
                    target={'item_view'}
                    variant={'default'}
                    className={'w-full flex items-center gap-2'}
                  >
                    <Icon name={'shopping-bag'} className={''} />
                    {' Add to Cart'}
                  </DialogAction>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
