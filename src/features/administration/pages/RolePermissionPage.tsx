import { PreviewProvider } from '@/shared/components/preview';
import { RolePermissionPermissionsSection } from '../components/RolePermissionPermissionsSection';
import { RolePermissionRoleAdminSection } from '../components/RolePermissionRoleAdminSection';
import { RolePermissionDialogs } from '../components/RolePermissionDialogs';

export default function RolePermissionPage() {
  return (
    <PreviewProvider defaultTabs={{ 'tabs-0': 'v-pills-admin' }}>
      <RolePermissionPermissionsSection />
      <RolePermissionRoleAdminSection />
      <RolePermissionDialogs />
    </PreviewProvider>
  );
}
