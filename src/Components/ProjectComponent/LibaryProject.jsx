import Button from "react-bootstrap/Button";


import { React, useState } from "react";

const LibaryProject = () => {

  return (
    <>
      <h1>Libary Managment Project</h1>
      <hr className="w-25" />
      <p className="lead">
        <mark className="fw-bold">Libary project</mark> is a web application
        that combines two Rest API servers and the client side is developed with
        React. <br />
        Architecture was planned before the start of development and divided
        into DAL and BLL layers
        <br />
        <span className="fw-bold">Server:</span> The servers were developed with
        Python, Flask. The communication between the servers is done bu CRUD
        calls. The servers manage databaases which are implemented by MongoDB
        and pyMongo, website login and security implemented by JWT. <br />
        <span className="fw-bold">Client:</span> React.js, Redux,
        React-Router-Dom. Designed with React-Material-UI and Bootstrap
      </p>
      <a href="https://github.com/TalyaFalach/Cinema-Managment---Client">
        <Button className=" m-3">GitHub (Client)</Button>
      </a>{" "}
      <br />
      <a href="https://github.com/TalyaFalach/Cinema-Managment---SubscriptionsWS">
        <Button className=" m-3">GitHub (Server - 1)</Button>
      </a>{" "}
      <br />
      <a href="https://github.com/TalyaFalach/Cinema-Managment---CinemaWS">
        <Button className=" m-3">GitHub (Server - 2)</Button>
      </a>{" "}
      <br />
      <iframe
        className="rounded mx-auto  container"
        width="600"
        height="350"
        src="https://www.youtube.com/embed/tjrwZFae97U"
        title="‪React App   Google Chrome‬ 2023 05 28 14 24 30"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default LibaryProject;
