import Button from "react-bootstrap/Button";


import { React, useState } from "react";

const StandartProject = () => {

  return (
    <>
      <h1>STANDART Project</h1>
      <hr className="w-25" />
      <p className="lead">
        <mark className="fw-bold">STANDART</mark> is a social network for
        musicians designed to include all music related needs in one place.
        Posts can always be seen, but to create your own posts, you must create
        an account and log in. <br /> Server side was built using node.js and
        express Client side was built using React
      </p>
      <a href="https://github.com/TalyaFalach/standart-client">
        <Button className=" m-3">GitHub (Client)</Button>
      </a>{" "}
      <br />
      <a href="https://github.com/TalyaFalach/standartServer">
        <Button className=" m-3">GitHub (Server)</Button>
      </a>
      <iframe
        className="rounded mx-auto  container"
        width="600"
        height="350"
        src="https://www.youtube.com/embed/VZMknHkFiBw"
        title="‪React App   Google Chrome‬ 2023 05 28 13 11 28"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
};

export default StandartProject;
