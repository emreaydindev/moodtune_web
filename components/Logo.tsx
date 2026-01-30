import { Box, Link, Typography } from "@mui/material";
import Image from "next/image";

const Logo = () => {
    return (
        <Box
            id="logo"
            className="select-none"
            component={Link}
            href="/"
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                textDecoration: 'none',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    filter: 'drop-shadow(0 0 8px rgba(34, 140, 219, 0.5))',
                    transform: 'scale(1.02)',
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
                    background: 'linear-gradient(135deg, #228CDB, #4CB944)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}
            >
                MoodTune
            </Typography>
        </Box>
    );
}

export default Logo;