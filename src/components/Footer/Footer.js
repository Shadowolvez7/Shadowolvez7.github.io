import React from 'react';
import { Box, Typography, IconButton, Container, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // This is a placeholder for the LinkedIn icon
import ArtStationIcon from '../svgs/ArtStationIcon'; // Update the import path as necessary
import {ReactComponent as Curve} from '../svgs/curve.svg';
import '../../styles/Footer.scss';

const Footer = () => {
  return (
    <>
      <Curve className="footer-curve"/>
      <Box sx={{py: 6, position: 'relative', overflow: 'hidden' }} className="footer-container">
        <Container maxWidth="lg" sx={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h2 gutterBottom className="footer-header">
            Let's Connect!
          </h2>
          <Stack direction="row" justifyContent="center" spacing={10} sx={{ mb: 4 }} className="footer-connect-conatiner">
            <IconButton component="a" href="mailto:sabrina@castellanofam.com" className="icon-button-container">
              <EmailIcon className="icon-button-icon"/>
              <div variant="body2" className="icon-button-text">Email Me</div>
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com/in/sabrina-castellano-4ab295151/" target="_blank"  className="icon-button-container">
              <LinkedInIcon className="icon-button-icon" />
              <div variant="body2" className="icon-button-text">Follow Me</div>
            </IconButton>
            <IconButton component="a" href="https://www.artstation.com/shadowcgi" target="_blank"  className="icon-button-container">
              <ArtStationIcon className="icon-button-icon" />
              <div variant="body2" className="icon-button-text">Support Me</div>
            </IconButton>
          </Stack>
          <div variant="body2" color="text.secondary" align="center" className="footer-copyright">
            © {new Date().getFullYear()} Sabrina Castellano
          </div>
        </Container>
      </Box>
    </>
  );
};

export default Footer;