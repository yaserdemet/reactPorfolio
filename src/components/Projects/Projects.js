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
          Here are a few projects. You can find more of them in my Github Account.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/99739515/191304833-6e9b8956-d9e2-4b84-8e01-f0928194b0b4.gif"
              isBlog={false}
              title="ThreeJs-React WeatherApp"
              description="In this project I have build a weather app by using ThreeJs and React.Get information with api and display it in a list. Also, I have used Material Ui, SASS for styling and also react-router-dom for routing. You can visit all around of earth and check weather wherever you want. As state management, i have used contextApi. 3rd part libraries such as axios toastify autoanimation"
              ghLink="https://github.com/yaserdemet/react-threeJs"
              demoLink="https://react-weather-app-sigma-silk.vercel.app"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/99739515/189138222-195e59d7-a3ce-4ddc-ba6a-d8a1396bcbd9.gif"
              isBlog={false}
              title="NextJs Ricky and Morty"
              description="This project was built with nextJs. In this project i have used nextAuth to login, Next-i18next library for translation, NextRouter for multi dynamc page application, Material Ui and module.css for styling, server side rendering, Layout and reuseable components,  "
              ghLink="https://github.com/yaserdemet/nextjs_rick_morty"
              demoLink="https://github.com/yaserdemet/nextjs_rick_morty"
            />
          </Col>


          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://user-images.githubusercontent.com/99739515/186932343-eaeeb885-ef78-4577-ae5e-24777bcb0a04.gif"
              isBlog={false}
              title="React Getir"
              description="This project aims to clone famous Getir clone with React. Following topics have been covered; props and state logic, conditional rendering, React hooks, 3rd party libraries such as axios, toastify, reactFlags. For styling Material UI and Bootstrap was used. For Seo optimization Helmet Hook was used"
              ghLink="https://github.com/yaserdemet/React-getirClone"
              demoLink="https://react-getir-clone-beta.vercel.app"
            />
          </Col>






          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie App React"
              description="In this project I have build a movie app by using React.js Context API and firebase. Get information with api and display it in a list. Also, I have used react-bootstrap and react-router-dom for routing. To see the details of the movie, visitors need to login with Goole account or create an account. I hold my api key in .env file. And used vercel and netlify for deployment."
              ghLink="https://github.com/yaserdemet/movieApp-react"
              demoLink="https://movie-app-react-68y1ey1wk-yaserdemet.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={avatar}
              isBlog={false}
              title="Avatar React Router"
              description="This project was created with React.js and React-Router-DOM. Nested routes are used to navigate between pages. Used hooks such as useState useEffect useParams and useNavigate. Information and avatars comes from api by axios and is displayed in a list. Third part library which is Toastify is used for notification  "
              ghLink="https://github.com/yaserdemet/router-avatar-react"
              demoLink="https://router-avatar-react-4k9oqa6a5-yaserdemet.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rec}
              isBlog={false}
              title="Menu App React"
              description="This project was created with React.js and React-Router-Dom. If user want to see details, login or register is required. Menu is displayed in a list. When user clicks on the menu, it will display the details of the menu. When user search a meal, set inputs info in state and fetch the meal information by axios. And used vercel and netlify for deployment. "
              ghLink="https://github.com/yaserdemet/meal-router"
              demoLink="https://meal-react-router.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Github Users Router"
              description="This project has contain many feature of React.js. Have used hooks such as useState useEffect to get data from api when doing this to ensure to handle with any in case of error used try catch structure, useParams to get the user id and useNavigate to navigate between pages. Multipage application is created by using react-router-dom. And Github Pages is used for deployment."
              ghLink="https://github.com/yaserdemet/ghUsers-router"
              demoLink="https://github.com/yaserdemet/ghUsers-router"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Tracker React"
              description="I have made similiar todo project with pure Js. But with react it is more easy to use. Practiced many of react features such as conditional rendering, prop and component logic, js iteration methods, and react hooks such as useState useEffect. "
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
              description="This is my first React project. In this project i used iteration method to get data from static JSON format and display it in a list. Get data in main component and iterate it in child component. Used props, components, conditional rendering and state to display data in a list. Last of all used css styling to make the project look aluring."
              ghLink="https://github.com/yaserdemet/Styled-Component-React"
              demoLink="https://github.com/yaserdemet/Styled-Component-React"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pure}
              isBlog={false}
              title="Pure Js To Do List"
              description="To do list is created with pure javascript and Dom manipulation. When user want to add some task to the list, user can type the task and press enter. When user want to delete a task, user can click on the task and press delete button. Sound effect is played when user add a task. Conditional icons are used to show the status of the task.  "
              ghLink="https://github.com/yaserdemet/to-do-list"
              demoLink="https://yaserdemet.github.io/to-do-list/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stone}
              isBlog={false}
              title="Stone Paper Scissors Vanilla JS"
              description="This game was created with vanilla js. Dom manipulation and build in functions of javascript was used in this game. Dark and light mode was created with toggle logic. The game is played with a computer and a player. The computer randomly selects a stone, paper or scissors. The player then selects the same stone, paper or scissors and the game is played. The winner is displayed."
              ghLink="https://github.com/yaserdemet/stone-paper-js"
              demoLink="https://yaserdemet.github.io/stone-paper-js/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ios}
              isBlog={false}
              title="IOS Calculator Vanilla JS"
              description="This project's static part was created Html and Css grid system. The dynamic part was created with Vanilla JS. The calculator was created with the help of the 'mathjs' library. Dom manipulation and its method which is capturing was used to display the result of the calculation."
              ghLink="https://github.com/yaserdemet/stone-paper-js"
              demoLink="https://yaserdemet.github.io/stone-paper-js/"
              seeMore="dwadawd"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={guess}
              isBlog={false}
              title="Guess The Number Vanilla JS"
              description="This is vanilla (pure) javascript game. I have used DOM (Document Object Material). Catched class and ids from HTML file and add them addEventListeners. The game is played by guessing a number between 1 and 100. The user has to guess the number and the computer will tell the user if the guess is higher or lower than the number. The user will have 5 chances to guess the number. The user will have to guess the number in less than 1 second. The game will be played in a browser."
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
              description="Bootstrap Carousel is a responsive image carousel. It is a great way to showcase your work portfolio or just some images. Many features of Bootstrap was used in this project cards, buttons, navbar, carausel and grid system."
              ghLink="https://github.com/yaserdemet/carousel-bs-project"
              demoLink="https://yaserdemet.github.io/carousel-bs-project/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sass}
              isBlog={false}
              title="Sass Portfolio"
              description="In this project i used SASS to style the portfolio page. The project is responsive and works on all devices. Break into many folders to make it easier to manage files and read them easily. Sass's many features are used such as mixins, variables, nested rules, media queries, and more."
              ghLink="hhttps://github.com/yaserdemet/guess-number-js"
              demoLink="https://yaserdemet.github.io/guess-number-js/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bs2}
              isBlog={false}
              title="Bootstrap Page"
              description="In this project i used bootstrap' colors, cards, container, row structure and grid system to make fully responsive for all device. form elements."
              ghLink="https://github.com/yaserdemet/boostrap2-project"
              demoLink="https://yaserdemet.github.io/boostrap2-project/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parallax}
              isBlog={false}
              title="Parallax Page"
              description="To make parallax page gave background img to container. Then
              background-attachment:fixed;
              background-position:center;
              background-repeat:no-repeat;
              background-size:cover;"
              ghLink="https://github.com/yaserdemet/boostrap2-project"
              demoLink="https://yaserdemet.github.io/parallax-website/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Login Page"
              description="This page clone the Netflix login page. The page is fully responsive and works on all devices. The page is built with HTML, CSS."
              ghLink="https://github.com/yaserdemet/netflix"
              demoLink="https://yaserdemet.github.io/netflix/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Google Landing Page"
              description="This is a landing page for Google. It is a simple landing page with a search bar and a sign in button. The user can search for a website and sign in to Google."
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
