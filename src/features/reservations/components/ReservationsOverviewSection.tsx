import { Card, CardContent } from '@/shared/components/ui/card';
import { DialogAction } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Badge } from '@/shared/components/ui/badge';
import { Icon } from '@/shared/components/icon';

export function ReservationsOverviewSection() {
  return (
    <div className={'grid grid-cols-12 gap-x-6'}>
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1'}>
          <CardContent>
            <div className={'flex items-center gap-2 mb-4 flex-wrap'}>
              <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                <p className={'text-white font-semibold mb-0 relative'}>
                  {'Dec 15 '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <div>
                <h6 className={'mb-2 font-semibold'}>{'John Doe'}</h6>{' '}
                <div className={'flex items-center gap-2 flex-wrap'}>
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'clock'} className={'mr-1 text-foreground'} />
                    {' 10:45 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                    {' Table : 5 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                    {' Guests : 4 '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-bottom-dashed'}>
              <p className={'mb-4 flex items-center justify-between gap-2 flex-wrap'}>
                {'Created on '}
                <span className={'text-foreground'}>{'9 Nov 2026, 2:30PM'}</span>{' '}
              </p>{' '}
              <p className={'mb-0 flex items-center justify-between gap-2 flex-wrap'}>
                {'Status '}
                <Badge className={'bg-emerald-50 text-emerald-700'}>{'Booked'}</Badge>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between'}>
              <Button variant={'outline'}>{'View Note'}</Button>{' '}
              <div className={'flex items-center gap-2'}>
                <DialogAction
                  target={'edit_reservation'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-foreground'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                  aria-label={'trash-2'}
                >
                  <Icon name={'trash-2'} className={''} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1'}>
          <CardContent>
            <div className={'flex items-center flex-wrap gap-2 mb-4'}>
              <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                <p className={'text-white font-semibold mb-0 relative'}>
                  {'Nov 08 '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <div>
                <h6 className={'mb-2 font-semibold'}>{'Christopher Adams'}</h6>{' '}
                <div className={'flex items-center flex-wrap gap-2'}>
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'clock'} className={'mr-1 text-foreground'} />
                    {' 10:10 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                    {' Table : 5 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                    {' Guests : 7 '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-bottom-dashed'}>
              <p className={'mb-4 flex items-center justify-between gap-2 flex-wrap'}>
                {'Created on '}
                <span className={'text-foreground'}>{'16 Nov 2026, 2:30PM'}</span>{' '}
              </p>{' '}
              <p className={'mb-0 flex items-center justify-between gap-2 flex-wrap'}>
                {'Status '}
                <Badge className={'bg-red-50 text-red-700'}>{'Cancelled'}</Badge>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between'}>
              <Button variant={'outline'}>{'View Note'}</Button>{' '}
              <div className={'flex items-center gap-2'}>
                <DialogAction
                  target={'edit_reservation'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-foreground'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                  aria-label={'trash-2'}
                >
                  <Icon name={'trash-2'} className={''} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1'}>
          <CardContent>
            <div className={'flex items-center gap-2 flex-wrap mb-4'}>
              <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                <p className={'text-white font-semibold mb-0 relative'}>
                  {'Nov 07 '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <div>
                <h6 className={'mb-2 font-semibold'}>{'Daniel Mitchell'}</h6>{' '}
                <div className={'flex items-center flex-wrap gap-2'}>
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'clock'} className={'mr-1 text-foreground'} />
                    {' 10:31 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                    {' Table : 9 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                    {' Guests : 3 '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-bottom-dashed'}>
              <p className={'mb-4 flex items-center justify-between gap-2 flex-wrap'}>
                {'Created on '}
                <span className={'text-foreground'}>{'02 Aug 2026, 2:30PM'}</span>{' '}
              </p>{' '}
              <p className={'mb-0 flex items-center justify-between gap-2 flex-wrap'}>
                {'Status '}
                <Badge className={'bg-red-50 text-red-700'}>{'Cancelled'}</Badge>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between'}>
              <Button variant={'outline'}>{'View Note'}</Button>{' '}
              <div className={'flex items-center gap-2'}>
                <DialogAction
                  target={'edit_reservation'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-foreground'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                  aria-label={'trash-2'}
                >
                  <Icon name={'trash-2'} className={''} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1'}>
          <CardContent>
            <div className={'flex items-center gap-2 flex-wrap mb-4'}>
              <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                <p className={'text-white font-semibold mb-0 relative'}>
                  {'Nov 06 '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <div>
                <h6 className={'mb-2 font-semibold'}>{'Emily Parker'}</h6>{' '}
                <div className={'flex items-center flex-wrap gap-2'}>
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'clock'} className={'mr-1 text-foreground'} />
                    {' 10:40 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                    {' Table : 2 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                    {' Guests : 3 '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-bottom-dashed'}>
              <p className={'mb-4 flex items-center justify-between gap-2 flex-wrap'}>
                {'Created on '}
                <span className={'text-foreground'}>{'02 Aug 2026, 2:30PM'}</span>{' '}
              </p>{' '}
              <p className={'mb-0 flex items-center justify-between gap-2 flex-wrap'}>
                {'Status '}
                <Badge className={'bg-emerald-50 text-emerald-700'}>{'Booked'}</Badge>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between'}>
              <Button variant={'outline'}>{'View Note'}</Button>{' '}
              <div className={'flex items-center gap-2'}>
                <DialogAction
                  target={'edit_reservation'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-foreground'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                  aria-label={'trash-2'}
                >
                  <Icon name={'trash-2'} className={''} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1'}>
          <CardContent>
            <div className={'flex items-center gap-2 flex-wrap mb-4'}>
              <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                <p className={'text-white font-semibold mb-0 relative'}>
                  {'Nov 05 '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <div>
                <h6 className={'mb-2 font-semibold'}>{'Jennifer Brooks'}</h6>{' '}
                <div className={'flex items-center flex-wrap gap-2'}>
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'clock'} className={'mr-1 text-foreground'} />
                    {' 10:45 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                    {' Table : 2 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                    {' Guests : 1 '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-bottom-dashed'}>
              <p className={'mb-4 flex items-center justify-between gap-2 flex-wrap'}>
                {'Created on '}
                <span className={'text-foreground'}>{'11 Nov 2026, 4:00PM'}</span>{' '}
              </p>{' '}
              <p className={'mb-0 flex items-center justify-between gap-2 flex-wrap'}>
                {'Status '}
                <Badge className={'bg-emerald-50 text-emerald-700'}>{'Booked'}</Badge>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between'}>
              <Button variant={'outline'}>{'View Note'}</Button>{' '}
              <div className={'flex items-center gap-2'}>
                <DialogAction
                  target={'edit_reservation'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-foreground'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                  aria-label={'trash-2'}
                >
                  <Icon name={'trash-2'} className={''} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1'}>
          <CardContent>
            <div className={'flex items-center gap-2 flex-wrap mb-4'}>
              <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                <p className={'text-white font-semibold mb-0 relative'}>
                  {'Nov 04 '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <div>
                <h6 className={'mb-2 font-semibold'}>{'Matthew Collins'}</h6>{' '}
                <div className={'flex items-center flex-wrap gap-2'}>
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'clock'} className={'mr-1 text-foreground'} />
                    {' 10:43 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                    {' Table : 4 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                    {' Guests : 3 '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-bottom-dashed'}>
              <p className={'mb-4 flex items-center justify-between gap-2 flex-wrap'}>
                {'Created on '}
                <span className={'text-foreground'}>{'12 Nov 2026, 4:00PM'}</span>{' '}
              </p>{' '}
              <p className={'mb-0 flex items-center justify-between gap-2 flex-wrap'}>
                {'Status '}
                <Badge className={'bg-emerald-50 text-emerald-700'}>{'Booked'}</Badge>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between'}>
              <Button variant={'outline'}>{'View Note'}</Button>{' '}
              <div className={'flex items-center gap-2'}>
                <DialogAction
                  target={'edit_reservation'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-foreground'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                  aria-label={'trash-2'}
                >
                  <Icon name={'trash-2'} className={''} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1'}>
          <CardContent>
            <div className={'flex items-center gap-2 flex-wrap mb-4'}>
              <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                <p className={'text-white font-semibold mb-0 relative'}>
                  {'Nov 03 '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <div>
                <h6 className={'mb-2 font-semibold'}>{'Jacob Morgan'}</h6>{' '}
                <div className={'flex items-center flex-wrap gap-2'}>
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'clock'} className={'mr-1 text-foreground'} />
                    {' 10:15 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                    {' Table : 5 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                    {' Guests : 4 '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-bottom-dashed'}>
              <p className={'mb-4 flex items-center justify-between gap-2 flex-wrap'}>
                {'Created on '}
                <span className={'text-foreground'}>{'15 Dec 2026, 3:30PM'}</span>{' '}
              </p>{' '}
              <p className={'mb-0 flex items-center justify-between gap-2 flex-wrap'}>
                {'Status '}
                <Badge className={'bg-emerald-50 text-emerald-700'}>{'Booked'}</Badge>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between'}>
              <Button variant={'outline'}>{'View Note'}</Button>{' '}
              <div className={'flex items-center gap-2'}>
                <DialogAction
                  target={'edit_reservation'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-foreground'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                  aria-label={'trash-2'}
                >
                  <Icon name={'trash-2'} className={''} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1'}>
          <CardContent>
            <div className={'flex items-center gap-2 flex-wrap mb-4'}>
              <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                <p className={'text-white font-semibold mb-0 relative'}>
                  {'Nov 02 '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <div>
                <h6 className={'mb-2 font-semibold'}>{'Olivia Reed'}</h6>{' '}
                <div className={'flex items-center flex-wrap gap-2'}>
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'clock'} className={'mr-1 text-foreground'} />
                    {' 10:45 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                    {' Table : 12 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                    {' Guests : 8 '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-bottom-dashed'}>
              <p className={'mb-4 flex items-center justify-between gap-2 flex-wrap'}>
                {'Created on '}
                <span className={'text-foreground'}>{'22 Jan 2026, 2:00PM'}</span>{' '}
              </p>{' '}
              <p className={'mb-0 flex items-center justify-between gap-2 flex-wrap'}>
                {'Status '}
                <Badge className={'bg-emerald-50 text-emerald-700'}>{'Booked'}</Badge>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between'}>
              <Button variant={'outline'}>{'View Note'}</Button>{' '}
              <div className={'flex items-center gap-2'}>
                <DialogAction
                  target={'edit_reservation'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-foreground'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                  aria-label={'trash-2'}
                >
                  <Icon name={'trash-2'} className={''} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1'}>
          <CardContent>
            <div className={'flex items-center gap-2 flex-wrap mb-4'}>
              <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                <p className={'text-white font-semibold mb-0 relative'}>
                  {'Nov 01 '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <div>
                <h6 className={'mb-2 font-semibold'}>{'Ethan Sullivan'}</h6>{' '}
                <div className={'flex items-center flex-wrap gap-2'}>
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'clock'} className={'mr-1 text-foreground'} />
                    {' 10:49 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                    {' Table : 7 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                    {' Guests : 5 '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-bottom-dashed'}>
              <p className={'mb-4 flex items-center justify-between gap-2 flex-wrap'}>
                {'Created on '}
                <span className={'text-foreground'}>{'28 Feb 2026, 4:15PM'}</span>{' '}
              </p>{' '}
              <p className={'mb-0 flex items-center justify-between gap-2 flex-wrap'}>
                {'Status '}
                <Badge className={'bg-emerald-50 text-emerald-700'}>{'Booked'}</Badge>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between'}>
              <Button variant={'outline'}>{'View Note'}</Button>{' '}
              <div className={'flex items-center gap-2'}>
                <DialogAction
                  target={'edit_reservation'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-foreground'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                  aria-label={'trash-2'}
                >
                  <Icon name={'trash-2'} className={''} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1'}>
          <CardContent>
            <div className={'flex items-center gap-2 flex-wrap mb-4'}>
              <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                <p className={'text-white font-semibold mb-0 relative'}>
                  {'Oct 28 '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <div>
                <h6 className={'mb-2 font-semibold'}>{'John Morgan'}</h6>{' '}
                <div className={'flex items-center flex-wrap gap-2'}>
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'clock'} className={'mr-1 text-foreground'} />
                    {' 10:00 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                    {' Table : 5 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                    {' Guests : 4 '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-bottom-dashed'}>
              <p className={'mb-4 flex items-center justify-between gap-2 flex-wrap'}>
                {'Created on '}
                <span className={'text-foreground'}>{'15 Dec 2026, 3:30PM'}</span>{' '}
              </p>{' '}
              <p className={'mb-0 flex items-center justify-between gap-2 flex-wrap'}>
                {'Status '}
                <Badge className={'bg-emerald-50 text-emerald-700'}>{'Booked'}</Badge>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between'}>
              <Button variant={'outline'}>{'View Note'}</Button>{' '}
              <div className={'flex items-center gap-2'}>
                <DialogAction
                  target={'edit_reservation'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-foreground'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                  aria-label={'trash-2'}
                >
                  <Icon name={'trash-2'} className={''} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1'}>
          <CardContent>
            <div className={'flex items-center gap-2 flex-wrap mb-4'}>
              <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                <p className={'text-white font-semibold mb-0 relative'}>
                  {'Oct 27 '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <div>
                <h6 className={'mb-2 font-semibold'}>{'Steave Rogers'}</h6>{' '}
                <div className={'flex items-center flex-wrap gap-2'}>
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'clock'} className={'mr-1 text-foreground'} />
                    {' 10:30 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                    {' Table : 7 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                    {' Guests : 7 '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-bottom-dashed'}>
              <p className={'mb-4 flex items-center justify-between gap-2 flex-wrap'}>
                {'Created on '}
                <span className={'text-foreground'}>{'22 Jan 2026, 2:00PM'}</span>{' '}
              </p>{' '}
              <p className={'mb-0 flex items-center justify-between gap-2 flex-wrap'}>
                {'Status '}
                <Badge className={'bg-violet-50 text-violet-700'}>{'Paid'}</Badge>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between'}>
              <Button variant={'outline'}>{'View Note'}</Button>{' '}
              <div className={'flex items-center gap-2'}>
                <DialogAction
                  target={'edit_reservation'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-foreground'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                  aria-label={'trash-2'}
                >
                  <Icon name={'trash-2'} className={''} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 2xl:col-span-4 xl:col-span-6 md:col-span-6 flex'}>
        <Card className={'flex-1'}>
          <CardContent>
            <div className={'flex items-center gap-2 flex-wrap mb-4'}>
              <div className={'bg-dark reservation-date rounded-md p-2 text-center shrink-0'}>
                <p className={'text-white font-semibold mb-0 relative'}>
                  {'Oct 26 '}
                  <span className={'text-[13px] font-normal block mt-1'}>{'2026'}</span>{' '}
                </p>{' '}
              </div>{' '}
              <div>
                <h6 className={'mb-2 font-semibold'}>{'Ethan Royond'}</h6>{' '}
                <div className={'flex items-center flex-wrap gap-2'}>
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'clock'} className={'mr-1 text-foreground'} />
                    {' 10:30 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'sofa'} className={'mr-1 text-foreground'} />
                    {' Table : 3 '}
                  </p>{' '}
                  <span className={'even-line'}></span>{' '}
                  <p className={'flex items-center mb-0'}>
                    <Icon name={'users-round'} className={'mr-1 text-foreground'} />
                    {' Guests : 3 '}
                  </p>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
            <div className={'mb-4 pb-4 border-bottom-dashed'}>
              <p className={'mb-4 flex items-center justify-between gap-2 flex-wrap'}>
                {'Created on '}
                <span className={'text-foreground'}>{'28 Feb 2026, 4:15PM'}</span>{' '}
              </p>{' '}
              <p className={'mb-0 flex items-center justify-between gap-2 flex-wrap'}>
                {'Status '}
                <Badge className={'bg-violet-50 text-violet-700'}>{'Paid'}</Badge>{' '}
              </p>{' '}
            </div>{' '}
            <div className={'flex items-center justify-between'}>
              <Button variant={'outline'}>{'View Note'}</Button>{' '}
              <div className={'flex items-center gap-2'}>
                <DialogAction
                  target={'edit_reservation'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-foreground'}
                  aria-label={'pencil-line'}
                >
                  <Icon name={'pencil-line'} className={''} />
                </DialogAction>{' '}
                <DialogAction
                  target={'delete_modal'}
                  variant={'outline'}
                  className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                  aria-label={'trash-2'}
                >
                  <Icon name={'trash-2'} className={''} />
                </DialogAction>{' '}
              </div>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
    </div>
  );
}
