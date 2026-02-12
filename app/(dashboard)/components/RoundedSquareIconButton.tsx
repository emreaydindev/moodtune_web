import { IconButton, styled } from "@mui/material"

export const RoundedSquareIconButton = styled(IconButton)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '8px',
    padding: 5,
    "& .MuiTouchRipple-root .MuiTouchRipple-child": {
        borderRadius: "8px"
    }
}));