"use client";
import { Stack, styled } from "@mui/material";

export const AuthStack = styled(Stack)(({ theme }) => {
  const isDark = theme.palette.mode === 'dark';
  const darkGradient = `radial-gradient(circle at center, #1E293B 0%, ${theme.palette.background.default} 100%)`;
  const lightGradient = `radial-gradient(circle at center, #FFFFFF 0%, #F8F9FF 70%, #F0F4F8 100%)`;

  return {
    minHeight: "100vh",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    background: isDark ? darkGradient : lightGradient,
    padding: theme.spacing(2),
    
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      justifyContent: "center",
    },
  };
});