import { AddonsAddModifierDialog } from './dialogs/AddonsAddModifierDialog';
import { AddonsEditModifierDialog } from './dialogs/AddonsEditModifierDialog';
import { AddonsDeleteModalDialog } from './dialogs/AddonsDeleteModalDialog';
import { AddonsFilterOffcanvasDialog } from './dialogs/AddonsFilterOffcanvasDialog';

export function AddonsDialogs() {
  return (
    <>
      <AddonsAddModifierDialog />
      <AddonsEditModifierDialog />
      <AddonsDeleteModalDialog />
      <AddonsFilterOffcanvasDialog />
    </>
  );
}
