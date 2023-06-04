import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import TalyaFalach from "./../../Images/TalyaFalach.jpg";

const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg" className="shadow">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            src={TalyaFalach}
            width="70"
            height="70"
            className="d-inline-block align-top rounded-circle"
            alt="Talya Falach"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="lead p-2 ">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>
              <span className="fw-bold m-2">TALYA FALACH</span>
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/projects")}
              className=" nav-hover"
            >
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/about")} className=" nav-hover">
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/gallery")}
              className=" nav-hover"
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/contact")}
              className=" nav-hover"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
