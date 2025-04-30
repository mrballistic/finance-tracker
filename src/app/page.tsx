import React from "react";
import styles from "./page.module.css";
import SummaryCards from "../components/dashboard/SummaryCards";
import ExpenseChart from "../components/dashboard/ExpenseChart";

const sampleData = [
  { category: "Utilities", amount: 400 },
  { category: "Groceries", amount: 300 },
  { category: "Entertainment", amount: 150 },
  { category: "Transportation", amount: 100 },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Finance Tracker Dashboard</h1>
        <SummaryCards />
        <ExpenseChart data={sampleData} />
      </main>
    </div>
  );
}
