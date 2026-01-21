'use client';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, ListItemIcon } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Info, Money, Star } from '@mui/icons-material';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(newOpen);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: 'background.default',
              backgroundImage: 'none', // Dark modda oluşan gri katmanı engeller
            },
          },
        }}
      >
        {/* Padding ve Genişlik burada yönetiliyor */}
        <Box sx={{ width: 280, display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>

          <List>
            {['Features', 'Pricing', 'Contact'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton 
                  component={Link} 
                  href={`#${text.toLowerCase()}`} 
                  onClick={toggleDrawer(false)}
                  sx={{
                    borderRadius: "12px"
                  }}
                >
                  <ListItemIcon>
                    { (index === 0) ? <Star /> : (index === 1) ? <Money /> : <Info /> }
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    slotProps={{
                      primary: {
                        sx: { fontFamily: 'Sora', fontWeight: 500 }
                      }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ flexGrow: 1 }} />
          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="outlined"
              fullWidth
              component={Link}
              href="/register"
              sx={{ borderRadius: '12px', textTransform: 'none', py: 1.5 }}
            >
              Register
            </Button>
            <Button
              variant="contained"
              fullWidth
              component={Link}
              href="/login"
              sx={{ borderRadius: '12px', textTransform: 'none', py: 1.5, boxShadow: 'none' }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Drawer>

      <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Image src="/logo_gradient.svg" alt="MoodTune Logo" width={40} height={40} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 800,
                  color: 'text.primary',
                  textDecoration: 'none',
                  letterSpacing: '-0.5px'
                }}
                component={Link}
                href="/"
              >
                MoodTune
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, ml: 4, flexGrow: 1 }}>
              <Button component={Link} href="#features" color="inherit" sx={{ textTransform: 'none', fontWeight: 500 }}>
                Features
              </Button>
              <Button component={Link} href="/pricing" color="inherit" sx={{ textTransform: 'none', fontWeight: 500 }}>
                Pricing
              </Button>
              <Button component={Link} href="#contact" color="inherit" sx={{ textTransform: 'none', fontWeight: 500 }}>
                Contact
              </Button>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                sx={{ borderRadius: '12px', textTransform: 'none', fontWeight: 600 }}
                component={Link}
                href='/register'
              >
                Register
              </Button>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                href='/login'
                sx={{ borderRadius: '12px', textTransform: 'none', fontWeight: 600, boxShadow: 'none' }}
              >
                Login
              </Button>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton aria-label='menu' onClick={toggleDrawer(true)} color="inherit">
                <MenuIcon />
              </IconButton>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;