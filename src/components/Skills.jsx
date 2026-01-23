import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip, Stack } from '@mui/material';
import { data } from '../data';

const Skills = () => {
  const skillCategories = [
    { title: "Gestion de Projet", items: data.skills.projectManagement },
    { title: "Back-end", items: data.skills.backend },
    { title: "Front-end", items: data.skills.frontend },
    { title: "Mobile", items: data.skills.mobile },
    { title: "IA & Outils", items: data.skills.ai },
    { title: "Bases de données", items: data.skills.database },
    { title: "Soft Skills", items: data.skills.softSkills },
    { title: "Langues", items: data.profile.languages.map(l => `${l.name} (${l.level})`) },
  ];

  return (
    <Box id="skills" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6, color: 'slate.900' }}>
          Compétences Techniques
        </Typography>
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper sx={{ p: 3, height: '100%' }} elevation={0} variant="outlined">
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>
                  {category.title}
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {category.items.map((skill, i) => (
                    <Chip key={i} label={skill} sx={{ bgcolor: 'white' }} />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
