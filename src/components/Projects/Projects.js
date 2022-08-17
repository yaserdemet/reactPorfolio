import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rec from "../../Assets/Projects/REC.png";
import movie from "../../Assets/Projects/movie.png";
import avatar from "../../Assets/Projects/avatar.png";
import github from "../../Assets/Projects/GİTHUB USERS.png";
import task from "../../Assets/Projects/task.png";
import styled from "../../Assets/Projects/styled comp.png";
import tour from "../../Assets/Projects/tour.gif";
import pure from "../../Assets/Projects/pure js task.png";
import stone from "../../Assets/Projects/stone.png";
import ios from "../../Assets/Projects/ios cal.png";
import guess from "../../Assets/Projects/guess.gif";
import shop from "../../Assets/Projects/Shopping.gif";
import bootstrap from "../../Assets/Projects/bootstrap.gif";
import sass from "../../Assets/Projects/sass.gif";
import bs2 from "../../Assets/Projects/bs2.gif";
import parallax from "../../Assets/Projects/parallax.gif";
import netflix from "../../Assets/Projects/netflix.gif";
import google from "../../Assets/Projects/google.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie App"
              description="In this project I have build a movie app by using React.js Context API and firebase. Get information with api and display it in a list. Also, I have used react-bootstrap and react-router-dom for routing. To see the details of the movie, visitors need to login with Goole account or create an account. "
              ghLink="https://github.com/yaserdemet/movieApp-react"
              demoLink="https://movie-app-react-68y1ey1wk-yaserdemet.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avatar}
              isBlog={false}
              title="Avatar React Router"
              description="This project was created with React.js and React-Router-DOM. Nested routes are used to navigate between pages. Used hooks such as useState useEffect useParams and useNavigate. Information and avatars comes from api by axios and is displayed in a list. "
              ghLink="https://github.com/yaserdemet/router-avatar-react"
              demoLink="https://router-avatar-react-4k9oqa6a5-yaserdemet.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rec}
              isBlog={false}
              title="Menu App React"
              description="This project was created with React.js and React-Bootstrap. Menu is displayed in a list. When user clicks on the menu, it will display the details of the menu. When user search a meal, set inputs info in state and fetch the meal information by axios.  "
            
              ghLink="https://github.com/yaserdemet/meal-router"
              demoLink="https://meal-react-router.vercel.app"
            />
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Github Users Router"
              description="Used react-router-dom, bootstrap.js and axios to fetch github users and display them in a list. Global State Management ( Context Api ).  Crypto apiKeys in .env files. Deployment with Vercel and Netlify"
              ghLink="https://github.com/yaserdemet/ghUsers-router"
              demoLink="https://github.com/yaserdemet/ghUsers-router"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Tracker React"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/yaserdemet/Task-Tracker-React"
              demoLink="https://task-tracker-react-djmdf739g-yaserdemet.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={styled}
              isBlog={false}
              title="Styled Component React"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/yaserdemet/Styled-Component-React"
              demoLink="https://github.com/yaserdemet/Styled-Component-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tour}
              isBlog={false}
              title="Tour Project React"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/yaserdemet/Styled-Component-React"
              demoLink="https://github.com/yaserdemet/Styled-Component-React"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pure}
              isBlog={false}
              title="Pure Js To Do List"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/yaserdemet/to-do-list"
              demoLink="https://yaserdemet.github.io/to-do-list/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stone}
              isBlog={false}
              title="Stone Paper Scissors Vanilla JS"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/yaserdemet/stone-paper-js"
              demoLink="https://yaserdemet.github.io/stone-paper-js/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ios}
              isBlog={false}
              title="IOS Calculator Vanilla JS"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/yaserdemet/stone-paper-js"
              demoLink="https://yaserdemet.github.io/stone-paper-js/"
              seeMore = "dwadawd"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guess}
              isBlog={false}
              title="Guess The Number Vanilla JS"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="hhttps://github.com/yaserdemet/guess-number-js"
              demoLink="https://yaserdemet.github.io/guess-number-js/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Guess The Number Vanilla JS"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/yaserdemet/vintage-java-script"
              demoLink="https://yaserdemet.github.io/vintage-java-script/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bootstrap}
              isBlog={false}
              title="Bootstrap Carousel"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/yaserdemet/carousel-bs-project"
              demoLink="https://yaserdemet.github.io/carousel-bs-project/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sass}
              isBlog={false}
              title="Sass Portfolio"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="hhttps://github.com/yaserdemet/guess-number-js"
              demoLink="https://yaserdemet.github.io/guess-number-js/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bs2}
              isBlog={false}
              title="Bootstrap Page"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/yaserdemet/boostrap2-project"
              demoLink="https://yaserdemet.github.io/boostrap2-project/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parallax}
              isBlog={false}
              title="Parallax Page"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/yaserdemet/boostrap2-project"
              demoLink="https://yaserdemet.github.io/parallax-website/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Login Page"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/yaserdemet/netflix"
              demoLink="https://yaserdemet.github.io/netflix/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Google Landing Page"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/yaserdemet/Google-Page"
              demoLink="https://github.com/yaserdemet/Google-Page"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
