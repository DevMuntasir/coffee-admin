import { Card, CardContent } from '@/shared/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/components/ui/button';
import { Badge } from '@/shared/components/ui/badge';
import { Icon } from '@/shared/components/icon';

export function DashboardReservationsSection() {
  return (
    <div className={'grid grid-cols-12 gap-x-6'}>
      <div className={'col-span-12 2xl:col-span-4 lg:col-span-12 flex'}>
        <Card className={'flex-1 w-full'}>
          <CardContent className={'pb-1'}>
            <div className={'flex items-center justify-between pb-4 mb-4 border-b flex-wrap gap-2'}>
              <div className={'flex items-center'}>
                <div
                  className={'avatar avatar-xs shadow-sm border text-foreground text-[14px] mr-2'}
                >
                  <Icon name={'file-clock'} className={''} />
                </div>{' '}
                <h5 className={'mb-0'}>{'Reservations'}</h5>{' '}
              </div>{' '}
              <details className="preview-dropdown relative">
                <summary
                  className={
                    'h-8 text-xs cursor-pointer list-none preview-button preview-button-outline'
                  }
                  aria-haspopup={'false'}
                  aria-expanded={'false'}
                >
                  {' All Orders '}
                </summary>{' '}
                <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                  <li>
                    <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                      {'All Orders'}
                    </Button>{' '}
                  </li>{' '}
                  <li>
                    <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                      {'Pending'}
                    </Button>{' '}
                  </li>{' '}
                  <li>
                    <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                      {'In Progress'}
                    </Button>{' '}
                  </li>{' '}
                  <li>
                    <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                      {'Completed'}
                    </Button>{' '}
                  </li>{' '}
                  <li>
                    <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                      {'Cancelled'}
                    </Button>{' '}
                  </li>{' '}
                </ul>{' '}
              </details>{' '}
            </div>{' '}
            <div className={'flex sm:items-center flex-col sm:flex-row gap-2 mb-4'}>
              <div className={'flex items-center gap-2 flex-1'}>
                <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                  <p className={'text-white font-semibold mb-0 relative'}>
                    {'Nov 08 '}
                    <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                  </p>{' '}
                </div>{' '}
                <div>
                  <h6 className={'mb-2 font-semibold'}>{'Elijah Thoms'}</h6>{' '}
                  <div className={'flex items-center flex-wrap gap-2'}>
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'clock'} className={'mr-1 text-foreground'} />
                      {'10:45'}
                    </p>{' '}
                    <span className={'even-line'}></span>{' '}
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                      {'2'}
                    </p>{' '}
                    <span className={'even-line'}></span>{' '}
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                      {'2'}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-emerald-50 text-emerald-700'}>{'Booked'}</Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex sm:items-center flex-col sm:flex-row gap-2 mb-4'}>
              <div className={'flex items-center gap-2 flex-1'}>
                <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                  <p className={'text-white font-semibold mb-0 relative'}>
                    {'Nov 12 '}
                    <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                  </p>{' '}
                </div>{' '}
                <div>
                  <h6 className={'mb-2 font-semibold'}>{"Liam O'Connor"}</h6>{' '}
                  <div className={'flex items-center flex-wrap gap-2'}>
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'clock'} className={'mr-1 text-foreground'} />
                      {'10:45'}
                    </p>{' '}
                    <span className={'even-line'}></span>{' '}
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                      {'4'}
                    </p>{' '}
                    <span className={'even-line'}></span>{' '}
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                      {'5'}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-emerald-50 text-emerald-700'}>{'Booked'}</Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex sm:items-center flex-col sm:flex-row gap-2 mb-4'}>
              <div className={'flex items-center gap-2 flex-1'}>
                <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                  <p className={'text-white font-semibold mb-0 relative'}>
                    {'Nov 06 '}
                    <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                  </p>{' '}
                </div>{' '}
                <div>
                  <h6 className={'mb-2 font-semibold'}>{'Michael Cate'}</h6>{' '}
                  <div className={'flex items-center flex-wrap gap-2'}>
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'clock'} className={'mr-1 text-foreground'} />
                      {'10:45'}
                    </p>{' '}
                    <span className={'even-line'}></span>{' '}
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                      {'8'}
                    </p>{' '}
                    <span className={'even-line'}></span>{' '}
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                      {'6'}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-emerald-50 text-emerald-700'}>{'Booked'}</Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex sm:items-center flex-col sm:flex-row gap-2 mb-4'}>
              <div className={'flex items-center gap-2 flex-1'}>
                <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                  <p className={'text-white font-semibold mb-0 relative'}>
                    {'Nov 04 '}
                    <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                  </p>{' '}
                </div>{' '}
                <div>
                  <h6 className={'mb-2 font-semibold'}>{'James Smith'}</h6>{' '}
                  <div className={'flex items-center flex-wrap gap-2'}>
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'clock'} className={'mr-1 text-foreground'} />
                      {'10:45'}
                    </p>{' '}
                    <span className={'even-line'}></span>{' '}
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                      {'8'}
                    </p>{' '}
                    <span className={'even-line'}></span>{' '}
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                      {'5'}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-violet-50 text-violet-700'}>{'Paid'}</Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex sm:items-center flex-col sm:flex-row gap-2 mb-4'}>
              <div className={'flex items-center gap-2 flex-1'}>
                <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                  <p className={'text-white font-semibold mb-0 relative'}>
                    {'Nov 02 '}
                    <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                  </p>{' '}
                </div>{' '}
                <div>
                  <h6 className={'mb-2 truncate font-semibold'}>{'Walk in Customer'}</h6>{' '}
                  <div className={'flex items-center flex-wrap gap-2'}>
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'clock'} className={'mr-1 text-foreground'} />
                      {'10:45'}
                    </p>{' '}
                    <span className={'even-line'}></span>{' '}
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                      {'2'}
                    </p>{' '}
                    <span className={'even-line'}></span>{' '}
                    <p className={'flex items-center mb-0'}>
                      <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                      {'5'}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-red-50 text-red-700'}>{'Cancelled'}</Badge>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      {false && (
        <div className={'col-span-12 2xl:col-span-4 lg:col-span-6 flex'}>
          <Card className={'flex-1 w-full'}>
            <CardContent>
              <div
                className={'flex items-center justify-between pb-4 mb-4 border-b flex-wrap gap-2'}
              >
                <div className={'flex items-center'}>
                  <div
                    className={'avatar avatar-xs shadow-sm border text-foreground text-[14px] mr-2'}
                  >
                    <Icon name={'concierge-bell'} className={''} />
                  </div>{' '}
                  <h5 className={'mb-0'}>{'Tables Available'}</h5>{' '}
                </div>{' '}
                <Link to={'/table'} className={'h-8 text-xs preview-button preview-button-outline'}>
                  {'View All'}
                </Link>{' '}
              </div>{' '}
              <div className={'grid grid-cols-12 gap-x-6 gap-4'}>
                <div className={'col-span-12 sm:col-span-6 flex'}>
                  <div className={'border p-4 rounded-md w-full flex items-center justify-center'}>
                    <div className={'relative text-center'}>
                      <img
                        className={'max-w-full h-auto custom-line-img'}
                        src={'/assets/img/tables/tables-17.svg'}
                        alt={'reservation'}
                      />
                      <div
                        className={
                          'absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center'
                        }
                      >
                        <h6 className={'text-[12px] font-semibold mb-1'}>{'Table 01'}</h6>{' '}
                        <p className={'text-[12px] mb-0'}>{'Guests : 6'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'col-span-12 sm:col-span-6 flex'}>
                  <div className={'border p-4 rounded-md w-full flex items-center justify-center'}>
                    <div className={'relative text-center'}>
                      <img
                        className={'max-w-full h-auto custom-line-img'}
                        src={'/assets/img/tables/tables-18.svg'}
                        alt={'reservation'}
                      />
                      <div
                        className={
                          'absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center'
                        }
                      >
                        <h6 className={'text-[12px] font-semibold mb-1'}>{'Table 02'}</h6>{' '}
                        <p className={'text-[12px] mb-0'}>{'Guests : 6'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'col-span-12 sm:col-span-6 flex'}>
                  <div className={'border p-4 rounded-md w-full flex items-center justify-center'}>
                    <div className={'relative text-center'}>
                      <img
                        className={'max-w-full h-auto custom-line-img'}
                        src={'/assets/img/tables/tables-19.svg'}
                        alt={'reservation'}
                      />
                      <div
                        className={
                          'absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center'
                        }
                      >
                        <h6 className={'text-[12px] font-semibold mb-1'}>{'Table 03'}</h6>{' '}
                        <p className={'text-[12px] mb-0'}>{'Guests : 1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'col-span-12 sm:col-span-6 flex'}>
                  <div className={'border p-4 rounded-md w-full flex items-center justify-center'}>
                    <div className={'relative text-center'}>
                      <img
                        className={'max-w-full h-auto custom-line-img'}
                        src={'/assets/img/tables/tables-17.svg'}
                        alt={'reservation'}
                      />
                      <div
                        className={
                          'absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center'
                        }
                      >
                        <h6 className={'text-[12px] font-semibold mb-1'}>{'Table 04'}</h6>{' '}
                        <p className={'text-[12px] mb-0'}>{'Guests : 6'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'col-span-12 sm:col-span-6 flex'}>
                  <div className={'border p-4 rounded-md w-full flex items-center justify-center'}>
                    <div className={'relative text-center'}>
                      <img
                        className={'max-w-full h-auto custom-line-img'}
                        src={'/assets/img/tables/tables-18.svg'}
                        alt={'reservation'}
                      />
                      <div
                        className={
                          'absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center'
                        }
                      >
                        <h6 className={'text-[12px] font-semibold mb-1'}>{'Table 05'}</h6>{' '}
                        <p className={'text-[12px] mb-0'}>{'Guests : 6'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'col-span-12 sm:col-span-6 flex'}>
                  <div className={'border p-4 rounded-md w-full flex items-center justify-center'}>
                    <div className={'relative text-center'}>
                      <img
                        className={'max-w-full h-auto custom-line-img'}
                        src={'/assets/img/tables/tables-19.svg'}
                        alt={'reservation'}
                      />
                      <div
                        className={
                          'absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center'
                        }
                      >
                        <h6 className={'text-[12px] font-semibold mb-1'}>{'Table 06'}</h6>{' '}
                        <p className={'text-[12px] mb-0'}>{'Guests : 14'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </CardContent>{' '}
          </Card>{' '}
        </div>
      )}{' '}
      <div className={'col-span-12 2xl:col-span-8 lg:col-span-12 flex'}>
        <Card className={'flex-1 w-full'}>
          <CardContent>
            <div className={'flex items-center justify-between pb-4 mb-4 border-b flex-wrap gap-2'}>
              <div className={'flex items-center'}>
                <div
                  className={'avatar avatar-xs shadow-sm border text-foreground text-[14px] mr-2'}
                >
                  <Icon name={'bell'} className={''} />
                </div>{' '}
                <h5 className={'mb-0'}>{'Notifications'}</h5>{' '}
              </div>{' '}
            </div>{' '}
            <h6 className={'mb-4'}>{'Today'}</h6>{' '}
            <div className={'log-wrap'}>
              <div className={'relative log-item'}>
                <div className={'flex gap-2 sm:flex-row flex-col mb-4'}>
                  <span
                    className={
                      'avatar avatar-rounded shrink-0 relative z-2 badge-soft-primary border border-primary'
                    }
                  >
                    <Icon name={'cooking-pot'} className={'text-[16px]'} />
                  </span>{' '}
                  <div className={'w-full overflow-hidden'}>
                    <p className={'truncate mb-1'}>
                      {'New order from '}
                      <span className={'text-foreground font-medium'}>{'Table #12'}</span>{' '}
                      {' (3 items) '}
                    </p>{' '}
                    <p className={'mb-0 text-[13px] inline-flex items-center'}>
                      <Icon name={'clock'} className={'mr-1'} />
                      {'20 min ago'}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex gap-2 sm:flex-row flex-col mb-4'}>
                  <span
                    className={
                      'avatar avatar-rounded shrink-0 relative z-2 bg-orange-50 text-orange-700 border border-orange-500'
                    }
                  >
                    <Icon name={'shopping-cart'} className={''} />
                  </span>{' '}
                  <div className={'w-full overflow-hidden'}>
                    <p className={'truncate mb-1'}>
                      {'New order from '}
                      <span className={'text-foreground font-medium'}>{'Table #12'}</span>{' '}
                      {' (3 items) '}
                    </p>{' '}
                    <p className={'mb-0 text-[13px] inline-flex items-center'}>
                      <Icon name={'clock'} className={'mr-1'} />
                      {'20 min ago'}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex gap-2 sm:flex-row flex-col mb-4'}>
                  <span
                    className={
                      'avatar avatar-rounded shrink-0 relative z-2 bg-emerald-50 text-emerald-700 border border-emerald-500'
                    }
                  >
                    <Icon name={'badge-dollar-sign'} className={'text-[16px]'} />
                  </span>{' '}
                  <div className={'w-full overflow-hidden'}>
                    <p className={'truncate mb-1'}>
                      {'New order from '}
                      <span className={'text-foreground font-medium'}>{'Table #12'}</span>{' '}
                      {' (3 items) '}
                    </p>{' '}
                    <p className={'mb-0 text-[13px] inline-flex items-center'}>
                      <Icon name={'clock'} className={'mr-1'} />
                      {'20 min ago'}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <h6 className={'mb-4'}>{'Yesterday'}</h6>{' '}
            <div className={'log-wrap'}>
              <div className={'relative log-item'}>
                <div className={'flex gap-2 sm:flex-row flex-col mb-4'}>
                  <span
                    className={
                      'avatar avatar-rounded shrink-0 relative z-2 bg-indigo-50 text-indigo-700 border border-indigo-500'
                    }
                  >
                    <Icon name={'calendar-fold'} className={'text-[16px]'} />
                  </span>{' '}
                  <div className={'w-full overflow-hidden'}>
                    <p className={'truncate mb-1'}>
                      {'New order from '}
                      <span className={'text-foreground font-medium'}>{'Table #12'}</span>{' '}
                      {' (3 items) '}
                    </p>{' '}
                    <p className={'mb-0 text-[13px] inline-flex items-center'}>
                      <Icon name={'clock'} className={'mr-1'} />
                      {'40 Hrs Ago'}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex gap-2 sm:flex-row flex-col mb-0'}>
                  <span
                    className={
                      'avatar avatar-rounded shrink-0 relative z-2 bg-red-50 text-red-700 border border-red-500'
                    }
                  >
                    <Icon name={'info'} className={'text-[16px]'} />
                  </span>{' '}
                  <div className={'w-full overflow-hidden'}>
                    <p className={'truncate mb-1'}>
                      {'Low stock: Cheese '}
                      <span className={'text-foreground font-medium'}>
                        {'(5 units left).'}
                      </span>{' '}
                    </p>{' '}
                    <p className={'mb-0 text-[13px] inline-flex items-center'}>
                      <Icon name={'clock'} className={'mr-1'} />
                      {'40 Hrs Ago'}
                    </p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
    </div>
  );
}
