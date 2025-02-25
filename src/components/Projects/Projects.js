import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title=""
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink=""
              demoLink=""
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              
              title="To-do List"
              description="A simple and interactive To-Do List app built using React and JavaScript, allowing users to add, manage, and delete tasks efficiently."
              ghLink="https://github.com/razanak/todolist-react"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Shipping Calculations"
              description="A shipping calculations app built with React that allows users to calculate shipping costs, providing real-time rate comparisons."
              ghLink="https://github.com/razanak/Centralized-repository-shipping_calculations"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Allergy Friendly Scanner"
              description="An allergy-friendly product scanner built in NodeJs that checks products for allergens based on barcode or input details."
              ghLink="https://github.com/razanak/allergy-friendly-scanner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="React Budget App"
              description="A React-based budget app that helps users track their expenses, set spending limits, and manage their finances with an intuitive, user-friendly interface.."
              ghLink="https://github.com/razanak/ejtos-react_budget_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              title="E-commerce Web App"
              description="An E-commerce web app built with React that allows users to browse products, add items to the cart, and securely complete purchases with a smooth, responsive interface."
              ghLink="https://github.com/razanak/my-portfolio.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
