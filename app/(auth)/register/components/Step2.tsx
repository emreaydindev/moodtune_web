import { Box, Chip, Grid, Button, Stack, Typography, Theme } from "@mui/material";
import { useCallback, useMemo } from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { GENRES } from "@/common/genre_data";

export default function Step2({
    changeStep, userState, setUserState
}: {
    changeStep: (s: number) => void, userState: any, setUserState: (v: any) => void
}) {

    const toggleGenre = useCallback((genreId: number | string) => {
        const current = userState.favoriteGenres || [];
        const next = current.includes(genreId)
            ? current.filter((g: number) => g !== genreId)
            : [...current, genreId];

        setUserState({ ...userState, favoriteGenres: next });
    }, [userState, setUserState]);

    const groupedGenres = useMemo(() => {
        return GENRES.reduce((acc, genre) => {
            const cat = genre.category || 'Other';
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(genre);
            return acc;
        }, {} as Record<string, typeof GENRES>);
    }, []);

    const selectionCount = userState.favoriteGenres?.length || 0;

    return (
        <Stack spacing={3} sx={{ width: '100%', maxWidth: '400px' }}>
            <Box>
                <Typography variant="h3" sx={{ fontFamily: 'var(--font-dancing-script), cursive', fontWeight: 'bold', mb: 1 }}>
                    Tune Your Mood
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary'}}>
                    Which genres lift your spirits? We recommend picking at least three.
                </Typography>
            </Box>

            <Box sx={{ maxHeight: '350px', overflowY: 'auto', pr: 1, '&::-webkit-scrollbar': { width: '4px' }, '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px' } }}>
                {Object.entries(groupedGenres).map(([category, items]) => (
                    <Box key={category} sx={{ mb: 3 }}>
                        <Typography variant="overline" sx={{ fontWeight: 'bold', letterSpacing: 1.2, color: 'primary.light', ml: 0.5 }}>
                            {category}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                            {items.map((genre) => {
                                const isSelected = userState.favoriteGenres?.includes(genre.id);
                                return (
                                    <Chip
                                        key={genre.id}
                                        label={genre.name}
                                        onClick={() => toggleGenre(genre.id)}
                                        icon={isSelected ? <CheckCircleIcon sx={{ fontSize: '1.1rem' }} /> : undefined}
                                        color={isSelected ? "primary" : "default"}
                                        variant={isSelected ? "filled" : "outlined"}
                                        sx={{
                                            py: 2.5,
                                            fontSize: '1rem',
                                            transition: '0.2s',
                                            borderColor: isSelected ? 'primary.main' : 'rgba(255,255,255,0.2)',
                                            '&:hover': { transform: 'translateY(-2px)', bgcolor: isSelected ? 'primary.dark' : 'rgba(255,255,255,0.05)' }
                                        }}
                                    />
                                );
                            })}
                        </Box>
                    </Box>
                ))}
            </Box>

            <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                <Button fullWidth variant="outlined" onClick={() => changeStep(-1)} sx={{ py: 1 }}>
                    Back
                </Button>
                <Button fullWidth variant="contained" onClick={() => changeStep(1)} sx={{ py: 1, fontWeight: 'bold' }}>
                    Proceed ({selectionCount})
                </Button>
            </Stack>
        </Stack>
    );
}