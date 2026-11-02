import { Card, CardContent } from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';
import { Icon } from '@/shared/components/icon';
import { ChartPreview } from '@/shared/components/chart-preview';

export function DashboardTrendingMenusSection() {
  return (
    <div className={'grid grid-cols-12 gap-x-6'}>
      <div className={'col-span-12 lg:col-span-12 2xl:col-span-8 flex'}>
        <Card className={'flex-1 w-full'}>
          <CardContent>
            <div className={'flex items-center justify-between pb-4 mb-4 border-b flex-wrap gap-2'}>
              <div className={'flex items-center'}>
                <div
                  className={'avatar avatar-xs shadow-sm border text-foreground text-[14px] mr-2'}
                >
                  <Icon name={'book-text'} className={''} />
                </div>{' '}
                <h5 className={'mb-0'}>{'Trending Menus'}</h5>{' '}
              </div>{' '}
              <details className="preview-dropdown relative">
                <summary
                  className={
                    'h-8 text-xs cursor-pointer list-none preview-button preview-button-outline'
                  }
                  aria-haspopup={'false'}
                  aria-expanded={'false'}
                >
                  {' All Items '}
                </summary>{' '}
                <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                  <li>
                    <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                      {'All Items'}
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
            <div className={'grid grid-cols-12 gap-x-6 gap-4'}>
              <div className={'col-span-12 md:col-span-4 sm:col-span-6'}>
                <div className={'border p-4 rounded-md'}>
                  <div className={'text-center mb-4'}>
                    <Button variant="ghost" aria-label={'Action'}>
                      <img
                        className={'max-w-full h-full rounded-sm w-full'}
                        src={'/assets/img/menu/menu-01.jpg'}
                        alt={'menu'}
                      />
                    </Button>{' '}
                  </div>{' '}
                  <div>
                    <h6 className={'text-[14px] font-semibold truncate mb-1'}>
                      <Button variant="ghost">{'Iced Americano'}</Button>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between'}>
                      <p className={'mb-0'}>{'Orders : 48'}</p>{' '}
                      <p className={'mb-0 inline-flex items-center'}>
                        <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                        {'Hot'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-4 sm:col-span-6'}>
                <div className={'border p-4 rounded-md'}>
                  <div className={'text-center mb-4'}>
                    <Button variant="ghost" aria-label={'Action'}>
                      <img
                        className={'max-w-full h-full rounded-sm w-full'}
                        src={'/assets/img/menu/menu-02.jpg'}
                        alt={'menu'}
                      />
                    </Button>{' '}
                  </div>{' '}
                  <div>
                    <h6 className={'text-[14px] font-semibold truncate mb-1'}>
                      <Button variant="ghost">{'Matcha Latte'}</Button>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between'}>
                      <p className={'mb-0'}>{'Orders : 99'}</p>{' '}
                      <p className={'mb-0 inline-flex items-center'}>
                        <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                        {'Hot'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-4 sm:col-span-6'}>
                <div className={'border p-4 rounded-md'}>
                  <div className={'text-center mb-4'}>
                    <Button variant="ghost" aria-label={'Action'}>
                      <img
                        className={'max-w-full h-full rounded-sm w-full'}
                        src={'/assets/img/menu/menu-03.jpg'}
                        alt={'menu'}
                      />
                    </Button>{' '}
                  </div>{' '}
                  <div>
                    <h6 className={'text-[14px] font-semibold truncate mb-1'}>
                      <Button variant="ghost">{'Masala Chai'}</Button>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between'}>
                      <p className={'mb-0'}>{'Orders : 59'}</p>{' '}
                      <p className={'mb-0 inline-flex items-center'}>
                        <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                        {'Hot'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-4 sm:col-span-6'}>
                <div className={'border p-4 rounded-md'}>
                  <div className={'text-center mb-4'}>
                    <Button variant="ghost" aria-label={'Action'}>
                      <img
                        className={'max-w-full h-full rounded-sm w-full'}
                        src={'/assets/img/menu/menu-04.jpg'}
                        alt={'menu'}
                      />
                    </Button>{' '}
                  </div>{' '}
                  <div>
                    <h6 className={'text-[14px] font-semibold truncate mb-1'}>
                      <Button variant="ghost">{'Caramel Macchiato'}</Button>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between'}>
                      <p className={'mb-0'}>{'Orders : 69'}</p>{' '}
                      <p className={'mb-0 inline-flex items-center'}>
                        <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                        {'Iced'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-4 sm:col-span-6'}>
                <div className={'border p-4 rounded-md'}>
                  <div className={'text-center mb-4'}>
                    <Button variant="ghost" aria-label={'Action'}>
                      <img
                        className={'max-w-full h-full rounded-sm w-full'}
                        src={'/assets/img/menu/menu-05.jpg'}
                        alt={'menu'}
                      />
                    </Button>{' '}
                  </div>{' '}
                  <div>
                    <h6 className={'text-[14px] font-semibold truncate mb-1'}>
                      <Button variant="ghost">{'Almond Croissant'}</Button>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between'}>
                      <p className={'mb-0'}>{'Orders : 78'}</p>{' '}
                      <p className={'mb-0 inline-flex items-center'}>
                        <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                        {'Iced'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-4 sm:col-span-6'}>
                <div className={'border p-4 rounded-md'}>
                  <div className={'text-center mb-4'}>
                    <Button variant="ghost" aria-label={'Action'}>
                      <img
                        className={'max-w-full h-full rounded-sm w-full'}
                        src={'/assets/img/menu/menu-06.jpg'}
                        alt={'menu'}
                      />
                    </Button>{' '}
                  </div>{' '}
                  <div>
                    <h6 className={'text-[14px] font-semibold truncate mb-1'}>
                      <Button variant="ghost">{'Hot Chocolate'}</Button>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between'}>
                      <p className={'mb-0'}>{'Orders : 99'}</p>{' '}
                      <p className={'mb-0 inline-flex items-center'}>
                        <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                        {'Iced'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 lg:col-span-12 2xl:col-span-4 flex'}>
        <Card className={'flex-1 w-full'}>
          <CardContent className={'flex flex-col pb-0'}>
            <div>
              <div
                className={'flex items-center justify-between pb-4 mb-4 border-b flex-wrap gap-2'}
              >
                <div className={'flex items-center'}>
                  <div
                    className={'avatar avatar-xs shadow-sm border text-foreground text-[14px] mr-2'}
                  >
                    <Icon name={'users-round'} className={''} />
                  </div>{' '}
                  <h5 className={'mb-0'}>{'User Statistics'}</h5>{' '}
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
              <div
                className={
                  'flex items-center justify-between border-b mb-6 pb-6 sm:flex-row flex-wrap gap-2'
                }
              >
                <div className={'flex items-center'}>
                  <div className={'avatar avatar-xxl avatar-rounded shrink-0 border mr-2'}>
                    <img
                      className={'max-w-full h-auto'}
                      src={'/assets/img/profiles/avatar-05.jpg'}
                      alt={'user'}
                    />
                  </div>{' '}
                  <div>
                    <p className={'text-[13px] text-foreground mb-1'}>{'Top User'}</p>{' '}
                    <h6 className={'mb-0'}>{'Andrew Jessica'}</h6>{' '}
                  </div>{' '}
                </div>{' '}
                <div>
                  <p className={'text-[13px] text-foreground mb-1'}>{'Grand Total'}</p>{' '}
                  <h6 className={'mb-0'}>{'$800'}</h6>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'flex items-center justify-between'}>
                <div>
                  <p className={'mb-1'}>{'Total New Users'}</p>{' '}
                  <h6 className={'mb-0'}>
                    {'986 '}
                    <span
                      className={
                        'inline-flex items-center text-emerald-600 text-[13px] font-medium ml-1'
                      }
                    >
                      <Icon name={'circle-arrow-up'} className={'mr-1'} />
                      {'12.6%'}
                    </span>{' '}
                  </h6>{' '}
                </div>{' '}
                <div className={'avatar-list-stacked avatar-group-md'}>
                  <span className={'avatar avatar-rounded'}>
                    <img
                      className={'border border-white'}
                      src={'/assets/img/profiles/avatar-27.jpg'}
                      alt={'user'}
                    />
                  </span>{' '}
                  <span className={'avatar avatar-rounded'}>
                    <img
                      className={'border border-white'}
                      src={'/assets/img/profiles/avatar-33.jpg'}
                      alt={'user'}
                    />
                  </span>{' '}
                  <span className={'avatar avatar-rounded'}>
                    <img
                      className={'border border-white'}
                      src={'/assets/img/profiles/avatar-35.jpg'}
                      alt={'user'}
                    />
                  </span>{' '}
                  <span className={'avatar avatar-rounded'}>
                    <img
                      className={'border border-white'}
                      src={'/assets/img/profiles/avatar-36.jpg'}
                      alt={'user'}
                    />
                  </span>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <ChartPreview kind={'statistic-chart'} />
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
    </div>
  );
}
