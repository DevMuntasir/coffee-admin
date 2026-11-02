import { Card, CardContent } from '@/shared/components/ui/card';
import { PreviewForm } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Select } from '@/shared/components/ui/select';
import { Icon } from '@/shared/components/icon';

export function StoreSettingsOverviewSection() {
  return (
    <div>
      <Card className={'mb-0'}>
        <CardContent>
          <PreviewForm>
            <div className={'grid grid-cols-12 gap-x-6'}>
              <div className={'col-span-12 xl:col-span-12'}>
                <div className={'mb-4 flex items-center flex-wrap gap-3'}>
                  <div className={'avatar avatar-3xl border bg-muted'}>
                    <Icon name={'images'} className={'text-[28px] text-foreground'} />
                  </div>{' '}
                  <div>
                    <label className={'mb-2 block font-medium text-foreground mb-1'}>
                      {'Upload Store Image'}
                    </label>{' '}
                    <p className={'text-[13px] mb-4'}>{'Image should be with in 5 MB'}</p>{' '}
                    <div className={'flex items-center'}>
                      <div className={'size-9 p-0 h-8 text-xs rounded-full relative mr-2'}>
                        <input
                          className={'absolute w-full h-full top-0 left-0 opacity-0'}
                          type={'file'}
                          aria-label={'file'}
                        />
                        <Icon name={'upload'} className={''} />
                      </div>{' '}
                      <Button
                        variant={'outline'}
                        className={'size-9 p-0 h-8 text-xs rounded-full text-red-600'}
                        aria-label={'trash-2'}
                      >
                        <Icon name={'trash-2'} className={''} />
                      </Button>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-12'}>
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'Store Name'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Input type={'text'} aria-label={'Store Name *'} />
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-6'}>
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'Address 1'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Input type={'text'} aria-label={'Address 1 *'} />
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-6'}>
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>{'Address 2'}</label>{' '}
                  <Input type={'text'} aria-label={'Address 2'} />
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-3'}>
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'Country'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Select aria-label={'Country *'}>
                    <option>{'Select'}</option> <option>{'United States'}</option>{' '}
                    <option>{'Canada'}</option> <option>{'Germany'}</option>{' '}
                    <option>{'France'}</option>{' '}
                  </Select>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-3'}>
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'State'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Select aria-label={'State *'}>
                    <option>{'Select'}</option> <option>{'California'}</option>{' '}
                    <option>{'New York'}</option> <option>{'Texas'}</option>{' '}
                    <option>{'Florida'}</option>{' '}
                  </Select>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-3'}>
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'City'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Select aria-label={'City *'}>
                    <option>{'Select'}</option> <option>{'Los Angeles'}</option>{' '}
                    <option>{'San Diego'}</option> <option>{'Fresno'}</option>{' '}
                    <option>{'San Francisco'}</option>{' '}
                  </Select>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-3'}>
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'Pincode'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Input type={'text'} aria-label={'Pincode *'} />
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-6'}>
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'Email'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Input type={'email'} aria-label={'Email *'} />
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-6'}>
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'Phone'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Input type={'tel'} id={'phone'} name={'phone'} />
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-12'}>
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'Currency'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Select aria-label={'Currency *'}>
                    <option>{'Select'}</option> <option>{'USD'}</option> <option>{'AED'}</option>{' '}
                    <option>{'EUR'}</option> <option>{'INR'}</option>{' '}
                  </Select>{' '}
                </div>{' '}
              </div>{' '}
              {/* <div className={'col-span-12 md:col-span-6'}>
                <div className={'mb-4'}>
                  <div className={'flex items-center gap-2 mb-4'}>
                    <input
                      className={'size-4 accent-primary'}
                      type={'checkbox'}
                      role={'switch'}
                      id={'switchCheckChecked'}
                      defaultChecked={true}
                    />
                    <label className={'text-foreground'} htmlFor={'switchCheckChecked'}>
                      {'Enable QR Menu'}
                    </label>{' '}
                  </div>{' '}
                  <div className={'flex items-center gap-2 mb-4'}>
                    <input
                      className={'size-4 accent-primary'}
                      type={'checkbox'}
                      role={'switch'}
                      id={'switchCheckChecked1'}
                      defaultChecked={true}
                    />
                    <label className={'text-foreground'} htmlFor={'switchCheckChecked1'}>
                      {'Enable Take Away'}
                    </label>{' '}
                  </div>{' '}
                  <div className={'flex items-center gap-2 mb-4'}>
                    <input
                      className={'size-4 accent-primary'}
                      type={'checkbox'}
                      role={'switch'}
                      id={'switchCheckChecked2'}
                      defaultChecked={true}
                    />
                    <label className={'text-foreground'} htmlFor={'switchCheckChecked2'}>
                      {'Enable Dine In'}
                    </label>{' '}
                  </div>{' '}
                  <div className={'flex items-center gap-2 mb-0'}>
                    <input
                      className={'size-4 accent-primary'}
                      type={'checkbox'}
                      role={'switch'}
                      id={'switchCheckChecked3'}
                    />
                    <label className={'text-foreground'} htmlFor={'switchCheckChecked3'}>
                      {'Enable Reservation'}
                    </label>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '} */}
              {/* <div className={'col-span-12 md:col-span-6'}>
                <div className={'mb-0'}>
                  <div className={'flex items-center gap-2 mb-4'}>
                    <input
                      className={'size-4 accent-primary'}
                      type={'checkbox'}
                      role={'switch'}
                      id={'switchCheckChecked4'}
                      defaultChecked={true}
                    />
                    <label className={'text-foreground'} htmlFor={'switchCheckChecked4'}>
                      {'Enable Order Via QR Menu'}
                    </label>{' '}
                  </div>{' '}
                  <div className={'flex items-center gap-2 mb-4'}>
                    <input
                      className={'size-4 accent-primary'}
                      type={'checkbox'}
                      role={'switch'}
                      id={'switchCheckChecked5'}
                      defaultChecked={true}
                    />
                    <label className={'text-foreground'} htmlFor={'switchCheckChecked5'}>
                      {'Enable Delivery'}
                    </label>{' '}
                  </div>{' '}
                </div>{' '}
              </div> */}
            </div>{' '}
            <div className={'flex items-center justify-end flex-wrap row-gap-2 border-t mt-2 pt-6'}>
              <Button variant={'outline'} className={'mr-2'} type={'button'}>
                {'Cancel'}
              </Button>{' '}
              <Button variant={'default'} type={'button'}>
                {'Save Changes'}
              </Button>{' '}
            </div>{' '}
          </PreviewForm>{' '}
        </CardContent>{' '}
      </Card>{' '}
    </div>
  );
}
