import { Card, CardContent } from '@/shared/components/ui/card';
import { PreviewForm } from '@/shared/components/preview';
import { Button } from '@/shared/components/ui/button';

export function PaymentSettingsOverviewSection() {
  return (
    <div>
      <Card>
        <CardContent>
          <PreviewForm>
            <div className={'grid grid-cols-12 gap-x-6'}>
              <div className={'col-span-12 md:col-span-6 lg:col-span-4'}>
                <Card className={'flex-1'}>
                  <CardContent>
                    <div className={'w-full flex justify-between items-center'}>
                      <div className={'flex items-center'}>
                        <div className={'avatar avatar-md bg-muted p-2 mr-2'}>
                          <img
                            className={'custom-line-img-two'}
                            src={'/assets/img/icons/dollar-sign.svg'}
                            alt={'Img'}
                          />
                        </div>{' '}
                        <p className={'mb-0 text-foreground'}>{'Cash'}</p>{' '}
                      </div>{' '}
                      <div className={'flex items-center'}>
                        <div className={'flex items-center gap-2 mb-0'}>
                          <label
                            className={'text-foreground'}
                            htmlFor={'switchCheckChecked'}
                          ></label>{' '}
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
              {/* <div className={'col-span-12 md:col-span-6 lg:col-span-4'}>
                <Card className={'flex-1'}>
                  <CardContent>
                    <div className={'w-full flex justify-between items-center'}>
                      <div className={'flex items-center'}>
                        <div className={'avatar avatar-md bg-muted p-2 mr-2'}>
                          <img
                            className={'custom-line-img-two'}
                            src={'/assets/img/icons/credit-card.svg'}
                            alt={'Img'}
                          />
                        </div>{' '}
                        <p className={'mb-0 text-foreground'}>{'Card'}</p>{' '}
                      </div>{' '}
                      <div className={'flex items-center'}>
                        <div className={'flex items-center gap-2 mb-0'}>
                          <label
                            className={'text-foreground'}
                            htmlFor={'switchCheckChecked1'}
                          ></label>{' '}
                          <input
                            className={'size-4 accent-primary'}
                            type={'checkbox'}
                            role={'switch'}
                            id={'switchCheckChecked1'}
                            defaultChecked={true}
                          />
                        </div>{' '}
                      </div>{' '}
                    </div>{' '}
                  </CardContent>{' '}
                </Card>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-6 lg:col-span-4'}>
                <Card className={'flex-1'}>
                  <CardContent>
                    <div className={'w-full flex justify-between items-center'}>
                      <div className={'flex items-center'}>
                        <div className={'avatar avatar-md bg-muted p-2 mr-2'}>
                          <img
                            className={'custom-line-img-two'}
                            src={'/assets/img/icons/wallet.svg'}
                            alt={'Img'}
                          />
                        </div>{' '}
                        <p className={'mb-0 text-foreground'}>{'Wallet'}</p>{' '}
                      </div>{' '}
                      <div className={'flex items-center'}>
                        <div className={'flex items-center gap-2 mb-0'}>
                          <label
                            className={'text-foreground'}
                            htmlFor={'switchCheckChecked2'}
                          ></label>{' '}
                          <input
                            className={'size-4 accent-primary'}
                            type={'checkbox'}
                            role={'switch'}
                            id={'switchCheckChecked2'}
                            defaultChecked={true}
                          />
                        </div>{' '}
                      </div>{' '}
                    </div>{' '}
                  </CardContent>{' '}
                </Card>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-6 lg:col-span-4'}>
                <Card className={'flex-1'}>
                  <CardContent>
                    <div className={'w-full flex justify-between items-center'}>
                      <div className={'flex items-center'}>
                        <div className={'avatar avatar-md bg-muted p-2 mr-2'}>
                          <img
                            className={'custom-line-img-two'}
                            src={'/assets/img/icons/russian-ruble.svg'}
                            alt={'Img'}
                          />
                        </div>{' '}
                        <p className={'mb-0 text-foreground'}>{'Paypal'}</p>{' '}
                      </div>{' '}
                      <div className={'flex items-center'}>
                        <div className={'flex items-center gap-2 mb-0'}>
                          <label
                            className={'text-foreground'}
                            htmlFor={'switchCheckChecked3'}
                          ></label>{' '}
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
              <div className={'col-span-12 md:col-span-6 lg:col-span-4'}>
                <Card className={'flex-1'}>
                  <CardContent>
                    <div className={'w-full flex justify-between items-center'}>
                      <div className={'flex items-center'}>
                        <div className={'avatar avatar-md bg-muted p-2 mr-2'}>
                          <img
                            className={'custom-line-img-two'}
                            src={'/assets/img/icons/qr-code.svg'}
                            alt={'Img'}
                          />
                        </div>{' '}
                        <p className={'mb-0 text-foreground'}>{'QR Reader'}</p>{' '}
                      </div>{' '}
                      <div className={'flex items-center'}>
                        <div className={'flex items-center gap-2 mb-0'}>
                          <label
                            className={'text-foreground'}
                            htmlFor={'switchCheckChecked4'}
                          ></label>{' '}
                          <input
                            className={'size-4 accent-primary'}
                            type={'checkbox'}
                            role={'switch'}
                            id={'switchCheckChecked4'}
                            defaultChecked={true}
                          />
                        </div>{' '}
                      </div>{' '}
                    </div>{' '}
                  </CardContent>{' '}
                </Card>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-6 lg:col-span-4'}>
                <Card className={'flex-1'}>
                  <CardContent>
                    <div className={'w-full flex justify-between items-center'}>
                      <div className={'flex items-center'}>
                        <div className={'avatar avatar-md bg-muted p-2 mr-2'}>
                          <img
                            className={'custom-line-img-two'}
                            src={'/assets/img/icons/receipt-text.svg'}
                            alt={'Img'}
                          />
                        </div>{' '}
                        <p className={'mb-0 text-foreground'}>{'Card Reader'}</p>{' '}
                      </div>{' '}
                      <div className={'flex items-center'}>
                        <div className={'flex items-center gap-2 mb-0'}>
                          <label
                            className={'text-foreground'}
                            htmlFor={'switchCheckChecked5'}
                          ></label>{' '}
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
                  </CardContent>{' '}
                </Card>{' '}
              </div>{' '}
              <div className={'col-span-12 md:col-span-6 lg:col-span-4'}>
                <Card className={'flex-1 mb-0'}>
                  <CardContent>
                    <div className={'w-full flex justify-between items-center'}>
                      <div className={'flex items-center'}>
                        <div className={'avatar avatar-md bg-muted p-2 mr-2'}>
                          <img
                            className={'custom-line-img-two'}
                            src={'/assets/img/icons/landmark.svg'}
                            alt={'Img'}
                          />
                        </div>{' '}
                        <p className={'mb-0 text-foreground'}>{'Bank'}</p>{' '}
                      </div>{' '}
                      <div className={'flex items-center'}>
                        <div className={'flex items-center gap-2 mb-0'}>
                          <label
                            className={'text-foreground'}
                            htmlFor={'switchCheckChecked6'}
                          ></label>{' '}
                          <input
                            className={'size-4 accent-primary'}
                            type={'checkbox'}
                            role={'switch'}
                            id={'switchCheckChecked6'}
                            defaultChecked={true}
                          />
                        </div>{' '}
                      </div>{' '}
                    </div>{' '}
                  </CardContent>{' '}
                </Card>{' '}
              </div>{' '} */}
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
