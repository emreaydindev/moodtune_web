'use client';
import '../app/globals.css';
import { AppBar, Toolbar, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, ListItemIcon, useTheme } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import { Info, Money, Star, WbSunny, DarkMode } from '@mui/icons-material';
import ThemeSwitcher from './ThemeSwitcher';
import { useColorMode } from '@/context/ThemeContext';
import Logo from './Logo';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const { toggleColorMode } = useColorMode(); 

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
              backgroundImage: 'none',
            },
          },
        }}
      >
        <Box sx={{ width: 280, display: 'flex', flexDirection: 'column', height: '100%', p: 3 }}>

          <List>
            {['Features', 'Contact'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  component={Link}
                  href={(index === 0) ? `#${text.toLowerCase()}` : `/${text.toLowerCase()}`}
                  onClick={toggleDrawer(false)}
                  sx={{ borderRadius: "12px", mb: 0.5 }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {(index === 0) ? <Star /> : <Info />}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    slotProps={{
                      primary: { sx: { fontFamily: 'Sora', fontWeight: 500 } }
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ my: 1, opacity: 0.5 }} />

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  toggleColorMode();
                }}
                sx={{
                  borderRadius: "12px",
                  bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'
                }}
              >
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {theme.palette.mode === 'dark' ? <WbSunny fontSize="small" /> : <DarkMode fontSize="small" />}
                </ListItemIcon>
                <ListItemText
                  primary={theme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  slotProps={{
                    primary: { sx: { fontFamily: 'Sora', fontWeight: 500 } }
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>

          <Box sx={{ flexGrow: 1 }} />
          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="outlined"
              fullWidth
              component={Link}
              href="/register"
              onClick={toggleDrawer(false)}
              sx={{ borderRadius: '12px', textTransform: 'none', py: 1.5, fontWeight: 600 }}
            >
              Register
            </Button>
            <Button
              variant="contained"
              fullWidth
              component={Link}
              href="/login"
              onClick={toggleDrawer(false)}
              sx={{ borderRadius: '12px', textTransform: 'none', py: 1.5, boxShadow: 'none', fontWeight: 600 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Drawer>

      <AppBar position="sticky" color="inherit" elevation={0} sx={{ borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>

            <Logo />

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, ml: 4, flexGrow: 1 }}>
              <Button component={Link} href="#features" color="inherit" sx={{ textTransform: 'none', fontWeight: 700 }}>
                Features
              </Button>
              <Button component={Link} href="/contact" color="inherit" sx={{ textTransform: 'none', fontWeight: 700 }}>
                Contact
              </Button>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
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

              <ThemeSwitcher />
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: 'center', gap: 1 }}>
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