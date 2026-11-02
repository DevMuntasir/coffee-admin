import { Card, CardContent } from '@/shared/components/ui/card';

export function IntegrationsSettingsOverviewSection() {
  return (
    <Card className={'mb-0'}>
      <CardContent>
        <div className={'grid grid-cols-12 gap-x-6'}>
          <div className={'col-span-12 md:col-span-12'}>
            <Card className={'payment-type flex-1'}>
              <CardContent>
                <div className={'w-full flex justify-between items-center'}>
                  <div className={'flex items-center'}>
                    <div
                      className={'avatar avatar-lg bg-muted rounded-full border p-2 mr-2 shrink-0'}
                    >
                      <img src={'/assets/img/icons/mail-icon.svg'} alt={'Img'} />
                    </div>{' '}
                    <div>
                      <h6 className={'text-[14px] font-semibold mb-1'}>{'Gmail'}</h6>{' '}
                      <p className={'mb-0'}>
                        {
                          'RESTful API you can use to send, receive, search, label, archive emails, '
                        }
                        <br />
                        {' manage settings in Gmail mailboxes.'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'flex items-center'}>
                    <div className={'flex items-center gap-2 mb-0'}>
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked'}></label>{' '}
                      <input
                        className={'size-4 accent-primary'}
                        type={'checkbox'}
                        role={'switch'}
                        id={'switchCheckChecked'}
                        defaultChecked={true}
                      />
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
          <div className={'col-span-12 md:col-span-12'}>
            <Card className={'payment-type flex-1'}>
              <CardContent>
                <div className={'w-full flex justify-between items-center'}>
                  <div className={'flex items-center'}>
                    <div
                      className={'avatar avatar-lg bg-muted rounded-full border p-2 mr-2 shrink-0'}
                    >
                      <img src={'/assets/img/icons/gupshup.svg'} alt={'Img'} />
                    </div>{' '}
                    <div>
                      <h6 className={'text-[14px] font-semibold mb-1'}>{'Gupshup'}</h6>{' '}
                      <p className={'mb-0'}>
                        {'Messaging platform (SMS, WhatsApp, RCS) with presence'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'flex items-center'}>
                    <div className={'flex items-center gap-2 mb-0'}>
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked2'}></label>{' '}
                      <input
                        className={'size-4 accent-primary'}
                        type={'checkbox'}
                        role={'switch'}
                        id={'switchCheckChecked2'}
                      />
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
          <div className={'col-span-12 md:col-span-12'}>
            <Card className={'payment-type flex-1 mb-0'}>
              <CardContent>
                <div className={'w-full flex justify-between items-center'}>
                  <div className={'flex items-center'}>
                    <div
                      className={'avatar avatar-lg bg-muted rounded-full border p-2 mr-2 shrink-0'}
                    >
                      <img src={'/assets/img/icons/print-node.svg'} alt={'Img'} />
                    </div>{' '}
                    <div>
                      <h6 className={'text-[14px] font-semibold mb-1'}>{'PrintNode'}</h6>{' '}
                      <p className={'mb-0'}>
                        {'Middleware agents for cloud-to-local printing.'}
                      </p>{' '}
                    </div>{' '}
                  </div>{' '}
                  <div className={'flex items-center'}>
                    <div className={'flex items-center gap-2 mb-0'}>
                      <label className={'text-foreground'} htmlFor={'switchCheckChecked3'}></label>{' '}
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
              </CardContent>{' '}
            </Card>{' '}
          </div>{' '}
        </div>{' '}
      </CardContent>{' '}
    </Card>
  );
}
