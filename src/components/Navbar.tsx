import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Mail } from 'lucide-react';
import ThemeToggleButton from './ThemeToggleButton';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Expériences', id: 'experience' },
    { label: 'Projets', id: 'projects' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Formation', id: 'education' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={0} 
      sx={{ 
        bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(18, 18, 18, 0.8)' : 'rgba(255, 255, 255, 0.8)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid', 
        borderColor: 'divider',
        boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 4px 30px rgba(0, 0, 0, 0.5)' : '0 1px 10px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              color: 'primary.main', 
              fontWeight: 'bold', 
              cursor: 'pointer',
              textShadow: (theme) => theme.palette.mode === 'dark' ? '0 0 10px rgba(20, 184, 166, 0.3)' : 'none'
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ValentinKt
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ ml: 2, display: 'flex', gap: 1, alignItems: 'center' }}>
            <ThemeToggleButton />
            <Button
              variant="contained"
              size="small"
              startIcon={<Mail size={16} />}
              href="mailto:jeannot.valentin@orange.fr"
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
