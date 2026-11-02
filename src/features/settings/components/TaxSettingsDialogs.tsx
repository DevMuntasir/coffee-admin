import { TaxSettingsAddTaxDialog } from './dialogs/TaxSettingsAddTaxDialog';
import { TaxSettingsEditTaxDialog } from './dialogs/TaxSettingsEditTaxDialog';
import { TaxSettingsDeleteModalDialog } from './dialogs/TaxSettingsDeleteModalDialog';

export function TaxSettingsDialogs() {
  return (
    <>
      <TaxSettingsAddTaxDialog />
      <TaxSettingsEditTaxDialog />
      <TaxSettingsDeleteModalDialog />
    </>
  );
}
