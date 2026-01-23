import React from 'react';
import { Box, Typography, Container, Card, CardContent, Stack, Divider, Chip } from '@mui/material';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { data } from '../data';

const Experience: React.FC = () => {
  return (
    <Box id="experience" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6, color: 'text.primary' }}>
          Expériences Professionnelles
        </Typography>
        <Stack spacing={4}>
          {data.experience.map((exp, index) => (
            <Card key={index} variant="outlined" sx={{ borderLeft: '4px solid', borderLeftColor: 'primary.main', bgcolor: 'background.paper' }}>
              <CardContent sx={{ p: 4 }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'flex-start' }} spacing={2}>
                  <Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                      {exp.role}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 'medium' }}>
                      {exp.company}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: { sm: 'right' } }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary', mb: 1 }}>
                      <Calendar size={16} />
                      <Typography variant="body2">{exp.period}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary' }}>
                      <MapPin size={16} />
                      <Typography variant="body2">{exp.location}</Typography>
                    </Stack>
                  </Box>
                </Stack>
                <Divider sx={{ my: 2 }} />
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  {exp.role.toLowerCase().includes('projet') && (
                    <Chip icon={<CheckCircle2 size={16} />} label="Gestion de Projet" size="small" color="primary" variant="outlined" />
                  )}
                  {exp.description.some(d => d.toLowerCase().includes('ia') || d.toLowerCase().includes('data')) && (
                    <Chip icon={<CheckCircle2 size={16} />} label="IA & Data" size="small" color="secondary" variant="outlined" />
                  )}
                </Stack>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {exp.description.map((item, i) => (
                    <Typography key={i} component="li" variant="body1" sx={{ mb: 1, color: 'text.secondary' }}>
                      {item}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Experience;
