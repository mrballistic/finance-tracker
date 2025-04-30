"use client";

import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

const HeaderBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleNavigate = (path: string) => {
    router.push(path);
  };
  
  return (
    <AppBar position="static" color="primary" sx={{ marginBottom: 2 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
        💸 Finance Tracker
        </Typography>
        <Button
          color="inherit"
          onClick={() => handleNavigate("/")}
          disabled={pathname === "/"}
        >
          Dashboard
        </Button>
        <Button
          color="inherit"
          onClick={() => handleNavigate("/expenses")}
          disabled={pathname === "/expenses"}
        >
          Expenses
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
