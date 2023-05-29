import React from "react";
import { Badge, Container } from "react-bootstrap";
import Facebook from "../../Icons/Facebook";
import Instagram from "../../Icons/Instagram";
import Linkedin from "../../Icons/Linkedin";

const Contact = () => {
  return (
    <Container className="container border ">
      {/* 
      <div className="text-center mx-auto container">
        <h2>
          <Badge>Talyafalach@gmail.com</Badge>
        </h2>
        <Facebook />
        <Instagram />
        <Linkedin />
      </div> */}
      <h1 className=" p-2 mb-2 mt-2 animate__animated animate__bounceInRight  ">
        Contact Me
      </h1>
      <div className="d-flex mx-auto container text-center">
        <div className="mx-auto d-flex">
          <Facebook />
          <Instagram />
          <Linkedin />
        </div>
      </div>
      <h2>
        <div className="mx-auto text-center">
          <Badge className="mx-auto text-center container w-50">
            Talyafalach@gmail.com
          </Badge>
        </div>
      </h2>
    </Container>
  );
};

export default Contact;
