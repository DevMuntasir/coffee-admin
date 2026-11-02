import { Card, CardContent, CardFooter, CardHeader } from '@/shared/components/ui/card';
import { DialogAction } from '@/shared/components/preview';
import { Badge } from '@/shared/components/ui/badge';
import { Icon } from '@/shared/components/icon';

export function KitchenOverviewSection() {
  return (
    <div className={'grid grid-cols-12 gap-x-6 gap-6'}>
      <div className={'col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1 mb-0'}>
          <CardHeader className={'bg-gray'}>
            <div className={'flex items-center justify-between flex-wrap gap-2'}>
              <div className={'flex items-center gap-2'}>
                <div className={'avatar rounded-full bg-card'}>
                  <Icon name={'hand-platter'} className={'text-[24px] text-foreground'} />
                </div>{' '}
                <p className={'mb-0 text-white font-semibold fs-14px'}>
                  {'Jennifer Brooks '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'Dine In'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <Badge className={'bg-card text-center text-foreground'}>{'#14751'}</Badge>{' '}
            </div>{' '}
          </CardHeader>{' '}
          <CardContent className={'border-b'}>
            <div className={'flex items-center justify-between gap-2 flex-wrap'}>
              <h6 className={'mb-0 font-normal text-[14px]'}>
                {'Token No : '}
                <span className={'font-semibold'}>{'31'}</span>{' '}
              </h6>{' '}
              <p className={'mb-0 font-normal text-foreground'}>{'15 Nov 2026, 06:00 PM'}</p>{' '}
            </div>{' '}
          </CardContent>{' '}
          <CardContent>
            <div className={'orders-list mb-6'}>
              <div className={'border-bottom-dashed mb-4 pb-4'}>
                <div className={'orders text-foreground mb-2'}>
                  <p>
                    <span className={'dot success'}></span> {'Mediterranean Salad - Regular'}
                  </p>{' '}
                  <p className={'text-foreground'}>{'×1'}</p>{' '}
                </div>{' '}
                <div className={'bg-muted rounded-md py-1 px-2'}>
                  <p className={'mb-0 font-medium flex items-center text-foreground'}>
                    <Icon name={'badge-info'} className={'mr-1'} />
                    {' Notes : Extra Spicy'}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'orders text-foreground mb-4 pb-4 border-bottom-dashed'}>
                <p>
                  <span className={'dot success'}></span> {'Café Mocha'}
                </p>{' '}
                <p className={'text-foreground'}>{'×1'}</p>{' '}
              </div>{' '}
              <div className={'orders text-foreground mb-0'}>
                <p>
                  <span className={'dot success'}></span> {'Caesar Salad'}
                </p>{' '}
                <p className={'text-foreground'}>{'×1'}</p>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between gap-3'}>
              <div className={'progress-item'}>
                <div
                  className={'h-full bg-primary bg-emerald-500'}
                  style={{ width: '10%' }}
                ></div>{' '}
              </div>{' '}
              <p className={'mb-0 font-normal flex items-center'}>
                <Icon name={'clock'} className={'mr-1'} />
                {' 20:00'}
              </p>{' '}
            </div>{' '}
          </CardContent>{' '}
          <CardFooter
            className={
              'flex items-center justify-between gap-2 pt-0 border-0 flex-wrap xl:flex-nowrap'
            }
          >
            <DialogAction
              target={'cooking_started_modal'}
              variant={'outline'}
              className={'w-full timer-btn'}
            >
              <Icon name={'play'} className={'mr-2'} />
              <span className={'label'}>{'Play'}</span>{' '}
              <span className={'pl-1 font-semibold time'}>{'00:00'}</span>{' '}
            </DialogAction>{' '}
            <DialogAction
              target={'cooking_done_modal'}
              variant={'outline'}
              className={'w-full whitespace-nowrap'}
            >
              <Icon name={'check-check'} className={'mr-2'} />
              <span>{'Mark Done'}</span>{' '}
            </DialogAction>{' '}
          </CardFooter>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1 mb-0'}>
          <CardHeader className={'bg-slate-500'}>
            <div className={'flex items-center justify-between flex-wrap gap-2'}>
              <div className={'flex items-center gap-2'}>
                <div className={'avatar rounded-full bg-card'}>
                  <Icon name={'hand-platter'} className={'text-[24px] text-foreground'} />
                </div>{' '}
                <p className={'mb-0 text-white font-semibold fs-14px'}>
                  {'Elijah Thompson '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'Take Away'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <Badge className={'bg-card text-center text-foreground'}>{'#14351'}</Badge>{' '}
            </div>{' '}
          </CardHeader>{' '}
          <CardContent className={'border-b'}>
            <div className={'flex items-center justify-between gap-2 flex-wrap'}>
              <h6 className={'mb-0 font-normal text-[14px]'}>
                {'Token No : '}
                <span className={'font-semibold'}>{'11'}</span>{' '}
              </h6>{' '}
              <p className={'mb-0 font-normal text-foreground'}>{'19 Nov 2026, 03:25 PM'}</p>{' '}
            </div>{' '}
          </CardContent>{' '}
          <CardContent>
            <div className={'orders-list mb-6'}>
              <div className={'border-bottom-dashed mb-4 pb-4'}>
                <div className={'orders text-foreground mb-2'}>
                  <p>
                    <span className={'dot'}></span> {'Chicken Skewers'}
                  </p>{' '}
                  <p className={'text-foreground'}>{'×1'}</p>{' '}
                </div>{' '}
                <div className={'bg-muted rounded-md py-1 px-2'}>
                  <p className={'mb-0 font-medium flex items-center text-foreground'}>
                    <Icon name={'badge-info'} className={'mr-1'} />
                    {' Notes : Extra Spicy'}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'orders text-foreground mb-4 pb-4 border-bottom-dashed'}>
                <p>
                  <span className={'dot'}></span> {'Chicken Roll'}
                </p>{' '}
                <p className={'text-foreground'}>{'×1'}</p>{' '}
              </div>{' '}
              <div className={'orders text-foreground mb-0'}>
                <p>
                  <span className={'dot'}></span> {'Café Latte'}
                </p>{' '}
                <p className={'text-foreground'}>{'×1'}</p>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between gap-3'}>
              <div className={'progress-item'}>
                <div
                  className={'h-full bg-primary bg-emerald-500'}
                  style={{ width: '50%' }}
                ></div>{' '}
              </div>{' '}
              <p className={'mb-0 font-normal flex items-center'}>
                <Icon name={'clock'} className={'mr-1'} />
                {' 50:00'}
              </p>{' '}
            </div>{' '}
          </CardContent>{' '}
          <CardFooter
            className={
              'flex items-center justify-between gap-2 pt-0 border-0 flex-wrap xl:flex-nowrap'
            }
          >
            <DialogAction
              target={'order_pause'}
              variant={'outline'}
              className={'w-full timer-btn running'}
            >
              <Icon name={'play'} className={'mr-2'} />
              <span className={'label'}>{'Play'}</span>{' '}
              <span className={'pl-1 font-semibold time'}>{'00:00'}</span>{' '}
            </DialogAction>{' '}
            <DialogAction
              target={'cooking_done_modal'}
              variant={'outline'}
              className={'w-full whitespace-nowrap'}
            >
              <Icon name={'check-check'} className={'mr-2'} />
              <span>{'Mark Done'}</span>{' '}
            </DialogAction>{' '}
          </CardFooter>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1 mb-0'}>
          <CardHeader className={'bg-amber-500'}>
            <div className={'flex items-center justify-between flex-wrap gap-2'}>
              <div className={'flex items-center gap-2'}>
                <div className={'avatar rounded-full bg-card'}>
                  <Icon name={'hand-platter'} className={'text-[24px] text-foreground'} />
                </div>{' '}
                <p className={'mb-0 text-white font-semibold fs-14px'}>
                  {'Walk in Customer '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'Dine In'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <Badge className={'bg-card text-center text-foreground'}>{'#23896'}</Badge>{' '}
            </div>{' '}
          </CardHeader>{' '}
          <CardContent className={'border-b'}>
            <div className={'flex items-center justify-between gap-2 flex-wrap'}>
              <h6 className={'mb-0 font-normal text-[14px]'}>
                {'Token No : '}
                <span className={'font-semibold'}>{'07'}</span>{' '}
              </h6>{' '}
              <p className={'mb-0 font-normal text-foreground'}>{'15 Nov 2026, 05:15 PM'}</p>{' '}
            </div>{' '}
          </CardContent>{' '}
          <CardContent>
            <div className={'orders-list mb-6'}>
              <div className={'border-bottom-dashed mb-4 pb-4'}>
                <div className={'orders text-foreground mb-2'}>
                  <p>
                    <span className={'dot Chicken'}></span> {'Margherita Hot Coffee - Regular'}
                  </p>{' '}
                  <p className={'text-foreground'}>{'×1'}</p>{' '}
                </div>{' '}
                <div className={'bg-muted rounded-md py-1 px-2'}>
                  <p className={'mb-0 font-medium flex items-center text-foreground'}>
                    <Icon name={'badge-info'} className={'mr-1'} />
                    {' Notes : Add More Onion, with extra Spicy'}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'orders text-foreground mb-4 pb-4 border-bottom-dashed'}>
                <p>
                  <span className={'dot Chicken'}></span> {'Caesar Salad'}
                </p>{' '}
                <p className={'text-foreground'}>{'×1'}</p>{' '}
              </div>{' '}
              <div className={'orders text-foreground mb-0'}>
                <p>
                  <span className={'dot Chicken'}></span> {'Apple Pie'}
                </p>{' '}
                <p className={'text-foreground'}>{'×1'}</p>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between gap-3'}>
              <div className={'progress-item'}>
                <div
                  className={'h-full bg-primary bg-emerald-500'}
                  style={{ width: '5%' }}
                ></div>{' '}
              </div>{' '}
              <p className={'mb-0 font-normal flex items-center'}>
                <Icon name={'clock'} className={'mr-1'} />
                {' 15:00'}
              </p>{' '}
            </div>{' '}
          </CardContent>{' '}
          <CardFooter
            className={
              'flex items-center justify-between gap-2 pt-0 border-0 flex-wrap xl:flex-nowrap'
            }
          >
            <DialogAction
              target={'cooking_started_modal'}
              variant={'outline'}
              className={'w-full timer-btn'}
            >
              <Icon name={'play'} className={'mr-2'} />
              <span className={'label'}>{'Play'}</span>{' '}
              <span className={'pl-1 font-semibold time'}>{'00:00'}</span>{' '}
            </DialogAction>{' '}
            <DialogAction
              target={'cooking_done_modal'}
              variant={'outline'}
              className={'w-full whitespace-nowrap'}
            >
              <Icon name={'check-check'} className={'mr-2'} />
              <span>{'Mark Done'}</span>{' '}
            </DialogAction>{' '}
          </CardFooter>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1 mb-0'}>
          <CardHeader className={'bg-red-500'}>
            <div className={'flex items-center justify-between flex-wrap gap-2'}>
              <div className={'flex items-center gap-2'}>
                <div className={'avatar rounded-full bg-card'}>
                  <Icon name={'hand-platter'} className={'text-[24px] text-foreground'} />
                </div>{' '}
                <p className={'mb-0 text-white font-semibold fs-14px'}>
                  {'Walk in Customer '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'Dine In'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <Badge className={'bg-card text-center text-foreground'}>{'#23896'}</Badge>{' '}
            </div>{' '}
          </CardHeader>{' '}
          <CardContent className={'border-b'}>
            <div className={'flex items-center justify-between gap-2 flex-wrap'}>
              <h6 className={'mb-0 font-normal text-[14px]'}>
                {'Token No : '}
                <span className={'font-semibold'}>{'42'}</span>{' '}
              </h6>{' '}
              <p className={'mb-0 font-normal text-foreground'}>{'15 Nov 2026, 03:22 PM'}</p>{' '}
            </div>{' '}
          </CardContent>{' '}
          <CardContent>
            <div className={'orders-list mb-6'}>
              <div className={'border-bottom-dashed mb-4 pb-4'}>
                <div className={'orders text-foreground mb-2'}>
                  <p>
                    <span className={'dot Chicken'}></span> {'Pesto Pasta'}
                  </p>{' '}
                  <p className={'text-foreground'}>{'×2'}</p>{' '}
                </div>{' '}
                <div className={'bg-muted rounded-md py-1 px-2'}>
                  <p className={'mb-0 font-medium flex items-center text-foreground'}>
                    <Icon name={'badge-info'} className={'mr-1'} />
                    {' Notes : Need extra Spicy'}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'orders text-foreground mborder-bottom-dashed mb-4 pb-4'}>
                <p>
                  <span className={'dot Chicken'}></span> {'Basil pesto, pine nuts'}
                </p>{' '}
                <p className={'text-foreground'}>{'×1'}</p>{' '}
              </div>{' '}
              <div className={'orders text-foreground mb-0'}>
                <p>
                  <span className={'dot Chicken'}></span> {'Lemon Tart'}
                </p>{' '}
                <p className={'text-foreground'}>{'×1'}</p>{' '}
              </div>{' '}
            </div>{' '}
            <p
              className={
                'text-center text-red-600 mb-4 flex items-center justify-center font-medium'
              }
            >
              <Icon name={'clock-alert'} className={'mr-1'} />
              {' Delayed By 5 Mins'}
            </p>{' '}
            <div className={'flex items-center justify-between gap-3'}>
              <div className={'progress-item'}>
                <div
                  className={'h-full bg-primary bg-emerald-500'}
                  style={{ width: '75%' }}
                ></div>{' '}
              </div>{' '}
              <p className={'mb-0 font-normal flex items-center'}>
                <Icon name={'clock'} className={'mr-1'} />
                {' 15:00'}
              </p>{' '}
            </div>{' '}
          </CardContent>{' '}
          <CardFooter
            className={
              'flex items-center justify-between gap-2 pt-0 border-0 flex-wrap xl:flex-nowrap'
            }
          >
            <DialogAction
              target={'cooking_started_modal'}
              variant={'outline'}
              className={'w-full timer-btn'}
            >
              <Icon name={'play'} className={'mr-2'} />
              <span className={'label'}>{'Play'}</span>{' '}
              <span className={'pl-1 font-semibold time'}>{'00:00'}</span>{' '}
            </DialogAction>{' '}
            <DialogAction
              target={'cooking_done_modal'}
              variant={'outline'}
              className={'w-full whitespace-nowrap'}
            >
              <Icon name={'check-check'} className={'mr-2'} />
              <span>{'Mark Done'}</span>{' '}
            </DialogAction>{' '}
          </CardFooter>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1 mb-0'}>
          <CardHeader className={'bg-emerald-500'}>
            <div className={'flex items-center justify-between flex-wrap gap-2'}>
              <div className={'flex items-center gap-2'}>
                <div className={'avatar rounded-full bg-card'}>
                  <Icon name={'hand-platter'} className={'text-[24px] text-foreground'} />
                </div>{' '}
                <p className={'mb-0 text-white font-semibold fs-14px'}>
                  {'Morgan Evans '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'Dine In'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <Badge className={'bg-card text-center text-foreground'}>{'#74758'}</Badge>{' '}
            </div>{' '}
          </CardHeader>{' '}
          <CardContent className={'border-b'}>
            <div className={'flex items-center justify-between gap-2 flex-wrap'}>
              <h6 className={'mb-0 font-normal text-[14px]'}>
                {'Token No : '}
                <span className={'font-semibold'}>{'30'}</span>{' '}
              </h6>{' '}
              <p className={'mb-0 font-normal text-foreground'}>{'15 Nov 2026, 02:45 PM'}</p>{' '}
            </div>{' '}
          </CardContent>{' '}
          <CardContent>
            <div className={'orders-list mb-6'}>
              <div className={'border-bottom-dashed mb-4 pb-4'}>
                <div className={'orders text-foreground mb-2'}>
                  <p>
                    <span className={'dot'}></span> {'Spicy Tofu Stir-Fry'}
                  </p>{' '}
                  <p className={'text-foreground'}>{'×1'}</p>{' '}
                </div>{' '}
                <div className={'bg-muted rounded-md py-1 px-2'}>
                  <p className={'mb-0 font-medium flex items-center text-foreground'}>
                    <Icon name={'badge-info'} className={'mr-1'} />
                    {' Notes : Add More Onion, with extra Spicy'}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'orders text-foreground mb-4 pb-4 border-bottom-dashed'}>
                <p>
                  <span className={'dot'}></span> {'Iced Americano'}
                </p>{' '}
                <p className={'text-foreground'}>{'×1'}</p>{' '}
              </div>{' '}
              <div className={'orders text-foreground mb-0'}>
                <p>
                  <span className={'dot'}></span> {'Chai Concentrate'}
                </p>{' '}
                <p className={'text-foreground'}>{'×1'}</p>{' '}
              </div>{' '}
            </div>{' '}
            <p
              className={
                'text-center text-red-600 mb-4 flex items-center justify-center font-medium'
              }
            >
              <Icon name={'clock-alert'} className={'mr-1'} />
              {' 25:15 Mins - Served Before 5 Mins'}
            </p>{' '}
            <div className={'flex items-center justify-between gap-3'}>
              <div className={'progress-item'}>
                <div
                  className={'h-full bg-primary bg-emerald-500'}
                  style={{ width: '85%' }}
                ></div>{' '}
              </div>{' '}
              <p className={'mb-0 font-normal flex items-center'}>
                <Icon name={'clock'} className={'mr-1'} />
                {' 12:00'}
              </p>{' '}
            </div>{' '}
          </CardContent>{' '}
          <CardFooter
            className={
              'flex items-center justify-between gap-2 pt-0 border-0 flex-wrap xl:flex-nowrap'
            }
          >
            <DialogAction target={'print_order'} variant={'outline'} className={'w-full'}>
              <Icon name={'printer'} className={'mr-2'} />
              {' Print Order '}
            </DialogAction>{' '}
          </CardFooter>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-4 lg:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1 mb-0'}>
          <CardHeader className={'bg-emerald-500'}>
            <div className={'flex items-center justify-between flex-wrap gap-2'}>
              <div className={'flex items-center gap-2'}>
                <div className={'avatar rounded-full bg-card'}>
                  <Icon name={'hand-platter'} className={'text-[24px] text-foreground'} />
                </div>{' '}
                <p className={'mb-0 text-white font-semibold fs-14px'}>
                  {'Walk in Customer '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'Delivery'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <Badge className={'bg-card text-center text-foreground'}>{'#35658'}</Badge>{' '}
            </div>{' '}
          </CardHeader>{' '}
          <CardContent className={'border-b'}>
            <div className={'flex items-center justify-between gap-2 flex-wrap'}>
              <h6 className={'mb-0 font-normal text-[14px]'}>
                {'Token No : '}
                <span className={'font-semibold'}>{'40'}</span>{' '}
              </h6>{' '}
              <p className={'mb-0 font-normal text-foreground'}>{'14 Nov 2026, 09:12 AM'}</p>{' '}
            </div>{' '}
          </CardContent>{' '}
          <CardContent>
            <div className={'orders-list mb-6'}>
              <div className={'border-bottom-dashed mb-4 pb-4'}>
                <div className={'orders text-foreground mb-2'}>
                  <p>
                    <span className={'dot success'}></span> {'Cheesecake'}
                  </p>{' '}
                  <p className={'text-foreground'}>{'×2'}</p>{' '}
                </div>{' '}
                <div className={'bg-muted rounded-md py-1 px-2'}>
                  <p className={'mb-0 font-medium flex items-center text-foreground'}>
                    <Icon name={'badge-info'} className={'mr-1'} />
                    {' Notes : Add More Cheese, with extra Spicy'}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'orders text-foreground mb-4 pb-4 border-bottom-dashed'}>
                <p>
                  <span className={'dot success'}></span> {'Creamy, graham'}
                </p>{' '}
                <p className={'text-foreground'}>{'×1'}</p>{' '}
              </div>{' '}
              <div className={'orders text-foreground mb-0'}>
                <p>
                  <span className={'dot success'}></span> {'Chicken Lollipop'}
                </p>{' '}
                <p className={'text-foreground'}>{'×1'}</p>{' '}
              </div>{' '}
            </div>{' '}
            <p
              className={
                'text-center text-red-600 mb-4 flex items-center justify-center font-medium'
              }
            >
              <Icon name={'clock-alert'} className={'mr-1'} />
              {' 25:15 Mins - Served Before 10 Mins'}
            </p>{' '}
            <div className={'flex items-center justify-between gap-3'}>
              <div className={'progress-item'}>
                <div
                  className={'h-full bg-primary bg-emerald-500'}
                  style={{ width: '90%' }}
                ></div>{' '}
              </div>{' '}
              <p className={'mb-0 font-normal flex items-center'}>
                <Icon name={'clock'} className={'mr-1'} />
                {' 40:00'}
              </p>{' '}
            </div>{' '}
          </CardContent>{' '}
          <CardFooter
            className={
              'flex items-center justify-between gap-2 pt-0 border-0 flex-wrap xl:flex-nowrap'
            }
          >
            <DialogAction target={'print_order'} variant={'outline'} className={'w-full'}>
              <Icon name={'printer'} className={'mr-2'} />
              {' Print Order '}
            </DialogAction>{' '}
          </CardFooter>{' '}
        </Card>{' '}
      </div>{' '}
    </div>
  );
}
