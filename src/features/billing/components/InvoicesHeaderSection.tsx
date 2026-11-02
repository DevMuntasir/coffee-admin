import { Button } from '@/shared/components/ui/button';
import { Icon } from '@/shared/components/icon';

export function InvoicesHeaderSection() {
  return (
    <div className={'flex sm:items-center sm:flex-row flex-col gap-3 mb-6'}>
      <div className={'grow'}>
        <h3 className={'mb-0'}>
          {'Invoices '}
          <Button
            variant={'outline'}
            className={'size-9 p-0 h-8 text-xs rounded-full ml-2'}
            aria-label={'refresh-ccw'}
          >
            <Icon name={'refresh-ccw'} className={''} />
          </Button>{' '}
        </h3>{' '}
      </div>{' '}
      <div className={'gap-2 flex items-center flex-wrap'}>
        <details className="preview-dropdown relative">
          <summary
            className={
              'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
            }
          >
            <Icon name={'upload'} className={'mr-1'} />
            {'Export '}
          </summary>{' '}
          <ul className={'dropdown-menu right-0 p-4 preview-dropdown-menu'}>
            <li>
              <Button
                variant="ghost"
                className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
              >
                {'Export as PDF'}
              </Button>{' '}
            </li>{' '}
            <li>
              <Button
                variant="ghost"
                className={'block rounded px-3 py-2 hover:bg-muted rounded-md'}
              >
                {'Export as Excel'}
              </Button>{' '}
            </li>{' '}
          </ul>{' '}
        </details>{' '}
      </div>{' '}
    </div>
  );
}
