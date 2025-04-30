import React from "react";
import { DataGrid, GridColDef, GridRowsProp, GridEventListener } from "@mui/x-data-grid";

interface ExpenseTableProps {
  expenses: ExpenseRow[];
  onEditExpense?: (id: string, updatedExpense: Partial<ExpenseRow>) => void;
  onDeleteExpense?: (id: string) => void;
}

export interface ExpenseRow {
  id: string;
  amount: number;
  category: string;
  subcategory: string;
  date: string;
  recurrence?: string;
  notes?: string;
}

const columns: GridColDef[] = [
  { field: "date", headerName: "Date", width: 110, editable: true },
  { field: "category", headerName: "Category", width: 130, editable: true },
  { field: "subcategory", headerName: "Subcategory", width: 130, editable: true },
  { field: "amount", headerName: "Amount", width: 100, type: "number", editable: true },
  { field: "recurrence", headerName: "Recurrence", width: 120, editable: true },
  { field: "notes", headerName: "Notes", width: 200, editable: true },
];

const ExpenseTable: React.FC<ExpenseTableProps> = ({ expenses, onEditExpense }) => {
  const rows: GridRowsProp = expenses;

  const handleCellEditStop: GridEventListener<'cellEditStop'> = (params) => {
    if (onEditExpense && params.reason === 'cellFocusOut') {
      const { id, field, value } = params;
      onEditExpense(id.toString(), { [field]: value });
    }
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        paginationModel={{ pageSize: 5, page: 0 }}
        onCellEditStop={handleCellEditStop}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default ExpenseTable;
