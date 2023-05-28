import React from "react";
import { Container, Table } from "react-bootstrap";
import Facebook from "../../Icons/Facebook";
import Instagram from "../../Icons/Instagram";
import Linkedin from "../../Icons/Linkedin";

const Contact = () => {
  return (
    <Container className="text-light">
      <h1 className="display-4 border-top border-bottom p-2 mb-5 mt-5 animate__animated animate__bounceInRight  ">
        Contact Me
      </h1>
      <p className="lead w-25">Talyafalach@gmail.com</p>

      <Facebook />
      <Instagram />
      <Linkedin />
    </Container>
  );
};

export default Contact;
