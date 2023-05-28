import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const navigate = useNavigate()
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand
          onClick={() => navigate("/")}
          className="text-light nav-hover"
          href="#home"
        >
          HOME
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="lead p-2 ">
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => navigate("/projects")}
              className="text-light nav-hover"
              href="#home"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/about")}
              className="text-light nav-hover"
            
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/gallery")}
              className="text-light nav-hover"
            
            >
              Gallery
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate("/contact")}
              className="text-light nav-hover"
            
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
