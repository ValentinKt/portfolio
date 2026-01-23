import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button, Chip, Stack } from '@mui/material';
import { Github, ExternalLink } from 'lucide-react';
import { data } from '../data';

const Projects: React.FC = () => {
  return (
    <Box id="projects" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 2, color: 'text.primary' }}>
          Projets Sélectionnés
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 6, color: 'text.secondary' }}>
          Une sélection de mes travaux récents sur GitHub
        </Typography>
        <Grid container spacing={4}>
          {data.projects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', borderColor: 'divider', '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 2 }}>
                    {project.tags.map((tag, i) => (
                      <Chip key={i} label={tag} size="small" variant="outlined" color="primary" />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button size="small" startIcon={<Github />} href={project.github} target="_blank">
                    Code Source
                  </Button>
                  {project.demo && (
                    <Button size="small" startIcon={<ExternalLink />} href={project.demo} target="_blank">
                      Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button variant="outlined" size="large" href={data.profile.github} target="_blank">
            Voir plus sur GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
