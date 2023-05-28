import React from "react";
import { Col, Row } from "react-bootstrap";
import "./../../App.css";

const About = () => {
  return (
    <div className="bg-dark container mx-auto text-center text-light m-5">
      <Row>
        <Col sm={6}>
          <h2 className=" m-3 display-4 animate__animated animate__bounceInRight ">
            Hello!
          </h2>
          <p className="lead my-p animate__animated animate__bounceInLeft ">
            {" "}
            <mark className="fw-bold ">My name is Talya Falach</mark> , I'm 26
            years old from Netanya. In the past I studied music, playing the
            electric guitar and drums and connected to the world of music. I
            fell in love with the world of computers a year and a half ago, I
            studied development and recently studied QA. Excited and looking
            forward to learning new things.
            <br />
          </p>
        </Col>
        <Col sm={6}>
          <img
            className="shadow-inner    h-100 w-75 rounded"
            src={`https://scontent.ftlv15-1.fna.fbcdn.net/v/t1.6435-9/80436847_2418227685158941_4453789573083824128_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=u14YpJXoRfMAX81wU2j&_nc_ht=scontent.ftlv15-1.fna&oh=00_AfDq7QRWcspDGc9TTZlP0TXadX-Dz0zZ_2JsU35sonhfLg&oe=6491363A`}
            alt="me"
          />
        </Col>
      </Row>
    </div>
  );
};

export default About;
