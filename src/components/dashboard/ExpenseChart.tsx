"use client";

import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

interface ExpenseChartProps {
  expenses: Expense[];
}

import { Expense } from "../expenses/ExpenseForm";

const ExpenseChart: React.FC<ExpenseChartProps> = ({ expenses }) => {
  // Aggregate expenses by category
  const dataMap: Record<string, number> = {};
  expenses.forEach((expense) => {
    if (dataMap[expense.category]) {
      dataMap[expense.category] += expense.amount;
    } else {
      dataMap[expense.category] = expense.amount;
    }
  });

  const data = Object.entries(dataMap).map(([category, amount]) => ({
    category,
    amount,
  }));

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ExpenseChart;
