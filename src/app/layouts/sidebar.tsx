import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { sidebarSections, sidebarItemIcons, type SidebarSectionId } from '@/app/sidebar-navigation';
import { Icon } from '@/shared/components/icon';
import { cn } from '@/shared/lib/utils';

interface SidebarProps {
  section: SidebarSectionId;
  onSelectSection: (section: SidebarSectionId) => void;
  onNavigate: () => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  mobile?: boolean;
}
const stores = [
  { name: 'Adda Time', image: '/assets/img/store/store-01.jpg' },
];

function SidebarStoreSelector() {
  const [selectedStore, setSelectedStore] = useState(stores[0]);
  const [open, setOpen] = useState(false);
  return (
    <div className="sidebar-store-selector">
      <button
        type="button"
        className="sidebar-store-trigger"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={`Select store: ${selectedStore.name}`}
      >
        <img src={selectedStore.image} alt="" className="sidebar-store-avatar" />
        <span>{selectedStore.name}</span>
        <Icon name="chevrons-up-down" className="sidebar-store-chevron" />
      </button>
      {open && (
        <>
          <button
            className="fixed inset-0 z-40 cursor-default"
            type="button"
            aria-label="Close store selector"
            onClick={() => setOpen(false)}
          />
          <div className="sidebar-store-options">
            {stores.map((store) => (
              <button
                type="button"
                key={store.name}
                className="sidebar-store-option"
                onClick={() => {
                  setSelectedStore(store);
                  setOpen(false);
                }}
              >
                <img src={store.image} alt="" className="sidebar-store-avatar" />
                {store.name}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function SidebarProfile({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="sidebar-profile-actions">
      {/* <Link
        to="/notifications-settings"
        onClick={onNavigate}
        className="sidebar-notification"
        aria-label="Notifications"
      >
        <Icon name="bell" />
        <span className="sidebar-notification-dot" />
      </Link> */}
      <Link
        to="/users"
        onClick={onNavigate}
        className="sidebar-profile-link"
        aria-label="Manage profile"
      >
        <img src="/assets/img/profiles/avatar-27.jpg" alt="Adrian James" />
      </Link>
    </div>
  );
}

export function Sidebar({
  section,
  onSelectSection,
  onNavigate,
  collapsed = false,
  onToggleCollapse,
  mobile = false,
}: SidebarProps) {
  const selectedSection = sidebarSections.find((item) => item.id === section) ?? sidebarSections[0];
  return (
    <div
      className={cn('restaurant-sidebar', collapsed && !mobile && 'restaurant-sidebar-collapsed')}
      data-sidebar="two-column"
    >
      <div className="sidebar-minibar">
        <Link
          to="/dashboard"
          className="sidebar-brand"
          aria-label="Dreams POS dashboard"
          onClick={onNavigate}
        >
          <img src="/assets/img/logo-small.svg" alt="Dreams POS" width={30} height={33} />
        </Link>
        <nav className="sidebar-section-navigation" aria-label="Navigation categories">
          {sidebarSections.map((item) => (
            <button
              type="button"
              key={item.id}
              title={item.title}
              aria-label={item.title}
              aria-pressed={item.id === section}
              aria-controls={mobile ? 'mobile-sidebar-menu' : 'desktop-sidebar-menu'}
              className={cn('sidebar-section-button', item.id === section && 'is-selected')}
              onClick={() => onSelectSection(item.id)}
            >
              <Icon name={item.icon} />
            </button>
          ))}
        </nav>
        <SidebarProfile onNavigate={onNavigate} />
      </div>
      <div className="sidebar-menu-panel">
        <div className="sidebar-store-header">
          <SidebarStoreSelector />
          <button
            type="button"
            className="sidebar-panel-toggle"
            aria-label={
              mobile ? 'Close navigation' : collapsed ? 'Expand navigation' : 'Collapse navigation'
            }
            onClick={mobile ? onNavigate : onToggleCollapse}
          >
            <Icon name={mobile ? 'x' : 'panel-right-open'} />
          </button>
        </div>
        <nav
          className="sidebar-menu-scroll"
          id={mobile ? 'mobile-sidebar-menu' : 'desktop-sidebar-menu'}
          aria-label="Workspace navigation"
        >
          <h2 className="sidebar-menu-title">{selectedSection.label}</h2>
          <ul className="sidebar-menu-items">
            {selectedSection.items.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} onClick={onNavigate} className="sidebar-menu-link">
                  <Icon name={sidebarItemIcons[item.path] ?? 'file-spreadsheet'} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
