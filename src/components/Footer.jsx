import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Link } from '@mui/material';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { data } from '../data';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'secondary.main', color: 'white', py: 6 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={4}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              ValentinKt
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              © {new Date().getFullYear()} - Tous droits réservés
            </Typography>
          </Box>
          <Stack direction="row" spacing={2}>
            <IconButton color="inherit" href={data.profile.github} target="_blank">
              <Github />
            </IconButton>
            <IconButton color="inherit" href={data.profile.linkedin} target="_blank">
              <Linkedin />
            </IconButton>
            <IconButton color="inherit" href={`mailto:${data.profile.email}`}>
              <Mail />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
