// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, IconButton, Typography, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/Header.scss'; // Ensure this SCSS file is created and the path is correct

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Container className="header-container">
        <Link className="header-logo" to="/">
          <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo" className="logo" />
        </Link>
        <IconButton onClick={toggleMenu} className="menu-button">
          <MenuIcon />
        </IconButton>

        <Box className={`menu-overlay ${menuOpen ? 'active' : ''}`}>
          <Typography className="menu-link" variant="h4" component={Link} to="/" onClick={toggleMenu}>Home</Typography>
          <Typography className="menu-link" variant="h4" component={Link} to="/projects" onClick={toggleMenu}>Projects</Typography>
          <IconButton onClick={toggleMenu} className="close-menu-icon">
            <CloseIcon />
          </IconButton>
        </Box>
      </Container>
    </>
  );
};

export default Header;