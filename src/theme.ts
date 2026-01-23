import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#14b8a6', // Neon Teal
      light: '#5eead4',
      dark: '#0f766e',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#bc13fe', // Neon Purple
    },
    error: {
      main: '#ff3131', // Neon Red
    },
    warning: {
      main: '#fff01f', // Neon Yellow
    },
    info: {
      main: '#00e5ff', // Neon Blue
    },
    success: {
      main: '#39ff14', // Neon Green
    },
    background: {
      default: '#000000',
      paper: '#0a0a0a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0',
    },
    divider: 'rgba(255, 255, 255, 0.1)',
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
      textShadow: '0 0 10px rgba(20, 184, 166, 0.5)',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.01em',
      textShadow: '0 0 8px rgba(20, 184, 166, 0.3)',
    },
    h3: {
      fontWeight: 700,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000000',
          backgroundImage: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000000 100%)',
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
            boxShadow: '0 0 15px rgba(20, 184, 166, 0.6)',
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          boxShadow: '0 0 10px rgba(20, 184, 166, 0.3)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          backgroundColor: 'rgba(10, 10, 10, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            borderColor: 'rgba(20, 184, 166, 0.3)',
            boxShadow: '0 0 20px rgba(20, 184, 166, 0.2)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(10, 10, 10, 0.8)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontWeight: 500,
          '&.MuiChip-outlined': {
            borderColor: 'rgba(255, 255, 255, 0.2)',
          },
        },
      },
    },
  },
});
