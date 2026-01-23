import React from 'react';
import { Box, Typography, Container, Card, CardContent, Stack, Divider } from '@mui/material';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { data } from '../data';

const Education = () => {
  return (
    <Box id="education" sx={{ py: 8, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6, color: 'slate.900' }}>
          Formation
        </Typography>
        <Stack spacing={4}>
          {data.education.map((edu, index) => (
            <Card key={index} variant="outlined">
              <CardContent sx={{ p: 4 }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={2}>
                  <Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      {edu.school}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: { sm: 'right' } }}>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary', mb: 1 }}>
                      <Calendar size={16} />
                      <Typography variant="body2">{edu.period}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary' }}>
                      <MapPin size={16} />
                      <Typography variant="body2">{edu.location}</Typography>
                    </Stack>
                  </Box>
                </Stack>
                {edu.details && (
                  <>
                    <Divider sx={{ my: 2 }} />
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {edu.details.map((detail, i) => (
                        <Typography key={i} component="li" variant="body1" sx={{ mb: 1, color: 'text.secondary' }}>
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Education;
