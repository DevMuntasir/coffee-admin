import { Card, CardContent } from '@/shared/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/components/ui/button';
import { Badge } from '@/shared/components/ui/badge';
import { Icon } from '@/shared/components/icon';
import { ChartPreview } from '@/shared/components/chart-preview';

export function DashboardCategoryStatisticsSection() {
  return (
    <div className={'grid grid-cols-12 gap-x-6'}>
      <div className={'col-span-12 lg:col-span-6 2xl:col-span-4 flex'}>
        <Card className={'flex-1 w-full'}>
          <CardContent>
            <div className={'flex items-center justify-between pb-4 mb-4 border-b flex-wrap gap-2'}>
              <div className={'flex items-center'}>
                <div
                  className={'avatar avatar-xs shadow-sm border text-foreground text-[14px] mr-2'}
                >
                  <Icon name={'croissant'} className={''} />
                </div>{' '}
                <h5 className={'mb-0'}>{'Category Statistics'}</h5>{' '}
              </div>{' '}
              <details className="preview-dropdown relative">
                <summary
                  className={
                    'h-8 text-xs cursor-pointer list-none preview-button preview-button-outline'
                  }
                  aria-haspopup={'false'}
                  aria-expanded={'false'}
                >
                  {' Weekly '}
                </summary>{' '}
                <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                  <li>
                    <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                      {'Weekly'}
                    </Button>{' '}
                  </li>{' '}
                  <li>
                    <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                      {'Monthly'}
                    </Button>{' '}
                  </li>{' '}
                  <li>
                    <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                      {'Yearly'}
                    </Button>{' '}
                  </li>{' '}
                </ul>{' '}
              </details>{' '}
            </div>{' '}
            <ChartPreview kind={'category-chart'} />
            <div className={'flex items-center justify-between border-b p-2'}>
              <div className={'flex items-center'}>
                <span className={'avatar avatar-sm avatar-rounded bg-primary mr-2'}>
                  <Icon name={'shopping-bag'} className={''} />
                </span>{' '}
                <h6 className={'text-[14px] font-medium mb-0'}>{'Take Away'}</h6>{' '}
              </div>{' '}
              <p className={'font-medium mb-0'}>{'4898 Orders'}</p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between border-b p-2'}>
              <div className={'flex items-center'}>
                <span className={'avatar avatar-sm avatar-rounded bg-slate-500 mr-2'}>
                  <Icon name={'wine'} className={''} />
                </span>{' '}
                <h6 className={'text-[14px] font-medium mb-0'}>{'Reservation'}</h6>{' '}
              </div>{' '}
              <p className={'font-medium mb-0'}>{'4587 Orders'}</p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between p-2 pb-0'}>
              <div className={'flex items-center'}>
                <span className={'avatar avatar-sm avatar-rounded bg-emerald-500 mr-2'}>
                  <Icon name={'check-check'} className={''} />
                </span>{' '}
                <h6 className={'text-[14px] font-medium mb-0'}>{'Delivery'}</h6>{' '}
              </div>{' '}
              <p className={'font-medium mb-0'}>{'3565 Orders'}</p>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 lg:col-span-6 2xl:col-span-4 flex'}>
        <Card className={'flex-1 w-full'}>
          <CardContent>
            <div className={'flex items-center justify-between pb-4 mb-4 border-b flex-wrap gap-2'}>
              <div className={'flex items-center'}>
                <div
                  className={'avatar avatar-xs shadow-sm border text-foreground text-[14px] mr-2'}
                >
                  <Icon name={'shopping-cart'} className={''} />
                </div>{' '}
                <h5 className={'mb-0'}>{'Active Orders'}</h5>{' '}
              </div>{' '}
              <Link to={'/orders'} className={'h-8 text-xs preview-button preview-button-outline'}>
                {'Add New'}
              </Link>{' '}
            </div>{' '}
            <div className={'flex sm:items-center justify-between gap-2 flex-col sm:flex-row mb-4'}>
              <div className={'flex items-center'}>
                <div className={'avatar avatar-rounded mr-2'}>
                  <img
                    className={'max-w-full h-auto'}
                    src={'/assets/img/profiles/avatar-32.jpg'}
                    alt={'customer'}
                  />
                </div>{' '}
                <div className={'overflow-hidden'}>
                  <h6 className={'text-[14px] font-semibold mb-1'}>{'Maria Gonzalez'}</h6>{' '}
                  <div className={'flex items-center gap-2'}>
                    <p className={'mb-0'}>{'Dine In'}</p> <span className={'even-line'}></span>{' '}
                    <p className={'mb-0'}>{'Table No : 3'}</p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-violet-50 text-violet-700'}>{'In Kitchen'}</Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex sm:items-center justify-between gap-2 flex-col sm:flex-row mb-4'}>
              <div className={'flex items-center'}>
                <div className={'avatar avatar-rounded mr-2'}>
                  <img
                    className={'max-w-full h-auto'}
                    src={'/assets/img/profiles/avatar-35.jpg'}
                    alt={'customer'}
                  />
                </div>{' '}
                <div className={'overflow-hidden'}>
                  <h6 className={'text-[14px] font-semibold mb-1'}>{'Andrew Fletcher'}</h6>{' '}
                  <div className={'flex items-center gap-2'}>
                    <p className={'mb-0'}>{'Reservation'}</p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-red-50 text-red-700'}>{'Cancelled'}</Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex sm:items-center justify-between gap-2 flex-col sm:flex-row mb-4'}>
              <div className={'flex items-center'}>
                <div className={'avatar avatar-rounded mr-2'}>
                  <img
                    className={'max-w-full h-auto'}
                    src={'/assets/img/profiles/avatar-34.jpg'}
                    alt={'customer'}
                  />
                </div>{' '}
                <div className={'overflow-hidden'}>
                  <h6 className={'text-[14px] font-semibold mb-1'}>{'Morgan Evans'}</h6>{' '}
                  <div className={'flex items-center gap-2'}>
                    <p className={'mb-0'}>{'Take Away'}</p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-orange-50 text-orange-700'}>{'Served'}</Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex sm:items-center justify-between gap-2 flex-col sm:flex-row mb-4'}>
              <div className={'flex items-center'}>
                <div className={'avatar avatar-rounded bg-muted border mr-2'}>
                  <Icon name={'users-round'} className={'text-[16px] text-foreground'} />
                </div>{' '}
                <div className={'overflow-hidden'}>
                  <h6 className={'text-[14px] font-semibold mb-1'}>{'Walk in Customer'}</h6>{' '}
                  <div className={'flex items-center gap-2'}>
                    <p className={'mb-0'}>{'Dine In'}</p> <span className={'even-line'}></span>{' '}
                    <p className={'mb-0'}>{'Table No : 3'}</p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-violet-50 text-violet-700'}>{'In Kitchen'}</Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex sm:items-center justify-between gap-2 flex-col sm:flex-row mb-4'}>
              <div className={'flex items-center'}>
                <div className={'avatar avatar-rounded bg-muted border mr-2'}>
                  <Icon name={'users-round'} className={'text-[16px] text-foreground'} />
                </div>{' '}
                <div className={'overflow-hidden'}>
                  <h6 className={'text-[14px] font-semibold mb-1'}>{'Walk in Customer'}</h6>{' '}
                  <div className={'flex items-center gap-2'}>
                    <p className={'mb-0'}>{'Reservation'}</p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-red-50 text-red-700'}>{'Cancelled'}</Badge>{' '}
              </div>{' '}
            </div>{' '}
            <Link
              to={'/orders'}
              className={'h-8 text-xs w-full preview-button preview-button-outline'}
            >
              {'View All'}
            </Link>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 lg:col-span-12 2xl:col-span-4 flex'}>
        <Card className={'flex-1 w-full'}>
          <CardContent>
            <div className={'flex items-center justify-between pb-4 mb-4 border-b flex-wrap gap-2'}>
              <div className={'flex items-center'}>
                <div
                  className={'avatar avatar-xs shadow-sm border text-foreground text-[14px] mr-2'}
                >
                  <Icon name={'chart-column-stacked'} className={''} />
                </div>{' '}
                <h5 className={'mb-0'}>{'Sales Performance'}</h5>{' '}
              </div>{' '}
              <Link
                to={'/sales-report'}
                className={'h-8 text-xs preview-button preview-button-outline'}
              >
                {'View All'}
              </Link>{' '}
            </div>{' '}
            <ChartPreview kind={'sales-chart'} />
            <div
              className={
                'flex items-center justify-between border rounded-md relative p-2 z-1 overflow-hidden mb-4'
              }
            >
              <div className={'flex items-center'}>
                <span className={'avatar avatar-md avatar-rounded bg-indigo-500 mr-2'}>
                  <Icon name={'shopping-bag'} className={'text-[16px]'} />
                </span>{' '}
                <div>
                  <p className={'mb-1'}>{'Total Orders'}</p>{' '}
                  <h6 className={'mb-0'}>{'6589'}</h6>{' '}
                </div>{' '}
              </div>{' '}
              <Badge className={'bg-emerald-500 text-white rounded-full'}>{'+6%'}</Badge>{' '}
              <img
                className={'max-w-full h-auto -z-10 absolute left-0 top-0 custom-line-img'}
                src={'/assets/img/bg/sale-bg.png'}
                alt={'bg'}
              />
            </div>{' '}
            <div
              className={
                'flex items-center justify-between border rounded-md relative p-2 z-1 overflow-hidden mb-0'
              }
            >
              <div className={'flex items-center'}>
                <span className={'avatar avatar-md avatar-rounded bg-emerald-500 mr-2'}>
                  <Icon name={'shield-check'} className={'text-[16px]'} />
                </span>{' '}
                <div>
                  <p className={'mb-1'}>{'Total Sales'}</p>{' '}
                  <h6 className={'mb-0'}>{'$56589'}</h6>{' '}
                </div>{' '}
              </div>{' '}
              <Badge className={'bg-emerald-500 text-white rounded-full'}>{'+12%'}</Badge>{' '}
              <img
                className={'max-w-full h-auto -z-10 absolute left-0 top-0 custom-line-img'}
                src={'/assets/img/bg/sale-bg.png'}
                alt={'bg'}
              />
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
    </div>
  );
}
