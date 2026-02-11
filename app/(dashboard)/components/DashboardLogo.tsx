import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";

const DashboardLogo = ({sidebarOpen}: {sidebarOpen: boolean}) => {
    return (
        <Box
            id="logo"
            className="select-none"
            component={Link}
            href="/browse"
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    filter: (theme) => `drop-shadow(0 0 8px ${theme.palette.secondary.main}80)`,
                    transform: 'scale(1.02)',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer'
                },
                '&:active': {
                    transform: 'scale(0.98)',
                }
            }}
        >
            <Image src="/logo_gradient.svg" alt="MoodTune Logo" width={40} height={40} />
            <Typography
                variant="h6"
                sx={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 800,
                    letterSpacing: '-0.5px',
                    color: "text.primary",
                    display: (sidebarOpen) ? "block" : "none"
                }}
            >
                MoodTune
            </Typography>
        </Box>
    );
}

export default DashboardLogo;