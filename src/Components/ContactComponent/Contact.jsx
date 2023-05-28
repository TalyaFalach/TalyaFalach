import React from "react";
import { Badge, Container, Table } from "react-bootstrap";
import Facebook from "../../Icons/Facebook";
import Instagram from "../../Icons/Instagram";
import Linkedin from "../../Icons/Linkedin";

const Contact = () => {
  return (
    <Container className="text-light">
      <h1 className="display-4 border-top border-bottom text-center p-2 mb-5 mt-5 animate__animated animate__bounceInRight  ">
        Contact Me
      </h1>
      <div className="text-center mx-auto container">
        <h2>
          <Badge>Talyafalach@gmail.com</Badge>
        </h2>
        <Facebook />
        <Instagram />
        <Linkedin />
      </div>
    </Container>
  );
};

export default Contact;
