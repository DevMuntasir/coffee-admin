import { Button } from '@/shared/components/ui/button';
import { Icon } from '@/shared/components/icon';

export function NotificationsSettingsNotificationsSection() {
  return (
    <div className={'flex sm:items-center sm:flex-row flex-col gap-3 mb-6'}>
      <div className={'grow'}>
        <h3 className={'mb-0'}>
          {'Notifications '}
          <Button
            variant={'outline'}
            className={'size-9 p-0 h-8 text-xs rounded-full ml-2'}
            aria-label={'refresh-ccw'}
          >
            <Icon name={'refresh-ccw'} className={''} />
          </Button>{' '}
        </h3>{' '}
      </div>{' '}
    </div>
  );
}
