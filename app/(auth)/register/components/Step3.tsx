import { Box, Button, Stack, Typography, Avatar, Grid, Paper } from "@mui/material";
import { useCallback, useMemo } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { STREAMING_PROVIDERS } from "@/common/provider_data";

export default function Step3({
    changeStep, userState, setUserState
}: {
    changeStep: (s: number) => void, userState: any, setUserState: (v: any) => void
}) {

    const togglePlatform = useCallback((platformId: number) => {
        const current = userState.favoritePlatforms || [];
        const next = current.includes(platformId)
            ? current.filter((p: number) => p !== platformId)
            : [...current, platformId];

        setUserState({ ...userState, favoritePlatforms: next });
    }, [userState, setUserState]);

    const groupedProviders = useMemo(() => {
        return STREAMING_PROVIDERS.reduce((acc, provider) => {
            const cat = provider.category;
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(provider);
            return acc;
        }, {} as Record<string, typeof STREAMING_PROVIDERS>);
    }, []);

    const selectionCount = userState.favoritePlatforms?.length || 0;

    return (
        <Stack spacing={3} sx={{ width: '100%', maxWidth: '400px' }}>
            <Box>
                <Typography variant="h3" sx={{ fontFamily: 'var(--font-dancing-script), cursive', fontWeight: 'bold', mb: 1 }}>
                    Pick Your Stage
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Select the platforms you use. We'll show you content available on them.
                </Typography>
            </Box>

            <Box sx={{ 
                maxHeight: '350px', 
                overflowY: 'auto', 
                pr: 1,
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px' }
            }}>
                {Object.entries(groupedProviders).map(([category, providers]) => (
                    <Box key={category} sx={{ mb: 3 }}>
                        <Typography variant="overline" sx={{ fontWeight: 'bold', color: 'primary.light', mb: 1.5, display: 'block', ml: 1 }}>
                            {category}
                        </Typography>
                        <Grid container spacing={2}>
                            {providers.map((provider) => {
                                const isSelected = userState.favoritePlatforms?.includes(provider.id);
                                return (
                                    <Grid key={provider.id}>
                                        <Paper
                                            elevation={isSelected ? 4 : 0}
                                            onClick={() => togglePlatform(provider.id)}
                                            sx={{
                                                p: 1.5,
                                                cursor: 'pointer',
                                                textAlign: 'center',
                                                borderRadius: '16px',
                                                border: '2px solid',
                                                borderColor: isSelected ? 'primary.main' : 'rgba(255,255,255,0.05)',
                                                bgcolor: isSelected ? 'rgba(var(--primary-rgb), 0.1)' : 'transparent',
                                                transition: 'all 0.2s ease',
                                                position: 'relative',
                                                '&:hover': { transform: 'scale(1.05)', bgcolor: 'rgba(255,255,255,0.03)' }
                                            }}
                                        >
                                            {isSelected && (
                                                <CheckCircleIcon 
                                                    sx={{ 
                                                        position: 'absolute', 
                                                        top: -8, 
                                                        right: -8, 
                                                        fontSize: '1.2rem', 
                                                        color: 'primary.main',
                                                        bgcolor: 'background.paper',
                                                        borderRadius: '50%'
                                                    }} 
                                                />
                                            )}
                                            <Avatar
                                                src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                                                variant="rounded"
                                                sx={{ 
                                                    width: 50, 
                                                    height: 50, 
                                                    mx: 'auto', 
                                                    mb: 1, 
                                                    borderRadius: '12px',
                                                    filter: isSelected ? 'none' : 'grayscale(0.4)'
                                                }}
                                            />
                                            <Typography variant="caption" sx={{ fontWeight: isSelected ? 'bold' : 'normal', display: 'block', fontSize: '0.7rem' }}>
                                                {provider.name}
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                ))}
            </Box>

            <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                <Button 
                    fullWidth 
                    variant="outlined" 
                    onClick={() => changeStep(-1)}
                    sx={{ borderRadius: '10px', py: 1.2 }}
                >
                    Back
                </Button>
                <Button 
                    fullWidth 
                    variant="contained" 
                    onClick={() => changeStep(1)}
                    sx={{ borderRadius: '10px', py: 1.2, fontWeight: 'bold' }}
                >
                    Finish Setup ({selectionCount})
                </Button>
            </Stack>
        </Stack>
    );
}