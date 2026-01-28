import { Box, Link, Theme, Typography } from "@mui/material";

export default function AuthNavigatorLink({
    theme,
    link,
    prefixText,
    linkText
}: {
    theme: Theme;
    link: string;
    prefixText: string;
    linkText: string;
}) {
    return (
        <Typography
            variant="body2"
            component={Link}
            href={link}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: 0.5,
                textDecoration: 'none',
                color: 'text.secondary',
                transition: 'all 0.3s ease-in-out',
                cursor: 'pointer',
                '&:hover': {
                    textDecoration: 'none',
                    color: '#FFFFFF',
                    transform: 'scale(1.05)',
                }
            }}
        >
            <span>{prefixText}</span>
            <Box
                component="span"
                sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 'bold',
                    transition: 'color 0.3s ease-in-out',
                    '.MuiTypography-root:hover &': {
                        color: '#FFFFFF'
                    }
                }}
            >
                {linkText}
            </Box>
        </Typography>);
}