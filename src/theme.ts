import { type ThemeOptions } from '@mui/material/styles';
import { type PaletteMode } from '@mui/material';

export const getTheme = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: '#14b8a6', // Neon Teal
      light: '#5eead4',
      dark: '#0f766e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: mode === 'dark' ? '#bc13fe' : '#9333ea', // Neon Purple in dark, darker purple in light
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#f8fafc', // Light black in dark mode
      paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#0f172a',
      secondary: mode === 'dark' ? '#94a3b8' : '#475569',
    },
    divider: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
      textShadow: mode === 'dark' ? '0 0 10px rgba(20, 184, 166, 0.5)' : 'none',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.01em',
      textShadow: mode === 'dark' ? '0 0 8px rgba(20, 184, 166, 0.3)' : 'none',
    },
    h3: {
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: mode === 'dark' ? '#121212' : '#f8fafc',
          backgroundImage: mode === 'dark' 
            ? 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #121212 100%)'
            : 'none',
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
          fontWeight: 600,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: mode === 'dark' ? '0 0 15px rgba(20, 184, 166, 0.6)' : '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          boxShadow: mode === 'dark' ? '0 0 10px rgba(20, 184, 166, 0.3)' : 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backgroundColor: mode === 'dark' ? 'rgba(30, 30, 30, 0.8)' : '#ffffff',
          backdropFilter: 'blur(10px)',
          border: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
          boxShadow: mode === 'dark' 
            ? '0 8px 32px 0 rgba(0, 0, 0, 0.4)' 
            : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            borderColor: mode === 'dark' ? 'rgba(20, 184, 166, 0.3)' : '#14b8a6',
            boxShadow: mode === 'dark' 
              ? '0 0 20px rgba(20, 184, 166, 0.2)' 
              : '0 10px 15px -3px rgb(0 0 0 / 0.1)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: mode === 'dark' ? 'rgba(30, 30, 30, 0.8)' : '#ffffff',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: mode === 'dark' ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid rgba(0, 0, 0, 0.05)',
          color: mode === 'dark' ? '#ffffff' : '#0f172a',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 500,
          '&.MuiChip-outlined': {
            borderColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
  },
});

// For backward compatibility if needed, though we should migrate to getTheme
import { createTheme } from '@mui/material/styles';
export const theme = createTheme(getTheme('light'));
