import { Box, Button, Stack, Typography, CircularProgress, Alert, Container } from "@mui/material";
import { useState, useCallback } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublicIcon from '@mui/icons-material/Public';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Step4({
    changeStep, userState, setUserState
}: {
    changeStep: (s: number) => void, userState: any, setUserState: (v: any) => void
}) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const hasLocation = userState.location?.lat !== null && userState.location?.lng !== null;

    const handleDetectLocation = useCallback(() => {
        setLoading(true);
        setError(null);

        if (!navigator.geolocation) {
            setError("Geolocation is not supported by your browser.");
            setLoading(false);
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                // Başarılı olursa state'i güncelle
                setUserState({
                    ...userState,
                    location: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                });
                setLoading(false);
            },
            (err) => {
                console.error(err);
                setError("Unable to retrieve your location. Please allow access or try again.");
                setLoading(false);
            }
        );
    }, [userState, setUserState]);

    const handleSubmit = () => {
        // Burada API'ye kayıt isteği atılacak (RegisterPage içindeki submit fonksiyonu tetiklenebilir)
        console.log("Final User Data:", userState);
        alert("Registration Complete! Check console for data.");
    };

    return (
        <Stack spacing={4} sx={{
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center',
        }}>
            <Box>
                <Typography variant="h3" sx={{ fontFamily: 'var(--font-dancing-script), cursive', fontWeight: 'bold', mb: 1 }}>
                    Where are you?
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    To show you the best content available in your region, we need your location.
                </Typography>
            </Box>

            <Container sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>

                <Box
                    sx={{
                        position: 'relative',
                        height: 160,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: hasLocation ? 'rgba(var(--primary-rgb), 0.1)' : 'rgba(0,0,0,0.03)',
                        borderRadius: '50%',
                        width: 160,
                        mx: 'auto',
                        border: '1px dashed',
                        borderColor: hasLocation ? 'primary.main' : 'text.disabled',
                        transition: '0.3s'
                    }}
                >
                    {loading ? (
                        <CircularProgress size={50} thickness={4} />
                    ) : hasLocation ? (
                        <Stack alignItems="center" sx={{ animation: 'fadeIn 0.5s ease' }}>
                            <CheckCircleIcon color="success" sx={{ fontSize: 60, mb: 1 }} />
                            <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'success.main' }}>
                                Location Set!
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {userState.location.lat.toFixed(4)}, {userState.location.lng.toFixed(4)}
                            </Typography>
                        </Stack>
                    ) : (
                        <PublicIcon sx={{ fontSize: 80, color: 'text.disabled', opacity: 0.5 }} />
                    )}

                    {/* Dekoratif ikon */}
                    {!hasLocation && !loading && (
                        <LocationOnIcon
                            color="primary"
                            sx={{
                                position: 'absolute',
                                top: '25%',
                                right: '25%',
                                fontSize: 40,
                                filter: 'drop-shadow(0px 4px 4px rgba(0,0,0,0.2))',
                                animation: 'bounce 2s infinite'
                            }}
                        />
                    )}
                </Box>

            </Container>

            {error && (
                <Alert severity="error" sx={{ borderRadius: 2 }}>{error}</Alert>
            )}

            <Stack spacing={2}>
                {!hasLocation ? (
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleDetectLocation}
                        startIcon={<LocationOnIcon />}
                        disabled={loading}
                        sx={{
                            py: 1.5,
                            borderRadius: '12px',
                            fontWeight: 'bold',
                            fontSize: '1rem'
                        }}
                    >
                        {loading ? "Detecting..." : "Detect My Location"}
                    </Button>
                ) : (
                    <Button
                        fullWidth
                        variant="outlined"
                        color="warning"
                        onClick={() => setUserState({ ...userState, location: { lat: null, lng: null } })}
                        sx={{ borderRadius: '12px' }}
                    >
                        Change Location
                    </Button>
                )}
            </Stack>

            <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                <Button
                    fullWidth
                    variant="outlined"
                    onClick={() => changeStep(-1)}
                    sx={{ borderRadius: '10px' }}
                >
                    Back
                </Button>
                <Button
                    fullWidth
                    variant="contained"
                    color="success" // Kayıt bitişi olduğu için yeşil (success) veya primary olabilir
                    onClick={handleSubmit}
                    disabled={!hasLocation} // Konum seçilmeden bitirmesin
                    sx={{ borderRadius: '10px', fontWeight: 'bold' }}
                >
                    Complete Registration
                </Button>
            </Stack>

            {/* Animasyon için keyframes (Global css'e de eklenebilir ama sx içinde de çalışır) */}
            <style jsx global>{`
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                    40% {transform: translateY(-10px);}
                    60% {transform: translateY(-5px);}
                }
                @keyframes fadeIn {
                    from {opacity: 0; transform: scale(0.9);}
                    to {opacity: 1; transform: scale(1);}
                }
            `}</style>
        </Stack>
    );
}