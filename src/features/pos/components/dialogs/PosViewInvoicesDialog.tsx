import { Card, CardContent } from '@/shared/components/ui/card';
import { PreviewDialog } from '@/shared/components/preview';
import { PreviewDataTable } from '@/shared/components/preview-data-table';
import { tables } from '../../fixtures/pos-tables';
import { Button } from '@/shared/components/ui/button';
import { Icon } from '@/shared/components/icon';

export function PosViewInvoicesDialog() {
  return (
    <PreviewDialog id={'view_invoices'} title={'Invoice'}>
      <div className={'modal-body p-6 pt-1'}>
        <Card className={'mb-4'}>
          <CardContent>
            <div className={'mb-6'}>
              <div
                className={
                  'grid grid-cols-12 gap-x-6 gap-6 justify-between items-center border-b pb-6'
                }
              >
                <div className={'col-span-12 md:col-span-6'}>
                  <h6 className={'mb-2'}>{'#INV5465'}</h6> <h6>{'DreamsPOS'}</h6>{' '}
                </div>{' '}
                <div className={'col-span-12 md:col-span-6'}>
                  <div
                    className={'mb-2 invoice-logo flex items-center md:justify-end justify-start'}
                  >
                    <img
                      className={'max-w-full h-auto logo'}
                      src={'/assets/img/logo.png'}
                      width={'130'}
                      alt={'logo'}
                    />
                    <img
                      className={'max-w-full h-auto logo-white hidden'}
                      src={'/assets/img/logo-white.svg'}
                      width={'130'}
                      alt={'logo'}
                    />
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-6'}>
              <div
                className={
                  'grid grid-cols-12 gap-x-6 gap-6 justify-between items-center border-b pb-6'
                }
              >
                <div className={'col-span-12 md:col-span-4'}>
                  <h6 className={'mb-2'}>{'Invoice From'}</h6>{' '}
                  <p className={'text-foreground font-semibold mb-2'}>{'DreamsPOS'}</p>{' '}
                  <p className={'mb-2'}>{'15 Hodges Mews, High Wycombe HP12 3JL,United Kingdom'}</p>{' '}
                  <p className={'mb-0'}>{'Phone : +1 45659 96566'}</p>{' '}
                </div>{' '}
                <div className={'col-span-12 md:col-span-4'}>
                  <h6 className={'mb-2'}>{'Bill To '}</h6>{' '}
                  <p className={'text-foreground font-semibold mb-2'}>{'Andrew Fletcher'}</p>{' '}
                  <p className={'mb-2'}>
                    {'1147 Rohan Drive Suite,Burlington, VT / 8202115 United Kingdom'}
                  </p>{' '}
                  <p className={'mb-0'}>{'Phone : +1 45659 96566'}</p>{' '}
                </div>{' '}
                <div className={'col-span-12 md:col-span-4'}>
                  <div className={'flex items-center md:justify-center'}>
                    <img src={'/assets/img/invoices/paid-invoices.svg'} alt={'paid-invoices-img'} />
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-6'}>
              <h6 className={'mb-4'}>{'Items Details'}</h6>{' '}
              <div className={'overflow-x-auto whitespace-nowrap'}>
                <PreviewDataTable model={tables[3]} />
              </div>{' '}
            </div>{' '}
            <div className={'mb-0'}>
              <div className={'grid grid-cols-12 gap-x-6 gap-6 justify-between items-center'}>
                <div className={'col-span-12 md:col-span-6'}>
                  <h6 className={'mb-2'}>{'Terms and Conditions'}</h6>{' '}
                  <div className={'mb-6'}>
                    <p className={'mb-0'}>
                      {'1. Goods once sold cannot be taken back or exchanged.'}
                    </p>{' '}
                    <p className={'mb-0'}>
                      {'2. We are not the manufacturers the company provides warranty'}
                    </p>{' '}
                  </div>{' '}
                  <div className={'px-4 py-2 bg-muted'}>
                    <p className={'mb-0'}>
                      {'Note : Please ensure payment is made within 7 days of invoice date.'}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'col-span-12 lg:col-span-5 md:col-span-6'}>
                  <div className={'mb-4'}>
                    <div className={'grid grid-cols-12 gap-x-6 items-center pb-4 border-b'}>
                      <div className={'col-span-6'}>
                        <p className={'text-foreground font-semibold mb-4'}>{'Amount'}</p>{' '}
                        <p className={'text-foreground font-semibold mb-4'}>{'CGST (9%)'}</p>{' '}
                        <p className={'text-foreground font-semibold mb-4'}>{'SGST (9%)'}</p>{' '}
                        <p className={'text-foreground font-semibold mb-0'}>
                          {'Discount (25%)'}
                        </p>{' '}
                      </div>{' '}
                      <div className={'col-span-6 text-right'}>
                        <p className={'text-foreground font-semibold mb-4'}>{'$1,793.12'}</p>{' '}
                        <p className={'text-foreground font-semibold mb-4'}>{'$18'}</p>{' '}
                        <p className={'text-foreground font-semibold mb-4'}>{'$18'}</p>{' '}
                        <p className={'text-red-600 font-semibold mb-0'}>{'- $18'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'flex justify-between algin-item-center'}>
                    <h6>{'Total ($)'}</h6> <h6>{'$1,972.43'}</h6>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
        <div className={'flex justify-center algin-item-center'}>
          <div className={'flex justify-center algin-item-center flex-wrap gap-3'}>
            <Button variant={'outline'} className={'flex items-center'} type={'button'}>
              <Icon name={'download'} className={'mr-1'} />
              {'Download PDF'}
            </Button>{' '}
            <Button variant={'outline'} className={'flex items-center'} type={'button'}>
              <Icon name={'printer'} className={'mr-1'} />
              {'Print Invoice'}
            </Button>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
