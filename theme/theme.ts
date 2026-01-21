import { createTheme } from '@mui/material/styles';

export const getCustomTheme = (mode: 'light' | 'dark') => {
  const colors = mode === 'light' ? {
    // Light Scheme
    primary: '#33618D',
    onPrimary: '#FFFFFF',
    primaryContainer: '#D0E4FF',
    secondary: '#3E6837',
    background: '#F8F9FF',
    surface: '#F8F9FF',
    text: '#191C20',
  } : {
    // Dark Scheme
    primary: '#9ECAFC',
    onPrimary: '#003256',
    primaryContainer: '#144974',
    secondary: '#A4D397',
    background: '#101418',
    surface: '#101418',
    text: '#E0E2E8',
  };

  return createTheme({
    palette: {
      mode,
      primary: {
        main: colors.primary,
        contrastText: colors.onPrimary,
      },
      secondary: {
        main: colors.secondary,
      },
      background: {
        default: colors.background,
        paper: colors.surface,
      },
      text: {
        primary: colors.text,
      },
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: 'Inter, sans-serif',
      h1: { fontFamily: 'Sora, sans-serif', fontWeight: 700 },
      h2: { fontFamily: 'Sora, sans-serif', fontWeight: 600 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 24, 
            textTransform: 'none',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            boxShadow: 'none',
            border: '1px solid rgba(0,0,0,0.1)',
          },
        },
      },
    },
  });
};