import { Card, CardContent } from '@/shared/components/ui/card';
import { Badge } from '@/shared/components/ui/badge';
import { Icon } from '@/shared/components/icon';

export function DashboardOverviewSection() {
  return (
    <div className={'grid grid-cols-12 gap-x-6'}>
      <div className={'col-span-12 xl:col-span-3 md:col-span-6 flex'}>
        <Card className={'z-1 w-full overflow-hidden'}>
          <CardContent>
            <div className={'flex items-center justify-between'}>
              <div>
                <h4 className={'inline-flex items-center mb-2'}>
                  {'6986'}
                  <Badge className={'text-[11px] bg-emerald-500 text-white rounded-full ml-2'}>
                    {'+12.5%'}
                  </Badge>{' '}
                </h4>{' '}
                <p className={'mb-0'}>{'Total Orders'}</p>{' '}
              </div>{' '}
              <div
                className={
                  'avatar avatar-lg avatar-rounded bg-violet-500 count-icon border-r border-violet-500 border-2'
                }
              >
                <Icon name={'box'} className={'text-[24px]'} />
              </div>{' '}
            </div>{' '}
            <img
              className={'max-w-full h-auto absolute top-0 right-0 -z-10 custom-line-img'}
              src={'/assets/img/bg/order-bg.png'}
              alt={'bg'}
            />
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 md:col-span-6 flex'}>
        <Card className={'z-1 w-full overflow-hidden'}>
          <CardContent>
            <div className={'flex items-center justify-between'}>
              <div>
                <h4 className={'inline-flex items-center mb-2'}>
                  {'$7516'}
                  <Badge className={'text-[11px] bg-emerald-500 text-white rounded-full ml-2'}>
                    {'+12.5%'}
                  </Badge>{' '}
                </h4>{' '}
                <p className={'mb-0'}>{'Total Sales'}</p>{' '}
              </div>{' '}
              <div
                className={
                  'avatar avatar-lg avatar-rounded bg-primary count-icon border-r border-primary border-2'
                }
              >
                <Icon name={'badge-dollar-sign'} className={'text-[24px]'} />
              </div>{' '}
            </div>{' '}
            <img
              className={'max-w-full h-auto absolute top-0 right-0 -z-10 custom-line-img'}
              src={'/assets/img/bg/order-bg.png'}
              alt={'bg'}
            />
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 md:col-span-6 flex'}>
        <Card className={'z-1 w-full overflow-hidden'}>
          <CardContent>
            <div className={'flex items-center justify-between'}>
              <div>
                <h4 className={'inline-flex items-center mb-2'}>
                  {'$25.36'}
                  <Badge className={'text-[11px] bg-red-500 text-white rounded-full ml-2'}>
                    {'-8.5%'}
                  </Badge>{' '}
                </h4>{' '}
                <p className={'mb-0'}>{'Average Value'}</p>{' '}
              </div>{' '}
              <div
                className={
                  'avatar avatar-lg avatar-rounded bg-orange-500 count-icon border-r border-orange-500 border-2'
                }
              >
                <Icon name={'diamond-percent'} className={'text-[24px]'} />
              </div>{' '}
            </div>{' '}
            <img
              className={'max-w-full h-auto absolute top-0 right-0 -z-10 custom-line-img'}
              src={'/assets/img/bg/order-bg.png'}
              alt={'bg'}
            />
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 md:col-span-6 flex'}>
        <Card className={'z-1 w-full overflow-hidden'}>
          <CardContent>
            <div className={'flex items-center justify-between'}>
              <div>
                <h4 className={'inline-flex items-center mb-2'}>
                  {'496'}
                  <Badge className={'text-[11px] bg-emerald-500 text-white rounded-full ml-2'}>
                    {'+12.5%'}
                  </Badge>{' '}
                </h4>{' '}
                <p className={'mb-0'}>{'Reservations'}</p>{' '}
              </div>{' '}
              <div
                className={
                  'avatar avatar-lg avatar-rounded bg-emerald-500 count-icon border-r border-emerald-500 border-2'
                }
              >
                <Icon name={'calendar-fold'} className={'text-[24px]'} />
              </div>{' '}
            </div>{' '}
            <img
              className={'max-w-full h-auto absolute top-0 right-0 -z-10 custom-line-img'}
              src={'/assets/img/bg/order-bg.png'}
              alt={'bg'}
            />
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
    </div>
  );
}
