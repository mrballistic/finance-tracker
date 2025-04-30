import React, { useState } from "react";
import { TextField, Button, MenuItem, Box } from "@mui/material";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

export interface Expense {
  id: string;
  amount: number;
  category: string;
  subcategory: string;
  date: string;
  recurrence?: string;
  notes?: string;
}

const categories = [
  { value: "Utilities", label: "Utilities" },
  { value: "Groceries", label: "Groceries" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Transportation", label: "Transportation" },
];

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onAddExpense }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !category || !date) return;

    const newExpense: Expense = {
      id: crypto.randomUUID(),
      amount: parseFloat(amount),
      category,
      subcategory,
      date,
      notes,
    };

    onAddExpense(newExpense);

    // Reset form
    setAmount("");
    setCategory("");
    setSubcategory("");
    setDate("");
    setNotes("");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}>
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <TextField
        select
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        {categories.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Subcategory"
        value={subcategory}
        onChange={(e) => setSubcategory(e.target.value)}
      />
      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        required
      />
      <TextField
        label="Notes"
        multiline
        rows={3}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Expense
      </Button>
    </Box>
  );
};

export default ExpenseForm;
