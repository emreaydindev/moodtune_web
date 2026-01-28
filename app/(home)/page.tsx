"use client";
import { Box, Button, Container, Typography, Card, CardContent, Avatar, Divider, Stack, Grid, useTheme, useMediaQuery } from "@mui/material";
import Link from "next/link";
import CloudIcon from '@mui/icons-material/Cloud';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { useEffect, useState } from "react";

const dark_posters = [
  "https://image.tmdb.org/t/p/original/wxxSyWPPgssnkO6FbCAVyntLLSr.jpg",
  "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
  "https://image.tmdb.org/t/p/original/zZqpAXxVSBtxV9qPBcscfXBcL2w.jpg",
  "https://image.tmdb.org/t/p/original/8rvLEmdI4gLrMO1rLqbNdnNcPFE.jpg",
  "https://image.tmdb.org/t/p/original/bPLRjO2pcBx0WL73WUPzuNzQ3YN.jpg",
]

const light_posters = [
  "https://image.tmdb.org/t/p/original/fK5ssgvtI43z19FoWigdlqgpLRE.jpg",
  "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
  "https://image.tmdb.org/t/p/original/67HggiWaP9ZLv5sPYmyRV37yAJM.jpg",
  "https://image.tmdb.org/t/p/original/5TiwfWEaPSwD20uwXjCTUqpQX70.jpg",
  "https://image.tmdb.org/t/p/original/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg"
]

export default function Home() {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const isDarkMode = theme.palette.mode === 'dark';

  const posters = isDarkMode ? dark_posters : light_posters;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posters.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [posters.length]);

  const getStepImage = (index: number) => {
    if (!mounted) return "";

    const images = {
      light: ["/hiw_first_light.png", "/hiw_second_light.png", "/hiw_third_light.png"],
      dark: ["/hiw_first.png", "/hiw_second.png", "/hiw_third.png"]
    };

    return isDarkMode ? images.dark[index] : images.light[index];
  };

  return (
    <Box className="content" sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
      <section id="hero">
        <Box sx={{
          position: 'relative',
          height: '600px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          mt: 2,
          bgcolor: 'black',
        }}>

          {/* Her poster için ayrı bir katman oluşturuyoruz */}
          {posters.map((url, index) => (
            <Box
              key={url}
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'opacity 1.5s ease-in-out', // Çok yumuşak geçiş
                opacity: currentIndex === index ? 1 : 0, // Sadece aktif olan görünür
                zIndex: currentIndex === index ? 1 : 0,
              }}
            />
          ))}

          {/* İÇERİK: Z-index ile tüm posterlerin üzerinde durmalı */}
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 10 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant={isMobile ? "h4" : isTablet ? "h3" : "h2"} sx={{ fontFamily: 'Sora', fontWeight: 800, color: 'white', mb: 3 }}>
                Let the weather shape your mood
              </Typography>
              <Typography variant={isMobile ? "body1" : "h6"} sx={{ fontFamily: 'Sora', fontWeight: 300, color: 'rgba(255,255,255,0.8)', mb: 4 }}>
                MoodTune reads your local weather and finds the perfect shows and films to match how you feel. Discover what to watch based on the world around you.
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" size="large" component={Link} href="/register" sx={{ borderRadius: '16px', px: 6, py: 1.5, fontWeight: 700, textTransform: 'none' }}>
                  Start
                </Button>
                <Button variant="outlined" size="large" component={Link} href="#howitworks" sx={{ borderRadius: '16px', px: 4, color: 'white', borderColor: 'white', textTransform: 'none' }}>
                  Explore
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
      </section>

      <section id="features">
        <Container sx={{ py: 10 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: 2 }}>FEATURES</Typography>
            <Typography variant={isMobile || isTablet ? "h4" : "h3"} sx={{ fontFamily: 'Sora', fontWeight: 800, mt: 1 }}>Everything you need to find your next favorite</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 2, maxWidth: 700, mx: 'auto' }}>
              MoodTune understands what you want to watch by knowing where you are and how you feel.
            </Typography>
          </Box>

          <Grid container spacing={2} justifyContent="center">
            {[
              { icon: <CloudIcon fontSize="large" color="primary" />, title: "Weather-based recommendations", desc: "Real-time weather data shapes every suggestion we make." },
              { icon: <SentimentSatisfiedAltIcon fontSize="large" color="primary" />, title: "Personalized mood matching", desc: "Your preferences create a unique viewing experience." },
              { icon: <SettingsSuggestIcon fontSize="large" color="primary" />, title: "Smart content discovery", desc: "Find shows and films tailored to your current state." }
            ].map((feature, index) => (
              <Grid size={(isMobile ? 12 : isTablet ? 6 : 4)} key={index}>
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{feature.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{feature.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <Divider />

      <section id="howitworks" style={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
        <Container sx={{ py: 10 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>PROCESS</Typography>
            <Typography variant={isMobile || isTablet ? "h4" : "h3"} sx={{ fontFamily: 'Sora', fontWeight: 800, mt: 1 }}>How MoodTune works</Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center" >
            {[
              { step: "1", title: "Share your location", desc: "We check the weather where you are right now." },
              { step: "2", title: "Analyze your mood", desc: "Weather patterns tell us what mood you might be in." },
              { step: "3", title: "Get recommendations", desc: "We suggest shows and films that match your mood." }
            ].map((item, index) => (
              <Grid size={(isMobile ? 10 : isTablet ? 5 : 4)} key={index}>
                <Card sx={{ borderRadius: 4, height: '100%', boxShadow: 'none', border: '1px solid rgba(0,0,0,0.05)' }}>
                  <Box sx={{ height: 200, bgcolor: 'grey.300', backgroundImage: `url(${getStepImage(index)})`, backgroundSize: 'cover', backgroundPosition: "center" }} />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      <Divider />

      <section id="cta">
        <Container sx={{ py: 10 }}>
          <Box sx={{
            bgcolor: 'primary.main',
            borderRadius: 8,
            p: { xs: 6, md: 10 },
            textAlign: 'center',
            color: 'primary.on',
            boxShadow: '0 20px 40px rgba(34, 140, 219, 0.3)',
            m: { xs: 3 }
          }}>
            <Typography variant={isMobile || isTablet ? "h4" : "h3"} sx={{ fontWeight: 800, mb: 2, fontFamily: 'Sora' }}>Ready to get started?</Typography>
            <Typography variant={isMobile ? "body1" : "h6"} sx={{ mb: 4, opacity: 0.9, fontWeight: 300 }}>Join thousands discovering what to watch based on their weather and mood.</Typography>
            <Button variant="contained" size="large" sx={{ bgcolor: 'black', color: 'white', borderRadius: '12px', px: 6, py: 2, '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' } }}>
              Sign up
            </Button>
          </Box>
        </Container>
      </section>

    </Box>
  );
}