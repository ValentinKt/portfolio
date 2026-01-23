import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip, Stack } from '@mui/material';
import { 
  Settings, Server, Layout, Smartphone, Cpu, Database, UserCheck, Languages,
  Coffee, Code2, Layers, Zap, Hexagon, Box as BoxIcon, Workflow, Share2, 
  Database as DbIcon, ShieldCheck, Braces, Terminal, BrainCircuit, Globe,
  FileText, Repeat, Users, Github, GitBranch, Search, Lightbulb, FastForward
} from 'lucide-react';
import { data } from '../data';

// Mapping des compétences vers des logos réels (Icons8)
const skillIconMap = {
  // Gestion de Projet
  "Méthode AGILE": { icon: "https://img.icons8.com/color/48/000000/agile.png", color: '#00b8d9' },
  "Epic/Story": { icon: "https://img.icons8.com/color/48/000000/task.png", color: '#6554c0' },
  "Sprint": { icon: "https://img.icons8.com/color/48/000000/backlog.png", color: '#36b37e' },
  "Pair Programming": { icon: "https://img.icons8.com/color/48/000000/conference-call.png", color: '#ff5630' },
  "Jira": { icon: "https://img.icons8.com/color/48/000000/jira.png", color: '#0052cc' },
  "Confluence": { icon: "https://img.icons8.com/color/48/000000/confluence.png", color: '#0052cc' },
  "Git": { icon: "https://img.icons8.com/color/48/000000/git.png", color: '#f05032' },
  "GitHub": { icon: "https://img.icons8.com/glyph-neue/48/000000/github.png", color: '#333' },
  "GitLab": { icon: "https://img.icons8.com/color/48/000000/gitlab.png", color: '#fc6d26' },
  "Pair Review": { icon: "https://img.icons8.com/color/48/000000/search.png", color: '#ffc107' },
  
  // Mobile
  "Java": { icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png", color: '#ed8b00' },
  "Kotlin": { icon: "https://img.icons8.com/color/48/000000/kotlin.png", color: '#7f52ff' },
  "Koin": { icon: "https://img.icons8.com/color/48/000000/dependency.png", color: '#ffc107' },
  "DaggerHilt": { icon: "https://img.icons8.com/color/48/000000/shield.png", color: '#3d5afe' },
  "Clean Architecture": { icon: "https://img.icons8.com/color/48/000000/layers.png", color: '#4caf50' },
  "Jetpack Compose": { icon: "https://img.icons8.com/color/48/000000/android-os.png", color: '#4285f4' },
  "Material3": { icon: "https://img.icons8.com/color/48/000000/design.png", color: '#7b1fa2' },
  "Coroutines": { icon: "https://img.icons8.com/color/48/000000/process.png", color: '#00bcd4' },
  "KMP - KMM": { icon: "https://img.icons8.com/color/48/000000/globe.png", color: '#3f51b5' },
  "KTor": { icon: "https://img.icons8.com/color/48/000000/server.png", color: '#00acc1' },
  "GraphQL": { icon: "https://img.icons8.com/color/48/000000/graphql.png", color: '#e10098' },
  "Retrofit": { icon: "https://img.icons8.com/color/48/000000/api.png", color: '#607d8b' },
  "Room": { icon: "https://img.icons8.com/color/48/000000/database.png", color: '#4db6ac' },
  
  // Backend
  "Spring Boot": { icon: "https://img.icons8.com/color/48/000000/spring-logo.png", color: '#6db33f' },
  "API REST": { icon: "https://img.icons8.com/color/48/000000/api.png", color: '#607d8b' },
  "Hibernate": { icon: "https://img.icons8.com/color/48/000000/hibernate.png", color: '#bcae79' },
  "Node.js": { icon: "https://img.icons8.com/fluency/48/000000/node-js.png", color: '#339933' },
  "Express": { icon: "https://img.icons8.com/color/48/000000/express-js.png", color: '#000000' },
  
  // Frontend
  "React": { icon: "https://img.icons8.com/officel/48/000000/react.png", color: '#61dafb' },
  "TypeScript": { icon: "https://img.icons8.com/color/48/000000/typescript.png", color: '#3178c6' },
  "Tailwind CSS": { icon: "https://img.icons8.com/color/48/000000/tailwindcss.png", color: '#06b6d4' },
  "Angular": { icon: "https://img.icons8.com/color/48/000000/angularjs.png", color: '#dd0031' },
  
  // IA
  "Python": { icon: "https://img.icons8.com/color/48/000000/python.png", color: '#3776ab' },
  "LangChain": { icon: "https://img.icons8.com/color/48/000000/chain.png", color: '#121212' },
  "LangGraph": { icon: "https://img.icons8.com/color/48/000000/workflow.png", color: '#ff6f00' },
  "Ollama": { icon: "https://img.icons8.com/color/48/000000/processor.png", color: '#546e7a' },
  "RAG": { icon: "https://img.icons8.com/color/48/000000/search-database.png", color: '#009688' },
  
  // Databases
  "MySQL": { icon: "https://img.icons8.com/color/48/000000/mysql-logo.png", color: '#4479A1' },
  "SQL Server": { icon: "https://img.icons8.com/color/48/000000/microsoft-sql-server.png", color: '#CC2927' },
  "PostgreSQL": { icon: "https://img.icons8.com/color/48/000000/postgreesql.png", color: '#336791' },
  "SQLite": { icon: "https://img.icons8.com/ios-filled/48/000000/sqlite.png", color: '#003B57' },
  "MongoDB": { icon: "https://img.icons8.com/color/48/000000/mongodb.png", color: '#4DB33D' },
  "Redis": { icon: "https://img.icons8.com/color/48/000000/redis.png", color: '#D82C20' },
  
  // Outils
  "VS Code": { icon: "https://img.icons8.com/color/48/000000/visual-studio-code-2019.png", color: '#007acc' },
  "Trae": { icon: "https://img.icons8.com/color/48/000000/artificial-intelligence.png", color: '#00b8d9' },
  "Zed": { icon: "https://img.icons8.com/color/48/000000/edit.png", color: '#333' },
  "IntelliJ": { icon: "https://img.icons8.com/color/48/000000/intellij-idea.png", color: '#fe315d' },
  "Android Studio": { icon: "https://img.icons8.com/color/48/000000/android-studio.png", color: '#3ddc84' },
  
  // Soft Skills
  "Empathique": { icon: "https://img.icons8.com/color/48/000000/trust.png", color: '#e91e63' },
  "Tolérant": { icon: "https://img.icons8.com/color/48/000000/handshake.png", color: '#4caf50' },
  "Ambitieux": { icon: "https://img.icons8.com/color/48/000000/rocket.png", color: '#ff9800' },
  "Curieux": { icon: "https://img.icons8.com/color/48/000000/idea.png", color: '#ffeb3b' },
  "Adaptabilité": { icon: "https://img.icons8.com/color/48/000000/sync.png", color: '#9c27b0' },
  "Flexibilité": { icon: "https://img.icons8.com/color/48/000000/flexible.png", color: '#2196f3' }
};

const Skills = () => {
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
                        icon={skillData ? (
                          <Box 
                            component="img" 
                            src={skillData.icon} 
                            alt={skill}
                            sx={{ width: 20, height: 20, objectFit: 'contain' }}
                          />
                        ) : undefined}
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
