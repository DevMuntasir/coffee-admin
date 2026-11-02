import { DialogDismiss, PreviewDialog } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';
import { Select } from '@/shared/components/ui/select';
import { Icon } from '@/shared/components/icon';

export function ItemsAddItemDialog() {
  return (
    <PreviewDialog id={'add_item'} title={'Add Item'}>
      <div className={'modal-body p-6 pt-1'}>
        <div className={'grid grid-cols-12 gap-x-6'}>
          <div className={'col-span-12 lg:col-span-12'}>
            <div className={'mb-4 flex items-center flex-wrap gap-3'}>
              <div className={'avatar avatar-3xl border bg-muted'}>
                <Icon name={'images'} className={'text-[28px] text-foreground'} />
              </div>{' '}
              <div>
                <label className={'mb-2 block font-medium text-foreground'}>
                  {'Item Image'}
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
          </div>{' '}
          <div className={'col-span-12 lg:col-span-12'}>
            <div className={'mb-4'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Item Name'}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Input type={'text'} aria-label={'Item Name *'} />
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-12'}>
            <div className={'mb-4'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Description'}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Textarea className={'mb-2'} rows={4} aria-label={'Description *'}></Textarea>{' '}
              <span>{'Add Minimum 200 Characters'}</span>{' '}
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-6'}>
            <div className={'mb-4'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Price'}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Input type={'text'} aria-label={'Price *'} />
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-6'}>
            <div className={'mb-4'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Net Price'}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Input type={'text'} aria-label={'Net Price *'} />
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-6'}>
            <div className={'mb-4'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Category'}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Select aria-label={'Category *'}>
                <option>{'Select'}</option> <option>{'Espresso'}</option>{' '}
                <option>{'Hot Coffee'}</option> <option>{'Iced Coffee'}</option>{' '}
                <option>{'Tea'}</option> <option>{'Signature Drinks'}</option>{' '}
              </Select>{' '}
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-6'}>
            <div className={'mb-4'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Tax'}
                <span className={'text-red-600'}>{' *'}</span>{' '}
              </label>{' '}
              <Select aria-label={'Tax *'}>
                <option>{'Select'}</option> <option>{'CGST(9%)'}</option>{' '}
                <option>{'SGST(9%)'}</option> <option>{'IGST(18%)'}</option>{' '}
                <option>{'VAT(10%)'}</option> <option>{'Service Tax(15%)'}</option>{' '}
              </Select>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'accordion-card-one accordion mb-4'} id={'accordionExample'}>
          <div className={'accordion-item pb-4'}>
            <div className={'accordion-header'} id={'headingOne'}>
              <div className={'accordion-button p-4 pb-0'} aria-controls={'collapseOne'}>
                <div className={'addproduct-icon flex items-center justify-between w-full'}>
                  <div className={'flex items-center'}>
                    <h5 className={'mb-0'}>
                      <span>{'Variations'}</span>{' '}
                    </h5>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div
              className={'accordion-collapse collapse'}
              id={'collapseOne'}
              aria-labelledby={'headingOne'}
            >
              <div className={'accordion-body border-0 pb-0'}>
                <div className={'rowsContainer'} id={'group1'}></div>{' '}
                <div
                  className={'grid grid-cols-12 gap-x-6 hidden rowTemplate'}
                  id={'group1-template'}
                >
                  <div className={'col-span-12 lg:col-span-5'}>
                    <div className={'mb-4'}>
                      <label className={'mb-2 block font-medium text-foreground'}>
                        {'Size'}
                        <span className={'text-red-600'}>{' *'}</span>{' '}
                      </label>{' '}
                      <Input type={'text'} aria-label={'Size *'} />
                    </div>{' '}
                  </div>{' '}
                  <div className={'col-span-12 lg:col-span-5'}>
                    <div className={'mb-4'}>
                      <label className={'mb-2 block font-medium text-foreground'}>
                        {'Price'}
                        <span className={'text-red-600'}>{' *'}</span>{' '}
                      </label>{' '}
                      <Input type={'text'} aria-label={'Price *'} />
                    </div>{' '}
                  </div>{' '}
                  <div className={'col-span-12 lg:col-span-2 flex items-center gap-2 mt-4'}>
                    <span className={'size-9 p-0 h-8 text-xs rounded-full deleteRowBtn'}>
                      <Icon name={'trash-2'} className={'text-red-600'} />
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <Button variant={'outline'} className={'addRowBtn h-8 text-xs'}>
                  <Icon name={'plus'} className={''} />
                  {'Add '}
                </Button>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'accordion-card-one accordion mb-4'} id={'accordionExample2'}>
          <div className={'accordion-item pb-4'}>
            <div className={'accordion-header'} id={'heading2'}>
              <div className={'accordion-button p-4 pb-0'} aria-controls={'collapse2'}>
                <div className={'addproduct-icon flex items-center justify-between w-full'}>
                  <div className={'flex items-center'}>
                    <h5 className={'mb-0'}>
                      <span>{'Add Ons'}</span>{' '}
                    </h5>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div
              className={'accordion-collapse collapse'}
              id={'collapse2'}
              aria-labelledby={'heading2'}
            >
              <div className={'accordion-body border-0 pb-0'}>
                <div className={'rowsContainer'} id={'group2'}></div>{' '}
                <div
                  className={'grid grid-cols-12 gap-x-6 hidden rowTemplate'}
                  id={'group2-template'}
                >
                  <div className={'col-span-12 lg:col-span-5'}>
                    <div className={'mb-4'}>
                      <label className={'mb-2 block font-medium text-foreground'}>
                        {'Name'}
                        <span className={'text-red-600'}>{' *'}</span>{' '}
                      </label>{' '}
                      <Input type={'text'} aria-label={'Name *'} />
                    </div>{' '}
                  </div>{' '}
                  <div className={'col-span-12 lg:col-span-5'}>
                    <div className={'mb-4'}>
                      <label className={'mb-2 block font-medium text-foreground'}>
                        {'Price($)'}
                        <span className={'text-red-600'}>{' *'}</span>{' '}
                      </label>{' '}
                      <Input type={'text'} aria-label={'Price($) *'} />
                    </div>{' '}
                  </div>{' '}
                  <div className={'col-span-12 lg:col-span-2 flex items-center gap-2 mt-4'}>
                    <span className={'size-9 p-0 h-8 text-xs rounded-full deleteRowBtn'}>
                      <Icon name={'trash-2'} className={'text-red-600'} />
                    </span>{' '}
                  </div>{' '}
                </div>{' '}
                <Button variant={'outline'} className={'addRowBtn h-8 text-xs'}>
                  <Icon name={'plus'} className={''} />
                  {'Add '}
                </Button>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'flex items-center justify-end gap-2'}>
          <DialogDismiss variant={'outline'} type={'button'}>
            {'Cancel'}
          </DialogDismiss>{' '}
          <Button variant={'default'} type={'button'}>
            {'Save Item'}
          </Button>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
