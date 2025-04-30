"use client";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import HeaderBar from "./HeaderBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <HeaderBar />
      {children}
    </ThemeProvider>
  );
}