import { PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Select } from '@/shared/components/ui/select';
import { Icon } from '@/shared/components/icon';

export function InvoicesFilterOffcanvasDialog() {
  return (
    <PreviewDialog id={'filter-offcanvas'} title={'Filter'}>
      <div className={'offcanvas-body flex flex-col pt-4'}>
        <div>
          <div className={'mb-4'}>
            <label className={'mb-2 block font-medium text-foreground'}>
              {'Customer'}
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
                <h6 className={'text-[14px] font-semibold mb-4'}>{'Customer'}</h6>{' '}
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
                      {'Adrian James '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Sue Allen '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Frank Barrett '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Kelley Davis '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Jim Vickers '}
                    </label>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </details>{' '}
          </div>{' '}
          <div className={'mb-4'}>
            <label className={'mb-2 block font-medium text-foreground'}>
              {'Order Type'}
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
                <h6 className={'text-[14px] font-semibold mb-4'}>{'Order Type'}</h6>{' '}
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
                      {'Dine In '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Take Away '}
                    </label>{' '}
                  </div>{' '}
                  <div>
                    <label className={'flex items-center'}>
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {'Delivery '}
                    </label>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </details>{' '}
          </div>{' '}
          <div className={'mb-4'}>
            <label className={'mb-2 block font-medium text-foreground'}>
              {'Date Range'}
              <span className={'text-red-600'}>{' *'}</span>{' '}
            </label>{' '}
            <div className={'daterangepick custom-date w-auto flex items-center justify-between'}>
              <span className={'reportrange-picker'}></span>{' '}
              <Icon name={'calendar-fold'} className={'text-gray-5 text-[14px] text-right'} />
            </div>{' '}
          </div>{' '}
          <div className={'mb-4'}>
            <label className={'mb-2 block font-medium text-foreground'}>
              {'Status'}
              <span className={'text-red-600'}>{' *'}</span>{' '}
            </label>{' '}
            <Select aria-label={'Status *'}>
              <option>{'Select'}</option> <option>{'Paid'}</option> <option>{'Unpaid'}</option>{' '}
            </Select>{' '}
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
