import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip, Stack } from '@mui/material';
import { 
  Settings, Server, Layout, Smartphone, Cpu, Database, UserCheck, Languages,
  Coffee, Code2, Layers, Zap, Hexagon, Box as BoxIcon, Workflow, Share2, 
  Database as DbIcon, ShieldCheck, Braces, Terminal, BrainCircuit, Globe
} from 'lucide-react';
import { data } from '../data';

// Mapping des compétences vers des icônes
const skillIconMap = {
  // Mobile
  "Java": <Coffee size={14} />,
  "Kotlin": <Code2 size={14} />,
  "Koin": <Zap size={14} />,
  "DaggerHilt": <ShieldCheck size={14} />,
  "Clean Architecture": <Layers size={14} />,
  "Jetpack Compose": <Hexagon size={14} />,
  "Material3": <Layout size={14} />,
  "Coroutines": <Workflow size={14} />,
  "KMP - KMM": <Globe size={14} />,
  "KTor": <Server size={14} />,
  "GraphQL": <Share2 size={14} />,
  "Retrofit": <Braces size={14} />,
  "Room": <DbIcon size={14} />,
  
  // Backend
  "Spring Boot": <Coffee size={14} />,
  "Node.js": <Terminal size={14} />,
  "Express": <Server size={14} />,
  
  // Frontend
  "React": <BoxIcon size={14} />,
  "TypeScript": <Braces size={14} />,
  "Tailwind CSS": <Layout size={14} />,
  "Angular": <Hexagon size={14} />,
  
  // IA
  "Python": <Terminal size={14} />,
  "LangChain": <BrainCircuit size={14} />,
  "LangGraph": <Workflow size={14} />,
  "Ollama": <Cpu size={14} />,
  "RAG": <Database size={14} />,
  
  // Outils
  "Git": <Share2 size={14} />,
  "Docker": <BoxIcon size={14} />,
  "Jira": <Settings size={14} />,
  "VS Code": <Terminal size={14} />
};

const Skills = () => {
  const skillCategories = [
    { title: "Gestion de Projet", items: data.skills.projectManagement, icon: <Settings size={20} /> },
    { title: "Mobile", items: data.skills.mobile, icon: <Smartphone size={20} /> },
    { title: "IA & Outils", items: data.skills.ai, icon: <Cpu size={20} /> },
    { title: "Back-end", items: data.skills.backend, icon: <Server size={20} /> },
    { title: "Front-end", items: data.skills.frontend, icon: <Layout size={20} /> },
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
                  {category.items.map((skill, i) => {
                    // Nettoyage du nom de la compétence pour le mapping
                    const cleanSkill = skill.split(' (')[0].split(' - ')[0];
                    const icon = skillIconMap[cleanSkill] || skillIconMap[skill];
                    
                    return (
                      <Chip 
                        key={i} 
                        label={skill} 
                        icon={icon}
                        sx={{ 
                          bgcolor: 'white',
                          '& .MuiChip-icon': { color: 'primary.main' }
                        }} 
                      />
                    );
                  })}
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
