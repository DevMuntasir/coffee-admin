import { Link } from 'react-router-dom';
import { DataTable, type DataColumn } from './data-table';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Icon } from './icon';
import { DialogAction } from './preview';
import type { PreviewCell, PreviewRow, PreviewTableModel } from '@/shared/types/preview-table';
function Cell({ cell }: { cell: PreviewCell }) {
  return (
    <div className="flex items-center gap-2">
      {cell.image && (
        <img
          src={cell.image.src}
          alt={cell.image.alt}
          loading="lazy"
          className="size-9 shrink-0 rounded-md object-cover"
        />
      )}
      {cell.text &&
        (cell.href ? (
          <Link className="font-medium hover:text-primary" to={cell.href}>
            {cell.text}
          </Link>
        ) : (
          <span>{cell.text}</span>
        ))}
      {cell.badge && <Badge className={cell.badge.className}>{cell.badge.text}</Badge>}
      {cell.controls?.map((control, i) => (
        <input
          key={i}
          type={control.type}
          defaultChecked={control.checked}
          aria-label={control.label}
          className="size-4 accent-primary"
        />
      ))}
      {cell.actions?.map((action, i) =>
        action.target ? (
          <DialogAction
            key={i}
            target={action.target}
            variant="outline"
            size="icon"
            aria-label={action.label}
          >
            <Icon name={action.icon} />
          </DialogAction>
        ) : action.href ? (
          <Button key={i} asChild variant="outline" size="icon">
            <Link to={action.href} aria-label={action.label}>
              <Icon name={action.icon} />
            </Link>
          </Button>
        ) : (
          <Button key={i} variant="outline" size="icon" aria-label={action.label}>
            <Icon name={action.icon} />
          </Button>
        ),
      )}
    </div>
  );
}
export function PreviewDataTable({ model }: { model: PreviewTableModel }) {
  const columns: DataColumn<PreviewRow>[] = model.columns.map((header, index) => ({
    id: `column-${index}`,
    header,
    cell: (row) => <Cell cell={row.cells[index] || { text: '' }} />,
  }));
  return <DataTable columns={columns} rows={model.rows} getRowId={(row) => row.id} />;
}
