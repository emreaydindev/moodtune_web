"use client"

import { styled } from "@mui/system";

export const AuthContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: "8px",
    padding: "32px",
    backgroundColor: theme.palette.surfaceContainer,
    border: `1px solid ${theme.palette.divider}`,
}));