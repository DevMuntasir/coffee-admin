/** Source fixtures are presentation data, not backend/domain contracts. */
export interface PreviewCellAction {
  icon: string;
  label: string;
  target?: string;
  href?: string;
}
export interface PreviewCell {
  text: string;
  image?: { src: string; alt: string };
  badge?: { text: string; className: string };
  href?: string;
  actions?: PreviewCellAction[];
  controls?: { type: 'checkbox' | 'radio'; checked: boolean; label: string }[];
}
export interface PreviewRow {
  id: string;
  cells: PreviewCell[];
}
export interface PreviewTableModel {
  columns: string[];
  rows: PreviewRow[];
}
