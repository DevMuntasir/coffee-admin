import { DialogAction, PreviewTabPanel, PreviewTabTrigger } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Select } from '@/shared/components/ui/select';
import { Badge } from '@/shared/components/ui/badge';
import { Icon } from '@/shared/components/icon';

export function PosRecentOrdersSection() {
  const futureOrderTypesEnabled = false;

  return (
    <div className={'grid grid-cols-12 gap-x-6 gap-0'}>
      <div className={'col-span-12 lg:col-span-8 pos-left'}>
        {/* <div className={'slider-wrapper mb-6 pb-6 border-b'}> */}
        {/* <div className={'flex items-center flex-wrap gap-3 mb-6'}>
            <h3 className={'mb-0'}>{'Recent Orders'}</h3>{' '}
            <div className={'flex items-center flex-wrap justify-between gap-2 flex-1'}>
              <ul
                className={'flex flex-wrap gap-2 nav-tabs nav-tabs-solid border-0 items-center'}
                role={'tablist'}
              >
                {futureOrderTypesEnabled && (
                  <li className={'shrink-0'}>
                    <PreviewTabTrigger
                      group={'tabs-0'}
                      value={'all'}
                      className={'preview-tab rounded-md px-3 py-2 font-medium shadow-xs'}
                    >
                      {'All Orders'}
                    </PreviewTabTrigger>{' '}
                  </li>
                )}{' '}
                {futureOrderTypesEnabled && (
                  <li className={'shrink-0'}>
                    <PreviewTabTrigger
                      group={'tabs-0'}
                      value={'dinein'}
                      className={'preview-tab rounded-md px-3 py-2 font-medium shadow-xs'}
                    >
                      {'Dine In'}
                    </PreviewTabTrigger>{' '}
                  </li>
                )}{' '}
                <li className={'shrink-0'}>
                  <PreviewTabTrigger
                    group={'tabs-0'}
                    value={'takeaway'}
                    className={'preview-tab rounded-md px-3 py-2 font-medium shadow-xs'}
                  >
                    {'Take Away'}
                  </PreviewTabTrigger>{' '}
                </li>{' '}
                {futureOrderTypesEnabled && (
                  <li className={'shrink-0'}>
                    <PreviewTabTrigger
                      group={'tabs-0'}
                      value={'delivery'}
                      className={'preview-tab rounded-md px-3 py-2 font-medium shadow-xs'}
                    >
                      {'Delivery'}
                    </PreviewTabTrigger>{' '}
                  </li>
                )}{' '}
              </ul>{' '}
              <div className={'flex items-center gap-2'}>
                <Button
                  className={'slick-arrow all-prev'}
                  type={'button'}
                  aria-label={'arrow-left'}
                >
                  <Icon name={'arrow-left'} className={''} />
                </Button>{' '}
                <Button
                  className={'slick-arrow all-next'}
                  type={'button'}
                  aria-label={'arrow-right'}
                >
                  <Icon name={'arrow-right'} className={''} />
                </Button>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '} */}
        {/* <div className={'tab-content'}>
            <PreviewTabPanel group={'tabs-0'} value={'all'} className={'tab-pane'} id={'all'}>
              <div className={'all-slider'}>
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#14589'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'James Smith'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:30 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Take Away'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 12 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '10%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'20:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#56998'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'Maria Gonzalez'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:45 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Take Away'}
                        </Badge>{' '}
                        <Badge className={'time bg-red-500 rounded-full text-[12px] font-normal'}>
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' -8 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-red-500'}
                          style={{ width: '100%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'49:33'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#65698'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{"Liam O'Connor"}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:10 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'wine'} className={'text-foreground mr-1'} />
                          {'Dine In'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 45 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '80%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'33:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#96589'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'Sophia Kim'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:20 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Take Away'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 22 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '70%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'70:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#14589'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'James Smith'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:30 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Take Away'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 12 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '10%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'20:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </PreviewTabPanel>{' '}
            <PreviewTabPanel group={'tabs-0'} value={'dinein'} className={'tab-pane'} id={'dinein'}>
              <div className={'dinein-slider'}>
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#96589'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'Sophia Kim'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:20 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'wine'} className={'text-foreground mr-1'} />
                          {'Dine In'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 22 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '70%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'70:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#56998'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'Maria Gonzalez'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:45 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'wine'} className={'text-foreground mr-1'} />
                          {'Dine In'}
                        </Badge>{' '}
                        <Badge className={'time bg-red-500 rounded-full text-[12px] font-normal'}>
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' -8 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-red-500'}
                          style={{ width: '100%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'49:33'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#14589'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'James Smith'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:30 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'wine'} className={'text-foreground mr-1'} />
                          {'Dine In'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 12 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '10%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'20:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#65698'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{"Liam O'Connor"}</h6>{' '}
                        <p className={'text-[13px] mb-0 flex items-center gap-2'}>
                          {'11:10 AM'}
                          <span className={'even-line'}></span> {'Table 1'}
                        </p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'wine'} className={'text-foreground mr-1'} />
                          {'Dine In'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 45 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '80%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'33:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#14589'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'James Smith'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:30 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'wine'} className={'text-foreground mr-1'} />
                          {'Dine In'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 12 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '10%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'20:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </PreviewTabPanel>{' '}
            <PreviewTabPanel
              group={'tabs-0'}
              value={'takeaway'}
              className={'tab-pane'}
              id={'takeaway'}
            >
              <div className={'takeaway-slider'}>
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#56998'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'Maria Gonzalez'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:45 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Take Away'}
                        </Badge>{' '}
                        <Badge className={'time bg-red-500 rounded-full text-[12px] font-normal'}>
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' -8 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-red-500'}
                          style={{ width: '100%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'49:33'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#14589'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'James Smith'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:30 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Take Away'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 12 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '10%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'20:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#14589'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'James Smith'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:30 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Take Away'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 12 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '10%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'20:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#96589'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'Sophia Kim'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:20 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Take Away'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 22 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '70%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'70:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#65698'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{"Liam O'Connor"}</h6>{' '}
                        <p className={'text-[13px] mb-0 flex items-center gap-2'}>
                          {'11:10 AM'}
                          <span className={'even-line'}></span> {'Table 1'}
                        </p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Take Away'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 45 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '80%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'33:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </PreviewTabPanel>{' '}
            <PreviewTabPanel
              group={'tabs-0'}
              value={'delivery'}
              className={'tab-pane'}
              id={'delivery'}
            >
              <div className={'delivery-slider'}>
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#65698'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{"Liam O'Connor"}</h6>{' '}
                        <p className={'text-[13px] mb-0 flex items-center gap-2'}>
                          {'11:10 AM'}
                          <span className={'even-line'}></span> {'Table 1'}
                        </p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Take Away'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 45 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '80%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'33:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#14589'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'James Smith'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:30 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Delivery'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 12 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '10%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'20:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#56998'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'Maria Gonzalez'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:45 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Delivery'}
                        </Badge>{' '}
                        <Badge className={'time bg-red-500 rounded-full text-[12px] font-normal'}>
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' -8 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-red-500'}
                          style={{ width: '100%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'49:33'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#14589'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'James Smith'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:30 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Delivery'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 12 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '10%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'20:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'slide-item'}>
                  <div className={'order-item'}>
                    <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                      <div>
                        <p className={'text-[12px] mb-1'}>{'#96589'}</p>{' '}
                        <h6 className={'text-[14px] font-semibold mb-1'}>{'Sophia Kim'}</h6>{' '}
                        <p className={'text-[13px] mb-0'}>{'11:20 AM'}</p>{' '}
                      </div>{' '}
                      <div className={'text-right'}>
                        <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                          <Icon name={'check-check'} className={'text-foreground mr-1'} />
                          {'Delivery'}
                        </Badge>{' '}
                        <Badge
                          className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                        >
                          <span className={'mr-1'}>
                            <Icon name={'clock-arrow-up'} className={''} />
                          </span>{' '}
                          {' 22 Mins '}
                        </Badge>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'flex items-center justify-between gap-3'}>
                      <div className={'progress-item'}>
                        <div
                          className={'h-full bg-primary bg-emerald-500'}
                          style={{ width: '70%' }}
                        ></div>{' '}
                      </div>{' '}
                      <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                        <Icon name={'clock'} className={'mr-1'} />
                        {'70:00'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </PreviewTabPanel>{' '}
            {false && (
              <PreviewTabPanel group={'tabs-0'} value={'table'} className={'tab-pane'} id={'table'}>
                <div className={'table-slider'}>
                  <div className={'slide-item'}>
                    <div className={'order-item'}>
                      <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                        <div>
                          <p className={'text-[12px] mb-1'}>{'#65698'}</p>{' '}
                          <h6 className={'text-[14px] font-semibold mb-1'}>{"Liam O'Connor"}</h6>{' '}
                          <p className={'text-[13px] mb-0 flex items-center gap-2'}>
                            {'11:10 AM'}
                            <span className={'even-line'}></span> {'Table 1'}
                          </p>{' '}
                        </div>{' '}
                        <div className={'text-right'}>
                          <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                            <Icon name={'concierge-bell'} className={'text-foreground mr-1'} />
                            {'Table'}
                          </Badge>{' '}
                          <Badge
                            className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                          >
                            <span className={'mr-1'}>
                              <Icon name={'clock-arrow-up'} className={''} />
                            </span>{' '}
                            {' 45 Mins '}
                          </Badge>{' '}
                        </div>{' '}
                      </div>{' '}
                      <div className={'flex items-center justify-between gap-3'}>
                        <div className={'progress-item'}>
                          <div
                            className={'h-full bg-primary bg-emerald-500'}
                            style={{ width: '80%' }}
                          ></div>{' '}
                        </div>{' '}
                        <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                          <Icon name={'clock'} className={'mr-1'} />
                          {'33:00'}
                        </p>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'slide-item'}>
                    <div className={'order-item'}>
                      <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                        <div>
                          <p className={'text-[12px] mb-1'}>{'#14589'}</p>{' '}
                          <h6 className={'text-[14px] font-semibold mb-1'}>{'James Smith'}</h6>{' '}
                          <p className={'text-[13px] mb-0'}>{'11:30 AM'}</p>{' '}
                        </div>{' '}
                        <div className={'text-right'}>
                          <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                            <Icon name={'concierge-bell'} className={'text-foreground mr-1'} />
                            {'Table'}
                          </Badge>{' '}
                          <Badge
                            className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                          >
                            <span className={'mr-1'}>
                              <Icon name={'clock-arrow-up'} className={''} />
                            </span>{' '}
                            {' 12 Mins '}
                          </Badge>{' '}
                        </div>{' '}
                      </div>{' '}
                      <div className={'flex items-center justify-between gap-3'}>
                        <div className={'progress-item'}>
                          <div
                            className={'h-full bg-primary bg-emerald-500'}
                            style={{ width: '10%' }}
                          ></div>{' '}
                        </div>{' '}
                        <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                          <Icon name={'clock'} className={'mr-1'} />
                          {'20:00'}
                        </p>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'slide-item'}>
                    <div className={'order-item'}>
                      <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                        <div>
                          <p className={'text-[12px] mb-1'}>{'#56998'}</p>{' '}
                          <h6 className={'text-[14px] font-semibold mb-1'}>{'Maria Gonzalez'}</h6>{' '}
                          <p className={'text-[13px] mb-0'}>{'11:45 AM'}</p>{' '}
                        </div>{' '}
                        <div className={'text-right'}>
                          <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                            <Icon name={'concierge-bell'} className={'text-foreground mr-1'} />
                            {'Table'}
                          </Badge>{' '}
                          <Badge className={'time bg-red-500 rounded-full text-[12px] font-normal'}>
                            <span className={'mr-1'}>
                              <Icon name={'clock-arrow-up'} className={''} />
                            </span>{' '}
                            {' -8 Mins '}
                          </Badge>{' '}
                        </div>{' '}
                      </div>{' '}
                      <div className={'flex items-center justify-between gap-3'}>
                        <div className={'progress-item'}>
                          <div
                            className={'h-full bg-primary bg-red-500'}
                            style={{ width: '100%' }}
                          ></div>{' '}
                        </div>{' '}
                        <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                          <Icon name={'clock'} className={'mr-1'} />
                          {'49:33'}
                        </p>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'slide-item'}>
                    <div className={'order-item'}>
                      <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                        <div>
                          <p className={'text-[12px] mb-1'}>{'#14589'}</p>{' '}
                          <h6 className={'text-[14px] font-semibold mb-1'}>{'James Smith'}</h6>{' '}
                          <p className={'text-[13px] mb-0'}>{'11:30 AM'}</p>{' '}
                        </div>{' '}
                        <div className={'text-right'}>
                          <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                            <Icon name={'concierge-bell'} className={'text-foreground mr-1'} />
                            {'Table'}
                          </Badge>{' '}
                          <Badge
                            className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                          >
                            <span className={'mr-1'}>
                              <Icon name={'clock-arrow-up'} className={''} />
                            </span>{' '}
                            {' 12 Mins '}
                          </Badge>{' '}
                        </div>{' '}
                      </div>{' '}
                      <div className={'flex items-center justify-between gap-3'}>
                        <div className={'progress-item'}>
                          <div
                            className={'h-full bg-primary bg-emerald-500'}
                            style={{ width: '10%' }}
                          ></div>{' '}
                        </div>{' '}
                        <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                          <Icon name={'clock'} className={'mr-1'} />
                          {'20:00'}
                        </p>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'slide-item'}>
                    <div className={'order-item'}>
                      <div className={'flex items-center justify-between flex-wrap gap-2 mb-4'}>
                        <div>
                          <p className={'text-[12px] mb-1'}>{'#96589'}</p>{' '}
                          <h6 className={'text-[14px] font-semibold mb-1'}>{'Sophia Kim'}</h6>{' '}
                          <p className={'text-[13px] mb-0'}>{'11:20 AM'}</p>{' '}
                        </div>{' '}
                        <div className={'text-right'}>
                          <Badge className={'bg-muted text-foreground flex items-center mb-4'}>
                            <Icon name={'concierge-bell'} className={'text-foreground mr-1'} />
                            {'Table'}
                          </Badge>{' '}
                          <Badge
                            className={'time bg-emerald-500 rounded-full text-[12px] font-normal'}
                          >
                            <span className={'mr-1'}>
                              <Icon name={'clock-arrow-up'} className={''} />
                            </span>{' '}
                            {' 22 Mins '}
                          </Badge>{' '}
                        </div>{' '}
                      </div>{' '}
                      <div className={'flex items-center justify-between gap-3'}>
                        <div className={'progress-item'}>
                          <div
                            className={'h-full bg-primary bg-emerald-500'}
                            style={{ width: '70%' }}
                          ></div>{' '}
                        </div>{' '}
                        <p className={'mb-0 text-[10px] font-normal flex items-center'}>
                          <Icon name={'clock'} className={'mr-1'} />
                          {'70:00'}
                        </p>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </PreviewTabPanel>
            )}{' '}
          </div>{' '} */}
        {/* </div>{' '} */}
        <div className={'pos-menu-toolbar'}>
          <div className={'pos-menu-toolbar-title'}>
            <h5 className={'mb-0 mr-2'}>{'Menu Categories'}</h5>{' '}
          </div>{' '}
          <div className={'pos-menu-filters'}>
            <label className={'flex items-center text-[14px] text-foreground'}>
              <input
                className={'size-4 accent-primary m-0 mr-2'}
                type={'checkbox'}
                defaultChecked={true}
                aria-label={'checkbox'}
              />
              <span className={'dot success mr-1'}></span> {' Veg '}
            </label>{' '}
            <label className={'flex items-center text-[14px] text-foreground'}>
              <input
                className={'size-4 accent-primary m-0 mr-2'}
                type={'checkbox'}
                aria-label={'checkbox'}
              />
              <span className={'dot mr-1'}></span> {' Non Veg '}
            </label>{' '}
            <label className={'flex items-center text-[14px] text-foreground'}>
              <input
                className={'size-4 accent-primary m-0 mr-2'}
                type={'checkbox'}
                aria-label={'checkbox'}
              />
              <span className={'dot warning mr-1'}></span> {' Egg '}
            </label>{' '}
          </div>{' '}
          <div className={'pos-menu-actions'}>
            <div className={'page-search'}>
              <Input
                className={'h-8 pr-6'}
                type={'search'}
                placeholder={'Search'}
                aria-label={'Search'}
              />
              <Icon name={'search'} className={'text-[14px]'} />
            </div>{' '}
            <Button
              variant={'outline'}
              className={'size-9 p-0 h-8 text-xs rounded-full'}
              aria-label={'refresh'}
            >
              <Icon name={'refresh-ccw'} className={''} />
            </Button>{' '}
            <Button
              variant={'outline'}
              className={'size-9 p-0 h-8 text-xs rounded-full'}
              aria-label={'refresh'}
            >
              <Icon name={'list-filter'} className={''} />
            </Button>{' '}
            <div className={'flex items-center gap-2'}>
              <Button
                className={'slick-arrow category-prev'}
                type={'button'}
                aria-label={'arrow-left'}
              >
                <Icon name={'arrow-left'} className={''} />
              </Button>{' '}
              <Button
                className={'slick-arrow category-next'}
                type={'button'}
                aria-label={'arrow-right'}
              >
                <Icon name={'arrow-right'} className={''} />
              </Button>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <ul
          className={
            'flex flex-wrap gap-2 nav-tabs nav-tabs-solid category-tab border-0 category-slider mb-6'
          }
          role={'tablist'}
        >
          <li className={'shrink-0'}>
            <PreviewTabTrigger
              group={'tabs-1'}
              value={'all-menu'}
              className={'preview-tab rounded-md px-3 py-2 font-medium shadow-sm'}
            >
              <div className={'avatar avatar-lg rounded-full shrink-0'}>
                <img
                  className={'max-w-full h-auto'}
                  src={'/assets/img/food/food-1.png'}
                  alt={'food'}
                />
              </div>{' '}
              <div>
                <h6 className={'text-[14px] font-semibold mb-1'}>{'All Menus'}</h6>{' '}
                <p className={'text-muted-foreground font-normal mb-0'}>{'200 Menus'}</p>{' '}
              </div>{' '}
            </PreviewTabTrigger>{' '}
          </li>{' '}
          <li className={'shrink-0'}>
            <PreviewTabTrigger
              group={'tabs-1'}
              value={'seafood-menu'}
              className={'preview-tab rounded-md px-3 py-2 font-medium shadow-sm'}
            >
              <div className={'avatar avatar-lg rounded-full shrink-0'}>
                <img
                  className={'max-w-full h-auto'}
                  src={'/assets/img/food/food-2.png'}
                  alt={'food'}
                />
              </div>{' '}
              <div>
                <h6 className={'text-[14px] font-semibold mb-1'}>{'Sea Food'}</h6>{' '}
                <p className={'text-muted-foreground font-normal mb-0'}>{'200 Menus'}</p>{' '}
              </div>{' '}
            </PreviewTabTrigger>{' '}
          </li>{' '}
          <li className={'shrink-0'}>
            <PreviewTabTrigger
              group={'tabs-1'}
              value={'pizza-menu'}
              className={'preview-tab rounded-md px-3 py-2 font-medium shadow-xs'}
            >
              <div className={'avatar avatar-lg rounded-full shrink-0'}>
                <img
                  className={'max-w-full h-auto'}
                  src={'/assets/img/food/food-3.png'}
                  alt={'food'}
                />
              </div>{' '}
              <div>
                <h6 className={'text-[14px] font-semibold mb-1'}>{'Pizza'}</h6>{' '}
                <p className={'text-muted-foreground font-normal mb-0'}>{'180 Menus'}</p>{' '}
              </div>{' '}
            </PreviewTabTrigger>{' '}
          </li>{' '}
          <li className={'shrink-0'}>
            <PreviewTabTrigger
              group={'tabs-1'}
              value={'salad-menu'}
              className={'preview-tab rounded-md px-3 py-2 font-medium shadow-xs'}
            >
              <div className={'avatar avatar-lg rounded-full shrink-0'}>
                <img
                  className={'max-w-full h-auto'}
                  src={'/assets/img/food/food-4.png'}
                  alt={'food'}
                />
              </div>{' '}
              <div>
                <h6 className={'text-[14px] font-semibold mb-1'}>{'Salads'}</h6>{' '}
                <p className={'text-muted-foreground font-normal mb-0'}>{'180 Menus'}</p>{' '}
              </div>{' '}
            </PreviewTabTrigger>{' '}
          </li>{' '}
          <li className={'shrink-0'}>
            <PreviewTabTrigger
              group={'tabs-1'}
              value={'tacos-menu'}
              className={'preview-tab rounded-md px-3 py-2 font-medium shadow-xs'}
            >
              <div className={'avatar avatar-lg rounded-full shrink-0'}>
                <img
                  className={'max-w-full h-auto'}
                  src={'/assets/img/food/food-5.png'}
                  alt={'food'}
                />
              </div>{' '}
              <div>
                <h6 className={'text-[14px] font-semibold mb-1'}>{'Tacos'}</h6>{' '}
                <p className={'text-muted-foreground font-normal mb-0'}>{'150 Menus'}</p>{' '}
              </div>{' '}
            </PreviewTabTrigger>{' '}
          </li>{' '}
          <li className={'shrink-0'}>
            <PreviewTabTrigger
              group={'tabs-1'}
              value={'soup-menu'}
              className={'preview-tab rounded-md px-3 py-2 font-medium shadow-xs'}
            >
              <div className={'avatar avatar-lg rounded-full shrink-0'}>
                <img
                  className={'max-w-full h-auto'}
                  src={'/assets/img/food/food-6.png'}
                  alt={'food'}
                />
              </div>{' '}
              <div>
                <h6 className={'text-[14px] font-semibold mb-1'}>{'Soups'}</h6>{' '}
                <p className={'text-muted-foreground font-normal mb-0'}>{'180 Menus'}</p>{' '}
              </div>{' '}
            </PreviewTabTrigger>{' '}
          </li>{' '}
        </ul>{' '}
        <div className={'tab-content'}>
          <PreviewTabPanel
            group={'tabs-1'}
            value={'all-menu'}
            className={'tab-pane'}
            id={'all-menu'}
          >
            <div className={'grid grid-cols-12 gap-x-6 gap-4'}>
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-01.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                    <Badge className={'bg-red-500'}>
                      <Icon name={'crown'} className={'text-white'} />
                      {'Trending'}
                    </Badge>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Sea Food'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Grilled Salmon Steak'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$80'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-02.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                    <Badge className={'bg-indigo-500'}>
                      <Icon name={'flame'} className={'text-white'} />
                      {'Must Try'}
                    </Badge>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Pizza'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                          {' Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Cheese Burst Pizza'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$66'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-03.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Sea Food'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Garlic Butter Shrimp'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$25'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-04.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Tacos'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>{'Chicken Taco'}</DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>
                        <span className={'text-muted-foreground line-through'}>{'$38'}</span>{' '}
                        {' $33'}
                      </p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-10.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Soups'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Tomato Basil Soup'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>
                        <span className={'text-muted-foreground line-through'}>{'$38'}</span>{' '}
                        {' $33'}
                      </p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-05.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Sushi'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>{'Vegetable Roll'}</DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$66'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-16.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Beverages'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Lemon Mint Juice'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$96'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-05.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                    <Badge className={'bg-indigo-500'}>
                      <Icon name={'flame'} className={'text-white'} />
                      {'Must Try'}
                    </Badge>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Salads'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>{'Grilled Chicken'}</DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$49'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-09.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Soups'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>{'Shrimp Tom Yum'}</DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$25'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-08.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Pizza'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>{'Corn Pizza'}</DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$96'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-07.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Soups'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Chicken Noodle Soup'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$45'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-05.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Sea Food'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Lobster Thermidor'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$56'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </PreviewTabPanel>{' '}
          <PreviewTabPanel
            group={'tabs-1'}
            value={'seafood-menu'}
            className={'tab-pane'}
            id={'seafood-menu'}
          >
            <div className={'grid grid-cols-12 gap-x-6 gap-4'}>
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-01.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                    <Badge className={'bg-red-500'}>
                      <Icon name={'crown'} className={'text-white'} />
                      {'Trending'}
                    </Badge>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Sea Food'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Grilled Salmon Steak'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$80'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-03.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Sea Food'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Garlic Butter Shrimp'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$25'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-05.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Sushi'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>{'Vegetable Roll'}</DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$66'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-05.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Sea Food'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Lobster Thermidor'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$56'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </PreviewTabPanel>{' '}
          <PreviewTabPanel
            group={'tabs-1'}
            value={'pizza-menu'}
            className={'tab-pane'}
            id={'pizza-menu'}
          >
            <div className={'grid grid-cols-12 gap-x-6 gap-4'}>
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-02.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                    <Badge className={'bg-indigo-500'}>
                      <Icon name={'flame'} className={'text-white'} />
                      {'Must Try'}
                    </Badge>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Pizza'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                          {' Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Cheese Burst Pizza'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$66'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-08.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Pizza'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>{'Corn Pizza'}</DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$96'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </PreviewTabPanel>{' '}
          <PreviewTabPanel
            group={'tabs-1'}
            value={'salad-menu'}
            className={'tab-pane'}
            id={'salad-menu'}
          >
            <div className={'grid grid-cols-12 gap-x-6 gap-4'}>
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-05.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                    <Badge className={'bg-indigo-500'}>
                      <Icon name={'flame'} className={'text-white'} />
                      {'Must Try'}
                    </Badge>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Salads'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>{'Grilled Chicken'}</DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$49'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-07.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Soups'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Chicken Noodle Soup'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$45'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </PreviewTabPanel>{' '}
          <PreviewTabPanel
            group={'tabs-1'}
            value={'tacos-menu'}
            className={'tab-pane'}
            id={'tacos-menu'}
          >
            <div className={'grid grid-cols-12 gap-x-6 gap-4'}>
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-04.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Tacos'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>{'Chicken Taco'}</DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>
                        <span className={'text-muted-foreground line-through'}>{'$38'}</span>{' '}
                        {' $33'}
                      </p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </PreviewTabPanel>{' '}
          <PreviewTabPanel
            group={'tabs-1'}
            value={'soup-menu'}
            className={'tab-pane'}
            id={'soup-menu'}
          >
            <div className={'grid grid-cols-12 gap-x-6 gap-4'}>
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-10.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Soups'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Tomato Basil Soup'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>
                        <span className={'text-muted-foreground line-through'}>{'$38'}</span>{' '}
                        {' $33'}
                      </p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-09.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Soups'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>{'Shrimp Tom Yum'}</DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$25'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 xl:col-span-3 md:col-span-4 sm:col-span-6'}>
                <div className={'pos-menu-card'}>
                  <div className={'food-items relative mb-2'}>
                    <DialogAction target={'items_details'} aria-label={'Action'}>
                      <img
                        className={'max-w-full h-auto w-full rounded-md'}
                        src={'/assets/img/items/food-07.jpg'}
                        alt={'item'}
                      />
                    </DialogAction>{' '}
                  </div>{' '}
                  <div>
                    <div className={'flex items-center justify-between mb-1'}>
                      <p className={'text-[12px] mb-0'}>{'Soups'}</p>{' '}
                      <div>
                        <span className={'flex items-center'}>
                          <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                          {'Non Veg'}
                        </span>{' '}
                      </div>{' '}
                    </div>{' '}
                    <h6 className={'text-[14px] font-semibold truncate mb-2'}>
                      <DialogAction target={'items_details'}>
                        {'Chicken Noodle Soup'}
                      </DialogAction>{' '}
                    </h6>{' '}
                    <div className={'flex items-center justify-between gap-2'}>
                      <p className={'mb-0 text-foreground'}>{'$45'}</p>{' '}
                      <div className={'quantity-control'}>
                        <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                          <Icon name={'minus'} className={''} />
                        </Button>{' '}
                        <Input
                          className={'quantity-input'}
                          type={'text'}
                          defaultValue={'1'}
                          aria-label={'Quantity'}
                        />
                        <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                          <Icon name={'plus'} className={''} />
                        </Button>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </PreviewTabPanel>{' '}
        </div>{' '}
      </div>{' '}
      <div className={'col-span-12 lg:col-span-4'}>
        <div className={'pos-right'}>
          <div className={'p-4 flex items-center justify-between flex-wrap border-b'}>
            <h6 className={'mb-0'}>{'Order #56998'}</h6>{' '}
            <p className={'mb-0'}>{'08 Oct, 2026, 12:44 PM'}</p>{' '}
          </div>{' '}
          <div className={'item border-b'}>
            <ul
              className={
                'flex flex-wrap gap-2 nav-tabs nav-tabs-solid border-0 mb-4 items-center justify-between gap-1 pos-tab'
              }
              role={'tablist'}
            >
              {futureOrderTypesEnabled && (
                <li className={'shrink-0 flex-1'}>
                  <PreviewTabTrigger
                    group={'tabs-2'}
                    value={'order-tab1'}
                    className={
                      'preview-tab rounded-md px-3 py-2 font-medium justify-center shadow-xs'
                    }
                  >
                    <Icon name={'wine'} className={''} />
                    {'Dine In'}
                  </PreviewTabTrigger>{' '}
                </li>
              )}{' '}
              <li className={'shrink-0 flex-1'}>
                <PreviewTabTrigger
                  group={'tabs-2'}
                  value={'order-tab2'}
                  className={
                    'preview-tab rounded-md px-3 py-2 font-medium justify-center shadow-xs'
                  }
                >
                  <Icon name={'shopping-bag'} className={''} />
                  {'Take Away'}
                </PreviewTabTrigger>{' '}
              </li>{' '}
              {futureOrderTypesEnabled && (
                <li className={'shrink-0 flex-1'}>
                  <PreviewTabTrigger
                    group={'tabs-2'}
                    value={'order-tab3'}
                    className={
                      'preview-tab rounded-md px-3 py-2 font-medium flex-1 justify-center shadow-xs'
                    }
                  >
                    <Icon name={'check-check'} className={''} />
                    {'Delivery'}
                  </PreviewTabTrigger>{' '}
                </li>
              )}{' '}
            </ul>{' '}
            <div className={'tab-content'}>
              {futureOrderTypesEnabled && (
                <PreviewTabPanel
                  group={'tabs-2'}
                  value={'order-tab1'}
                  className={'tab-pane'}
                  id={'order-tab1'}
                >
                  <div className={'grid grid-cols-12 gap-x-6 gap-2'}>
                    <div className={'col-span-12 lg:col-span-5'}>
                      <Select aria-label={'Field'}>
                        <option>{'Waiter'}</option> <option>{'Andrew Fletcher'}</option>{' '}
                        <option>{'Morgan Evans'}</option> <option>{'Maria Gonzalez'}</option>{' '}
                      </Select>{' '}
                    </div>{' '}
                    <div className={'col-span-12 lg:col-span-6'}>
                      <div className={'input-item flex items-center gap-2'}>
                        <Select aria-label={'Field'}>
                          <option>{'Select Customer'}</option> <option>{'Sue Allen'}</option>{' '}
                          <option>{'Frank Barrett'}</option> <option>{'Jim Vickers'}</option>{' '}
                        </Select>{' '}
                        <DialogAction
                          target={'add_customer'}
                          variant={'default'}
                          className={'size-9 p-0'}
                          aria-label={'plus'}
                        >
                          <Icon name={'plus'} className={''} />
                        </DialogAction>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'col-span-12 lg:col-span-1'}>
                      <div className={'flex items-center justify-end'}>
                        <DialogAction
                          target={'edit_customer'}
                          variant={'outline'}
                          className={
                            'border-0 size-9 p-0 bg-transparent text-[16px] text-foreground'
                          }
                          aria-label={'pencil-line'}
                        >
                          <Icon name={'pencil-line'} className={''} />
                        </DialogAction>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </PreviewTabPanel>
              )}{' '}
              <PreviewTabPanel
                group={'tabs-2'}
                value={'order-tab2'}
                className={'tab-pane'}
                id={'order-tab2'}
              >
                <div className={'grid grid-cols-12 gap-x-6 gap-2'}>
                  <div className={'col-span-12 lg:col-span-11'}>
                    <div className={'input-item flex items-center gap-2'}>
                      <Select aria-label={'Field'}>
                        <option>{'Select Customer'}</option> <option>{'Sue Allen'}</option>{' '}
                        <option>{'Frank Barrett'}</option> <option>{'Jim Vickers'}</option>{' '}
                      </Select>{' '}
                      <DialogAction
                        target={'add_customer'}
                        variant={'default'}
                        className={'size-9 p-0'}
                        aria-label={'plus'}
                      >
                        <Icon name={'plus'} className={''} />
                      </DialogAction>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'col-span-12 lg:col-span-1'}>
                    <div className={'flex items-center justify-end'}>
                      <DialogAction
                        target={'edit_customer'}
                        variant={'outline'}
                        className={'border-0 size-9 p-0 bg-transparent text-[16px] text-foreground'}
                        aria-label={'pencil-line'}
                      >
                        <Icon name={'pencil-line'} className={''} />
                      </DialogAction>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </PreviewTabPanel>{' '}
              {futureOrderTypesEnabled && (
                <PreviewTabPanel
                  group={'tabs-2'}
                  value={'order-tab3'}
                  className={'tab-pane'}
                  id={'order-tab3'}
                >
                  <div className={'grid grid-cols-12 gap-x-6 gap-2'}>
                    <div className={'col-span-12 lg:col-span-11'}>
                      <div className={'input-item flex items-center gap-2'}>
                        <Select aria-label={'Field'}>
                          <option>{'Select Customer'}</option> <option>{'Sue Allen'}</option>{' '}
                          <option>{'Frank Barrett'}</option> <option>{'Jim Vickers'}</option>{' '}
                        </Select>{' '}
                        <DialogAction
                          target={'add_customer'}
                          variant={'default'}
                          className={'size-9 p-0'}
                          aria-label={'plus'}
                        >
                          <Icon name={'plus'} className={''} />
                        </DialogAction>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'col-span-12 lg:col-span-1'}>
                      <div className={'flex items-center justify-end'}>
                        <DialogAction
                          target={'edit_customer'}
                          variant={'outline'}
                          className={
                            'border-0 size-9 p-0 bg-transparent text-[16px] text-foreground'
                          }
                          aria-label={'pencil-line'}
                        >
                          <Icon name={'pencil-line'} className={''} />
                        </DialogAction>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </PreviewTabPanel>
              )}{' '}
            </div>{' '}
          </div>{' '}
          <div className={'p-4 border-b'}>
            <div className={'flex items-center justify-between mb-6 gap-2 flex-wrap'}>
              <h6 className={'mb-0'}>{'Ordered Menus'}</h6>{' '}
              <p className={'mb-0 flex items-center text-foreground'}>
                {'Total Menus : '}
                <span
                  className={
                    'flex items-center justify-center text-[14px] size-9 p-0 rounded-full border shrink-0 ml-1 text-foreground'
                  }
                >
                  {'4'}
                </span>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'pos-cart-item'}>
              <div className={'pos-cart-layout'}>
                <Button variant="ghost" className={'pos-cart-product'}>
                  <div className={'avatar avatar-lg shrink-0 mr-2'}>
                    <img
                      className={'max-w-full h-auto rounded-md'}
                      src={'/assets/img/items/food-04.jpg'}
                      alt={'food-img'}
                    />
                  </div>{' '}
                  <div className={'overflow-hidden'}>
                    <h6 className={'mb-1 text-[14px] font-semibold truncate mb-2'}>
                      {'Chicken Taco'}
                    </h6>{' '}
                    <Badge className={'badge-md bg-muted text-foreground mb-0'}>
                      {'Medium'}
                    </Badge>{' '}
                  </div>{' '}
                </Button>{' '}
                <div className={'pos-cart-actions'}>
                  <div className={'quantity-control'}>
                    <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                      <Icon name={'minus'} className={''} />
                    </Button>{' '}
                    <Input
                      className={'quantity-input'}
                      type={'text'}
                      defaultValue={'2'}
                      aria-label={'Quantity'}
                    />
                    <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                      <Icon name={'plus'} className={''} />
                    </Button>{' '}
                  </div>{' '}
                  <DialogAction
                    target={'add_notes'}
                    variant={'outline'}
                    className={'text-[12px] py-1 px-2'}
                  >
                    {'Note'}
                  </DialogAction>{' '}
                  <Button
                    variant={'outline'}
                    className={'size-9 p-0 text-[12px] close-icon rounded-full'}
                    aria-label={'x'}
                  >
                    <Icon name={'x'} className={''} />
                  </Button>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'collapse'} id={'collapseOne'}>
                <div className={'pt-2 mt-2 border-t'}>
                  <div className={'flex items-center justify-between'}>
                    <div className={'text-center'}>
                      <span className={'text-[12px] mb-1 block font-medium text-foreground'}>
                        {'Item Rate'}
                      </span>{' '}
                      <p className={'mb-0 text-[14px] font-normal'}>{'$33'}</p>{' '}
                    </div>{' '}
                    <div className={'text-center'}>
                      <span className={'text-[12px] mb-1 block font-medium text-foreground'}>
                        {'Amount'}
                      </span>{' '}
                      <p className={'mb-0 text-[14px] font-normal'}>{'$66'}</p>{' '}
                    </div>{' '}
                    <div className={'text-center'}>
                      <span className={'text-[12px] mb-1 block font-medium text-foreground'}>
                        {'Total'}
                      </span>{' '}
                      <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                        {'$66'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'pos-cart-item'}>
              <div className={'pos-cart-layout'}>
                <Button variant="ghost" className={'pos-cart-product'}>
                  <div className={'avatar avatar-lg shrink-0 mr-2'}>
                    <img
                      className={'max-w-full h-auto rounded-md'}
                      src={'/assets/img/items/food-01.jpg'}
                      alt={'food-img'}
                    />
                  </div>{' '}
                  <div className={'overflow-hidden'}>
                    <h6 className={'mb-1 text-[14px] font-semibold truncate mb-2'}>
                      {'Grilled Chicken'}
                    </h6>{' '}
                    <Badge className={'badge-md bg-muted text-foreground mb-0'}>
                      {'Small: 250 gms'}
                    </Badge>{' '}
                  </div>{' '}
                </Button>{' '}
                <div className={'pos-cart-actions'}>
                  <div className={'quantity-control'}>
                    <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                      <Icon name={'minus'} className={''} />
                    </Button>{' '}
                    <Input
                      className={'quantity-input'}
                      type={'text'}
                      defaultValue={'1'}
                      aria-label={'Quantity'}
                    />
                    <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                      <Icon name={'plus'} className={''} />
                    </Button>{' '}
                  </div>{' '}
                  <DialogAction
                    target={'add_notes'}
                    variant={'outline'}
                    className={'text-[12px] py-1 px-2'}
                  >
                    {'Note'}
                  </DialogAction>{' '}
                  <Button
                    variant={'outline'}
                    className={'size-9 p-0 text-[12px] close-icon rounded-full'}
                    aria-label={'x'}
                  >
                    <Icon name={'x'} className={''} />
                  </Button>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'collapse'} id={'collapseTwo'}>
                <div className={'pt-2 mt-2 border-t'}>
                  <div className={'flex items-center justify-between'}>
                    <div className={'text-center'}>
                      <span className={'text-[12px] mb-1 block font-medium text-foreground'}>
                        {'Item Rate'}
                      </span>{' '}
                      <p className={'mb-0 text-[14px] font-normal'}>{'$13'}</p>{' '}
                    </div>{' '}
                    <div className={'text-center'}>
                      <span className={'text-[12px] mb-1 block font-medium text-foreground'}>
                        {'Amount'}
                      </span>{' '}
                      <p className={'mb-0 text-[14px] font-normal'}>{'$26'}</p>{' '}
                    </div>{' '}
                    <div className={'text-center'}>
                      <span className={'text-[12px] mb-1 block font-medium text-foreground'}>
                        {'Total'}
                      </span>{' '}
                      <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                        {'$46'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'pos-cart-item'}>
              <div className={'pos-cart-layout'}>
                <Button variant="ghost" className={'pos-cart-product'}>
                  <div className={'avatar avatar-lg shrink-0 mr-2'}>
                    <img
                      className={'max-w-full h-auto rounded-md'}
                      src={'/assets/img/items/food-20.jpg'}
                      alt={'food-img'}
                    />
                  </div>{' '}
                  <div className={'overflow-hidden'}>
                    <h6 className={'mb-1 text-[14px] font-semibold truncate mb-2'}>
                      {'Lobster Thermidor'}
                    </h6>{' '}
                    <Badge className={'badge-md bg-muted text-foreground mb-0'}>
                      {'Half Lobster : 300 gms'}
                    </Badge>{' '}
                  </div>{' '}
                </Button>{' '}
                <div className={'pos-cart-actions'}>
                  <div className={'quantity-control'}>
                    <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                      <Icon name={'minus'} className={''} />
                    </Button>{' '}
                    <Input
                      className={'quantity-input'}
                      type={'text'}
                      defaultValue={'1'}
                      aria-label={'Quantity'}
                    />
                    <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                      <Icon name={'plus'} className={''} />
                    </Button>{' '}
                  </div>{' '}
                  <DialogAction
                    target={'add_notes'}
                    variant={'outline'}
                    className={'text-[12px] py-1 px-2'}
                  >
                    {'Note'}
                  </DialogAction>{' '}
                  <Button
                    variant={'outline'}
                    className={'size-9 p-0 text-[12px] close-icon rounded-full'}
                    aria-label={'x'}
                  >
                    <Icon name={'x'} className={''} />
                  </Button>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'collapse'} id={'collapseThree'}>
                <div className={'pt-2 mt-2 border-t'}>
                  <div className={'flex items-center justify-between'}>
                    <div className={'text-center'}>
                      <span className={'text-[12px] mb-1 block font-medium text-foreground'}>
                        {'Item Rate'}
                      </span>{' '}
                      <p className={'mb-0 text-[14px] font-normal'}>{'$33'}</p>{' '}
                    </div>{' '}
                    <div className={'text-center'}>
                      <span className={'text-[12px] mb-1 block font-medium text-foreground'}>
                        {'Amount'}
                      </span>{' '}
                      <p className={'mb-0 text-[14px] font-normal'}>{'$66'}</p>{' '}
                    </div>{' '}
                    <div className={'text-center'}>
                      <span className={'text-[12px] mb-1 block font-medium text-foreground'}>
                        {'Total'}
                      </span>{' '}
                      <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                        {'$66'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'pos-cart-item'}>
              <div className={'pos-cart-layout'}>
                <Button variant="ghost" className={'pos-cart-product'}>
                  <div className={'avatar avatar-lg shrink-0 mr-2'}>
                    <img
                      className={'max-w-full h-auto rounded-md'}
                      src={'/assets/img/items/food-08.jpg'}
                      alt={'food-img'}
                    />
                  </div>{' '}
                  <div className={'overflow-hidden'}>
                    <h6 className={'mb-1 text-[14px] font-semibold truncate mb-2'}>
                      {'Spinach & Corn Pizza'}
                    </h6>{' '}
                    <Badge className={'badge-md bg-muted text-foreground mb-0'}>
                      {'Small: 6 inches'}
                    </Badge>{' '}
                  </div>{' '}
                </Button>{' '}
                <div className={'pos-cart-actions'}>
                  <div className={'quantity-control'}>
                    <Button className={'minus-btn'} type={'button'} aria-label={'minus'}>
                      <Icon name={'minus'} className={''} />
                    </Button>{' '}
                    <Input
                      className={'quantity-input'}
                      type={'text'}
                      defaultValue={'1'}
                      aria-label={'Quantity'}
                    />
                    <Button className={'add-btn'} type={'button'} aria-label={'plus'}>
                      <Icon name={'plus'} className={''} />
                    </Button>{' '}
                  </div>{' '}
                  <DialogAction
                    target={'add_notes'}
                    variant={'outline'}
                    className={'text-[12px] py-1 px-2'}
                  >
                    {'Note'}
                  </DialogAction>{' '}
                  <Button
                    variant={'outline'}
                    className={'size-9 p-0 text-[12px] close-icon rounded-full'}
                    aria-label={'x'}
                  >
                    <Icon name={'x'} className={''} />
                  </Button>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'collapse'} id={'collapseFour'}>
                <div className={'pt-2 mt-2 border-t'}>
                  <div className={'flex items-center justify-between'}>
                    <div className={'text-center'}>
                      <span className={'text-[12px] mb-1 block font-medium text-foreground'}>
                        {'Item Rate'}
                      </span>{' '}
                      <p className={'mb-0 text-[14px] font-normal'}>{'$30'}</p>{' '}
                    </div>{' '}
                    <div className={'text-center'}>
                      <span className={'text-[12px] mb-1 block font-medium text-foreground'}>
                        {'Amount'}
                      </span>{' '}
                      <p className={'mb-0 text-[14px] font-normal'}>{'$30'}</p>{' '}
                    </div>{' '}
                    <div className={'text-center'}>
                      <span className={'text-[12px] mb-1 block font-medium text-foreground'}>
                        {'Total'}
                      </span>{' '}
                      <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                        {'$30'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'price-item'}>
              <h6 className={'mb-4'}>{'Payment Summary'}</h6>{' '}
              <p className={'text-[14px] font-normal flex items-center justify-between mb-2'}>
                {'Sub Total'}
                <span className={'font-medium text-foreground'}>{'$267'}</span>{' '}
              </p>{' '}
              <p className={'text-[14px] font-normal flex items-center justify-between mb-0'}>
                {'Tax (18%)'}
                <span className={'font-medium text-foreground'}>{'$26.7'}</span>{' '}
              </p>{' '}
            </div>{' '}
          </div>{' '}
          <div className={'p-4 border-b flex items-center justify-between gap-2 flex-wrap'}>
            <h5 className={'mb-0'}>{'Amount to be Paid'}</h5>{' '}
            <h5 className={'mb-0'}>{'$274'}</h5>{' '}
          </div>{' '}
          <div className={'p-4'}>
            <DialogAction target={'order_modal'} variant={'default'} className={'w-full mb-6'}>
              {'Place an Order'}
            </DialogAction>{' '}
            <div className={'grid grid-cols-12 gap-x-6 gap-4'}>
              <div className={'col-span-12 sm:col-span-4'}>
                <DialogAction
                  target={'print_reciept'}
                  variant={'outline'}
                  className={'h-8 text-xs flex items-center gap-1 shadow-xs'}
                >
                  <Icon name={'printer'} className={''} />
                  {'Print'}
                </DialogAction>{' '}
              </div>{' '}
              <div className={'col-span-12 sm:col-span-4'}>
                <DialogAction
                  target={'view_invoices'}
                  variant={'outline'}
                  className={'h-8 text-xs flex items-center gap-1 shadow-xs'}
                >
                  <Icon name={'file-chart-column'} className={''} />
                  {'Invoice'}
                </DialogAction>{' '}
              </div>{' '}
              {/* <div className={'col-span-12 sm:col-span-4'}>
                <DialogAction
                  target={'draft_details'}
                  variant={'outline'}
                  className={'h-8 text-xs flex items-center gap-1 shadow-xs'}
                >
                  <Icon name={'files'} className={''} />
                  {'Draft'}
                </DialogAction>{' '}
              </div>{' '} */}
              {/* <div className={'col-span-12 sm:col-span-4'}>
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'h-8 text-xs flex items-center gap-1 shadow-xs'}
                >
                  <Icon name={'x'} className={''} />
                  {'Cancel'}
                </DialogAction>{' '}
              </div>{' '} */}
              {/* <div className={'col-span-12 sm:col-span-4'}>
                <Button
                  variant={'outline'}
                  className={'h-8 text-xs flex items-center gap-1 shadow-xs'}
                >
                  <Icon name={'zap'} className={''} />
                  {'Void'}
                </Button>{' '}
              </div>{' '} */}
              <div className={'col-span-12 sm:col-span-4'}>
                <DialogAction
                  target={'transactions_details'}
                  variant={'outline'}
                  className={'h-8 text-xs flex items-center gap-1 shadow-xs'}
                >
                  <Icon name={'file-chart-line'} className={''} />
                  {'Tranactions'}
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}
