import { Card, CardContent } from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';
import { Badge } from '@/shared/components/ui/badge';
import { Icon } from '@/shared/components/icon';
import { ChartPreview } from '@/shared/components/chart-preview';

export function DashboardTotalRevenueSection() {
  return (
    <div className={'grid grid-cols-12 gap-x-6'}>
      <div className={'col-span-12 2xl:col-span-8 xl:col-span-7 lg:col-span-12 flex'}>
        <Card className={'flex-1 w-full'}>
          <CardContent className={'pb-0'}>
            <div className={'flex items-center justify-between pb-4 mb-4 border-b flex-wrap gap-2'}>
              <div className={'flex items-center'}>
                <div
                  className={'avatar avatar-xs shadow-sm border text-foreground text-[14px] mr-2'}
                >
                  <Icon name={'dollar-sign'} className={''} />
                </div>{' '}
                <h5 className={'mb-0'}>{'Total Revenue'}</h5>{' '}
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
            <div className={'flex items-center justify-between mb-2'}>
              <div className={'flex items-center'}>
                <div className={'avatar bg-primary mr-2'}>
                  <Icon name={'arrow-up'} className={'text-[20px]'} />
                </div>{' '}
                <div>
                  <p className={'mb-1'}>{'Total Revenue'}</p>{' '}
                  <h4 className={'mb-0'}>{'$3989'}</h4>{' '}
                </div>{' '}
              </div>{' '}
              <p className={'inline-flex items-center mb-0'}>
                <Icon name={'square'} className={'text-primary mr-1'} />
                {'Revenue'}
              </p>{' '}
            </div>{' '}
            <ChartPreview kind={'revenue-chart'} />
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-5 lg:col-span-12 flex'}>
        <Card className={'flex-1 w-full'}>
          <CardContent>
            <div className={'flex items-center justify-between pb-4 mb-4 border-b flex-wrap gap-2'}>
              <div className={'flex items-center'}>
                <div
                  className={'avatar avatar-xs shadow-sm border text-foreground text-[14px] mr-2'}
                >
                  <Icon name={'donut'} className={''} />
                </div>{' '}
                <h5 className={'mb-0'}>{'Top Selling Item'}</h5>{' '}
              </div>{' '}
              <details className="preview-dropdown relative">
                <summary
                  className={
                    'h-8 text-xs cursor-pointer list-none preview-button preview-button-outline'
                  }
                  aria-haspopup={'false'}
                  aria-expanded={'false'}
                >
                  {' All '}
                </summary>{' '}
                <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                  <li>
                    <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                      {'All'}
                    </Button>{' '}
                  </li>{' '}
                  <li>
                    <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                      {'Espresso'}
                    </Button>{' '}
                  </li>{' '}
                  <li>
                    <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                      {'Hot Coffee'}
                    </Button>{' '}
                  </li>{' '}
                  <li>
                    <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                      {'Iced Coffee'}
                    </Button>{' '}
                  </li>{' '}
                </ul>{' '}
              </details>{' '}
            </div>{' '}
            <Badge
              className={
                'bg-emerald-50 text-emerald-700 text-left flex items-center text-wrap px-4 py-2 mb-4'
              }
            >
              <img
                className={'max-w-full h-auto mr-2'}
                src={'/assets/img/icons/spark.png'}
                alt={'icon'}
              />
              {' Most Ordered : Vanilla Latte '}
            </Badge>{' '}
            <div className={'flex items-center border rounded-md p-2 mb-4'}>
              <Button
                variant="ghost"
                className={'avatar avatar-lg avatar-rounded mr-2'}
                aria-label={'Action'}
              >
                <img
                  className={'max-w-full h-auto'}
                  src={'/assets/img/coffee/latte.png'}
                  alt={'food'}
                />
              </Button>{' '}
              <div>
                <h6 className={'text-[14px] font-semibold mb-1'}>
                  <Button variant="ghost">{'Vanilla Latte'}</Button>{' '}
                </h6>{' '}
                <p className={'text-[13px] mb-0'}>{'No of Orders : 520'}</p>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between mb-4'}>
              <h6 className={'text-[14px] font-semibold mb-0'}>
                <span className={'text-muted-foreground'}>{'#2'}</span> {' Café Latte'}
              </h6>{' '}
              <div className={'flex items-center gap-4 w-1/2'}>
                <div className={'progress-stacked progress-sm w-full'}>
                  <div
                    className={'h-full bg-primary'}
                    role={'progressbar'}
                    style={{ width: '85%' }}
                    aria-valuenow={15}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>{' '}
                </div>{' '}
                <p className={'text-[14px] text-foreground font-medium mb-0'}>{'250'}</p>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between mb-4'}>
              <h6 className={'text-[14px] font-semibold mb-0'}>
                <span className={'text-muted-foreground'}>{'#3'}</span> {' Iced Americano'}
              </h6>{' '}
              <div className={'flex items-center gap-4 w-1/2'}>
                <div className={'progress-stacked progress-sm w-full'}>
                  <div
                    className={'h-full bg-primary bg-slate-500'}
                    role={'progressbar'}
                    style={{ width: '70%' }}
                    aria-valuenow={15}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>{' '}
                </div>{' '}
                <p className={'text-[14px] text-foreground font-medium mb-0'}>{'175'}</p>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between mb-4'}>
              <h6 className={'text-[14px] font-semibold mb-0'}>
                <span className={'text-muted-foreground'}>{'#4'}</span> {' Iced Lemon Tea'}
              </h6>{' '}
              <div className={'flex items-center gap-4 w-1/2'}>
                <div className={'progress-stacked progress-sm w-full'}>
                  <div
                    className={'h-full bg-primary bg-emerald-500'}
                    role={'progressbar'}
                    style={{ width: '55%' }}
                    aria-valuenow={15}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>{' '}
                </div>{' '}
                <p className={'text-[14px] text-foreground font-medium mb-0'}>{'160'}</p>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between mb-0'}>
              <h6 className={'text-[14px] font-semibold mb-0'}>
                <span className={'text-muted-foreground'}>{'#5'}</span> {' Café Latte'}
              </h6>{' '}
              <div className={'flex items-center gap-4 w-1/2'}>
                <div className={'progress-stacked progress-sm w-full'}>
                  <div
                    className={'h-full bg-primary bg-violet-500'}
                    role={'progressbar'}
                    style={{ width: '35%' }}
                    aria-valuenow={15}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>{' '}
                </div>{' '}
                <p className={'text-[14px] text-foreground font-medium mb-0'}>{'120'}</p>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
    </div>
  );
}
