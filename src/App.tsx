import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import { ColorModeProvider } from './ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box component="main">
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
        </Box>
        <Footer />
      </Box>
    </ColorModeProvider>
  );
}

export default App;
