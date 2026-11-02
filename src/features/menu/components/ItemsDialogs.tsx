import { ItemsItemsDetailsDialog } from './dialogs/ItemsItemsDetailsDialog';
import { ItemsAddItemDialog } from './dialogs/ItemsAddItemDialog';
import { ItemsEditItemDialog } from './dialogs/ItemsEditItemDialog';
import { ItemsDeleteItemDialog } from './dialogs/ItemsDeleteItemDialog';
import { ItemsHideItemDialog } from './dialogs/ItemsHideItemDialog';

export function ItemsDialogs() {
  return (
    <>
      <ItemsItemsDetailsDialog />
      <ItemsAddItemDialog />
      <ItemsEditItemDialog />
      <ItemsDeleteItemDialog />
      <ItemsHideItemDialog />
    </>
  );
}
