"use client";
import { Stack, styled } from "@mui/material";

export const AuthStack = styled(Stack)(({ theme }) => {
  const isDark = theme.palette.mode === 'dark';
  const darkGradient = `radial-gradient(circle at center, #1E293B 0%, ${theme.palette.background.default} 100%)`;
  const lightGradient = `radial-gradient(circle at center, #FFFFFF 0%, #F8F9FF 70%, #F0F4F8 100%)`;

  return {
    height: "100vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
    background: isDark ? darkGradient : lightGradient,
    overflow: "hidden",
    [theme.breakpoints.down('sm')]: {
      height: "auto",
      minHeight: "100vh",
      padding: "24px 0",
      justifyContent: "flex-start",
      pt: 4,
    },
  };
});