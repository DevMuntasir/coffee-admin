import { Card, CardContent } from '@/shared/components/ui/card';
import { PreviewForm } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';
import { Textarea } from '@/shared/components/ui/textarea';
import { Select } from '@/shared/components/ui/select';

export function PrintSettingsHeaderSection2() {
  return (
    <div>
      <Card>
        <CardContent>
          <PreviewForm>
            <h5 className={'mb-4'}>{'Print Settings'}</h5>{' '}
            <div className={'grid grid-cols-12 gap-x-6'}>
              <div className={'col-span-12 md:col-span-12'}>
                <div className={'mb-4'}>
                  <div className={'flex items-center gap-2 mb-4 justify-between pl-0'}>
                    <label className={'text-foreground'} htmlFor={'switchCheckChecked'}>
                      {'Enable Print'}
                    </label>{' '}
                    <input
                      className={'size-4 accent-primary'}
                      type={'checkbox'}
                      role={'switch'}
                      id={'switchCheckChecked'}
                      defaultChecked={true}
                    />
                  </div>{' '}
                  <div className={'flex items-center gap-2 mb-4 justify-between pl-0'}>
                    <label className={'text-foreground'} htmlFor={'switchCheckChecked2'}>
                      {'Show Store Details'}
                    </label>{' '}
                    <input
                      className={'size-4 accent-primary'}
                      type={'checkbox'}
                      role={'switch'}
                      id={'switchCheckChecked2'}
                      defaultChecked={true}
                    />
                  </div>{' '}
                  <div className={'flex items-center gap-2 mb-4 justify-between pl-0'}>
                    <label className={'text-foreground'} htmlFor={'switchCheckChecked3'}>
                      {'Show Customer Details'}
                    </label>{' '}
                    <input
                      className={'size-4 accent-primary'}
                      type={'checkbox'}
                      role={'switch'}
                      id={'switchCheckChecked3'}
                      defaultChecked={true}
                    />
                  </div>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-12'}>
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>
                    {'Format (Page Sizes)'}
                    <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
                  </label>{' '}
                  <Select aria-label={'Format (Page Sizes) *'}>
                    <option>{'Select'}</option> <option>{'A1'}</option> <option>{'A2'}</option>{' '}
                    <option>{'A3'}</option> <option>{'A4'}</option> <option>{'A5'}</option>{' '}
                  </Select>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-12'}>
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>{'Header'}</label>{' '}
                  <Textarea aria-label={'Header'}></Textarea>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-12'}>
                <div className={'mb-4'}>
                  <label className={'mb-2 block font-medium text-foreground'}>{'Footer'}</label>{' '}
                  <Textarea aria-label={'Footer'}></Textarea>{' '}
                </div>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-12'}>
                <div className={'mb-0'}>
                  <div className={'flex items-center gap-2 justify-between mb-4 pl-0'}>
                    <label className={'text-foreground'} htmlFor={'switchCheckChecked4'}>
                      {'Show Notes'}
                    </label>{' '}
                    <input
                      className={'size-4 accent-primary'}
                      type={'checkbox'}
                      role={'switch'}
                      id={'switchCheckChecked4'}
                      defaultChecked={true}
                    />
                  </div>{' '}
                  <div className={'flex items-center gap-2 justify-between mb-0 pl-0'}>
                    <label className={'text-foreground'} htmlFor={'switchCheckChecked5'}>
                      {'Print Tokens'}
                    </label>{' '}
                    <input
                      className={'size-4 accent-primary'}
                      type={'checkbox'}
                      role={'switch'}
                      id={'switchCheckChecked5'}
                      defaultChecked={true}
                    />
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
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
