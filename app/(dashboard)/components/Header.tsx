"use client"
import { Box, InputAdornment, OutlinedInput, useMediaQuery, useTheme } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import Link from "next/link";
import DashboardLogo from "./DashboardLogo";
import { useState } from "react";
import { RoundedSquareIconButton } from "./RoundedSquareIconButton";

export default function Header() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(640));
    const [searchOpen, setSearchOpen] = useState(false)

    const SearchBar = ({flexGrow}: {flexGrow: number}) => {
        return (
            <OutlinedInput
                size="small"
                placeholder="Search a movie or a TV show"
                sx={{
                    flexGrow,
                    marginRight: 2
                }}
                startAdornment={
                    <InputAdornment position="start" sx={{ color: 'text.primary' }}>
                        <SearchRoundedIcon fontSize="small" />
                    </InputAdornment>
                }
            />
        );
    }

    const SearchToggleButton = () => {
        return <RoundedSquareIconButton
            onClick={() => setSearchOpen(!searchOpen)}
        >
            {
                (searchOpen) ?
                    <CloseIcon /> :
                    <SearchRoundedIcon />
            }
        </RoundedSquareIconButton>
    }

    return (
        <Box
            sx={{
                backgroundColor: "background.default",
                height: "64px",
                width: "100%",
                flexShrink: 0,
                paddingTop: "12px",
                paddingX: "12px",
                display: "flex",
                alignItems: "center"
            }}
        >
            {
                (isMobile) ?
                    (searchOpen) ?
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                width: "100%",
                                marginRight: 2
                            }}
                        >
                            <SearchBar flexGrow={1} />
                            <SearchToggleButton />
                        </Box> :
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                width: "100%",
                                marginRight: 2
                            }}
                        >
                            <DashboardLogo sidebarOpen />
                            <Box sx={{flexGrow: 1}}></Box>
                            <SearchToggleButton />
                        </Box> :
                    <SearchBar flexGrow={0.2} />

            }

            <Box sx={{flexGrow: (isMobile) ? 0 : 1}}></Box>

            <Box 
                sx={{borderRadius: 200, marginRight: 1}}
                component={Link}
                href={"/profile"}
            >
                <AccountIcon fontSize="large" />
            </Box>
        </Box>
    );
}