import React from 'react';
import { useReactTable, getCoreRowModel, getSortedRowModel, flexRender } from '@tanstack/react-table';

const TeamMembersList = ({ data, onEdit, onDelete }) => {
  const columns = React.useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'role',
        header: 'Role',
        cell: info => info.getValue(),
      },
      {
        accessorKey: 'team',
        header: 'Team',
        cell: info => info.getValue(),
      },
      {
        header: 'Actions',
        cell: ({ row }) => (
          <div className="flex space-x-2">
            <button
              className="bg-yellow-500 text-white p-1 rounded"
              onClick={() => onEdit(row.index)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white p-1 rounded"
              onClick={() => onDelete(row.index)}
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    [onEdit, onDelete]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th
                key={header.id}
                className="border border-gray-300 p-2 cursor-pointer"
                onClick={header.column.getToggleSortingHandler()}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
                <span>
                  {header.column.getIsSorted()
                    ? header.column.getIsSorted() === 'desc'
                      ? ' 🔽'
                      : ' 🔼'
                    : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id} className="border-b border-gray-300">
            {row.getVisibleCells().map(cell => (
              <td key={cell.id} className="p-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TeamMembersList;
