import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip, Stack } from '@mui/material';
import { 
  Settings, Server, Layout, Smartphone, Cpu, Database, UserCheck, Languages,
} from 'lucide-react';
import { data } from '../data';

// Mapping des compétences vers des logos réels (Icons8)
const skillIconMap: Record<string, { icon: string; color: string }> = {
  // Gestion de Projet
  "Méthode AGILE": { icon: "https://img.icons8.com/color/48/project-management.png", color: '#00b8d9' },
  "Epic/Story": { icon: "https://img.icons8.com/color/48/task.png", color: '#6554c0' },
  "Sprint": { icon: "https://img.icons8.com/color/48/workflow.png", color: '#36b37e' },
  "Pair Programming": { icon: "https://img.icons8.com/color/48/conference-call.png", color: '#ff5630' },
  "Jira": { icon: "https://img.icons8.com/color/48/jira.png", color: '#0052cc' },
  "Confluence": { icon: "https://img.icons8.com/color/48/confluence.png", color: '#0052cc' },
  "Git": { icon: "https://img.icons8.com/color/48/git.png", color: '#f05032' },
  "GitHub": { icon: "https://img.icons8.com/color/48/github.png", color: '#333' },
  "GitLab": { icon: "https://img.icons8.com/color/48/gitlab.png", color: '#fc6d26' },
  "Pair Review": { icon: "https://img.icons8.com/color/48/search.png", color: '#ffc107' },
  
  // Mobile
  "Java": { icon: "https://img.icons8.com/color/48/java-coffee-cup-logo.png", color: '#ed8b00' },
  "Kotlin": { icon: "https://img.icons8.com/color/48/kotlin.png", color: '#7f52ff' },
  "Koin": { icon: "https://img.icons8.com/color/48/tree-structure.png", color: '#ffc107' },
  "DaggerHilt": { icon: "https://img.icons8.com/color/48/shield.png", color: '#3d5afe' },
  "Clean Architecture": { icon: "https://img.icons8.com/color/48/layers.png", color: '#4caf50' },
  "Jetpack Compose": { icon: "https://img.icons8.com/color/48/android-os.png", color: '#4285f4' },
  "Material3": { icon: "https://img.icons8.com/color/48/design.png", color: '#7b1fa2' },
  "Coroutines": { icon: "https://img.icons8.com/color/48/process.png", color: '#00bcd4' },
  "KMP - KMM": { icon: "https://img.icons8.com/color/48/globe.png", color: '#3f51b5' },
  "KTor": { icon: "https://img.icons8.com/color/48/server.png", color: '#00acc1' },
  "GraphQL": { icon: "https://img.icons8.com/color/48/graphql.png", color: '#e10098' },
  "Retrofit": { icon: "https://img.icons8.com/color/48/api.png", color: '#607d8b' },
  "Room": { icon: "https://img.icons8.com/color/48/database.png", color: '#4db6ac' },
  
  // Backend
  "Spring Boot": { icon: "https://img.icons8.com/color/48/spring-logo.png", color: '#6db33f' },
  "API REST": { icon: "https://img.icons8.com/color/48/api.png", color: '#607d8b' },
  "Hibernate": { icon: "https://img.icons8.com/color/48/hibernate.png", color: '#bcae79' },
  "Node.js": { icon: "https://img.icons8.com/fluency/48/node-js.png", color: '#339933' },
  "Express": { icon: "https://img.icons8.com/color/48/express-js.png", color: '#000000' },
  
  // Frontend
  "React": { icon: "https://img.icons8.com/officel/48/react.png", color: '#61dafb' },
  "TypeScript": { icon: "https://img.icons8.com/color/48/typescript.png", color: '#3178c6' },
  "Tailwind CSS": { icon: "https://img.icons8.com/color/48/tailwindcss.png", color: '#06b6d4' },
  "Angular": { icon: "https://img.icons8.com/color/48/angularjs.png", color: '#dd0031' },
  
  // IA
  "Python": { icon: "https://img.icons8.com/color/48/python.png", color: '#3776ab' },
  "LangChain": { icon: "https://img.icons8.com/color/48/chain.png", color: '#121212' },
  "LangGraph": { icon: "https://img.icons8.com/color/48/workflow.png", color: '#ff6f00' },
  "Ollama": { icon: "https://img.icons8.com/color/48/processor.png", color: '#546e7a' },
  "RAG": { icon: "https://img.icons8.com/color/48/search-more.png", color: '#009688' },
  
  // Databases
  "MySQL": { icon: "https://img.icons8.com/color/48/mysql-logo.png", color: '#4479A1' },
  "SQL Server": { icon: "https://img.icons8.com/color/48/microsoft-sql-server.png", color: '#CC2927' },
  "PostgreSQL": { icon: "https://img.icons8.com/color/48/postgreesql.png", color: '#336791' },
  "SQLite": { icon: "https://img.icons8.com/color/48/sqlite.png", color: '#003B57' },
  "MongoDB": { icon: "https://img.icons8.com/color/48/mongodb.png", color: '#4DB33D' },
  "Redis": { icon: "https://img.icons8.com/color/48/redis.png", color: '#D82C20' },
  
  // Outils
  "VS Code": { icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png", color: '#007acc' },
  "Trae": { icon: "https://img.icons8.com/color/48/artificial-intelligence.png", color: '#00b8d9' },
  "Zed": { icon: "https://img.icons8.com/color/48/edit.png", color: '#333' },
  "IntelliJ": { icon: "https://img.icons8.com/color/48/intellij-idea.png", color: '#fe315d' },
  "Android Studio": { icon: "https://img.icons8.com/color/48/android-studio.png", color: '#3ddc84' },
  
  // Soft Skills
  "Empathique": { icon: "https://img.icons8.com/color/48/trust.png", color: '#e91e63' },
  "Tolérant": { icon: "https://img.icons8.com/color/48/handshake.png", color: '#4caf50' },
  "Ambitieux": { icon: "https://img.icons8.com/color/48/rocket.png", color: '#ff9800' },
  "Curieux": { icon: "https://img.icons8.com/color/48/idea.png", color: '#ffeb3b' },
  "Adaptabilité": { icon: "https://img.icons8.com/color/48/synchronize.png", color: '#9c27b0' },
  "Flexibilité": { icon: "https://img.icons8.com/color/48/yoga.png", color: '#2196f3' }
};

const Skills: React.FC = () => {
  const skillCategories = [
    { title: "Gestion de Projet", items: data.skills.projectManagement, icon: <Settings size={20} /> },
    { title: "Mobile", items: data.skills.mobile, icon: <Smartphone size={20} /> },
    { title: "IA & Outils", items: data.skills.ai, icon: <Cpu size={20} /> },
    { title: "Back-end", items: data.skills.backend, icon: <Server size={20} /> },
    { title: "Front-end", items: data.skills.frontend, icon: <Layout size={20} /> },
    { title: "Bases de données", items: data.skills.database, icon: <Database size={20} /> },
    { title: "Outils", items: data.skills.tools, icon: <Settings size={20} /> },
    { title: "Soft Skills", items: data.skills.softSkills, icon: <UserCheck size={20} /> },
    { title: "Langues", items: data.profile.languages.map(l => `${l.name} (${l.level})`), icon: <Languages size={20} /> },
  ];

  return (
    <Box id="skills" sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 6, color: 'text.primary' }}>
          Compétences Techniques
        </Typography>
        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 3, 
                  height: '100%', 
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: (theme) => theme.palette.mode === 'dark' 
                      ? '0 0 20px rgba(20, 184, 166, 0.1)' 
                      : '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    transform: 'translateY(-4px)',
                  }
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                  <Box sx={{ 
                    p: 1, 
                    borderRadius: '8px', 
                    bgcolor: 'primary.main', 
                    color: 'primary.contrastText',
                    boxShadow: (theme) => theme.palette.mode === 'dark' 
                      ? '0 0 10px rgba(20, 184, 166, 0.4)' 
                      : 'none',
                    display: 'flex'
                  }}>
                    {category.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {category.title}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {category.items.map((skill, i) => {
                      const splitSkill = (skill || '').split(' (')[0] || '';
                      const cleanSkill = splitSkill.split(' - ')[0] || '';
                      const skillData = skillIconMap[cleanSkill] || skillIconMap[skill];
                    
                    const chipIcon = skillData ? (
                      <Box 
                        component="img" 
                        src={skillData.icon} 
                        alt={skill}
                        sx={{ width: 20, height: 20, objectFit: 'contain' }}
                      />
                    ) : null;
                    
                    return (
                      <Chip 
                        key={i} 
                        label={skill} 
                        icon={chipIcon as React.ReactElement}
                        sx={{ 
                          bgcolor: (theme) => theme.palette.mode === 'dark' 
                            ? 'rgba(255, 255, 255, 0.03)' 
                            : 'rgba(0, 0, 0, 0.03)',
                          border: '1px solid',
                          borderColor: (theme) => {
                            if (skillData) return theme.palette.mode === 'dark' ? `${skillData.color}44` : `${skillData.color}66`;
                            return theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
                          },
                          backdropFilter: 'blur(4px)',
                          '& .MuiChip-icon': { 
                            color: skillData ? skillData.color : 'primary.main' 
                          },
                          '&:hover': {
                            bgcolor: (theme) => {
                              if (skillData) return theme.palette.mode === 'dark' ? `${skillData.color}33` : `${skillData.color}15`;
                              return theme.palette.mode === 'dark' ? 'rgba(20, 184, 166, 0.1)' : 'rgba(0, 0, 0, 0.05)';
                            },
                            borderColor: skillData ? skillData.color : 'primary.main',
                            boxShadow: (theme) => {
                              if (theme.palette.mode === 'light') return 'none';
                              return skillData ? `0 0 10px ${skillData.color}44` : '0 0 10px rgba(20, 184, 166, 0.2)';
                            },
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
