"use client"
import { styled } from "@mui/system";

export const AuthContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    borderRadius: "16px",
    padding: "32px",
    width: "100%",
    maxWidth: "400px",
    maxHeight: "85%",
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: "0px 3px 3px -2px rgba(0,0,0,0.2)",
    margin: "auto", 
}));