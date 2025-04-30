"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import SummaryCards from "../components/dashboard/SummaryCards";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import ExpensesPage from "./expenses/page";

const sampleData = [
  { category: "Utilities", amount: 400 },
  { category: "Groceries", amount: 300 },
  { category: "Entertainment", amount: 150 },
  { category: "Transportation", amount: 100 },
].map(item => ({ ...item })); // shallow copy to avoid passing functions or unexpected references

export default function Home() {
  const [currentView, setCurrentView] = useState("dashboard");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {currentView === "dashboard" && (
          <>
            <h1>Finance Tracker Dashboard</h1>
            <SummaryCards />
            <ExpenseChart data={sampleData} />
          </>
        )}
        {currentView === "expenses" && <ExpensesPage />}
      </main>
    </div>
  );
}
