"use client";

import React from "react";
import styles from "../page.module.css";
import ExpenseForm from "../../components/expenses/ExpenseForm";
import ExpenseTable from "../../components/expenses/ExpenseTable";
import { ExpenseProvider, useExpenseContext } from "../../context/ExpenseContext";

const ExpensesContent: React.FC = () => {
  const { expenses, addExpense, updateExpense } = useExpenseContext();

  return (
    <>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseTable expenses={expenses} onEditExpense={updateExpense} />
    </>
  );
};

export default function ExpensesPage() {
  return (
    <ExpenseProvider>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1>Expenses Management</h1>
          <ExpensesContent />
        </main>
      </div>
    </ExpenseProvider>
  );
}
