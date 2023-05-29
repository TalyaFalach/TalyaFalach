import React from "react";

import StandartProject from "./../ProjectComponent/StandartProject";
import LibaryProject from "../ProjectComponent/LibaryProject";
import { Badge } from "react-bootstrap";
const githubLink = "https://github.com/TalyaFalach?tab=repositories";

const MyProjects = () => {
  return (
    <div className=" mb-5 container ">
      <h1 className="display-4 mx-auto  p-2 text-center mb-5 mt-5 animate__animated animate__bounceInRight  ">
        My Projects
      </h1>
      <StandartProject />
      <br />
      <div className="p-5 m-5"></div>
      <LibaryProject />
      <div className="p-5 m-5"></div>
    </div>
  );
};

export default MyProjects;
