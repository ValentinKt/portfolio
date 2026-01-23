import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip, Stack } from '@mui/material';
import { Settings, Server, Layout, Smartphone, Cpu, Database, UserCheck, Languages } from 'lucide-react';
import { data } from '../data';

const Skills = () => {
  const skillCategories = [
    { title: "Gestion de Projet", items: data.skills.projectManagement, icon: <Settings size={20} /> },
    { title: "Back-end", items: data.skills.backend, icon: <Server size={20} /> },
    { title: "Front-end", items: data.skills.frontend, icon: <Layout size={20} /> },
    { title: "Mobile", items: data.skills.mobile, icon: <Smartphone size={20} /> },
    { title: "IA & Outils", items: data.skills.ai, icon: <Cpu size={20} /> },
    { title: "Bases de données", items: data.skills.database, icon: <Database size={20} /> },
    { title: "Soft Skills", items: data.skills.softSkills, icon: <UserCheck size={20} /> },
    { title: "Langues", items: data.profile.languages.map(l => `${l.name} (${l.level})`), icon: <Languages size={20} /> },
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
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                  <Box sx={{ color: 'primary.main', display: 'flex' }}>
                    {category.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    {category.title}
                  </Typography>
                </Stack>
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
