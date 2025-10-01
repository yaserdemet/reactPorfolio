import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projectsData } from "../../data/projectsData";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects. You can find more of them in my Github
          Account.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
