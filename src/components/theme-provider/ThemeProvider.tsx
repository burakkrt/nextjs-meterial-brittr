'use client';
import React from 'react';
import { IRootProps } from './types';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function ThemeRootProvider({ children }: IRootProps) {
  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins', 'Roboto', '-apple-system'].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default ThemeRootProvider;
