import { PreviewForm } from '@/shared/components/preview';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Icon } from '@/shared/components/icon';

export function LoginHiWelcomeBackSection() {
  return (
    <div className={'w-full'}>
      <div className={'w-full overflow-hidden relative flex-wrap block min-h-screen'}>
        <div className={'grid grid-cols-12 gap-x-6 gap-2'}>
          <div className={'col-span-12 lg:col-span-6 md:col-span-12 sm:col-span-12 p-4'}>
            <div
              className={
                'grid grid-cols-12 gap-x-6 justify-center items-center overflow-auto flex-wrap auth-vh min-h-screen'
              }
            >
              <div
                className={
                  'col-span-12 xl:col-span-8 lg:col-span-10 md:col-span-8 sm:col-span-10 mx-auto'
                }
              >
                <PreviewForm>
                  <div className={'flex flex-col justify-between'}>
                    <div className={'mb-12'}>
                      <Link to={'/'}>
                        <img
                          className={'max-w-full h-auto'}
                          src={'/assets/img/logo.png'}
                          alt={'Logo'}
                        />
                      </Link>{' '}
                    </div>{' '}
                    <div>
                      <div className={'mb-6'}>
                        <h3 className={'mb-2'}>{'Hi, Welcome Back !!!'}</h3>{' '}
                        <p className={'mb-0'}>{'Please enter your credentials to sign in!'}</p>{' '}
                      </div>{' '}
                      <div className={'mb-4'}>
                        <label className={'mb-2 block font-medium text-foreground'}>
                          {'Email'}
                          <span className={'text-red-600'}>{' *'}</span>{' '}
                        </label>{' '}
                        <Input type={'email'} aria-label={'Email *'} />
                      </div>{' '}
                      <div className={'mb-4'}>
                        <label className={'mb-2 block font-medium text-foreground'}>
                          {'Password'}
                          <span className={'text-red-600'}>{' *'}</span>{' '}
                        </label>{' '}
                        <div className={'relative flex items-center pass-group'}>
                          <Input
                            className={'pass-input'}
                            type={'password'}
                            aria-label={'password'}
                          />
                          <span
                            className={
                              'flex items-center px-3 text-muted-foreground toggle-password'
                            }
                          >
                            <Icon name={'eye-off'} className={''} />
                          </span>{' '}
                        </div>{' '}
                      </div>{' '}
                      <div className={'flex items-center justify-between mb-6'}>
                        <div className={'flex items-center'}>
                          <div className={'flex items-center gap-2 form-check-md mb-0'}>
                            <input
                              className={'size-4 accent-primary'}
                              id={'remember_me'}
                              type={'checkbox'}
                            />
                            <label className={'text-foreground mt-0'} htmlFor={'remember_me'}>
                              {'Remember Me'}
                            </label>{' '}
                          </div>{' '}
                        </div>{' '}
                        <div className={'text-right'}>
                          <Link to={'/forgot-password'} className={'link-primary'}>
                            {'Forgot Password?'}
                          </Link>{' '}
                        </div>{' '}
                      </div>{' '}
                      <div className={'mb-6'}>
                        <Button variant={'default'} className={'w-full'} type={'button'}>
                          {'Sign In'}
                        </Button>{' '}
                      </div>{' '}
                      <div className={'login-or relative mb-6 text-center'}>
                        <span className={'relative bg-card px-2 z-2'}>
                          {'or continue with'}
                        </span>{' '}
                      </div>{' '}
                      <div className={'flex items-center justify-center flex-wrap'}>
                        <div className={'text-center mr-2 flex-1'}>
                          <Button
                            variant={'outline'}
                            className={'flex items-center justify-center shadow-sm'}
                          >
                            <img
                              className={'max-w-full h-auto mr-2'}
                              src={'/assets/img/icons/google.svg'}
                              alt={'google'}
                            />
                            {'Google '}
                          </Button>{' '}
                        </div>{' '}
                        <div className={'text-center mr-2 flex-1'}>
                          <Button
                            variant={'outline'}
                            className={'flex items-center justify-center shadow-sm'}
                          >
                            <img
                              className={'max-w-full h-auto mr-2'}
                              src={'/assets/img/icons/fb.svg'}
                              alt={'facebook'}
                            />
                            {'Facebook '}
                          </Button>{' '}
                        </div>{' '}
                      </div>{' '}
                      <div className={'text-center mt-6'}>
                        <p className={'font-normal mb-0'}>
                          {"Don't have an account? "}
                          <Link to={'/register'} className={'link-primary'}>
                            {' Sign Up'}
                          </Link>{' '}
                        </p>{' '}
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </PreviewForm>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className={'col-span-12 lg:col-span-6'}>
            <div
              className={
                'relative lg:flex items-center justify-center hidden flex-wrap min-h-screen p-6 pl-0'
              }
            >
              <div className={'w-full rounded-3 relative h-full bg-primary z-1 overflow-hidden'}>
                <img
                  className={'max-w-full h-auto absolute right-0 -z-10 auth-bg-01'}
                  src={'/assets/img/authentication/authentication-bg-01.png'}
                  alt={'bg'}
                />
                <img
                  className={'max-w-full h-auto absolute top-0 right-0 -z-10 auth-bg-02'}
                  src={'/assets/img/authentication/authentication-bg-02.png'}
                  alt={'bg'}
                />
                <div className={'px-6 rounded-3 h-full flex flex-col items-center auth-wrap'}>
                  <div className={'text-center z-2'}>
                    <h1 className={'text-white mb-2'}>
                      {'Complete Control of Your Cafe & Restaurant with Ease'}
                    </h1>{' '}
                    <p className={'text-white mb-0'}>
                      {
                        'From billing to inventory access everything you need in a single powerful dashboard, Analyze sales, track your best-selling dishes.'
                      }
                    </p>{' '}
                  </div>{' '}
                  <div className={'text-center auth-img absolute bottom-0'}>
                    <img
                      className={'max-w-full h-auto relative z-1'}
                      src={'/assets/img/authentication/login.png'}
                      alt={'user'}
                    />
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div
          className={
            'alert alert-danger border-0 border-red-500 border-b alert-dismissible pr-12 hidden'
          }
          role={'alert'}
        >
          <p className={'font-medium mb-0 inline-flex items-center'}>
            <span
              className={
                'size-9 p-0 rounded-full bg-red-500 flex items-center justify-center pointer-events-none mr-2'
              }
            >
              <Icon name={'x'} className={'text-[16px] text-white'} />
            </span>{' '}
            {'Please enter your user name'}
          </p>{' '}
          <Button
            className={
              'inline-flex size-8 items-center justify-center rounded-md hover:bg-muted top-1/2 -translate-y-1/2 link-danger'
            }
            type={'button'}
            aria-label={'Close'}
          >
            <Icon name={'x'} className={''} />
          </Button>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}
