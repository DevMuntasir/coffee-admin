import { Card, CardContent } from '@/shared/components/ui/card';
import { PreviewDataTable } from '@/shared/components/preview-data-table';
import { tables } from '../fixtures/tax-settings-tables';

export function TaxSettingsOverviewSection() {
  return (
    <Card className={'mb-0'}>
      <CardContent>
        <div className={'overflow-x-auto whitespace-nowrap'}>
          <PreviewDataTable model={tables[0]} />
        </div>{' '}
      </CardContent>{' '}
    </Card>
  );
}
