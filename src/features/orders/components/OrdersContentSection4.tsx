import { Card, CardContent } from '@/shared/components/ui/card';
import { DialogAction, PreviewTabPanel } from '@/shared/components/preview';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/components/ui/button';
import { Badge } from '@/shared/components/ui/badge';
import { Icon } from '@/shared/components/icon';

export function OrdersContentSection4() {
  return (
    <div className={'tab-content'}>
      <PreviewTabPanel
        group={'tabs-0'}
        value={'order-tab1'}
        className={'tab-pane'}
        id={'order-tab1'}
      >
        <div className={'grid grid-cols-12 gap-x-6'}>
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#56998'}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>
                        {'Dine In '}
                        <span className={'text-light'}>{'|'}</span> {' Table No : 3'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 24'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 06:24 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Grilled Chicken '}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot'}></span> {'Chicken Taco - Medium'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Lobster Thermidor'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Caesar Salad'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Pumpkin Soup'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-emerald-50 text-emerald-700 mb-0'}>{'Billed'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57001'}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>{'Take Away'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 25'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 06:55 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Vegan Burger '}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot success'}></span> {'Sweet Potato Fries'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Chocolate Lava Cake'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Caesar Salad'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Pumpkin Soup'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-emerald-50 text-emerald-700 mb-0'}>{'Billed'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57002'}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>{'Delivery'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 26'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 07:00 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Margherita Pizza '}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot success'}></span> {'Pasta Primavera'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Grilled Salmon Steak'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Cheese Burst Pizza'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Chicken Noodle Soup'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-emerald-50 text-emerald-700 mb-0'}>{'Billed'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57004'}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>{'Take Away'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 28'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 07:30 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Margherita Pizza '}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×2'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot success'}></span> {'Caesar Salad'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Corn Pizza'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Shrimp Tom Yum'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Tomato Basil Soup'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-violet-50 text-violet-700 mb-0'}>{'Paid'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57003'}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>
                        {'Dine In '}
                        <span className={'text-light'}>{'|'}</span> {' Table No : 7'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 27'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 07:15 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Steak Frites'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot success'}></span> {'Mushroom Risotto'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Tiramisu'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Quinoa Salad'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Lemon Mint Juice'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-emerald-50 text-emerald-700 mb-0'}>{'Billed'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57005 '}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>
                        {'Dine In '}
                        <span className={'text-light'}>{'|'}</span> {' Table No : 9'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 29'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 07:25 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Lobster Pasta'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot'}></span> {'Garlic Bread'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Chicken Taco'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Garlic Butter Shrimp'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Cheese Burst Pizza'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-violet-50 text-violet-700 mb-0'}>{'Paid'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
        </div>{' '}
      </PreviewTabPanel>{' '}
      <PreviewTabPanel
        group={'tabs-0'}
        value={'order-tab2'}
        className={'tab-pane'}
        id={'order-tab2'}
      >
        <div className={'grid grid-cols-12 gap-x-6'}>
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#56998'}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>
                        {'Dine In '}
                        <span className={'text-light'}>{'|'}</span> {' Table No : 3'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 24'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 06:24 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Grilled Chicken '}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot'}></span> {'Chicken Taco - Medium'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Lobster Thermidor'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Caesar Salad'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Pumpkin Soup'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-emerald-50 text-emerald-700 mb-0'}>{'Billed'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57001'}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>{'Take Away'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 25'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 06:55 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Vegan Burger '}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot success'}></span> {'Sweet Potato Fries'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Chocolate Lava Cake'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Caesar Salad'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Tomato Basil Soup'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-emerald-50 text-emerald-700 mb-0'}>{'Billed'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57002'}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>{'Delivery'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 26'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 07:00 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Grilled Chicken '}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot'}></span> {'Chicken Noodle'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Grilled Salmon Steak'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Cheese Burst Pizza'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Chicken Noodle Soup'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-emerald-50 text-emerald-700 mb-0'}>{'Billed'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
        </div>{' '}
      </PreviewTabPanel>{' '}
      <PreviewTabPanel
        group={'tabs-0'}
        value={'order-tab3'}
        className={'tab-pane'}
        id={'order-tab3'}
      >
        <div className={'grid grid-cols-12 gap-x-6'}>
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57001'}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>{'Take Away'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 25'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 06:55 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Vegan Burger '}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot success'}></span> {'Sweet Potato Fries'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Chocolate Lava Cake'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Caesar Salad'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Pumpkin Soup'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-emerald-50 text-emerald-700 mb-0'}>{'Billed'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57002'}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>{'Delivery'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 26'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 07:00 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Grilled Chicken '}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot'}></span> {'Chicken Noodle'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Grilled Salmon Steak'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Cheese Burst Pizza'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Chicken Noodle Soup'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-emerald-50 text-emerald-700 mb-0'}>{'Billed'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
        </div>{' '}
      </PreviewTabPanel>{' '}
      <PreviewTabPanel
        group={'tabs-0'}
        value={'order-tab4'}
        className={'tab-pane'}
        id={'order-tab4'}
      >
        <div className={'grid grid-cols-12 gap-x-6'}>
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57001'}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>{'Take Away'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 25'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 06:55 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Vegan Burger '}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot success'}></span> {'Sweet Potato Fries'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Chocolate Lava Cake'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Caesar Salad'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Pumpkin Soup'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-emerald-50 text-emerald-700 mb-0'}>{'Billed'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57002'}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>{'Delivery'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 26'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 07:00 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Chicken Noodle Soup '}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot'}></span> {'Grilled Chicken'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Grilled Salmon Steak'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Grilled Burst Chiken'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Chicken Noodle'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-emerald-50 text-emerald-700 mb-0'}>{'Billed'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57005 '}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>
                        {'Dine In '}
                        <span className={'text-light'}>{'|'}</span> {' Table No : 9'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 29'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 07:25 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Shrimp Tom Yum'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot success'}></span> {'Garlic Bread'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Quinoa Salad'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Garlic Butter Shrimp'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Cheese Burst Pizza'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-violet-50 text-violet-700 mb-0'}>{'Paid'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
        </div>{' '}
      </PreviewTabPanel>{' '}
      <PreviewTabPanel
        group={'tabs-0'}
        value={'order-tab5'}
        className={'tab-pane'}
        id={'order-tab5'}
      >
        <div className={'grid grid-cols-12 gap-x-6'}>
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57002'}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>{'Delivery'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 26'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 07:00 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Chicken Taco '}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot'}></span> {'Chicken Soup'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot'}></span> {'Grilled Salmon Steak'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Chicken Noodle'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot'}></span> {'Chicken Noodle Soup'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-emerald-50 text-emerald-700 mb-0'}>{'Billed'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
          <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
            <Card className={'flex-1'}>
              <CardContent>
                <div className={'flex items-center justify-between flex-wrap gap-3 mb-4'}>
                  <div className={'flex items-center justify-between flex-wrap gap-2'}>
                    <div className={'avatar avatar-lg bg-primary rounded-full'}>
                      <Icon name={'shopping-bag'} className={''} />
                    </div>{' '}
                    <div>
                      <h6 className={'mb-1 text-[14px] font-semibold'}>
                        <DialogAction target={'view_details'}>{'#57005 '}</DialogAction>{' '}
                      </h6>{' '}
                      <p className={'mb-0 flex items-center gap-2'}>
                        {'Dine In '}
                        <span className={'text-light'}>{'|'}</span> {' Table No : 9'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'dropstart'}>
                    <Button
                      variant={'outline'}
                      className={'h-8 text-xs size-9 p-0 rounded-full'}
                      type={'button'}
                      aria-haspopup={'true'}
                      aria-expanded={'false'}
                      aria-label={'Actions'}
                    >
                      <Icon name={'ellipsis-vertical'} className={''} />
                    </Button>{' '}
                    <ul className={'dropdown-menu p-4 preview-dropdown-menu'}>
                      <li>
                        <Link
                          to={'/pos'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pencil-line'} className={'mr-2'} />
                          {'Edit Order'}
                        </Link>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'check-check'} className={'mr-2'} />
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'delete_modal'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'x'} className={'mr-2'} />
                          {'Cancel'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'pay_complete_order'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'pointer'} className={'mr-2'} />
                          {'Pay & CompIete'}
                        </DialogAction>{' '}
                      </li>{' '}
                      <li>
                        <DialogAction
                          target={'print_reciept'}
                          className={
                            'block rounded px-3 py-2 hover:bg-muted rounded-md flex items-center'
                          }
                        >
                          <Icon name={'printer'} className={'mr-2'} />
                          {'Print Receipt'}
                        </DialogAction>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between mb-4'}>
                  <p className={'mb-0 text-[14px] font-semibold text-foreground'}>
                    <span className={'font-normal'}>{'Token No :'}</span> {' 29'}
                  </p>{' '}
                  <h6 className={'mb-0 font-semibold flex items-center gap-1'}>
                    <Icon name={'clock'} className={'text-[14px]'} />
                    {' 07:25 PM'}
                  </h6>{' '}
                </div>{' '}
                <div className={'mb-4 pb-4 border-b'}>
                  <div className={'orders-list'}>
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Lobster Pasta'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot success'}></span> {'Garlic Bread'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'bg-muted rounded-md py-1 px-2 mb-4'}>
                      <p className={'mb-0 font-medium flex items-center text-foreground'}>
                        <Icon name={'badge-info'} className={'mr-1'} />
                        {' Notes : Extra Spicy'}
                      </p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-4'}>
                      <p>
                        <span className={'dot success'}></span> {'Chicken Taco'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'more-menu'}>
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Garlic Butter Shrimp'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                      <div className={'orders text-foreground mb-4'}>
                        <p>
                          <span className={'dot success'}></span> {'Cheese Burst Pizza'}
                        </p>{' '}
                        <span className={'line'}></span>{' '}
                        <p className={'text-foreground'}>{'×1'}</p>{' '}
                      </div>{' '}
                    </div>{' '}
                    <div className={'view-all mt-1'}>
                      <Button
                        className={'font-semibold text-[14px] mb-0 text-primary viewall-button'}
                      >
                        {'+2 More Items'}
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap gap-3'}>
                  <Badge className={'bg-violet-50 text-violet-700 mb-0'}>{'Paid'}</Badge>{' '}
                  <details className="preview-dropdown relative">
                    <summary
                      className={
                        'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                      }
                    >
                      {' Pending '}
                    </summary>{' '}
                    <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Pending'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Preparing'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Served'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'Delivered'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CompIete'}
                        </Button>{' '}
                      </li>{' '}
                      <li>
                        <Button
                          variant="ghost"
                          className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
                        >
                          {'CanceI'}
                        </Button>{' '}
                      </li>{' '}
                    </ul>{' '}
                  </details>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
        </div>{' '}
      </PreviewTabPanel>{' '}
    </div>
  );
}
