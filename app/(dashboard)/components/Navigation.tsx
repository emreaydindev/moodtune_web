"use client";

import { useMediaQuery, useTheme } from "@mui/material";
import Sidebar from "./Sidebar";
import BottomNavBar from "./BottomNavBar";

export default function Navigation() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(640));

  if (isMobile) {
    return <BottomNavBar />;
  }

  return <Sidebar />;
}