import { Card, CardContent } from '@/shared/components/ui/card';
import { PreviewForm } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';

export function DeliverySettingsOverviewSection() {
  return (
    <div>
      <Card className={'mb-0'}>
        <CardContent>
          <PreviewForm>
            <Card>
              <CardContent>
                <div className={'flex items-center gap-2 mb-4 justify-between pl-0'}>
                  <label
                    className={'text-foreground text-[16px] font-bold'}
                    htmlFor={'switchCheckChecked'}
                  >
                    {'Free Delivery'}
                  </label>{' '}
                  <input
                    className={'size-4 accent-primary'}
                    type={'checkbox'}
                    role={'switch'}
                    id={'switchCheckChecked'}
                    defaultChecked={true}
                  />
                </div>{' '}
                <div className={'mb-0'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'Free Delivery Over ($)'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Input type={'text'} aria-label={'Free Delivery Over ($) *'} />
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
            <Card>
              <CardContent>
                <div className={'flex items-center gap-2 mb-4 justify-between pl-0'}>
                  <label
                    className={'text-foreground text-[16px] font-bold'}
                    htmlFor={'switchCheckChecked1'}
                  >
                    {'Fixed Delivery Charges'}
                  </label>{' '}
                  <input
                    className={'size-4 accent-primary'}
                    type={'checkbox'}
                    role={'switch'}
                    id={'switchCheckChecked1'}
                    defaultChecked={true}
                  />
                </div>{' '}
                <div className={'mb-0'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'Fixed Delivery Amount ($)'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Input type={'text'} aria-label={'Fixed Delivery Amount ($) *'} />
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
            <Card className={'mb-0'}>
              <CardContent>
                <div className={'flex items-center gap-2 mb-4 justify-between pl-0'}>
                  <label
                    className={'text-foreground text-[16px] font-bold'}
                    htmlFor={'switchCheckChecked2'}
                  >
                    {'Kilometer Based Delivery Charges'}
                  </label>{' '}
                  <input
                    className={'size-4 accent-primary'}
                    type={'checkbox'}
                    role={'switch'}
                    id={'switchCheckChecked2'}
                    defaultChecked={true}
                  />
                </div>{' '}
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'Per KM Delivery Charge ($)'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Input type={'text'} aria-label={'Per KM Delivery Charge ($) *'} />
                </div>{' '}
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'Minimum Delivery Over ($)'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Input type={'text'} aria-label={'Minimum Delivery Over ($) *'} />
                </div>{' '}
                <div className={'mb-0'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'Minimum Distance for Free Delivery (KM)'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Input type={'text'} aria-label={'Minimum Distance for Free Delivery (KM) *'} />
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
            <div className={'flex items-center justify-end flex-wrap row-gap-2 border-t mt-6 pt-6'}>
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
