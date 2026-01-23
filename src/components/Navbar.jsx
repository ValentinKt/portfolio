import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Github, Mail, Phone } from 'lucide-react';

const Navbar = () => {
  const navItems = [
    { label: 'Expériences', id: 'experience' },
    { label: 'Projets', id: 'projects' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Formation', id: 'education' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 'bold', cursor: 'pointer' }}
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
          <Box sx={{ ml: 2, display: 'flex', gap: 1 }}>
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
