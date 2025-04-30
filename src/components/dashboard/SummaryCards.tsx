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

const SummaryCards: React.FC = () => {
  // Placeholder values for now
  const totalExpenses = "$1,200.00";
  const monthlyBudget = "$2,000.00";
  const upcomingBills = "$300.00";

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
        <SummaryCard title="Total Expenses" value={totalExpenses} color="#f8bbd0" />
      </Box>
      <Box sx={{ flex: "1 1 30%" }}>
        <SummaryCard title="Monthly Budget" value={monthlyBudget} color="#bbdefb" />
      </Box>
      <Box sx={{ flex: "1 1 30%" }}>
        <SummaryCard title="Upcoming Bills" value={upcomingBills} color="#c8e6c9" />
      </Box>
    </Box>
  );
};

export default SummaryCards;
