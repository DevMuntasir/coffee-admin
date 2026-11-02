import { CategoriesAddCategoryDialog } from './dialogs/CategoriesAddCategoryDialog';
import { CategoriesEditCategoryDialog } from './dialogs/CategoriesEditCategoryDialog';
import { CategoriesDeleteModalDialog } from './dialogs/CategoriesDeleteModalDialog';
import { CategoriesFilterOffcanvasDialog } from './dialogs/CategoriesFilterOffcanvasDialog';

export function CategoriesDialogs() {
  return (
    <>
      <CategoriesAddCategoryDialog />
      <CategoriesEditCategoryDialog />
      <CategoriesDeleteModalDialog />
      <CategoriesFilterOffcanvasDialog />
    </>
  );
}
