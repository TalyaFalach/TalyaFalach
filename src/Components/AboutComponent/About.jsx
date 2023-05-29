import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./../../App.css";

const About = () => {
  return (
    <Container>
      <div className="container mx-auto text-center mt-5">
        <h1 className="font mx-auto text-center animate__animated animate__bounceInRight">
          ABOUT ME
        </h1>
        <Row className="mt-5">
          <Col sm={6}>
            <h3>Get to know me!</h3>
            <hr />
            <p>
              I'm a musician (guitar player) turned full stack developer with a
              focus on Quality Assurance (QA). With a meticulous eye for detail
              and a passion for delivering exceptional user experiences, I bring
              a unique blend of creativity and technical expertise to ensure
              software meets the highest standards of quality, usability, and
              functionality.
            </p>
          </Col>
          <Col sm={6}>
            <h3>My Skills</h3>
            <hr />
            <br />
            <mark className="bg-dark text-light p-1  rounded m-4">HTML</mark>
            <mark className="bg-dark text-light p-1   rounded m-3">CSS</mark>
            <mark className="bg-dark text-light p-1   rounded m-3">
              Java Script
            </mark>
            <br />
           
            <br />
            <mark className="bg-dark text-light p-1   rounded m-4">Python</mark>
            <mark className="bg-dark text-light p-1   rounded m-3">React</mark>
            <mark className="bg-dark text-light p-1   rounded m-3">MongoDB</mark>
            <br />
           
            <br />
            <mark className="bg-dark text-light p-1   rounded m-3">GitHub</mark>
            <mark className="bg-dark text-light p-1   rounded m-3">
              Express Basics
            </mark>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default About;
