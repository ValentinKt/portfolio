import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Link } from '@mui/material';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { data } from '../data';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'rgba(0, 0, 0, 0.9)', 
        color: 'text.primary', 
        py: 6, 
        borderTop: '1px solid', 
        borderColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={4}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main', textShadow: '0 0 10px rgba(20, 184, 166, 0.3)' }}>
              ValentinKt
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.6 }}>
              © {new Date().getFullYear()} - Tous droits réservés
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <IconButton 
              sx={{ 
                color: 'text.secondary', 
                '&:hover': { color: 'primary.main', boxShadow: '0 0 10px rgba(20, 184, 166, 0.2)' } 
              }} 
              href={data.profile.github} 
              target="_blank"
            >
              <Github />
            </IconButton>
            <IconButton 
              sx={{ 
                color: 'text.secondary', 
                '&:hover': { color: 'secondary.main', boxShadow: '0 0 10px rgba(188, 19, 254, 0.2)' } 
              }} 
              href={data.profile.linkedin} 
              target="_blank"
            >
              <Linkedin />
            </IconButton>
            <IconButton 
              sx={{ 
                color: 'text.secondary', 
                '&:hover': { color: 'error.main', boxShadow: '0 0 10px rgba(255, 49, 49, 0.2)' } 
              }} 
              href={`mailto:${data.profile.email}`}
            >
              <Mail />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
