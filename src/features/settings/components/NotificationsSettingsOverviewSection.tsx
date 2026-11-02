import { Card, CardContent } from '@/shared/components/ui/card';
import { PreviewForm } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';

export function NotificationsSettingsOverviewSection() {
  return (
    <div>
      <Card>
        <CardContent>
          <PreviewForm>
            <Card>
              <CardContent>
                <div className={'flex items-center gap-2 mb-4 justify-between pl-0 pb-4 border-b'}>
                  <label className={'text-foreground font-medium'} htmlFor={'switchCheckChecked'}>
                    {'Mobile Push Notifications'}
                  </label>{' '}
                  <input
                    className={'size-4 accent-primary'}
                    type={'checkbox'}
                    role={'switch'}
                    id={'switchCheckChecked'}
                    defaultChecked={true}
                  />
                </div>{' '}
                <div className={'flex items-center gap-2 justify-between pl-0'}>
                  <label className={'text-foreground font-medium'} htmlFor={'switchCheckChecked2'}>
                    {'Desktop Notifications'}
                  </label>{' '}
                  <input
                    className={'size-4 accent-primary'}
                    type={'checkbox'}
                    role={'switch'}
                    id={'switchCheckChecked2'}
                    defaultChecked={true}
                  />
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
            <h6 className={'mb-4'}>{'General Notification'}</h6>{' '}
            <Card className={'mb-0'}>
              <CardContent>
                <div
                  className={
                    'flex items-center justify-between flex-wrap column-gap-3 mb-4 border-b'
                  }
                >
                  <h6 className={'text-[14px] font-medium mb-4'}>{'Payment'}</h6>{' '}
                  <div className={'flex items-center flex-wrap gap-3'}>
                    <div className={'flex items-center gap-2 mb-4'}>
                      <input
                        className={'size-4 accent-primary'}
                        type={'checkbox'}
                        role={'switch'}
                        id={'switchCheckChecked3'}
                        defaultChecked={true}
                      />
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked3'}>
                        {'Push'}
                      </label>{' '}
                    </div>{' '}
                    <div className={'flex items-center gap-2 mb-4'}>
                      <input
                        className={'size-4 accent-primary'}
                        type={'checkbox'}
                        role={'switch'}
                        id={'switchCheckChecked4'}
                        defaultChecked={true}
                      />
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked4'}>
                        {'SMS'}
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
                        {'Email'}
                      </label>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div
                  className={
                    'flex items-center justify-between flex-wrap column-gap-3 mb-4 border-b'
                  }
                >
                  <h6 className={'text-[14px] font-medium mb-4'}>{'Transaction'}</h6>{' '}
                  <div className={'flex items-center flex-wrap gap-3'}>
                    <div className={'flex items-center gap-2 mb-4'}>
                      <input
                        className={'size-4 accent-primary'}
                        type={'checkbox'}
                        role={'switch'}
                        id={'switchCheckChecked6'}
                        defaultChecked={true}
                      />
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked6'}>
                        {'Push'}
                      </label>{' '}
                    </div>{' '}
                    <div className={'flex items-center gap-2 mb-4'}>
                      <input
                        className={'size-4 accent-primary'}
                        type={'checkbox'}
                        role={'switch'}
                        id={'switchCheckChecked7'}
                        defaultChecked={true}
                      />
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked7'}>
                        {'SMS'}
                      </label>{' '}
                    </div>{' '}
                    <div className={'flex items-center gap-2 mb-4'}>
                      <input
                        className={'size-4 accent-primary'}
                        type={'checkbox'}
                        role={'switch'}
                        id={'switchCheckChecked8'}
                      />
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked8'}>
                        {'Email'}
                      </label>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div
                  className={
                    'flex items-center justify-between flex-wrap column-gap-3 mb-4 border-b'
                  }
                >
                  <h6 className={'text-[14px] font-medium mb-4'}>{'Activity'}</h6>{' '}
                  <div className={'flex items-center flex-wrap gap-3'}>
                    <div className={'flex items-center gap-2 mb-4'}>
                      <input
                        className={'size-4 accent-primary'}
                        type={'checkbox'}
                        role={'switch'}
                        id={'switchCheckChecked9'}
                        defaultChecked={true}
                      />
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked9'}>
                        {'Push'}
                      </label>{' '}
                    </div>{' '}
                    <div className={'flex items-center gap-2 mb-4'}>
                      <input
                        className={'size-4 accent-primary'}
                        type={'checkbox'}
                        role={'switch'}
                        id={'switchCheckChecked10'}
                        defaultChecked={true}
                      />
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked10'}>
                        {'SMS'}
                      </label>{' '}
                    </div>{' '}
                    <div className={'flex items-center gap-2 mb-4'}>
                      <input
                        className={'size-4 accent-primary'}
                        type={'checkbox'}
                        role={'switch'}
                        id={'switchCheckChecked11'}
                        defaultChecked={true}
                      />
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked11'}>
                        {'Email'}
                      </label>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
                <div className={'flex items-center justify-between flex-wrap column-gap-3'}>
                  <h6 className={'text-[14px] font-medium'}>{'Account'}</h6>{' '}
                  <div className={'flex items-center flex-wrap gap-3'}>
                    <div className={'flex items-center gap-2'}>
                      <input
                        className={'size-4 accent-primary'}
                        type={'checkbox'}
                        role={'switch'}
                        id={'switchCheckChecked12'}
                        defaultChecked={true}
                      />
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked12'}>
                        {'Push'}
                      </label>{' '}
                    </div>{' '}
                    <div className={'flex items-center gap-2'}>
                      <input
                        className={'size-4 accent-primary'}
                        type={'checkbox'}
                        role={'switch'}
                        id={'switchCheckChecked13'}
                        defaultChecked={true}
                      />
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked13'}>
                        {'SMS'}
                      </label>{' '}
                    </div>{' '}
                    <div className={'flex items-center gap-2'}>
                      <input
                        className={'size-4 accent-primary'}
                        type={'checkbox'}
                        role={'switch'}
                        id={'switchCheckChecked14'}
                        defaultChecked={true}
                      />
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked14'}>
                        {'Email'}
                      </label>{' '}
                    </div>{' '}
                  </div>{' '}
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
