import { UsersAddUsersDialog } from './dialogs/UsersAddUsersDialog';
import { UsersEditUsersDialog } from './dialogs/UsersEditUsersDialog';
import { UsersUserPermissionDialog } from './dialogs/UsersUserPermissionDialog';
import { UsersDeleteModalDialog } from './dialogs/UsersDeleteModalDialog';
import { UsersFilterOffcanvasDialog } from './dialogs/UsersFilterOffcanvasDialog';

export function UsersDialogs() {
  return (
    <>
      <UsersAddUsersDialog />
      <UsersEditUsersDialog />
      <UsersUserPermissionDialog />
      <UsersDeleteModalDialog />
      <UsersFilterOffcanvasDialog />
    </>
  );
}
