import { Card, CardContent } from '@/shared/components/ui/card';
import { PreviewDataTable } from '@/shared/components/preview-data-table';
import { tables } from '../fixtures/sales-report-tables';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Icon } from '@/shared/components/icon';

export function SalesReportContentSection() {
  return (
    <Card className={'mb-0'}>
      <CardContent>
        <div className={'border-b sales-report-filter-wrap'}>
          <div className={'report-filter'}>
            <div className={'mb-4'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Start Date'}
                <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
              </label>{' '}
              <div className={'relative flex items-center w-auto'}>
                <Input type={'text'} placeholder={'dd/mm/yyyy'} aria-label={'dd/mm/yyyy'} />
                <span className={'flex items-center px-3 text-muted-foreground'}>
                  <Icon name={'calendar-fold'} className={''} />
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className={'report-filter'}>
            <div className={'mb-4'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'End Date'}
                <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
              </label>{' '}
              <div className={'relative flex items-center w-auto'}>
                <Input type={'text'} placeholder={'dd/mm/yyyy'} aria-label={'dd/mm/yyyy'} />
                <span className={'flex items-center px-3 text-muted-foreground'}>
                  <Icon name={'calendar-fold'} className={''} />
                </span>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
          <div className={'report-filter'}>
            <div className={'mb-4'}>
              <label className={'mb-2 block font-medium text-foreground'}>
                {'Category '}
                <span className={'text-red-600 ml-1'}>{'*'}</span>{' '}
              </label>{' '}
              <details className="preview-dropdown relative">
                <summary
                  className={
                    'flex items-center justify-between cursor-pointer list-none preview-button preview-button-outline'
                  }
                >
                  {' Select '}
                </summary>{' '}
                <div className={'dropdown-menu right-0 p-4 w-full preview-dropdown-menu'}>
                  <h6 className={'text-[14px] font-semibold mb-4'}>{'Category '}</h6>{' '}
                  <div className={'input-icon-end input-icon relative mb-4'}>
                    <span className={'input-icon-addon'}>
                      <Icon name={'search'} className={'text-foreground'} />
                    </span>{' '}
                    <Input
                      className={'form-control-md'}
                      type={'text'}
                      placeholder={'Search'}
                      aria-label={'Search'}
                    />
                  </div>{' '}
                  <div className={'vstack gap-2'}>
                    <div>
                      <label className={'flex items-center'}>
                        <input
                          className={'size-4 accent-primary m-0 mr-2'}
                          type={'checkbox'}
                          aria-label={'checkbox'}
                        />
                        {'Sea Food '}
                      </label>{' '}
                    </div>{' '}
                    <div>
                      <label className={'flex items-center'}>
                        <input
                          className={'size-4 accent-primary m-0 mr-2'}
                          type={'checkbox'}
                          aria-label={'checkbox'}
                        />
                        {'Pizza '}
                      </label>{' '}
                    </div>{' '}
                    <div>
                      <label className={'flex items-center'}>
                        <input
                          className={'size-4 accent-primary m-0 mr-2'}
                          type={'checkbox'}
                          aria-label={'checkbox'}
                        />
                        {'Salads '}
                      </label>{' '}
                    </div>{' '}
                    <div>
                      <label className={'flex items-center'}>
                        <input
                          className={'size-4 accent-primary m-0 mr-2'}
                          type={'checkbox'}
                          aria-label={'checkbox'}
                        />
                        {'Tacos '}
                      </label>{' '}
                    </div>{' '}
                    <div>
                      <label className={'flex items-center'}>
                        <input
                          className={'size-4 accent-primary m-0 mr-2'}
                          type={'checkbox'}
                          aria-label={'checkbox'}
                        />
                        {'Burgers '}
                      </label>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </details>{' '}
            </div>{' '}
          </div>{' '}
          <div className={'report-filter'}>
            <div className={'mb-4'}>
              <Button variant={'default'} className={'inline-flex items-center'}>
                {'Submit'}
              </Button>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className={'flex items-center flex-wrap gap-3 justify-between mb-6'}>
          <div className={'search-input'}>
            <Input placeholder={'Search…'} aria-label={'Search records'} />
            <span>
              <Icon name={'search'} className={'text-[14px]'} />
            </span>{' '}
          </div>{' '}
          <div className={'flex items-center gap-2 flex-wrap'}>
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
