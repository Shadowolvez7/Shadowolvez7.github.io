import React, { useState, useEffect } from 'react';
import { Box, Container, Button, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { parseCSVData } from '../utils/utilityFiles';
import { Link as RouterLink } from 'react-router-dom';
import PortalEffect from '../components/PortalEffect/PortalEffect';
import {ReactComponent as Curve} from '../components/svgs/curve.svg';
import {ReactComponent as ThreeDCube} from '../components/svgs/3d_cube_about.svg';
import {ReactComponent as SabrinaWitch} from '../components/svgs/sabrina_witch_about.svg';
import {ReactComponent as AboutBackground} from '../components/svgs/purple_circle_about.svg';
import {ReactComponent as DefaultCube} from '../components/svgs/main-3d-cube.svg';
import {ReactComponent as Art} from '../components/svgs/main-art.svg';
import {ReactComponent as BookShelf} from '../components/svgs/main-book-shelf.svg';
import {ReactComponent as Chair} from '../components/svgs/main-chair.svg';
import {ReactComponent as Computer} from '../components/svgs/main-computer.svg';
import {ReactComponent as Desk} from '../components/svgs/main-desk.svg';
import {ReactComponent as Keyboard} from '../components/svgs/main-keyboard.svg';
import {ReactComponent as Lamp} from '../components/svgs/main-lamp.svg';
import {ReactComponent as Mouse} from '../components/svgs/main-mouse.svg';
import {ReactComponent as Plant} from '../components/svgs/main-plant.svg';
import {ReactComponent as Poster} from '../components/svgs/main-poster.svg';
import {ReactComponent as Rug} from '../components/svgs/main-rug.svg';
import {ReactComponent as Tablet} from '../components/svgs/main-tablet.svg';
import {ReactComponent as DarkAngel} from '../components/svgs/main-the-dark-angel-trilogy.svg';
import {ReactComponent as VrHeadset} from '../components/svgs/main-vr-headset.svg';
import '../styles/HomePage.scss'; // Ensure this SCSS file is created and the path is correct

const HomePage = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    parseCSVData(process.env.PUBLIC_URL + '/data/projects.csv', (data) => {
      const featured = data.filter(project => project.featured === 'TRUE');
      setFeaturedProjects(featured);
    });
  }, []);

  // Adjusted scrollToRef function to use scrollIntoView
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const myWorkRef = React.createRef();
  const aboutMeRef = React.createRef();

  return (
    <>
      {/* Intro Section */}
      <div className="intro-outer-container">
        <Container className="intro-container">
          <Box className="intro-section" sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            flexDirection: { xs: "column-reverse", sm: "row" },
            alignItems: 'center' 
          }}>
            <Box className="intro-left">
              <h1 className="title">
                Hi my name is Sabrina!
              </h1>
              <div className="subtitle">
                I weave magic into pixels, illuminating tales with digital artistry.
              </div>
              <Button variant="contained" onClick={() => scrollToRef(myWorkRef)} sx={{ mr: 1 }} className="mywork-button">
                My Work
              </Button>
              <Button variant="outlined" onClick={() => scrollToRef(aboutMeRef)} className="aboutme-button">
                About Me
              </Button>       
            </Box>
            <Box className="intro-right">
              <PortalEffect className="intro-right-portal" />
              <div className="main-room">
                <Poster className="svg-room main-poster"/>
                <Rug className="svg-room main-rug" />
                <Lamp className="svg-room main-lamp" />
                <Art className="svg-room main-art" />
                <Desk className="svg-room main-desk" />
                <Chair className="svg-room main-chair" />
                <Computer className="svg-room main-computer" />
                <Keyboard className="svg-room main-keyboard" />
                <Mouse className="svg-room main-mouse" />
                <Tablet className="svg-room main-tablet" />
                <DefaultCube className="svg-room main-defaultCube" />
                <BookShelf className="svg-room main-bookshelf" />
                <VrHeadset className="svg-room main-vrHeadset" />
                <DarkAngel className="svg-room main-dark-angel" />
                <Plant className="svg-room main-plant" />
              </div>
            </Box>
          </Box>
        </Container>
      </div>

      {/* Featured Section */}
      <Curve className="featured-top-curve"/>
      <div className="featured-outer-container">
        <Container className="featured-container">
          <Box ref={myWorkRef} className="featured-work-section" sx={{ my: 4 }}>
            <div className="featured-header">
              <h2 variant="h3" className="featured-work-title">
                Featured Work
              </h2>
              <Button variant="contained" component={RouterLink} to="/projects" sx={{ mb: 2 }} className="see-all-projects-link">
                See All Projects {'>'}
              </Button>
            </div>
            <Grid container spacing={20} className="featured-project-grid-container">
              {featuredProjects.map((project) => (
                <Grid item xs={12} sm={6} md={6} key={project.id} className="featured-project-grid">
                  <Card className="project-card-container">
                    <CardActionArea component={RouterLink} to={`/projects/${project.id}`}>
                      <div className="media-container"> {/* Wrapper div */}
                        <CardMedia
                          component="img"
                          image={project.thumbnail_image.startsWith('src') ? process.env.PUBLIC_URL + project.thumbnail_image.slice(3) : project.thumbnail_image}
                          alt={project.project_title}
                          className="project-card"
                        />
                        <div className="overlay">
                          <span className="overlay-text">Learn More</span>
                        </div>
                      </div>
                      <CardContent className="project-title">
                        <h3 component="div">
                          {project.project_title}
                        </h3>
                      </CardContent>
                    </CardActionArea>
                  </Card>
              </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>

      {/* About Section */}
      <Curve className="about-top-curve"/>
      <div className="about-outer-container">
        <Container className="about-container">
          <Box ref={aboutMeRef} className="about-sabrina-section" sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexDirection: { xs: "column-reverse", sm: "row" },
            my: 4 }}>
            <Box className="about-text-section">
              <h2 variant="h3" className="about-text-header">
                About Sabrina
              </h2>
              <div className="about-text-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </Box>
            <Box className="about-image-section">
              <div className='about-container'>
                <div className='about-wrapper'>
                  <img className="about-image" src="images/sabrina-headshot-transformed.png"/>
                  <div className='about-svg'>
                    <AboutBackground className="about-svg-background"/>
                    <SabrinaWitch className="about-svg-witch"/>
                    <ThreeDCube className="about-svg-cube"/>
                  </div>
                </div>
              </div>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
