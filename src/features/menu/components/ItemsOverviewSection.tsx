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
                  src={'/assets/img/items/food-01.jpg'}
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
              <DialogAction target={'items_details'}>{'Grilled Salmon Steak'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$80'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Non Veg'}
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
                  src={'/assets/img/items/food-02.jpg'}
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
              <DialogAction target={'items_details'}>{'Cheese Burst Pizza'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$66'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Veg'}
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
                  src={'/assets/img/items/food-03.jpg'}
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
              <DialogAction target={'items_details'}>{'Garlic Butter Shrimp'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$25'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Non Veg'}
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
                  src={'/assets/img/items/food-04.jpg'}
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
              <DialogAction target={'items_details'}>{'Chicken Taco'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$38'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Non Veg'}
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
                  src={'/assets/img/items/food-05.jpg'}
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
              <DialogAction target={'items_details'}>{'Grilled Chicken'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$49'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Non Veg'}
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
                  src={'/assets/img/items/food-06.jpg'}
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
              <DialogAction target={'items_details'}>{'Grilled Veggie Taco'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$69'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Non Veg'}
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
                  src={'/assets/img/items/food-07.jpg'}
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
              <DialogAction target={'items_details'}>{'Chicken Noodle Soup'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$45'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Non Veg'}
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
                  src={'/assets/img/items/food-08.jpg'}
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
              <DialogAction target={'items_details'}>{'Corn Pizza'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$96'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Veg'}
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
                  src={'/assets/img/items/food-09.jpg'}
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
              <DialogAction target={'items_details'}>{'Shrimp Tom Yum'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$25'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-red-600 mr-1'} />
                  {'Non Veg'}
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
                  src={'/assets/img/items/food-10.jpg'}
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
              <DialogAction target={'items_details'}>{'Tomato Basil Soup'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$44'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Veg'}
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
                  src={'/assets/img/items/food-11.jpg'}
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
                  {'Veg'}
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
                  src={'/assets/img/items/food-12.jpg'}
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
              <DialogAction target={'items_details'}>{'Pumpkin Soup'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$78'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Veg'}
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
                  src={'/assets/img/items/food-13.jpg'}
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
              <DialogAction target={'items_details'}>{'Al Pastor Taco'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$48'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Veg'}
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
                  src={'/assets/img/items/food-14.jpg'}
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
              <DialogAction target={'items_details'}>{'Caesar Salad'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$69'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Veg'}
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
                  src={'/assets/img/items/food-15.jpg'}
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
              <DialogAction target={'items_details'}>{'Quinoa Salad'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$110'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Veg'}
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
                  src={'/assets/img/items/food-16.jpg'}
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
              <DialogAction target={'items_details'}>{'Lemon Mint Juice'}</DialogAction>{' '}
            </h6>{' '}
            <div className={'flex items-center justify-between'}>
              <p className={'mb-0'}>{'$96'}</p>{' '}
              <div>
                <span className={'flex items-center'}>
                  <Icon name={'square-dot'} className={'text-emerald-600 mr-1'} />
                  {'Veg'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
    </div>
  );
}
