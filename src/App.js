import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss'; // Ensure this is renamed from App.css to App.scss
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Header from './components/Header/Header'; // Assuming you have a Header component
import Footer from './components/Footer/Footer'; // Assuming you have a Footer component

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',  // Lighter shade of primary color
      main: '#3f50b5',   // Main primary color
      dark: '#002884',   // Darker shade of primary color
      contrastText: '#fff', // Text color to provide contrast
    },
    secondary: {
      light: '#ff7961',  // Lighter shade of secondary color
      main: '#f44336',   // Main secondary color
      dark: '#ba000d',   // Darker shade of secondary color
      contrastText: '#000', // Text color to provide contrast
    },
    error: {
      main: '#f44336',   // Error color
    },
    warning: {
      main: '#ff9800',   // Warning color
    },
    info: {
      main: '#2196f3',   // Information color
    },
    success: {
      main: '#4caf50',   // Success color
    },
    background: {
      default: '#fafafa', // Page background color
      paper: '#fff',      // Background color for components
    },
    text: {
      primary: '#333',    // Primary text color
      secondary: '#555',  // Secondary text color
      disabled: '#aaa',   // Disabled text color
      hint: '#888',       // Hint text color
    },
  },
  typography: {
    fontFamily: [
      'Roboto', 'Arial', 'sans-serif'
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    // ... other typography styles
  },
  // You can also define custom mixins, transitions, breakpoints, etc.
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;