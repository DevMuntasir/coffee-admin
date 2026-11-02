import {
  DialogAction,
  DialogDismiss,
  PreviewDialog,
  PreviewTabPanel,
  PreviewTabTrigger,
} from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';
import { Icon } from '@/shared/components/icon';

export function OrdersPayCompleteOrderDialog() {
  return (
    <PreviewDialog id={'pay_complete_order'} title={'Pay & Complete Order'}>
      <div className={'modal-body'}>
        <div className={'p-4 border rounded-md mb-6'}>
          <h3 className={'text-center mb-0'}>{'Final Total : $274'}</h3>{' '}
        </div>{' '}
        <div className={'grid grid-cols-12 gap-x-6 gap-6'}>
          <div className={'col-span-12 lg:col-span-6 border-r'}>
            <div className={'mb-4 pb-4 border-b'}>
              <h5 className={'mb-4 text-[16px]'}>{'Order Info'}</h5>{' '}
              <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
                {' Order No '}
                <span className={'font-medium text-foreground'}>{' #54654'}</span>{' '}
              </h6>{' '}
              <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
                {' No of Items '}
                <span className={'font-medium text-foreground'}>{' 4'}</span>{' '}
              </h6>{' '}
              <h6 className={'text-[14px] font-normal flex items-center justify-between mb-0'}>
                {' Order Type'}
                <span className={'font-medium text-foreground'}>{' Take Away '}</span>{' '}
              </h6>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-b orders-list'}>
              <h5 className={'mb-4 text-[16px]'}>{'Ordered Menus'}</h5>{' '}
              <h6
                className={
                  'text-[14px] font-normal flex items-center justify-between mb-4 orders-two'
                }
              >
                {'Grilled Chicken ×1 '}
                <span className={'line'}></span>{' '}
                <span className={'font-medium text-foreground'}>{'$49'}</span>{' '}
              </h6>{' '}
              <h6
                className={
                  'text-[14px] font-normal flex items-center justify-between mb-4 orders-two'
                }
              >
                {' Chicken Taco ×2 '}
                <span className={'line'}></span>{' '}
                <span className={'font-medium text-foreground'}>{' $66'}</span>{' '}
              </h6>{' '}
              <h6
                className={
                  'text-[14px] font-normal flex items-center justify-between mb-4 orders-two'
                }
              >
                {' Lobster Thermidor ×1 '}
                <span className={'line'}></span>{' '}
                <span className={'font-medium text-foreground'}>{' $76'}</span>{' '}
              </h6>{' '}
              <h6
                className={
                  'text-[14px] font-normal flex items-center justify-between mb-0 orders-two'
                }
              >
                {' Grilled Chicken ×1 '}
                <span className={'line'}></span>{' '}
                <span className={'font-medium text-foreground'}>{' $62'}</span>{' '}
              </h6>{' '}
            </div>{' '}
            <div>
              <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
                {'Sub Total'}
                <span className={'font-medium text-foreground'}>{'$267'}</span>{' '}
              </h6>{' '}
              <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
                {' Tax (10%)'}
                <span className={'font-medium text-foreground'}>{' $268'}</span>{' '}
              </h6>{' '}
              <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
                {' Discount (15%)'}
                <span className={'font-medium text-foreground'}>{' $26.7'}</span>{' '}
              </h6>{' '}
              <h6 className={'text-[14px] font-normal flex items-center justify-between mb-4'}>
                {' Service Charge '}
                <span className={'font-medium text-foreground'}>{' $15'}</span>{' '}
              </h6>{' '}
              <h6 className={'text-[14px] font-normal flex items-center justify-between mb-0'}>
                {' Tip '}
                <span className={'font-medium text-foreground'}>{' $20'}</span>{' '}
              </h6>{' '}
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-6'}>
            <div>
              <h6 className={'mb-4'}>{'Payment Type'}</h6>{' '}
              <ul
                className={'flex flex-wrap gap-2 nav-tabs nav-tabs-solid border-0 flex-nowrap mb-6'}
                role={'tablist'}
              >
                <li className={'shrink-0 w-full'}>
                  <PreviewTabTrigger
                    group={'tabs-1'}
                    value={'order-tab6'}
                    className={
                      'preview-tab rounded-md px-3 py-2 font-medium flex items-center justify-center w-full'
                    }
                  >
                    <Icon name={'dollar-sign'} className={'mr-1'} />
                    {'Cash'}
                  </PreviewTabTrigger>{' '}
                </li>{' '}
                <li className={'shrink-0 w-full'}>
                  <PreviewTabTrigger
                    group={'tabs-1'}
                    value={'order-tab7'}
                    className={
                      'preview-tab rounded-md px-3 py-2 font-medium flex items-center justify-center w-full'
                    }
                  >
                    <Icon name={'credit-card'} className={'mr-1'} />
                    {'Card'}
                  </PreviewTabTrigger>{' '}
                </li>{' '}
                <li className={'shrink-0 w-full'}>
                  <PreviewTabTrigger
                    group={'tabs-1'}
                    value={'order-tab8'}
                    className={
                      'preview-tab rounded-md px-3 py-2 font-medium flex items-center justify-center w-full'
                    }
                  >
                    <Icon name={'scan-text'} className={'mr-1'} />
                    {'Scan'}
                  </PreviewTabTrigger>{' '}
                </li>{' '}
              </ul>{' '}
              <div className={'tab-content'}>
                <PreviewTabPanel
                  group={'tabs-1'}
                  value={'order-tab6'}
                  className={'tab-pane'}
                  id={'order-tab6'}
                >
                  <div
                    className={
                      'flex items-center justify-between gap-3 flex-wrap mb-6 font-medium text-foreground'
                    }
                  >
                    {'Discount '}
                    <span className={'line'}></span>{' '}
                    <DialogAction
                      target={'calculator'}
                      variant={'outline'}
                      className={'h-8 text-xs flex items-center'}
                    >
                      <Icon name={'plus'} className={'mr-1'} />
                      {'Add'}
                    </DialogAction>{' '}
                  </div>{' '}
                  <div
                    className={
                      'flex items-center justify-between gap-3 flex-wrap mb-6 font-medium text-foreground'
                    }
                  >
                    {'Tips '}
                    <span className={'line'}></span>{' '}
                    <DialogAction
                      target={'add_tips_calci'}
                      variant={'outline'}
                      className={'h-8 text-xs flex items-center'}
                    >
                      <Icon name={'plus'} className={'mr-1'} />
                      {'Add'}
                    </DialogAction>{' '}
                  </div>{' '}
                  <div className={'grid grid-cols-12 gap-x-6'}>
                    <div className={'col-span-12 md:col-span-6'}>
                      <div className={'mb-6'}>
                        <label className={'mb-2 block font-medium text-foreground'}>
                          {'Given Amount'}
                          <span className={'text-red-600'}>{' *'}</span>{' '}
                        </label>{' '}
                        <Input type={'text'} defaultValue={'300'} aria-label={'Given Amount *'} />
                      </div>{' '}
                    </div>{' '}
                    <div className={'col-span-12 md:col-span-6'}>
                      <div className={'mb-6'}>
                        <label className={'mb-2 block font-medium text-foreground'}>
                          {'Balance'}
                          <span className={'text-red-600'}>{' *'}</span>{' '}
                        </label>{' '}
                        <Input type={'text'} defaultValue={'26'} aria-label={'Balance *'} />
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div>
                    <label className={'mb-2 block font-medium text-foreground font-semibold'}>
                      {'Note'}
                    </label>{' '}
                    <Textarea rows={4} aria-label={'Note'}></Textarea>{' '}
                  </div>{' '}
                </PreviewTabPanel>{' '}
                <PreviewTabPanel
                  group={'tabs-1'}
                  value={'order-tab7'}
                  className={'tab-pane'}
                  id={'order-tab7'}
                >
                  <div
                    className={
                      'flex items-center justify-between gap-3 flex-wrap mb-6 font-medium text-foreground'
                    }
                  >
                    {'Discount '}
                    <span className={'line'}></span>{' '}
                    <DialogAction
                      target={'calculator'}
                      variant={'outline'}
                      className={'h-8 text-xs flex items-center'}
                    >
                      <Icon name={'plus'} className={'mr-1'} />
                      {'Add'}
                    </DialogAction>{' '}
                  </div>{' '}
                  <div
                    className={
                      'flex items-center justify-between gap-3 flex-wrap mb-6 font-medium text-foreground'
                    }
                  >
                    {'Tips '}
                    <span className={'line'}></span>{' '}
                    <DialogAction
                      target={'add_tips_calci'}
                      variant={'outline'}
                      className={'h-8 text-xs flex items-center'}
                    >
                      <Icon name={'plus'} className={'mr-1'} />
                      {'Add'}
                    </DialogAction>{' '}
                  </div>{' '}
                  <div
                    className={
                      'mb-6 text-center p-6 border rounded-md flex items-center justify-center flex-col gap-2'
                    }
                  >
                    <img
                      className={'max-w-full h-auto block custom-line-img-two'}
                      src={'/assets/img/icons/mobile-phone.svg'}
                      alt={'Mobile'}
                    />
                    {' Tap or Swipe your card to pay '}
                  </div>{' '}
                  <div>
                    <label className={'mb-2 block font-medium text-foreground font-semibold'}>
                      {'Note'}
                    </label>{' '}
                    <Textarea rows={4} aria-label={'Note'}></Textarea>{' '}
                  </div>{' '}
                </PreviewTabPanel>{' '}
                <PreviewTabPanel
                  group={'tabs-1'}
                  value={'order-tab8'}
                  className={'tab-pane'}
                  id={'order-tab8'}
                >
                  <div
                    className={
                      'flex items-center justify-between gap-3 flex-wrap mb-6 font-medium text-foreground'
                    }
                  >
                    {'Discount '}
                    <span className={'line'}></span>{' '}
                    <DialogAction
                      target={'calculator'}
                      variant={'outline'}
                      className={'h-8 text-xs flex items-center'}
                    >
                      <Icon name={'plus'} className={'mr-1'} />
                      {'Add'}
                    </DialogAction>{' '}
                  </div>{' '}
                  <div
                    className={
                      'flex items-center justify-between gap-3 flex-wrap mb-6 font-medium text-foreground'
                    }
                  >
                    {'Tips '}
                    <span className={'line'}></span>{' '}
                    <DialogAction
                      target={'add_tips_calci'}
                      variant={'outline'}
                      className={'h-8 text-xs flex items-center'}
                    >
                      <Icon name={'plus'} className={'mr-1'} />
                      {'Add'}
                    </DialogAction>{' '}
                  </div>{' '}
                  <div
                    className={
                      'mb-6 text-center p-6 border rounded-md flex items-center justify-center flex-col gap-2'
                    }
                  >
                    <img
                      className={'max-w-full h-auto block custom-line-img-two'}
                      src={'/assets/img/icons/qr-img.svg'}
                      alt={'Mobile'}
                    />
                    {' Scan with your UPI app to pay '}
                  </div>{' '}
                  <div>
                    <label className={'mb-2 block font-medium text-foreground font-semibold'}>
                      {'Note'}
                    </label>{' '}
                    <Textarea rows={4} aria-label={'Note'}></Textarea>{' '}
                  </div>{' '}
                </PreviewTabPanel>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
      <div className={'modal-footer flex items-center justify-end flex-nowrap gap-2'}>
        <DialogDismiss variant={'outline'} className={'m-0'} type={'button'}>
          {'Close'}
        </DialogDismiss>{' '}
        <Button variant={'default'} className={'m-0'} type={'button'}>
          {'Pay & Complete Order'}
        </Button>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
