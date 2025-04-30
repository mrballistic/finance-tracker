import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface SummaryCardProps {
  title: string;
  value: string | number;
  color?: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, color }) => {
  return (
    <Card
      sx={{
        minWidth: 200,
        backgroundColor: color || "white",
        color: (theme) =>
          theme.palette.getContrastText(color || theme.palette.background.paper),
      }}
      role="region"
      aria-label={title}
    >
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

import { useExpenseContext } from "../../context/ExpenseContext";
import { useMemo } from "react";

const SummaryCards: React.FC = () => {
  const { expenses } = useExpenseContext();

  // Calculate total expenses
  const totalExpenses = useMemo(() => {
    return expenses.reduce((sum, exp) => sum + exp.amount, 0).toFixed(2);
  }, [expenses]);

  // Placeholder monthly budget (could be user input later)
  const monthlyBudget = "2000.00";

  // Calculate upcoming bills (expenses with future dates)
  const upcomingBills = useMemo(() => {
    const now = new Date();
    return expenses
      .filter((exp) => new Date(exp.date) > now)
      .reduce((sum, exp) => sum + exp.amount, 0)
      .toFixed(2);
  }, [expenses]);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ flex: "1 1 30%" }}>
        <SummaryCard title="Total Expenses" value={`$${totalExpenses}`} color="#f8bbd0" />
      </Box>
      <Box sx={{ flex: "1 1 30%" }}>
        <SummaryCard title="Monthly Budget" value={`$${monthlyBudget}`} color="#bbdefb" />
      </Box>
      <Box sx={{ flex: "1 1 30%" }}>
        <SummaryCard title="Upcoming Bills" value={`$${upcomingBills}`} color="#c8e6c9" />
      </Box>
    </Box>
  );
};

export default SummaryCards;
