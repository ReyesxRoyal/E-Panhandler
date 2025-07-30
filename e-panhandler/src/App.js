// src/App.js
import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Home from './components/Home';
import Donate from './components/Donate';
import Statistics from './components/Statistics';
import Resources from './components/Resources';
import DonationForm from './components/DonationForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box sx={{ width: '100%' }}>
          <Tabs defaultValue="home" aria-label="main navigation">
            <Tab value="home" label="Home" href="/" />
            <Tab value="donate" label="Donate" href="/donate" />
            <Tab value="statistics" label="Statistics" href="/statistics" />
            <Tab value="resources" label="Resources" href="/resources" />
          </Tabs>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;