import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Razan Abu Khurj </span>
            from <span className="purple"> Palestine.</span>
          
            I have completed my Bachelor of Science (B.S.) in Computer Engineering from Eastern Mediterranean University
            <br />
            <br />
            I am passionate about web development and digital innovation, always eager to explore emerging technologies and industry trends.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Innovation thrives where curiosity meets determination."{" "}
          </p>
          <footer className="blockquote-footer">Razan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
