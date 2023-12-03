import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Chip, Button, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel'; // You will need to install this package
import { parseCSVData } from '../utils/utilityFiles';
import '../styles/ProjectDetailPage.scss';
import categoryColors from '../config/categoryColors'; // Adjust the path as needed
import technologyIcons from '../config/technologyIcons';
import {ReactComponent as BackArrow} from '../components/svgs/back_arrow.svg';
import {ReactComponent as FrontArrow} from '../components/svgs/forward_arrow.svg';

// Custom arrow components with restricted size
const CustomPrevArrow = ({ onClick }) => (
  <div className="project-detail-carousel-arrow project-detail-carousel-arrow-right" onClick={onClick} >
    <BackArrow className="arrow-svg" />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="project-detail-carousel-arrow project-detail-carousel-arrow-left" onClick={onClick} >
    <FrontArrow className="arrow-svg" />
  </div>
);

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    parseCSVData(process.env.PUBLIC_URL + '/data/projects.csv', (data) => {
      const projectData = data.find(p => p.id === id);
      setProject(projectData);
    });
  }, [id]);

  if (!project) {
    return <div>Loading project details...</div>;
  }

  const carouselItems = [];
  if (project.carousel_video) {
    const isYoutubeLink = project.carousel_video.includes('youtube');
    carouselItems.push(
      isYoutubeLink ? (
        <iframe
          key="video"
          width="100%"
          height="500"
          src={project.carousel_video.replace('watch?v=', 'embed/')}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <video key="video" controls width="100%" height="500"> // Set a fixed height
          <source src={project.carousel_video} type="video/mp4" />
        </video>
      )
    );
  }
  project.carousel_images.split(',').forEach((image, index) => {
    carouselItems.push(
      <img key={index} src={image.trim()} alt={`Project ${index}`} style={{ height: '500px', width: '100%', objectFit: 'cover' }} />
    );
  });

  return (
    <div className="project-detail-outer-container">
      <Container>
        <h1  className="project-detail-title">
          {project.project_title}
        </h1>
        
        <Carousel 
          autoPlay={false} 
          animation="slide"
          navButtonsAlwaysVisible={true}
          indicators={false}
          NavButton={({ onClick, style, next, prev }) => {
            const Component = next ? CustomNextArrow : CustomPrevArrow;
            return <Component onClick={onClick} />;
          }}
          className="project-details-carousel"
        >
          {carouselItems}
        </Carousel>

        <Box display="flex" justifyContent="space-between" className="project-details-info">
          <Box className="project-details-left">
              {project.project_categories.split(',').map((category, index) => {
                const color = categoryColors[category.trim()] || "#e0e0e0"; // Fallback color
                return (
                  <Chip
                    key={index}
                    label={category.trim()}
                    style={{ backgroundColor: color, color: 'white' }}
                  />
                );
              })}
            <div className="project-details-description-container">
              <h2 className="project-details-description-title">Overview</h2>
              <div className="project-details-description-text">{project.project_description}</div>
            </div>
          </Box>
          <Box className="project-details-right">
            <div className="project-details-ingredients-container">
              <h3 className="project-details-ingredients-title" >Ingredients</h3>
                <div className="project-details-ingredients-chips">
                  {project.technologies_used.split(',').map((tech, index) => {
                    const iconPath = technologyIcons[tech.trim()];
                    return (
                      iconPath && (
                        <img
                          key={index}
                          src={iconPath}
                          alt={tech.trim()}
                          title={tech.trim()}
                          style={{ width: '24px', height: '24px', marginRight: '8px' }} // Adjust styling as needed
                        />
                      )
                    );
                  })}
                </div>
            </div>
            <div className="project-details-role-container">
              <h3 className="project-details-role-title">Role</h3>
              <div className="project-details-role-text">{project.role}</div>
            </div>
            <div className="project-details-button">
              {project.project_link && (
                <Button variant="contained" href={project.project_link} target="_blank">
                  View The Project
                </Button>
              )}
            </div>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ProjectDetailPage;