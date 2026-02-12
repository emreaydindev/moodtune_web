"use client";
import { Box, Divider, IconButton } from "@mui/material";
import DashboardLogo from "./DashboardLogo";
import SidebarNavItem from "./SidebarNavItem";
import CloseSidebarIcon from '@mui/icons-material/FirstPage';
import OpenSidebarIcon from '@mui/icons-material/LastPage';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from "react";
import { MENU_ITEMS } from "../utilities/MenuUtilities";
import { RoundedSquareIconButton } from "./RoundedSquareIconButton";

export default function Sidebar() {

    const pathname = usePathname();

    const [sidebarOpen, setSidebarOpen] = useState(true);

    const closedIntentionallyRef = useRef(false);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            
            if (width < 1024) {
                setSidebarOpen(false);
            } else {
                if (!closedIntentionallyRef.current) {
                    setSidebarOpen(true);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); 

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleSidebar = () => {
        const newState = !sidebarOpen;
        setSidebarOpen(newState);
        closedIntentionallyRef.current = !newState;
    };

    return (
        <Box
            sx={{
                backgroundColor: "background.default",
                width: (sidebarOpen) ? 264 : 80,
                flexShrink: 0,
            }}
        >
            <Box
                sx={{
                    borderRadius: "12px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    padding: "16px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: (sidebarOpen) ? "row" : "column-reverse",
                        justifyContent: "center",
                        alignItems: "center",
                        marginY: "4px",
                        gap: !(sidebarOpen) ? "8px" : null
                    }}
                >
                    <DashboardLogo sidebarOpen={sidebarOpen} />
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <RoundedSquareIconButton
                        onClick={toggleSidebar}
                    >
                        {(sidebarOpen) ? <CloseSidebarIcon /> : <OpenSidebarIcon />}
                    </RoundedSquareIconButton>
                </Box>

                <Divider sx={{
                    marginBottom: 1
                }} />

                {
                    MENU_ITEMS.filter((val) => val.section === "general" && ["both", "sidebar"].includes(val.view_type))
                        .map((itemData) => {
                            return <SidebarNavItem
                                data={itemData}
                                selected={pathname.toLowerCase() === itemData.link?.toLowerCase()}
                                key={itemData.id}
                                sidebarOpen={sidebarOpen}
                            />
                        })
                }

                <Box sx={{ flexGrow: 1 }}></Box>

                {
                    MENU_ITEMS.filter((val) => val.section === "settings" && ["both", "sidebar"].includes(val.view_type))
                        .map((itemData) => {
                            return <SidebarNavItem
                                data={itemData}
                                selected={pathname.toLowerCase() === itemData.link?.toLowerCase()}
                                key={itemData.id}
                                sidebarOpen={sidebarOpen}
                            />
                        })
                }
            </Box>
        </Box>
    );
}