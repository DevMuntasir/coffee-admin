import { Button } from '@/shared/components/ui/button';
import { Icon } from '@/shared/components/icon';

export function DashboardHeaderSection() {
  return (
    <div className={'flex items-center flex-wrap gap-3 mb-6'}>
      <div className={'grow'}>
        <h3 className={'mb-0'}>
          {'Dashboard '}
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
        <Button variant={'outline'} className={'inline-flex items-center'}>
          <Icon name={'folder-sync'} className={'mr-2'} />
          {'Sync Data'}
        </Button>{' '}
        <details className="preview-dropdown relative">
          <summary
            className={
              'inline-flex items-center cursor-pointer list-none preview-button preview-button-outline'
            }
          >
            <Icon name={'upload'} className={'mr-2'} />
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
        <div className={'daterangepick custom-date w-auto flex items-center justify-between'}>
          <Icon name={'calendar-fold'} className={'text-foreground text-[14px] mr-2'} />
          <span className={'reportrange-picker'}></span>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}
