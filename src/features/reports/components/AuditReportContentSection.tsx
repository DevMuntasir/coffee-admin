import { Card, CardContent } from '@/shared/components/ui/card';
import { Icon } from '@/shared/components/icon';

export function AuditReportContentSection() {
  return (
    <Card className={'mb-0'}>
      <CardContent className={'schedule-timeline'}>
        <div className={'sm:flex items-center'}>
          <div className={'flex items-center active-time'}>
            <span className={'timeline-border flex items-center justify-center bg-card'}>
              <Icon name={'badge-dollar-sign'} className={'text-gray-2 text-[18px]'} />
            </span>{' '}
          </div>{' '}
          <div className={'flex-1'}>
            <div className={'p-4'}>
              <p className={'font-medium text-foreground mb-1'}>
                {'Sale Created by David Williams (Cashier) at POS Terminal'}
              </p>{' '}
              <span>{'12 Nov 2026 at 09:45 AM'}</span>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'sm:flex items-center'}>
          <div className={'flex items-center active-time'}>
            <span className={'timeline-border flex items-center justify-center bg-card'}>
              <Icon name={'box'} className={'text-gray-2 text-[18px]'} />
            </span>{' '}
          </div>{' '}
          <div className={'flex-1'}>
            <div className={'p-4'}>
              <p className={'font-medium text-foreground mb-1'}>
                {'Product Updated by Emily Johnson (Supervisor) in Inventory'}
              </p>{' '}
              <span>{'12 Nov 2026 at 10:15 AM'}</span>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'sm:flex items-center'}>
          <div className={'flex items-center active-time'}>
            <span className={'timeline-border flex items-center justify-center bg-card'}>
              <Icon name={'user-round'} className={'text-gray-2 text-[18px]'} />
            </span>{' '}
          </div>{' '}
          <div className={'flex-1'}>
            <div className={'p-4'}>
              <p className={'font-medium text-foreground mb-1'}>
                {'User Added by John Smith (Admin) in Settings'}
              </p>{' '}
              <span>{'12 Nov 2026 at 11:00 AM'}</span>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'sm:flex items-center'}>
          <div className={'flex items-center active-time'}>
            <span className={'timeline-border flex items-center justify-center bg-card'}>
              <Icon name={'diamond-percent'} className={'text-gray-2 text-[18px]'} />
            </span>{' '}
          </div>{' '}
          <div className={'flex-1'}>
            <div className={'p-4'}>
              <p className={'font-medium text-foreground mb-1'}>
                {'Discount Applied by Alex Martinez (Cashier) in POS Terminal'}
              </p>{' '}
              <span>{'12 Nov 2026 at 11:25 AM'}</span>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'sm:flex items-center'}>
          <div className={'flex items-center active-time'}>
            <span className={'timeline-border flex items-center justify-center bg-card'}>
              <Icon name={'trash-2'} className={'text-gray-2 text-[18px]'} />
            </span>{' '}
          </div>{' '}
          <div className={'flex-1 timeline-hrline'}>
            <div className={'p-4'}>
              <p className={'font-medium text-foreground mb-1'}>
                {'Product Deleted by Emily Johnson (Supervisor) in Inventory'}
              </p>{' '}
              <span>{'12 Nov 2026 at 12:20 PM'}</span>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'sm:flex items-center'}>
          <div className={'flex items-center active-time'}>
            <span className={'timeline-border flex items-center justify-center bg-card'}>
              <Icon name={'badge-x'} className={'text-gray-2 text-[18px]'} />
            </span>{' '}
          </div>{' '}
          <div className={'flex-1 timeline-hrline'}>
            <div className={'p-4'}>
              <p className={'font-medium text-foreground mb-1'}>
                {'Sale Voided by Alex Martinez (Cashier) at POS Terminal'}
              </p>{' '}
              <span>{'12 Nov 2026 at 01:45 PM'}</span>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'sm:flex items-center'}>
          <div className={'flex items-center active-time'}>
            <span className={'timeline-border flex items-center justify-center bg-card'}>
              <Icon name={'badge-dollar-sign'} className={'text-gray-2 text-[18px]'} />
            </span>{' '}
          </div>{' '}
          <div className={'flex-1 timeline-hrline'}>
            <div className={'p-4'}>
              <p className={'font-medium text-foreground mb-1'}>
                {'Refund Issued by Emily Johnson (Supervisor) in Sales'}
              </p>{' '}
              <span>{'12 Nov 2026 at 02:00 PM'}</span>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'sm:flex items-center'}>
          <div className={'flex items-center active-time'}>
            <span className={'timeline-border flex items-center justify-center bg-card'}>
              <Icon name={'log-in'} className={'text-gray-2 text-[18px]'} />
            </span>{' '}
          </div>{' '}
          <div className={'flex-1 timeline-hrline'}>
            <div className={'p-4'}>
              <p className={'font-medium text-foreground mb-1'}>
                {'Login Attempt (Failed) by John Smith (Admin) at Dashboard'}
              </p>{' '}
              <span>{'12 Nov 2026 at 02:20 PM'}</span>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'sm:flex items-center'}>
          <div className={'flex items-center active-time'}>
            <span className={'timeline-border flex items-center justify-center bg-card'}>
              <Icon name={'badge-dollar-sign'} className={'text-gray-2 text-[18px]'} />
            </span>{' '}
          </div>{' '}
          <div className={'flex-1 timeline-hrline'}>
            <div className={'p-4'}>
              <p className={'font-medium text-foreground mb-1'}>
                {'Sale Deleted by David Williams (Cashier) in POS Terminal'}
              </p>{' '}
              <span>{'12 Nov 2026 at 02:30 PM'}</span>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'sm:flex items-center'}>
          <div className={'flex items-center active-time'}>
            <span className={'timeline-border-none flex items-center justify-center bg-card'}>
              <Icon name={'badge-dollar-sign'} className={'text-gray-2 text-[18px]'} />
            </span>{' '}
          </div>{' '}
          <div className={'flex-1 timeline-hrline'}>
            <div className={'p-4'}>
              <p className={'font-medium text-foreground mb-1'}>
                {'Sale Created by David Williams (Cashier) at POS Terminal'}
              </p>{' '}
              <span>{'12 Nov 2026 at 02:35 PM'}</span>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </CardContent>{' '}
    </Card>
  );
}
