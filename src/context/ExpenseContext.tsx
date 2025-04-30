import React, { createContext, useContext, ReactNode } from "react";
import { Expense } from "../components/expenses/ExpenseForm";

interface ExpenseContextType {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  updateExpense: (id: string, updatedExpense: Partial<Expense>) => void;
  deleteExpense: (id: string) => void;
}

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const useExpenseContext = (): ExpenseContextType => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("useExpenseContext must be used within an ExpenseProvider");
  }
  return context;
};

interface ExpenseProviderProps {
  children: ReactNode;
}

export const ExpenseProvider: React.FC<ExpenseProviderProps> = ({ children }) => {
  const [expenses, setExpenses] = React.useState<Expense[]>([]);

  const fetchExpenses = async () => {
    try {
      // Try multiple possible paths to handle both development and GitHub Pages
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
      
      // List of possible paths to try
      const paths = [
        `/data/expenses.json`,
        `${basePath}/data/expenses.json`,
        `/finance-tracker/data/expenses.json`
      ];
      
      let data;
      let foundData = false;
      
      // Try each path until we get data
      for (const path of paths) {
        try {
          console.log(`Trying to fetch from: ${path}`);
          const response = await fetch(path);
          if (response.ok) {
            data = await response.json();
            console.log(`Successfully loaded data from: ${path}`);
            foundData = true;
            break;
          }
        } catch (pathError) {
          console.log(`Failed to fetch from path: ${path}`);
        }
      }
      
      // If we found data, use it
      if (foundData && data) {
        setExpenses(data.expenses);
      } else {
        console.error("Could not load expense data from any path");
      }
    } catch (error) {
      console.error("Error fetching expense data:", error);
    }
  };

  React.useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const updateExpense = (id: string, updatedExpense: Partial<Expense>) => {
    setExpenses((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, ...updatedExpense } : exp))
    );
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, updateExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};
