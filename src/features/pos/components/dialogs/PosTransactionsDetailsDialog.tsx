import { PreviewDialog, PreviewTabPanel, PreviewTabTrigger } from '@/shared/components/preview';
import { PreviewDataTable } from '@/shared/components/preview-data-table';
import { tables } from '../../fixtures/pos-tables';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Icon } from '@/shared/components/icon';

export function PosTransactionsDetailsDialog() {
  return (
    <PreviewDialog id={'transactions_details'} title={'Transactions'}>
      <div className={'modal-body p-6'}>
        <ul
          className={
            'flex flex-wrap gap-2 nav-tabs nav-tabs-solid border-0 mb-4 pb-4 border-b items-center gap-3'
          }
          role={'tablist'}
        >
          <li className={'shrink-0'}>
            <PreviewTabTrigger
              group={'tabs-3'}
              value={'order-tab15'}
              className={
                'preview-tab rounded-md px-3 py-2 font-medium shadow-xs flex gap-2 items-center'
              }
            >
              <Icon name={'circle-dollar-sign'} className={''} />
              {'Sale'}
            </PreviewTabTrigger>{' '}
          </li>{' '}
          {/* <li className={'shrink-0'}>
            <PreviewTabTrigger
              group={'tabs-3'}
              value={'order-tab16'}
              className={
                'preview-tab rounded-md px-3 py-2 font-medium shadow-xs flex items-center gap-2'
              }
            >
              <Icon name={'file-scan'} className={''} />
              {'Draft'}
            </PreviewTabTrigger>{' '}
          </li>{' '} */}
        </ul>{' '}
        <div className={'flex items-center justify-between gap-2 flex-wrap mb-4'}>
          <div className={'relative flex items-center w-auto'}>
            <Input type={'text'} placeholder={'Search'} aria-label={'Search'} />
            <span className={'flex items-center px-3 text-muted-foreground'}>
              <Icon name={'search'} className={'text-foreground'} />
            </span>{' '}
          </div>{' '}
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
        <div className={'tab-content'}>
          <PreviewTabPanel
            group={'tabs-3'}
            value={'order-tab15'}
            className={'tab-pane'}
            id={'order-tab15'}
          >
            <div className={'overflow-x-auto whitespace-nowrap'}>
              <PreviewDataTable model={tables[0]} />
            </div>{' '}
          </PreviewTabPanel>{' '}
          <PreviewTabPanel
            group={'tabs-3'}
            value={'order-tab16'}
            className={'tab-pane'}
            id={'order-tab16'}
          >
            <div className={'overflow-x-auto whitespace-nowrap'}>
              <PreviewDataTable model={tables[1]} />
            </div>{' '}
          </PreviewTabPanel>{' '}
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
