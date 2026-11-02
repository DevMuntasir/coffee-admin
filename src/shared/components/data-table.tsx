import type { ReactNode } from 'react';
import { Table } from './ui/table';
export interface DataColumn<T> {
  readonly id: string;
  readonly header: ReactNode;
  readonly cell: (row: T) => ReactNode;
}
export interface DataTableProps<T> {
  readonly columns: readonly DataColumn<T>[];
  readonly rows: readonly T[];
  readonly getRowId: (row: T) => string;
}
/** Rendering only. Filtering, pagination, and server state belong to the owning feature. */
export function DataTable<T>({ columns, rows, getRowId }: DataTableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-lg border">
      <Table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.id} scope="col">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length ? (
            rows.map((row) => (
              <tr key={getRowId(row)}>
                {columns.map((column) => (
                  <td key={column.id}>{column.cell(row)}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="py-10 text-center text-muted-foreground">
                No records to display
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
