import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yaser DEMET </span>
            from <span className="purple"> Ankara TURKEY</span>
            <br />I am a junior frontend developer.
            <br />
            <br />
            <p>
              Eager to develop my hard as well as soft skills that remarkably
              contribute to make me a successful and ethical professional.
            </p>
            <p>
              Curious about new technologies and driven to find ways to
              implement them in my work.
            </p>
            <p>
              Have a passion for learning front-end skills and creating user
              experiences
            </p>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
