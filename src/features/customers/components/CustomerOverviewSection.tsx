import { Card, CardContent } from '@/shared/components/ui/card';
import { DialogAction } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Badge } from '@/shared/components/ui/badge';
import { Icon } from '@/shared/components/icon';

export function CustomerOverviewSection() {
  return (
    <div className={'grid grid-cols-12 gap-x-6'}>
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-4 md:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'flex items-center justify-between mb-4'}>
              <div className={'flex items-center'}>
                <DialogAction
                  target={'view_details'}
                  className={'avatar avatar-rounded shrink-0 mr-2'}
                  aria-label={'Action'}
                >
                  <img
                    className={'max-w-full h-auto'}
                    src={'/assets/img/profiles/avatar-32.jpg'}
                    alt={'category'}
                  />
                </DialogAction>{' '}
                <span>
                  <h6 className={'text-[14px] font-semibold mb-0'}>
                    <DialogAction target={'view_details'}>{'Adrian James'}</DialogAction>{' '}
                  </h6>{' '}
                  <p className={'mb-0'}>{'Male'}</p>{' '}
                </span>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-muted text-foreground font-medium text-[13px] mb-0'}>
                  {'#CR6569'}
                </Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4'}>
              <div className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'phone'} className={'text-foreground mr-2'} />
                  {' Phone Number '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'+1 987 654 3210'}</span>{' '}
              </div>{' '}
              <div className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'mail'} className={'text-foreground mr-2'} />
                  {' Email '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'adrian@example.com'}</span>{' '}
              </div>{' '}
              <div className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'calendar-fold'} className={'text-foreground mr-2'} />
                  {' Created at '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>
                  {'25 Nov, 2026, 02:44 PM'}
                </span>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between border-t pt-4'}>
              <Badge className={'bg-emerald-50 text-emerald-700'}>{'Active'}</Badge>{' '}
              <div className={'flex'}>
                <DialogAction
                  target={'edit_customer'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full mr-2'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full'}
                  aria-label={'trash-2 text-danger'}
                >
                  <Icon name={'trash-2'} className={'text-red-600'} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-4 md:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'flex items-center justify-between mb-4'}>
              <div className={'flex items-center'}>
                <DialogAction
                  target={'view_details'}
                  className={'avatar avatar-rounded shrink-0 mr-2'}
                  aria-label={'Action'}
                >
                  <img
                    className={'max-w-full h-auto'}
                    src={'/assets/img/profiles/avatar-33.jpg'}
                    alt={'category'}
                  />
                </DialogAction>{' '}
                <span>
                  <h6 className={'text-[14px] font-semibold mb-0'}>
                    <DialogAction target={'view_details'}>{'Sue Allen'}</DialogAction>{' '}
                  </h6>{' '}
                  <p className={'mb-0'}>{'Female'}</p>{' '}
                </span>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-muted text-foreground font-medium text-[13px] mb-0'}>
                  {'#CR8238'}
                </Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4'}>
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'phone'} className={'text-foreground mr-2'} />
                  {' Phone Number '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'+1 67890 12345'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'mail'} className={'text-foreground mr-2'} />
                  {' Email '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'sue@example.com'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'calendar-fold'} className={'text-foreground mr-2'} />
                  {' Created at '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>
                  {'30 Nov, 2026 - 03:15 PM'}
                </span>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between border-t pt-4'}>
              <Badge className={'bg-red-50 text-red-700'}>{'Disabled'}</Badge>{' '}
              <div className={'flex'}>
                <DialogAction
                  target={'edit_customer'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full mr-2'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full'}
                  aria-label={'trash-2 text-danger'}
                >
                  <Icon name={'trash-2'} className={'text-red-600'} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-4 md:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'flex items-center justify-between mb-4'}>
              <div className={'flex items-center'}>
                <DialogAction
                  target={'view_details'}
                  className={'avatar avatar-rounded shrink-0 mr-2'}
                  aria-label={'Action'}
                >
                  <img
                    className={'max-w-full h-auto'}
                    src={'/assets/img/profiles/avatar-34.jpg'}
                    alt={'category'}
                  />
                </DialogAction>{' '}
                <span>
                  <h6 className={'text-[14px] font-semibold mb-0'}>
                    <DialogAction target={'view_details'}>{'Frank Barrett'}</DialogAction>{' '}
                  </h6>{' '}
                  <p className={'mb-0'}>{'Female'}</p>{' '}
                </span>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-muted text-foreground font-medium text-[13px] mb-0'}>
                  {'#CR4824'}
                </Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4'}>
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'phone'} className={'text-foreground mr-2'} />
                  {' Phone Number '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'+1 23456 78901'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'mail'} className={'text-foreground mr-2'} />
                  {' Email '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'frank@example.com'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'calendar-fold'} className={'text-foreground mr-2'} />
                  {' Created at '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>
                  {'05 Dec, 2026 - 11:30 AM'}
                </span>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between border-t pt-4'}>
              <Badge className={'bg-emerald-50 text-emerald-700'}>{'Active'}</Badge>{' '}
              <div className={'flex'}>
                <DialogAction
                  target={'edit_customer'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full mr-2'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full'}
                  aria-label={'trash-2 text-danger'}
                >
                  <Icon name={'trash-2'} className={'text-red-600'} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-4 md:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'flex items-center justify-between mb-4'}>
              <div className={'flex items-center'}>
                <Button
                  variant="ghost"
                  className={'avatar avatar-rounded bg-muted shrink-0 mr-2'}
                  aria-label={'user text-dark fs-16'}
                >
                  <Icon name={'user'} className={'text-foreground text-[16px]'} />
                </Button>{' '}
                <span>
                  <h6 className={'text-[14px] font-semibold mb-0'}>
                    <DialogAction target={'view_details'}>{'Walkin Customer'}</DialogAction>{' '}
                  </h6>{' '}
                  <p className={'mb-0'}>{'Male'}</p>{' '}
                </span>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-muted text-foreground font-medium text-[13px] mb-0'}>
                  {'#CR4578'}
                </Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4'}>
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'phone'} className={'text-foreground mr-2'} />
                  {' Phone Number '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'+1 56985 65895'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'mail'} className={'text-foreground mr-2'} />
                  {' Email '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'info@example.com'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'calendar-fold'} className={'text-foreground mr-2'} />
                  {' Created at '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>
                  {'25 Nov, 2026, 02:44 PM'}
                </span>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between border-t pt-4'}>
              <Badge className={'bg-emerald-50 text-emerald-700'}>{'Active'}</Badge>{' '}
              <div className={'flex'}>
                <DialogAction
                  target={'edit_customer'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full mr-2'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full'}
                  aria-label={'trash-2 text-danger'}
                >
                  <Icon name={'trash-2'} className={'text-red-600'} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-4 md:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'flex items-center justify-between mb-4'}>
              <div className={'flex items-center'}>
                <Button
                  variant="ghost"
                  className={'avatar avatar-rounded bg-muted shrink-0 mr-2'}
                  aria-label={'user text-dark fs-16'}
                >
                  <Icon name={'user'} className={'text-foreground text-[16px]'} />
                </Button>{' '}
                <span>
                  <h6 className={'text-[14px] font-semibold mb-0'}>
                    <DialogAction target={'view_details'}>{'Walkin Customer'}</DialogAction>{' '}
                  </h6>{' '}
                  <p className={'mb-0'}>{'Female'}</p>{' '}
                </span>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-muted text-foreground font-medium text-[13px] mb-0'}>
                  {'#CR6569'}
                </Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4'}>
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'phone'} className={'text-foreground mr-2'} />
                  {' Phone Number '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'+1 42367 12345'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'mail'} className={'text-foreground mr-2'} />
                  {' Email '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'hello@example.com'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'calendar-fold'} className={'text-foreground mr-2'} />
                  {' Created at '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>
                  {'26 Nov, 2026 - 03:15 PM'}
                </span>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between border-t pt-4'}>
              <Badge className={'bg-emerald-50 text-emerald-700'}>{'Active'}</Badge>{' '}
              <div className={'flex'}>
                <DialogAction
                  target={'edit_customer'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full mr-2'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full'}
                  aria-label={'trash-2 text-danger'}
                >
                  <Icon name={'trash-2'} className={'text-red-600'} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-4 md:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'flex items-center justify-between mb-4'}>
              <div className={'flex items-center'}>
                <DialogAction
                  target={'view_details'}
                  className={'avatar avatar-rounded shrink-0 mr-2'}
                  aria-label={'Action'}
                >
                  <img
                    className={'max-w-full h-auto'}
                    src={'/assets/img/profiles/avatar-36.jpg'}
                    alt={'category'}
                  />
                </DialogAction>{' '}
                <span>
                  <h6 className={'text-[14px] font-semibold mb-0'}>
                    <DialogAction target={'view_details'}>{'Jim Vickers'}</DialogAction>{' '}
                  </h6>{' '}
                  <p className={'mb-0'}>{'Male'}</p>{' '}
                </span>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-muted text-foreground font-medium text-[13px] mb-0'}>
                  {'#CR5458'}
                </Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4'}>
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'phone'} className={'text-foreground mr-2'} />
                  {' Phone Number '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'+1 78912 34567'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'mail'} className={'text-foreground mr-2'} />
                  {' Email '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'jim@example.com'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'calendar-fold'} className={'text-foreground mr-2'} />
                  {' Created at '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>
                  {'27 Nov, 2026 - 09:30 AM'}
                </span>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between border-t pt-4'}>
              <Badge className={'bg-red-50 text-red-700'}>{'Disabled'}</Badge>{' '}
              <div className={'flex'}>
                <DialogAction
                  target={'edit_customer'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full mr-2'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full'}
                  aria-label={'trash-2 text-danger'}
                >
                  <Icon name={'trash-2'} className={'text-red-600'} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-4 md:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'flex items-center justify-between mb-4'}>
              <div className={'flex items-center'}>
                <DialogAction
                  target={'view_details'}
                  className={'avatar avatar-rounded shrink-0 mr-2'}
                  aria-label={'Action'}
                >
                  <img
                    className={'max-w-full h-auto'}
                    src={'/assets/img/profiles/avatar-40.jpg'}
                    alt={'category'}
                  />
                </DialogAction>{' '}
                <span>
                  <h6 className={'text-[14px] font-semibold mb-0'}>
                    <DialogAction target={'view_details'}>{'David Belcher'}</DialogAction>{' '}
                  </h6>{' '}
                  <p className={'mb-0'}>{'Male'}</p>{' '}
                </span>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-muted text-foreground font-medium text-[13px] mb-0'}>
                  {'#CR5458'}
                </Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4'}>
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'phone'} className={'text-foreground mr-2'} />
                  {' Phone Number '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'+1 23456 78901'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'mail'} className={'text-foreground mr-2'} />
                  {' Email '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'david@example.com'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'calendar-fold'} className={'text-foreground mr-2'} />
                  {' Created at '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>
                  {'12 Dec, 2026 - 09:15 AM'}
                </span>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between border-t pt-4'}>
              <Badge className={'bg-emerald-50 text-emerald-700'}>{'Active'}</Badge>{' '}
              <div className={'flex'}>
                <DialogAction
                  target={'edit_customer'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full mr-2'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full'}
                  aria-label={'trash-2 text-danger'}
                >
                  <Icon name={'trash-2'} className={'text-red-600'} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-4 md:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'flex items-center justify-between mb-4'}>
              <div className={'flex items-center'}>
                <DialogAction
                  target={'view_details'}
                  className={'avatar avatar-rounded shrink-0 mr-2'}
                  aria-label={'Action'}
                >
                  <img
                    className={'max-w-full h-auto'}
                    src={'/assets/img/profiles/avatar-37.jpg'}
                    alt={'category'}
                  />
                </DialogAction>{' '}
                <span>
                  <h6 className={'text-[14px] font-semibold mb-0'}>
                    <DialogAction target={'view_details'}>{'Nancy Chapman'}</DialogAction>{' '}
                  </h6>{' '}
                  <p className={'mb-0'}>{'Female'}</p>{' '}
                </span>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-muted text-foreground font-medium text-[13px] mb-0'}>
                  {'#7ED321'}
                </Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4'}>
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'phone'} className={'text-foreground mr-2'} />
                  {' Phone Number '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'+1 34567 89012'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'mail'} className={'text-foreground mr-2'} />
                  {' Email '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'nancy@example.com'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'calendar-fold'} className={'text-foreground mr-2'} />
                  {' Created at '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>
                  {'14 Jan, 2026 - 11:30 AM'}
                </span>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between border-t pt-4'}>
              <Badge className={'bg-emerald-50 text-emerald-700'}>{'Active'}</Badge>{' '}
              <div className={'flex'}>
                <DialogAction
                  target={'edit_customer'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full mr-2'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full'}
                  aria-label={'trash-2 text-danger'}
                >
                  <Icon name={'trash-2'} className={'text-red-600'} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-4 md:col-span-6'}>
        <Card>
          <CardContent>
            <div className={'flex items-center justify-between mb-4'}>
              <div className={'flex items-center'}>
                <DialogAction
                  target={'view_details'}
                  className={'avatar avatar-rounded shrink-0 mr-2'}
                  aria-label={'Action'}
                >
                  <img
                    className={'max-w-full h-auto'}
                    src={'/assets/img/profiles/avatar-41.jpg'}
                    alt={'category'}
                  />
                </DialogAction>{' '}
                <span>
                  <h6 className={'text-[14px] font-semibold mb-0'}>
                    <DialogAction target={'view_details'}>{'Julie Kangas'}</DialogAction>{' '}
                  </h6>{' '}
                  <p className={'mb-0'}>{'Female'}</p>{' '}
                </span>{' '}
              </div>{' '}
              <div>
                <Badge className={'bg-muted text-foreground font-medium text-[13px] mb-0'}>
                  {'#D0021B'}
                </Badge>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4'}>
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'phone'} className={'text-foreground mr-2'} />
                  {' Phone Number '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'+1 45678 90123'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'mail'} className={'text-foreground mr-2'} />
                  {' Email '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>{'julie@example.com'}</span>{' '}
              </p>{' '}
              <p className={'flex items-center justify-between mb-2'}>
                <span className={'flex items-center'}>
                  <Icon name={'calendar-fold'} className={'text-foreground mr-2'} />
                  {' Created at '}
                </span>{' '}
                <span className={'font-medium text-foreground'}>
                  {'05 Feb, 2026 - 04:20 PM'}
                </span>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between border-t pt-4'}>
              <Badge className={'bg-emerald-50 text-emerald-700'}>{'Active'}</Badge>{' '}
              <div className={'flex'}>
                <DialogAction
                  target={'edit_customer'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full mr-2'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full'}
                  aria-label={'trash-2 text-danger'}
                >
                  <Icon name={'trash-2'} className={'text-red-600'} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
    </div>
  );
}
