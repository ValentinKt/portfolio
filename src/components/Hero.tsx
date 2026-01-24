import React from 'react';
import { Box, Typography, Button, Container, Stack, Chip, Avatar } from '@mui/material';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { data } from '../data';
import profilePhoto from '../assets/Valentin_JEANNOT.jpeg';

const Hero: React.FC = () => {
  const { profile } = data;

  return (
    <Box sx={{ 
      bgcolor: 'background.default', 
      pt: 8, 
      pb: 6, 
      borderBottom: '1px solid', 
      borderColor: 'divider',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(20, 184, 166, 0.05) 0%, transparent 70%)',
        zIndex: 0,
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
          <Box sx={{ flex: 1 }}>
            <Typography variant="h2" component="h1" gutterBottom sx={{ 
              fontWeight: 'bold', 
              color: 'text.primary',
              textShadow: (theme) => theme.palette.mode === 'dark' ? '0 0 20px rgba(20, 184, 166, 0.3)' : 'none'
            }}>
              {profile.name}
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom sx={{ 
              fontWeight: 'medium',
              textShadow: (theme) => theme.palette.mode === 'dark' ? '0 0 10px rgba(20, 184, 166, 0.2)' : 'none'
            }}>
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
                sx={{ 
                  boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 0 15px rgba(188, 19, 254, 0.3)' : 'none',
                  '&:hover': {
                    boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 0 20px rgba(188, 19, 254, 0.5)' : 'none',
                  }
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Mail />}
                href={`mailto:${profile.email}`}
                sx={{
                  borderColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'divider',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 0 10px rgba(20, 184, 166, 0.2)' : 'none',
                  }
                }}
              >
                Email
              </Button>
            </Stack>
          </Box>
          <Box sx={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
            <Avatar
              src={profilePhoto}
              alt={`${profile.name} portrait`}
              imgProps={{ loading: 'lazy' }}
              sx={{
                width: { xs: 200, md: 300 },
                height: { xs: 200, md: 300 },
                border: '2px solid',
                borderColor: 'primary.main',
                boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 0 30px rgba(20, 184, 166, 0.4)' : '0 10px 25px -5px rgba(20, 184, 166, 0.2)',
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
