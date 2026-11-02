import { Card, CardContent } from '@/shared/components/ui/card';
import { DialogAction } from '@/shared/components/preview';
import { PreviewDataTable } from '@/shared/components/preview-data-table';
import { tables } from '../fixtures/payments-tables';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Icon } from '@/shared/components/icon';

export function PaymentsColumnSection() {
  return (
    <Card className={'mb-0'}>
      <CardContent>
        <div className={'flex items-center flex-wrap gap-3 justify-between mb-6'}>
          <div className={'search-input'}>
            <Input placeholder={'Search…'} aria-label={'Search records'} />
            <span>
              <Icon name={'search'} className={'text-[14px]'} />
            </span>{' '}
          </div>{' '}
          <div className={'flex items-center gap-2 flex-wrap'}>
            <DialogAction
              target={'filter-offcanvas'}
              variant={'outline'}
              className={'inline-flex items-center'}
              aria-controls={'filter-offcanvas'}
            >
              <Icon name={'funnel'} className={'mr-2'} />
              {'Filter '}
            </DialogAction>{' '}
            <details className="preview-dropdown relative">
              <summary
                className={
                  'size-9 p-0 cursor-pointer list-none preview-button preview-button-outline'
                }
              >
                <Icon name={'columns-3'} className={''} />
              </summary>{' '}
              <div
                className={'dropdown-menu dropdown-menu-md right-0 p-4 pb-0 preview-dropdown-menu'}
              >
                <h5 className={'mb-4'}>{'Column'}</h5>{' '}
                <div id={'drag-container'}>
                  <div className={'mb-4 drag-item'} draggable={true}>
                    <label className={'flex items-center'}>
                      <Icon name={'grip-vertical'} className={'mr-2'} />
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {' Transaction ID '}
                    </label>{' '}
                  </div>{' '}
                  <div className={'mb-4 drag-item'} draggable={true}>
                    <label className={'flex items-center'}>
                      <Icon name={'grip-vertical'} className={'mr-2'} />
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {' Order ID '}
                    </label>{' '}
                  </div>{' '}
                  <div className={'mb-4 drag-item'} draggable={true}>
                    <label className={'flex items-center'}>
                      <Icon name={'grip-vertical'} className={'mr-2'} />
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {' Token No '}
                    </label>{' '}
                  </div>{' '}
                  <div className={'mb-4 drag-item'} draggable={true}>
                    <label className={'flex items-center'}>
                      <Icon name={'grip-vertical'} className={'mr-2'} />
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {' Customer '}
                    </label>{' '}
                  </div>{' '}
                  <div className={'mb-4 drag-item'} draggable={true}>
                    <label className={'flex items-center'}>
                      <Icon name={'grip-vertical'} className={'mr-2'} />
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {' Type '}
                    </label>{' '}
                  </div>{' '}
                  <div className={'mb-4 drag-item'} draggable={true}>
                    <label className={'flex items-center'}>
                      <Icon name={'grip-vertical'} className={'mr-2'} />
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {' Menus '}
                    </label>{' '}
                  </div>{' '}
                  <div className={'mb-4 drag-item'} draggable={true}>
                    <label className={'flex items-center'}>
                      <Icon name={'grip-vertical'} className={'mr-2'} />
                      <input
                        className={'size-4 accent-primary m-0 mr-2'}
                        type={'checkbox'}
                        aria-label={'checkbox'}
                      />
                      {' Grand Total '}
                    </label>{' '}
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </details>{' '}
            <details className="preview-dropdown relative">
              <summary
                className={
                  'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
                }
              >
                {' Sort by : Newest '}
              </summary>{' '}
              <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
                <li>
                  <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                    {'Newest'}
                  </Button>{' '}
                </li>{' '}
                <li>
                  <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                    {'Oldest'}
                  </Button>{' '}
                </li>{' '}
                <li>
                  <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                    {'Ascending'}
                  </Button>{' '}
                </li>{' '}
                <li>
                  <Button variant="ghost" className={'block rounded px-3 py-2 hover:bg-muted'}>
                    {'Descending'}
                  </Button>{' '}
                </li>{' '}
              </ul>{' '}
            </details>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'overflow-x-auto whitespace-nowrap'}>
          <PreviewDataTable model={tables[0]} />
        </div>{' '}
      </CardContent>{' '}
    </Card>
  );
}
