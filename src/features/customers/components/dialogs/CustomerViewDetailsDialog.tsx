import { PreviewDialog } from '@/shared/components/preview';
import { Badge } from '@/shared/components/ui/badge';
import { Icon } from '@/shared/components/icon';

export function CustomerViewDetailsDialog() {
  return (
    <PreviewDialog id={'view_details'} title={'Customer Details'}>
      <div className={'offcanvas-body p-0'}>
        <div className={'border-b p-6'}>
          <div className={'mb-6 flex items-center justify-between gap-3'}>
            <div className={'flex items-center'}>
              <span className={'avatar avatar-xxl border mr-4 shrink-0'}>
                <img
                  className={'max-w-full h-auto'}
                  src={'/assets/img/profiles/avatar-09.jpg'}
                  alt={'customer'}
                />
              </span>{' '}
              <div>
                <h6 className={'text-[14px] font-semibold mb-0'}>{'David Belcher'}</h6>{' '}
                <p className={'text-[13px] mb-0'}>{'Last Login : 25 Jan 2026'}</p>{' '}
              </div>{' '}
            </div>{' '}
            <Badge className={'bg-emerald-50 text-emerald-700'}>{'Active'}</Badge>{' '}
          </div>{' '}
          <div>
            <div className={'sm:flex items-center justify-between gap-2 flex-wrap mb-4'}>
              <span className={'flex items-center'}>
                <Icon name={'mail'} className={'text-foreground mr-1'} />
                {'Email'}
              </span>{' '}
              <span className={'text-foreground'}>{'david@example.com'}</span>{' '}
            </div>{' '}
            <div className={'sm:flex items-center justify-between gap-2 flex-wrap mb-4'}>
              <span className={'flex items-center'}>
                <Icon name={'phone'} className={'text-foreground mr-1'} />
                {'Phone'}
              </span>{' '}
              <span className={'text-foreground'}>{'+1 14524 54595'}</span>{' '}
            </div>{' '}
            <div className={'sm:flex items-center justify-between gap-2 flex-wrap mb-4'}>
              <span className={'flex items-center'}>
                <Icon name={'map-pin-check-inside'} className={'text-foreground mr-1'} />
                {'Address'}
              </span>{' '}
              <span className={'text-wrap-1 text-foreground'}>
                {'301 Market Street, Riverside Drive, FL 33128, USA'}
              </span>{' '}
            </div>{' '}
            <div className={'sm:flex items-center justify-between gap-2 flex-wrap'}>
              <span className={'flex items-center'}>
                <Icon name={'user'} className={'text-foreground mr-1'} />
                {'Gender'}
              </span>{' '}
              <span className={'text-foreground'}>{'Male'}</span>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'p-6'}>
          <div className={'flex items-center justify-between mb-4'}>
            <h5>{'Orders'}</h5>{' '}
            <Badge className={'bg-muted text-foreground font-semibold'}>{'Orders : 02'}</Badge>{' '}
          </div>{' '}
          <div className={'border p-4 rounded-md mb-4'}>
            <div
              className={
                'grid grid-cols-12 gap-x-6 items-center border-b flex-wrap gap-4 pb-4 mb-4'
              }
            >
              <div className={'col-span-12 sm:col-span-4'}>
                <h6 className={'text-[14px] font-semibold mb-1'}>{'#56998'}</h6>{' '}
                <span>{'15 Sep 2026'}</span>{' '}
              </div>{' '}
              <div className={'col-span-12 sm:col-span-4'}>
                <p className={'mb-1'}>{'Order total'}</p>{' '}
                <span className={'text-foreground font-medium'}>{'$350'}</span>{' '}
              </div>{' '}
              <div className={'col-span-12 sm:col-span-4 text-sm-end'}>
                <Badge className={'bg-orange-50 text-orange-700'}>{'Pending'}</Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'grid grid-cols-12 gap-x-6 gap-4'}>
              <div className={'col-span-12 sm:col-span-4'}>
                <p className={'mb-1'}>{'Order Type'}</p>{' '}
                <span className={'text-foreground font-medium'}>{'Dine-In (T4)'}</span>{' '}
              </div>{' '}
              <div className={'col-span-12 sm:col-span-4'}>
                <p className={'mb-1'}>{'No of Guests'}</p>{' '}
                <span className={'text-foreground font-medium'}>{'4'}</span>{' '}
              </div>{' '}
              <div className={'col-span-12 sm:col-span-4'}>
                <p className={'mb-1'}>{'No of Items'}</p>{' '}
                <span className={'text-foreground font-medium'}>{'8'}</span>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className={'border p-4 rounded-md'}>
            <div
              className={
                'grid grid-cols-12 gap-x-6 items-center border-b flex-wrap gap-4 pb-4 mb-4'
              }
            >
              <div className={'col-span-12 sm:col-span-4'}>
                <h6 className={'text-[14px] font-semibold mb-1'}>{'#25654'}</h6>{' '}
                <span>{'21 Sep 2026'}</span>{' '}
              </div>{' '}
              <div className={'col-span-12 sm:col-span-4'}>
                <p className={'mb-1'}>{'Order total'}</p>{' '}
                <span className={'text-foreground font-medium'}>{'$620'}</span>{' '}
              </div>{' '}
              <div className={'col-span-12 sm:col-span-4 text-sm-end'}>
                <Badge className={'bg-emerald-50 text-emerald-700'}>{'Completed'}</Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'grid grid-cols-12 gap-x-6 gap-4'}>
              <div className={'col-span-12 sm:col-span-4'}>
                <p className={'mb-1'}>{'Order Type'}</p>{' '}
                <span className={'text-foreground font-medium'}>{'Take Away'}</span>{' '}
              </div>{' '}
              <div className={'col-span-12 sm:col-span-4'}>
                <p className={'mb-1'}>{'No of Guests'}</p>{' '}
                <span className={'text-foreground font-medium'}>{'8'}</span>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
