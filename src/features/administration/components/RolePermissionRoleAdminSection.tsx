import { Card, CardContent } from '@/shared/components/ui/card';
import { PreviewTabPanel, PreviewTabTrigger } from '@/shared/components/preview';
import { PreviewDataTable } from '@/shared/components/preview-data-table';
import { tables } from '../fixtures/role-permission-tables';
import { Button } from '@/shared/components/ui/button';

export function RolePermissionRoleAdminSection() {
  return (
    <div className={'grid grid-cols-12 gap-x-6 justify-center'}>
      <div className={'col-span-12 lg:col-span-4'}>
        <Card>
          <CardContent>
            <h6 className={'text-[20px] font-bold mb-6'}>{'Roles'}</h6>{' '}
            <div className={'roles-sidebar flex items-start'}>
              <ul
                className={'flex flex-wrap gap-2 flex-col nav-pills mr-4 w-full'}
                id={'v-pills-tab'}
                role={'tablist'}
                aria-orientation={'vertical'}
              >
                <li>
                  <PreviewTabTrigger
                    group={'tabs-0'}
                    value={'v-pills-admin'}
                    className={'preview-tab rounded-md px-3 py-2 font-medium'}
                    id={'v-pills-admin-tab'}
                    type={'button'}
                    aria-controls={'v-pills-admin'}
                    aria-selected={'true'}
                  >
                    {'Admin'}
                  </PreviewTabTrigger>{' '}
                </li>{' '}
                <li>
                  <PreviewTabTrigger
                    group={'tabs-0'}
                    value={'v-pills-supervisor'}
                    className={'preview-tab rounded-md px-3 py-2 font-medium'}
                    id={'v-pills-supervisor-tab'}
                    type={'button'}
                    aria-controls={'v-pills-supervisor'}
                    aria-selected={'true'}
                  >
                    {'Supervisor'}
                  </PreviewTabTrigger>{' '}
                </li>{' '}
                <li>
                  <PreviewTabTrigger
                    group={'tabs-0'}
                    value={'v-pills-cashier'}
                    className={'preview-tab rounded-md px-3 py-2 font-medium'}
                    id={'v-pills-cashier-tab'}
                    type={'button'}
                    aria-controls={'v-pills-cashier'}
                    aria-selected={'true'}
                  >
                    {'Cashier'}
                  </PreviewTabTrigger>{' '}
                </li>{' '}
                <li>
                  <PreviewTabTrigger
                    group={'tabs-0'}
                    value={'v-pills-chef'}
                    className={'preview-tab rounded-md px-3 py-2 font-medium'}
                    id={'v-pills-chef-tab'}
                    type={'button'}
                    aria-controls={'v-pills-chef'}
                    aria-selected={'true'}
                  >
                    {'Chef'}
                  </PreviewTabTrigger>{' '}
                </li>{' '}
                <li>
                  <PreviewTabTrigger
                    group={'tabs-0'}
                    value={'v-pills-waiter'}
                    className={'preview-tab rounded-md px-3 py-2 font-medium'}
                    id={'v-pills-waiter-tab'}
                    type={'button'}
                    aria-controls={'v-pills-waiter'}
                    aria-selected={'true'}
                  >
                    {'Waiter'}
                  </PreviewTabTrigger>{' '}
                </li>{' '}
                <li>
                  <PreviewTabTrigger
                    group={'tabs-0'}
                    value={'v-pills-accountant'}
                    className={'preview-tab rounded-md px-3 py-2 font-medium'}
                    id={'v-pills-accountant-tab'}
                    type={'button'}
                    aria-controls={'v-pills-accountant'}
                    aria-selected={'true'}
                  >
                    {'Accountant'}
                  </PreviewTabTrigger>{' '}
                </li>{' '}
                <li>
                  <PreviewTabTrigger
                    group={'tabs-0'}
                    value={'v-pills-systemoperator'}
                    className={'preview-tab rounded-md px-3 py-2 font-medium mb-0'}
                    id={'v-pills-systemoperator-tab'}
                    type={'button'}
                    aria-controls={'v-pills-systemoperator'}
                    aria-selected={'true'}
                  >
                    {'System Operator'}
                  </PreviewTabTrigger>{' '}
                </li>{' '}
              </ul>{' '}
            </div>{' '}
          </CardContent>{' '}
        </Card>{' '}
      </div>{' '}
      <div className={'col-span-12 lg:col-span-8'}>
        <div className={'tab-content'} id={'v-pills-tabContent'}>
          <PreviewTabPanel
            group={'tabs-0'}
            value={'v-pills-admin'}
            className={'tab-pane'}
            id={'v-pills-admin'}
            aria-labelledby={'v-pills-admin-tab'}
            tabIndex={0}
          >
            <div className={'flex sm:items-center sm:flex-row flex-col gap-2 mb-6'}>
              <div className={'grow'}>
                <h5 className={'text-[16px] font-bold mb-0'}>{'Role : Admin '}</h5>{' '}
              </div>{' '}
              <div className={'flex items-center gap-2 form-check-md'}>
                <input className={'size-4 accent-primary'} type={'checkbox'} id={'select-all'} />
                <label htmlFor={'select-all'}>{'Revert All'}</label>{' '}
              </div>{' '}
            </div>{' '}
            <Card>
              <CardContent>
                <div className={'overflow-x-auto'} id={'v-pills-tabContent'}>
                  <PreviewDataTable model={tables[0]} />
                </div>{' '}
                <div
                  className={'flex items-center justify-end flex-wrap row-gap-2 border-t mt-6 pt-6'}
                >
                  <Button variant={'outline'} className={'mr-2'} type={'button'}>
                    {'Cancel'}
                  </Button>{' '}
                  <Button variant={'default'} type={'button'}>
                    {'Save Changes'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </PreviewTabPanel>{' '}
          <PreviewTabPanel
            group={'tabs-0'}
            value={'v-pills-supervisor'}
            className={'tab-pane'}
            id={'v-pills-supervisor'}
            aria-labelledby={'v-pills-supervisor-tab'}
            tabIndex={0}
          >
            <div className={'flex sm:items-center sm:flex-row flex-col gap-2 mb-6'}>
              <div className={'grow'}>
                <h5 className={'text-[16px] font-bold mb-0'}>{'Role : Supervisor '}</h5>{' '}
              </div>{' '}
              <div className={'flex items-center gap-2 form-check-md'}>
                <input className={'size-4 accent-primary'} type={'checkbox'} id={'select-all'} />
                <label htmlFor={'select-all'}>{'Revert All'}</label>{' '}
              </div>{' '}
            </div>{' '}
            <Card>
              <CardContent>
                <div className={'overflow-x-auto'} id={'v-pills-tabContent'}>
                  <PreviewDataTable model={tables[1]} />
                </div>{' '}
                <div
                  className={'flex items-center justify-end flex-wrap row-gap-2 border-t mt-6 pt-6'}
                >
                  <Button variant={'outline'} className={'mr-2'} type={'button'}>
                    {'Cancel'}
                  </Button>{' '}
                  <Button variant={'default'} type={'button'}>
                    {'Save Changes'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </PreviewTabPanel>{' '}
          <PreviewTabPanel
            group={'tabs-0'}
            value={'v-pills-cashier'}
            className={'tab-pane'}
            id={'v-pills-cashier'}
            aria-labelledby={'v-pills-cashier-tab'}
            tabIndex={0}
          >
            <div className={'flex sm:items-center sm:flex-row flex-col gap-2 mb-6'}>
              <div className={'grow'}>
                <h5 className={'text-[16px] font-bold mb-0'}>{'Role : Cashier '}</h5>{' '}
              </div>{' '}
              <div className={'flex items-center gap-2 form-check-md'}>
                <input className={'size-4 accent-primary'} type={'checkbox'} id={'select-all'} />
                <label htmlFor={'select-all'}>{'Revert All'}</label>{' '}
              </div>{' '}
            </div>{' '}
            <Card>
              <CardContent>
                <div className={'overflow-x-auto'} id={'v-pills-tabContent'}>
                  <PreviewDataTable model={tables[2]} />
                </div>{' '}
                <div
                  className={'flex items-center justify-end flex-wrap row-gap-2 border-t mt-6 pt-6'}
                >
                  <Button variant={'outline'} className={'mr-2'} type={'button'}>
                    {'Cancel'}
                  </Button>{' '}
                  <Button variant={'default'} type={'button'}>
                    {'Save Changes'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </PreviewTabPanel>{' '}
          <PreviewTabPanel
            group={'tabs-0'}
            value={'v-pills-chef'}
            className={'tab-pane'}
            id={'v-pills-chef'}
            aria-labelledby={'v-pills-chef-tab'}
            tabIndex={0}
          >
            <div className={'flex sm:items-center sm:flex-row flex-col gap-2 mb-6'}>
              <div className={'grow'}>
                <h5 className={'text-[16px] font-bold mb-0'}>{'Role : Chef '}</h5>{' '}
              </div>{' '}
              <div className={'flex items-center gap-2 form-check-md'}>
                <input className={'size-4 accent-primary'} type={'checkbox'} id={'select-all'} />
                <label htmlFor={'select-all'}>{'Revert All'}</label>{' '}
              </div>{' '}
            </div>{' '}
            <Card>
              <CardContent>
                <div className={'overflow-x-auto'} id={'v-pills-tabContent'}>
                  <PreviewDataTable model={tables[3]} />
                </div>{' '}
                <div
                  className={'flex items-center justify-end flex-wrap row-gap-2 border-t mt-6 pt-6'}
                >
                  <Button variant={'outline'} className={'mr-2'} type={'button'}>
                    {'Cancel'}
                  </Button>{' '}
                  <Button variant={'default'} type={'button'}>
                    {'Save Changes'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </PreviewTabPanel>{' '}
          <PreviewTabPanel
            group={'tabs-0'}
            value={'v-pills-waiter'}
            className={'tab-pane'}
            id={'v-pills-waiter'}
            aria-labelledby={'v-pills-waiter-tab'}
            tabIndex={0}
          >
            <div className={'flex sm:items-center sm:flex-row flex-col gap-2 mb-6'}>
              <div className={'grow'}>
                <h5 className={'text-[16px] font-bold mb-0'}>{'Role : Waiter '}</h5>{' '}
              </div>{' '}
              <div className={'flex items-center gap-2 form-check-md'}>
                <input className={'size-4 accent-primary'} type={'checkbox'} id={'select-all'} />
                <label htmlFor={'select-all'}>{'Revert All'}</label>{' '}
              </div>{' '}
            </div>{' '}
            <Card>
              <CardContent>
                <div className={'overflow-x-auto'} id={'v-pills-tabContent'}>
                  <PreviewDataTable model={tables[4]} />
                </div>{' '}
                <div
                  className={'flex items-center justify-end flex-wrap row-gap-2 border-t mt-6 pt-6'}
                >
                  <Button variant={'outline'} className={'mr-2'} type={'button'}>
                    {'Cancel'}
                  </Button>{' '}
                  <Button variant={'default'} type={'button'}>
                    {'Save Changes'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </PreviewTabPanel>{' '}
          <PreviewTabPanel
            group={'tabs-0'}
            value={'v-pills-accountant'}
            className={'tab-pane'}
            id={'v-pills-accountant'}
            aria-labelledby={'v-pills-accountant-tab'}
            tabIndex={0}
          >
            <div className={'flex sm:items-center sm:flex-row flex-col gap-2 mb-6'}>
              <div className={'grow'}>
                <h5 className={'text-[16px] font-bold mb-0'}>{'Role : Chef '}</h5>{' '}
              </div>{' '}
              <div className={'flex items-center gap-2 form-check-md'}>
                <input className={'size-4 accent-primary'} type={'checkbox'} id={'select-all'} />
                <label htmlFor={'select-all'}>{'Revert All'}</label>{' '}
              </div>{' '}
            </div>{' '}
            <Card>
              <CardContent>
                <div className={'overflow-x-auto'} id={'v-pills-tabContent'}>
                  <PreviewDataTable model={tables[5]} />
                </div>{' '}
                <div
                  className={'flex items-center justify-end flex-wrap row-gap-2 border-t mt-6 pt-6'}
                >
                  <Button variant={'outline'} className={'mr-2'} type={'button'}>
                    {'Cancel'}
                  </Button>{' '}
                  <Button variant={'default'} type={'button'}>
                    {'Save Changes'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </PreviewTabPanel>{' '}
          <PreviewTabPanel
            group={'tabs-0'}
            value={'v-pills-systemoperator'}
            className={'tab-pane'}
            id={'v-pills-systemoperator'}
            aria-labelledby={'v-pills-systemoperator-tab'}
            tabIndex={0}
          >
            <div className={'flex sm:items-center sm:flex-row flex-col gap-2 mb-6'}>
              <div className={'grow'}>
                <h5 className={'text-[16px] font-bold mb-0'}>{'Role : System Operator '}</h5>{' '}
              </div>{' '}
              <div className={'flex items-center gap-2 form-check-md'}>
                <input className={'size-4 accent-primary'} type={'checkbox'} id={'select-all'} />
                <label htmlFor={'select-all'}>{'Revert All'}</label>{' '}
              </div>{' '}
            </div>{' '}
            <Card>
              <CardContent>
                <div className={'overflow-x-auto'} id={'v-pills-tabContent'}>
                  <PreviewDataTable model={tables[6]} />
                </div>{' '}
                <div
                  className={'flex items-center justify-end flex-wrap row-gap-2 border-t mt-6 pt-6'}
                >
                  <Button variant={'outline'} className={'mr-2'} type={'button'}>
                    {'Cancel'}
                  </Button>{' '}
                  <Button variant={'default'} type={'button'}>
                    {'Save Changes'}
                  </Button>{' '}
                </div>{' '}
              </CardContent>{' '}
            </Card>{' '}
          </PreviewTabPanel>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}
