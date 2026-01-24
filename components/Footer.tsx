"use client"
import { Box, Container, Divider, Grid, Typography, Link as MuiLink, Stack } from "@mui/material";
import NextLink from "next/link";

const footerData = [
  {
    title: "Product",
    links: [
      {
        title: "How it works",
        link: "#howitworks"
      }, 
      {
        title: "Pricing",
        link: "/pricing"
      }, 
      {
        title: "Features",
        link: "#features"
      },
    ],
  },
  {
    title: "Support",
    links: [
      {
        title: "Contact us",
        link: "/contact"
      }, 
      {
        title: "Feedback",
        link: "/feedback"
      },
    ]
  },
  {
    title: "Legal",
    links: [
      {
        title: "Privacy policy",
        link: "/privacypolicy"
      }, 
      {
        title: "Terms of service",
        link: "/termsofservice"
      },
      {
        title: "Cookie settings",
        link: "/todo/cookiesettings"
      },
    ],
  },
  {
    title: "Resources",
    links: [{
        title: "Download our app",
        link: "/todo/playstorelink"
      },
    ],
  },
];


const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 'auto', bgcolor: 'background.default' }}>
      <Divider />
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="space-between">
            <Grid>
              <Typography variant="h6" sx={{ fontWeight: 800, mb: 2, fontFamily: 'Sora' }}>
                MoodTune
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 200, mb: 2 }}>
                Discover what to watch based on your weather and mood.
              </Typography>
              <Typography variant="caption" color="text.secondary">
              © 2026 MoodTune. All rights reserved.
            </Typography>
            </Grid>

            <Grid>
              <Grid container spacing={4}>
                {footerData.map((section) => (
                  <Grid key={section.title}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                      {section.title}
                    </Typography>
                    <Stack spacing={1.5}>
                      {section.links.map((link) => (
                        <MuiLink
                          key={link.title}
                          component={NextLink}
                          href={link.link}
                          underline="none"
                          color="text.secondary"
                          sx={{ 
                            fontSize: '0.875rem', 
                            '&:hover': { color: 'primary.main', transition: '0.2s' } 
                          }}
                        >
                          {link.title}
                        </MuiLink>
                      ))}
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;