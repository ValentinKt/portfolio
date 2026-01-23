import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import { Sun, Moon } from 'lucide-react';
import { useColorMode } from '../ThemeContext';

const ThemeToggleButton: React.FC = () => {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      onClick={toggleColorMode}
      color="inherit"
      sx={{
        p: 1,
        transition: 'all 0.3s ease',
        '&:hover': {
          bgcolor: theme.palette.mode === 'dark' ? 'rgba(20, 184, 166, 0.1)' : 'rgba(0, 0, 0, 0.05)',
          transform: 'rotate(15deg)',
        },
      }}
      aria-label="Toggle light/dark theme"
    >
      {theme.palette.mode === 'dark' ? (
        <Sun size={20} color="#fff01f" style={{ filter: 'drop-shadow(0 0 5px rgba(255, 240, 31, 0.5))' }} />
      ) : (
        <Moon size={20} color="#475569" />
      )}
    </IconButton>
  );
};

export default ThemeToggleButton;
