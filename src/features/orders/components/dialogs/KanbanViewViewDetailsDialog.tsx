import { Card, CardContent } from '@/shared/components/ui/card';
import { PreviewDialog } from '@/shared/components/preview';
import { Icon } from '@/shared/components/icon';

export function KanbanViewViewDetailsDialog() {
  return (
    <PreviewDialog id={'view_details'} title={'Order : #22154'}>
      <div className={'offcanvas-body'}>
        <Card>
          <CardContent>
            <div className={'flex items-center justify-between flex-wrap gap-2 mb-6'}>
              <h6 className={'mb-0'}>{'Order Status'}</h6>{' '}
              <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                <Icon name={'clock'} className={'text-[14px]'} />
                {' 06:24 PM'}
              </h6>{' '}
            </div>{' '}
            <div className={'orders-list-two'}>
              <div className={'grid grid-cols-12 gap-x-6 gap-4'}>
                <div className={'col-span-12 sm:col-span-4'}>
                  <div className={'status-item text-center'}>
                    <div className={'avatar bg-primary rounded-full mb-2'}>
                      <Icon name={'check'} className={''} />
                    </div>{' '}
                    <p className={'mb-0'}>{'Accepted'}</p>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'col-span-12 sm:col-span-4'}>
                  <div className={'status-item text-center'}>
                    <div className={'avatar bg-amber-500 rounded-full mb-2'}>
                      <Icon name={'cooking-pot'} className={''} />
                    </div>{' '}
                    <p className={'mb-0'}>{'In Kitchen'}</p>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'col-span-12 sm:col-span-4'}>
                  <div className={'status-item text-center'}>
                    <div className={'avatar bg-muted rounded-full mb-2 text-foreground'}>
                      <Icon name={'flag'} className={''} />
                    </div>{' '}
                    <p className={'mb-0'}>{'Completed'}</p>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
        <div className={'mb-6 pb-6 border-b'}>
          <h5 className={'mb-4 text-[16px]'}>{'Order Info'}</h5>{' '}
          <h6
            className={
              'text-[14px] font-normal flex items-center justify-between mb-4 text-muted-foreground'
            }
          >
            {'Date & Time '}
            <span className={'font-medium text-foreground'}>{'25/11/2026 - 08:45 PM'}</span>{' '}
          </h6>{' '}
          <h6
            className={
              'text-[14px] font-normal flex items-center justify-between mb-4 text-muted-foreground'
            }
          >
            {' Order No '}
            <span className={'font-medium text-foreground'}>{' #54654'}</span>{' '}
          </h6>{' '}
          <h6
            className={
              'text-[14px] font-normal flex items-center justify-between mb-4 text-muted-foreground'
            }
          >
            {' Token No '}
            <span className={'font-medium text-foreground'}>{' 20'}</span>{' '}
          </h6>{' '}
          <h6
            className={
              'text-[14px] font-normal flex items-center justify-between mb-4 text-muted-foreground'
            }
          >
            {' No of Items '}
            <span className={'font-medium text-foreground'}>{' 4'}</span>{' '}
          </h6>{' '}
          <h6
            className={
              'text-[14px] font-normal flex items-center justify-between mb-0 text-muted-foreground'
            }
          >
            {' Order Type'}
            <span className={'font-medium text-foreground'}>{' Take Away '}</span>{' '}
          </h6>{' '}
        </div>{' '}
        <div className={'mb-6 pb-6 border-b orders-list-three'}>
          <h5 className={'mb-4 text-[16px]'}>{'Items'}</h5>{' '}
          <div className={'status-item mb-6 flex items-center justify-start gap-2'}>
            <div className={'avatar bg-emerald-500 rounded-full shrink-0'}>
              <Icon name={'flag'} className={''} />
            </div>{' '}
            <div>
              <p className={'flex items-center gap-2 mb-2 text-foreground font-medium'}>
                {'Margherita Hot Coffee '}
                <span>{'x1'}</span>{' '}
              </p>{' '}
              <div className={'bg-muted rounded-md py-1 px-2'}>
                <p className={'mb-0 font-medium flex items-center text-foreground'}>
                  <Icon name={'badge-info'} className={'mr-1'} />
                  {' Notes : Extra Spicy, With extra Pepperoni'}
                </p>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className={'status-item mb-6 flex items-center justify-start gap-2'}>
            <div className={'avatar bg-amber-500 rounded-full shrink-0'}>
              <Icon name={'cooking-pot'} className={''} />
            </div>{' '}
            <p className={'flex items-center gap-2 mb-0 text-foreground font-medium'}>
              {'Pasta Primavera '}
              <span>{'x1'}</span>{' '}
            </p>{' '}
          </div>{' '}
          <div className={'status-item flex items-center justify-start gap-2'}>
            <div className={'avatar bg-amber-500 rounded-full shrink-0'}>
              <Icon name={'cooking-pot'} className={''} />
            </div>{' '}
            <p className={'flex items-center gap-2 mb-0 text-foreground font-medium'}>
              {'Chocolate Lava Cake '}
              <span>{'x2'}</span>{' '}
            </p>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'mb-6 pb-6 border-b'}>
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
            {'Sub Total'}
            <span className={'font-medium text-foreground'}>{'$267'}</span>{' '}
          </h6>{' '}
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
            {' Tax (10%)'}
            <span className={'font-medium text-foreground'}>{' $268'}</span>{' '}
          </h6>{' '}
          <h6 className={'text-[14px] font-normal flex items-center justify-between mb-0'}>
            {' Service Charge '}
            <span className={'font-medium text-foreground'}>{' $15'}</span>{' '}
          </h6>{' '}
        </div>{' '}
        <h5 className={'mb-0 flex items-center justify-between'}>
          {'Total '}
          <span>{'$274'}</span>{' '}
        </h5>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
