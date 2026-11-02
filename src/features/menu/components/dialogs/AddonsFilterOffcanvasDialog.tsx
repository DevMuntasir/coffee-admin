import { PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Icon } from '@/shared/components/icon';

export function AddonsFilterOffcanvasDialog() {
  return (
    <PreviewDialog id={'filter-offcanvas'} title={'Filter'}>
      <div className={'offcanvas-body flex flex-col pt-4'}>
        <div>
          <div className={'mb-4'}>
            <label className={'mb-2 block font-medium text-foreground'}>
              {'Item'}
              <span className={'text-red-600'}>{' *'}</span>{' '}
            </label>{' '}
            <details className="preview-dropdown relative">
              <summary
                className={
                  'flex items-center justify-between cursor-pointer list-none preview-button preview-button-outline'
                }
              >
                {' Select '}
              </summary>{' '}
              <div className={'dropdown-menu right-0 p-4 w-full preview-dropdown-menu'}>
                <h6 className={'text-[14px] font-semibold mb-4'}>{'Category'}</h6>{' '}
                <div className={'input-icon-end input-icon relative mb-4'}>
                  <span className={'input-icon-addon'}>
                    <Icon name={'search'} className={'text-foreground'} />
                  </span>{' '}
                  <Input
                    className={'form-control-md'}
                    type={'text'}
                    placeholder={'Search'}
                    aria-label={'Search'}
                  />
                </div>{' '}
                <div className={'vstack gap-2'}>
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Pizza '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Sea Food '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Salad '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Sauce '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Topping '}
                    </label>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </details>{' '}
          </div>{' '}
          <div className={'mb-4'}>
            <label className={'mb-2 block font-medium text-foreground'}>
              {'Addon'}
              <span className={'text-red-600'}>{' *'}</span>{' '}
            </label>{' '}
            <details className="preview-dropdown relative">
              <summary
                className={
                  'flex items-center justify-between cursor-pointer list-none preview-button preview-button-outline'
                }
              >
                {' Select '}
              </summary>{' '}
              <div className={'dropdown-menu right-0 p-4 w-full preview-dropdown-menu'}>
                <h6 className={'text-[14px] font-semibold mb-4'}>{'Category'}</h6>{' '}
                <div className={'input-icon-end input-icon relative mb-4'}>
                  <span className={'input-icon-addon'}>
                    <Icon name={'search'} className={'text-foreground'} />
                  </span>{' '}
                  <Input
                    className={'form-control-md'}
                    type={'text'}
                    placeholder={'Search'}
                    aria-label={'Search'}
                  />
                </div>{' '}
                <div className={'vstack gap-2'}>
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Extra Cheese '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Grilled Shrimp '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Avocado Slices '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Spicy Mayo '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Crispy Bacon Bits '}
                    </label>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </details>{' '}
          </div>{' '}
          <div className={'mb-0'}>
            <label className={'mb-2 block font-medium text-foreground'}>
              {'Status'}
              <span className={'text-red-600'}>{' *'}</span>{' '}
            </label>{' '}
            <details className="preview-dropdown relative">
              <summary
                className={
                  'flex items-center justify-between cursor-pointer list-none preview-button preview-button-outline'
                }
              >
                {' Select '}
              </summary>{' '}
              <div className={'dropdown-menu right-0 p-4 w-full preview-dropdown-menu'}>
                <h6 className={'text-[14px] font-semibold mb-4'}>{'Category'}</h6>{' '}
                <div className={'input-icon-end input-icon relative mb-4'}>
                  <span className={'input-icon-addon'}>
                    <Icon name={'search'} className={'text-foreground'} />
                  </span>{' '}
                  <Input
                    className={'form-control-md'}
                    type={'text'}
                    placeholder={'Search'}
                    aria-label={'Search'}
                  />
                </div>{' '}
                <div className={'vstack gap-2'}>
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Active '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Expired '}
                    </label>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </details>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'flex items-center gap-2 mt-auto border-0'}>
          <Button variant={'outline'} className={'w-full'}>
            {'Reset'}
          </Button>{' '}
          <Button variant={'default'} className={'w-full'}>
            {'Apply'}
          </Button>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
