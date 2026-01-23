import React from 'react';
import { Box, Typography, Button, Container, Stack, Chip, Avatar } from '@mui/material';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { data } from '../data';

const Hero: React.FC = () => {
  const { profile } = data;

  return (
    <Box sx={{ bgcolor: 'white', pt: 8, pb: 6, borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
          <Box sx={{ flex: 1 }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: 'slate.900' }}>
              {profile.name}
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom sx={{ fontWeight: 'medium' }}>
              {profile.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3, color: 'text.secondary' }}>
              <MapPin size={18} />
              <Typography variant="body1">{profile.location}</Typography>
            </Box>
            <Typography variant="body1" paragraph sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: '600px' }}>
              {profile.summary}
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 4 }} flexWrap="wrap" useFlexGap>
              <Button
                variant="contained"
                size="large"
                startIcon={<Github />}
                href={profile.github}
                target="_blank"
              >
                GitHub
              </Button>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                startIcon={<Linkedin />}
                href={profile.linkedin}
                target="_blank"
                sx={{ bgcolor: '#0077b5', '&:hover': { bgcolor: '#005582' } }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Mail />}
                href={`mailto:${profile.email}`}
              >
                Email
              </Button>
            </Stack>
          </Box>
          <Box sx={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
            <Avatar
              sx={{
                width: { xs: 200, md: 300 },
                height: { xs: 200, md: 300 },
                bgcolor: 'primary.light',
                fontSize: '4rem',
                boxShadow: 3
              }}
            >
              VJ
            </Avatar>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
