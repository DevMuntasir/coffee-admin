import { Card, CardContent } from '@/shared/components/ui/card';
import { DialogAction } from '@/shared/components/preview';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/components/ui/button';
import { Icon } from '@/shared/components/icon';

export function KanbanViewContentSection() {
  return (
    <div className={'flex gap-3 items-start overflow-auto project-status'}>
      <Card className={'mb-0'}>
        <CardContent>
          <div
            className={
              'top-item flex items-center justify-between bg-gray rounded-md py-4 px-4 mb-6'
            }
          >
            <span className={'mb-0 flex items-center gap-2 text-white font-semibold'}>
              <Icon name={'newspaper'} className={''} />
              {' New Orders '}
            </span>{' '}
            <span className={'text-white'}>{'03'}</span>{' '}
          </div>{' '}
          <div className={'kanban-drag'} id={'drag-one'}>
            <Card className={'flex-1 kanban-card'}>
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
                        <span className={'dot'}></span> {'Iced Americano '}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                    <div className={'orders text-foreground mb-2'}>
                      <p>
                        <span className={'dot'}></span> {'Café Latte - Medium'}
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
                    <div className={'orders text-foreground'}>
                      <p>
                        <span className={'dot'}></span> {'Café Mocha'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-nowrap gap-3'}>
                  <Button variant={'outline'} className={'w-full'}>
                    {' Cancel'}
                  </Button>{' '}
                  <Button variant={'outline'} className={'w-full'}>
                    {' Start'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
            <Card className={'flex-1 kanban-card'}>
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
                    <div className={'orders text-foreground'}>
                      <p>
                        <span className={'dot success'}></span> {'Chocolate Lava Cake'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-nowrap gap-3'}>
                  <Button variant={'outline'} className={'w-full'}>
                    {' Cancel'}
                  </Button>{' '}
                  <Button variant={'outline'} className={'w-full'}>
                    {' Start'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
            <Card className={'flex-1 kanban-card'}>
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
                        <span className={'dot success'}></span> {'Margherita Hot Coffee '}
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
                    <div className={'orders text-foreground'}>
                      <p>
                        <span className={'dot success'}></span> {'Classic Espresso'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-nowrap gap-3'}>
                  <Button variant={'outline'} className={'w-full'}>
                    {' Cancel'}
                  </Button>{' '}
                  <Button variant={'outline'} className={'w-full'}>
                    {' Start'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
        </CardContent>{' '}
      </Card>{' '}
      <Card className={'mb-0'}>
        <CardContent>
          <div
            className={
              'top-item flex items-center justify-between bg-slate-500 rounded-md py-4 px-4 mb-6'
            }
          >
            <span className={'mb-0 flex items-center gap-2 text-white font-semibold'}>
              <Icon name={'package-2'} className={''} />
              {' Processing '}
            </span>{' '}
            <span className={'text-white'}>{'02'}</span>{' '}
          </div>{' '}
          <div className={'kanban-drag'} id={'drag-two'}>
            <Card className={'flex-1 kanban-card'}>
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
                    <div className={'orders text-foreground'}>
                      <p>
                        <span className={'dot success'}></span> {'Chocolate Lava Cake'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-nowrap gap-3'}>
                  <Button variant={'outline'} className={'w-full'}>
                    {' Cancel'}
                  </Button>{' '}
                  <Button variant={'outline'} className={'w-full'}>
                    {' Mark Done'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
            <Card className={'flex-1 kanban-card'}>
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
                        <span className={'dot success'}></span> {'Margherita Hot Coffee '}
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
                    <div className={'orders text-foreground'}>
                      <p>
                        <span className={'dot success'}></span> {'Classic Espresso'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-nowrap gap-3'}>
                  <Button variant={'outline'} className={'w-full'}>
                    {' Cancel'}
                  </Button>{' '}
                  <Button variant={'outline'} className={'w-full'}>
                    {' Mark Done'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
        </CardContent>{' '}
      </Card>{' '}
      <Card className={'mb-0'}>
        <CardContent>
          <div
            className={
              'top-item flex items-center justify-between bg-emerald-500 rounded-md py-4 px-4 mb-6'
            }
          >
            <span className={'mb-0 flex items-center gap-2 text-white font-semibold'}>
              <Icon name={'check-check'} className={''} />
              {' Completed '}
            </span>{' '}
            <span className={'text-white'}>{'01'}</span>{' '}
          </div>{' '}
          <div className={'kanban-drag'} id={'drag-three'}>
            <Card className={'flex-1 kanban-card'}>
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
                        <span className={'dot success'}></span> {'Margherita Hot Coffee '}
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
                    <div className={'orders text-foreground'}>
                      <p>
                        <span className={'dot success'}></span> {'Classic Espresso'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-nowrap gap-3'}>
                  <DialogAction target={'print_reciept'} variant={'outline'} className={'w-full'}>
                    {' Print Reciept'}
                  </DialogAction>{' '}
                  <Button variant={'outline'} className={'w-full'}>
                    {' CompIete'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
        </CardContent>{' '}
      </Card>{' '}
      <Card className={'mb-0'}>
        <CardContent>
          <div
            className={
              'top-item flex items-center justify-between bg-red-500 rounded-md py-4 px-4 mb-6'
            }
          >
            <span className={'mb-0 flex items-center gap-2 text-white font-semibold'}>
              <Icon name={'x'} className={''} />
              {' Cancelled '}
            </span>{' '}
            <span className={'text-white'}>{'01'}</span>{' '}
          </div>{' '}
          <div className={'kanban-drag'} id={'drag-four'}>
            <Card className={'flex-1 kanban-card'}>
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
                        <span className={'dot success'}></span> {'Margherita Hot Coffee '}
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
                    <div className={'orders text-foreground'}>
                      <p>
                        <span className={'dot success'}></span> {'Classic Espresso'}
                      </p>{' '}
                      <span className={'line'}></span>{' '}
                      <p className={'text-foreground'}>{'×1'}</p>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-nowrap gap-3'}>
                  <DialogAction target={'delete_modal'} variant={'outline'} className={'w-full'}>
                    {' Remove'}
                  </DialogAction>{' '}
                  <Button variant={'outline'} className={'w-full'}>
                    {' Reorder'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
        </CardContent>{' '}
      </Card>{' '}
    </div>
  );
}
