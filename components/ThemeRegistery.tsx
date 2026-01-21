'use client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { getCustomTheme } from '@/theme/theme';
import { useState } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  // İleride burayı bir context ile bağlayıp kullanıcıya tema seçtirebilirsin
  const [mode] = useState<'light' | 'dark'>('dark');
  const theme = getCustomTheme(mode);

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}