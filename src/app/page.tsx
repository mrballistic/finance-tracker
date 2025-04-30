"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import SummaryCards from "../components/dashboard/SummaryCards";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import ExpensesPage from "./expenses/page";
import { useExpenseContext, ExpenseProvider } from "../context/ExpenseContext";

const DashboardView: React.FC = () => {
  const { expenses } = useExpenseContext();

  return (
    <>
      <h1>Finance Tracker Dashboard</h1>
      <SummaryCards />
      <ExpenseChart expenses={expenses} />
    </>
  );
};

export default function Home() {
  const [currentView] = useState("dashboard");

  return (
    <ExpenseProvider>
      <div className={styles.page}>
        <main className={styles.main}>
          {currentView === "dashboard" && <DashboardView />}
          {currentView === "expenses" && <ExpensesPage />}
        </main>
      </div>
    </ExpenseProvider>
  );
}
