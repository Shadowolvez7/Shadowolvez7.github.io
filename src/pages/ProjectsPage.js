import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Chip } from '@mui/material';
import { parseCSVData } from '../utils/utilityFiles'; // Ensure this path is correct
import { Link } from 'react-router-dom';
import categoryColors from '../config/categoryColors'; // Update the import path as necessary
import '../styles/ProjectsPage.scss';


const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Adjust this path if necessary. If in public folder, it should be as below:
    parseCSVData(process.env.PUBLIC_URL + '/data/projects.csv', (data) => {
      // Log data to see if it's being parsed correctly
      console.log(data);
      setProjects(data);
    });
  }, []);

  // If projects is empty, this will render nothing
  if (!projects.length) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className="project-page-outer-container">
      <Container>
        <h1 variant="h2" className="projects-title">
          My Work
        </h1>
        <div className="projects-divider"/>
        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id} >
              <Card className="project-card-container">
                <CardActionArea component={Link} to={`/projects/${project.id}`}>
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
                  <CardContent>
                    <div className="project-page-chips">
                      {project.project_categories.split(',').map((category, index) => {
                        const color = categoryColors[category.trim()] || "#6C69BF"; // Default color
                        return (
                          <Chip 
                            key={index} 
                            label={category.trim()} 
                            style={{ backgroundColor: color, color: 'white' }} // Dynamic styling
                            className="category-chip" 
                          />
                        );
                      })}
                    </div>
                    <Typography gutterBottom variant="h5" component="div" className="project-title">
                      {project.project_title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProjectsPage;