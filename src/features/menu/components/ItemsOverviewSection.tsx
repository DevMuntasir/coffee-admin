import { Card, CardContent } from '@/shared/components/ui/card';
import { DialogAction } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Icon } from '@/shared/components/icon';

export function ItemsOverviewSection() {
  return (
    <div className={'grid grid-cols-12 gap-x-6'}>
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/espresso.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Classic Espresso'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$80'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Hot'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/latte.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Cappuccino'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$66'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Iced'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/espresso.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Flat White'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$25'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Hot'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/latte.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Café Latte'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$38'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Hot'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/matcha.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Iced Americano'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$49'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Hot'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/tea.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Earl Grey Tea'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$69'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Hot'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/tea.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Masala Chai'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$45'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Hot'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/latte.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Caramel Macchiato'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$96'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Iced'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/tea.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Chocolate Muffin'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$25'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Hot'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/pastry.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Butter Croissant'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$44'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Iced'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/espresso.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Hot Chocolate'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$94'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Iced'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/latte.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Almond Croissant'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$78'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Iced'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/iced-coffee.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'English Breakfast Tea'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$48'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Iced'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/matcha.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Blueberry Scone'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$69'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Iced'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/pastry.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Banana Bread'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$110'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Iced'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 xl:col-span-3 lg:col-span-4 md:col-span-4 sm:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'food-items'}>
              <DialogAction target={'items_details'} aria-label={'Action'}>
                <img
                  className={'max-w-full h-auto mb-4 w-full rounded-md'}
                  src={'/assets/img/coffee/iced-coffee.png'}
                  alt={'item'}
                />
              </DialogAction>{' '}
              <Button
                variant="ghost"
                className={'food-items-menu'}
                aria-label={'ellipsis-vertical'}
              >
                <Icon name={'ellipsis-vertical'} className={''} />
              </Button>{' '}
              <ul className={'dropdown-menu dropdown-menu-split preview-dropdown-menu'}>
                <li>
                  <DialogAction
                    target={'edit_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'pencil-line'} className={'mr-2'} />
                    {'Edit Item'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'delete_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'trash-2'} className={'mr-2'} />
                    {'Delete'}
                  </DialogAction>{' '}
                </li>{' '}
                <li>
                  <DialogAction
                    target={'hide_item'}
                    className={'block rounded px-3 py-2 hover:bg-muted'}
                  >
                    <Icon name={'eye-off'} className={'mr-2'} />
                    {'Hide Item'}
                  </DialogAction>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
            <h6 className={'text-[14px] font-semibold'}>
              <DialogAction target={'items_details'}>{'Iced Lemon Tea'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$96'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Iced'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
    </div>
  );
}
