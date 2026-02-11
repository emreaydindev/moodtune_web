import { Box, Typography } from "@mui/material"
import Link from "next/link"
import { NavItemIcon, SidebarItemData } from "../utilities/MenuUtilities";

export default function SidebarNavItem({
    data,
    selected,
    sidebarOpen
}: {
    data: SidebarItemData,
    selected: boolean,
    sidebarOpen: boolean
}) {

    return (
        <Box
            sx={{
                width: "100%",
                paddingX: "8px",
                paddingY: "4px",
                borderRadius: "8px",
                "&:hover": {
                    backgroundColor: (selected) ? "selectedHover" : (data.id === "logout") ? "onHoverDanger" : "surfaceContainerHigh",
                    cursor: "pointer"
                },
                backgroundColor: (selected) ? "primary.container" : null
            }}
            component={(data.type === "link") ? Link : Box}
            href={data.link}
            onClick={data.onclick}
        >

            <Box
                sx={{
                    borderRadius: "6px",
                    paddingY: "8px",
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    alignItems: "center",
                    justifyContent: (sidebarOpen) ? "flex-start" : "center"
                }}
            >
                <NavItemIcon selected={selected} data={data}  />

                <Typography
                    variant="body1"
                    fontWeight={"bold"}
                    color={selected ? "primary" : (data.id === "logout") ? "danger" : "text.secondary"}
                    display={(sidebarOpen) ? "block" : "none"}
                >
                    {data.title}
                </Typography>
            </Box>
        </Box>
    );
}