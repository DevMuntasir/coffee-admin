import { Card, CardContent } from '@/shared/components/ui/card';
import { Icon } from '@/shared/components/icon';

export function KanbanViewOverviewSection() {
  return (
    <div className={'grid grid-cols-12 gap-x-6 gx-3'}>
      <div className={'col-span-12 2xl:col-span-2 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent className={'p-4'}>
            <div className={'flex items-center justify-between flex-wrap'}>
              <div>
                <span className={'text-[13px] font-medium mb-1 block'}>{'Confirmed'}</span>{' '}
                <h4 className={'mb-0'}>{'98'}</h4>{' '}
              </div>{' '}
              <div className={'avatar bg-soft-secondary text-[20px] rounded-full shrink-0'}>
                <Icon name={'bookmark-check'} className={''} />
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-2 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent className={'p-4'}>
            <div className={'flex items-center justify-between flex-wrap'}>
              <div>
                <span className={'text-[13px] font-medium mb-1 block'}>{'Pending'}</span>{' '}
                <h4 className={'mb-0'}>{'32'}</h4>{' '}
              </div>{' '}
              <div className={'avatar bg-soft-primary text-[20px] rounded-full shrink-0'}>
                <Icon name={'circle-arrow-out-down-right'} className={''} />
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-2 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent className={'p-4'}>
            <div className={'flex items-center justify-between flex-wrap'}>
              <div>
                <span className={'text-[13px] font-medium mb-1 block'}>{'Processing'}</span>{' '}
                <h4 className={'mb-0'}>{'66'}</h4>{' '}
              </div>{' '}
              <div className={'avatar bg-soft-orange text-[20px] rounded-full shrink-0'}>
                <Icon name={'loader'} className={''} />
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-2 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent className={'p-4'}>
            <div className={'flex items-center justify-between flex-wrap'}>
              <div>
                <span className={'text-[13px] font-medium mb-1 block'}>{'Out For Delivery'}</span>{' '}
                <h4 className={'mb-0'}>{'45'}</h4>{' '}
              </div>{' '}
              <div className={'avatar bg-soft-purple text-[20px] rounded-full shrink-0'}>
                <Icon name={'bike'} className={''} />
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-2 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent className={'p-4'}>
            <div className={'flex items-center justify-between flex-wrap'}>
              <div>
                <span className={'text-[13px] font-medium mb-1 block'}>{'Delivered'}</span>{' '}
                <h4 className={'mb-0'}>{'69'}</h4>{' '}
              </div>{' '}
              <div
                className={
                  'avatar bg-emerald-50 text-emerald-700 text-[20px] rounded-full shrink-0'
                }
              >
                <Icon name={'send'} className={''} />
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-2 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent className={'p-4'}>
            <div className={'flex items-center justify-between flex-wrap'}>
              <div>
                <span className={'text-[13px] font-medium mb-1 block'}>{'Cancelled'}</span>{' '}
                <h4 className={'mb-0'}>{'18'}</h4>{' '}
              </div>{' '}
              <div className={'avatar bg-soft-danger text-[20px] rounded-full shrink-0'}>
                <Icon name={'user-x'} className={''} />
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
    </div>
  );
}
