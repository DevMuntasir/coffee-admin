import { PreviewDialog } from '@/shared/components/preview';
import { PreviewDataTable } from '@/shared/components/preview-data-table';
import { tables } from '../../fixtures/pos-tables';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Icon } from '@/shared/components/icon';

export function PosDraftDetailsDialog() {
  return (
    <PreviewDialog id={'draft_details'} title={'Draft'}>
      <div className={'modal-body p-6'}>
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
        <div className={'overflow-x-auto whitespace-nowrap'}>
          <PreviewDataTable model={tables[2]} />
        </div>{' '}
      </div>{' '}
    </PreviewDialog>
  );
}
