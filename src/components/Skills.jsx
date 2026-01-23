import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip, Stack } from '@mui/material';
import { 
  Settings, Server, Layout, Smartphone, Cpu, Database, UserCheck, Languages,
  Coffee, Code2, Layers, Zap, Hexagon, Box as BoxIcon, Workflow, Share2, 
  Database as DbIcon, ShieldCheck, Braces, Terminal, BrainCircuit, Globe,
  FileText, Repeat, Users, Github, GitBranch, Search, Lightbulb, FastForward
} from 'lucide-react';
import { data } from '../data';

// Mapping des compétences vers des icônes avec couleurs
const skillIconMap = {
  // Gestion de Projet
  "Méthode AGILE": { icon: <Workflow size={14} />, color: '#00b8d9' },
  "Epic/Story": { icon: <FileText size={14} />, color: '#6554c0' },
  "Sprint": { icon: <Repeat size={14} />, color: '#36b37e' },
  "Pair Programming": { icon: <Users size={14} />, color: '#ff5630' },
  "Jira": { icon: <Settings size={14} />, color: '#0052cc' },
  "Confluence": { icon: <Search size={14} />, color: '#0052cc' },
  "Git": { icon: <GitBranch size={14} />, color: '#f05032' },
  "GitHub": { icon: <Github size={14} />, color: '#333' },
  
  // Mobile
  "Java": { icon: <Coffee size={14} />, color: '#ed8b00' },
  "Kotlin": { icon: <Code2 size={14} />, color: '#7f52ff' },
  "Koin": { icon: <Zap size={14} />, color: '#ffc107' },
  "DaggerHilt": { icon: <ShieldCheck size={14} />, color: '#3d5afe' },
  "Clean Architecture": { icon: <Layers size={14} />, color: '#4caf50' },
  "Jetpack Compose": { icon: <Hexagon size={14} />, color: '#4285f4' },
  "Material3": { icon: <Layout size={14} />, color: '#7b1fa2' },
  "Coroutines": { icon: <FastForward size={14} />, color: '#00bcd4' },
  "KMP - KMM": { icon: <Globe size={14} />, color: '#3f51b5' },
  "KTor": { icon: <Server size={14} />, color: '#00acc1' },
  "GraphQL": { icon: <Share2 size={14} />, color: '#e10098' },
  "Retrofit": { icon: <Braces size={14} />, color: '#607d8b' },
  "Room": { icon: <DbIcon size={14} />, color: '#4db6ac' },
  
  // Backend
  "Spring Boot": { icon: <Coffee size={14} />, color: '#6db33f' },
  "Node.js": { icon: <Terminal size={14} />, color: '#339933' },
  "Express": { icon: <Server size={14} />, color: '#000000' },
  
  // Frontend
  "React": { icon: <BoxIcon size={14} />, color: '#61dafb' },
  "TypeScript": { icon: <Braces size={14} />, color: '#3178c6' },
  "Tailwind CSS": { icon: <Layout size={14} />, color: '#06b6d4' },
  "Angular": { icon: <Hexagon size={14} />, color: '#dd0031' },
  
  // IA
  "Python": { icon: <Terminal size={14} />, color: '#3776ab' },
  "LangChain": { icon: <BrainCircuit size={14} />, color: '#121212' },
  "LangGraph": { icon: <Workflow size={14} />, color: '#ff6f00' },
  "Ollama": { icon: <Cpu size={14} />, color: '#546e7a' },
  "RAG": { icon: <Database size={14} />, color: '#009688' },
  
  // Databases
  "SQL": { icon: <DbIcon size={14} />, color: '#4479A1' },
  "MySQL": { icon: <DbIcon size={14} />, color: '#4479A1' },
  "SQL Server": { icon: <DbIcon size={14} />, color: '#CC2927' },
  "PostgreSQL": { icon: <DbIcon size={14} />, color: '#336791' },
  "SQLite": { icon: <DbIcon size={14} />, color: '#003B57' },
  "NoSQL": { icon: <Database size={14} />, color: '#4DB33D' },
  "MongoDB": { icon: <Database size={14} />, color: '#4DB33D' },
  "Redis": { icon: <Database size={14} />, color: '#D82C20' },
  
  // Soft Skills
  "Empathique": { icon: <UserCheck size={14} />, color: '#e91e63' },
  "Curieux": { icon: <Lightbulb size={14} />, color: '#ffeb3b' },
  "Adaptabilité": { icon: <Repeat size={14} />, color: '#9c27b0' }
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
                    const cleanSkill = skill.split(' (')[0].split(' - ')[0];
                    const skillData = skillIconMap[cleanSkill] || skillIconMap[skill];
                    
                    return (
                      <Chip 
                        key={i} 
                        label={skill} 
                        icon={skillData?.icon}
                        sx={{ 
                          bgcolor: 'white',
                          border: skillData ? `1px solid ${skillData.color}40` : '1px solid #e2e8f0',
                          '& .MuiChip-icon': { 
                            color: skillData ? skillData.color : 'primary.main' 
                          },
                          '&:hover': {
                            bgcolor: skillData ? `${skillData.color}10` : '#f8fafc',
                            borderColor: skillData ? skillData.color : 'primary.main',
                          },
                          transition: 'all 0.2s'
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
