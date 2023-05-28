import React from "react";
import { Badge, Col, Row } from "react-bootstrap";
import StandartProjectModal from "../Modal/StandartProjectModal";
import LibaryProjectModal from "../Modal/LibaryProjectModal";
import { Link } from "react-router-dom";
const githubLink = "https://github.com/TalyaFalach?tab=repositories";

const MyProjects = () => {
  return (
    <div className="text-light mb-5 container ">
      <h1 className="display-4 border-top border-bottom mx-auto  p-2 text-center mb-5 mt-5 animate__animated animate__bounceInRight  ">
        My Projects
      </h1>

      <Row>
        <Col sm={6}>
          <StandartProjectModal />
          <iframe
            className="rounded"
            width="350"
            height="350"
            src="https://www.youtube.com/embed/VZMknHkFiBw"
            title="‪React App   Google Chrome‬ 2023 05 28 13 11 28"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Col>
        <Col sm={6}>
          <LibaryProjectModal />
          <iframe
            width="350"
            height="350"
            src="https://www.youtube.com/embed/tjrwZFae97U"
            title="‪React App   Google Chrome‬ 2023 05 28 14 24 30"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col sm={6}>
          <h4>
            <a target="blank" href={githubLink}>
              <Badge className="animate__animated animate__bounceInLeft">
                Link To My GitHub
              </Badge>
            </a>
          </h4>
        </Col>
      </Row>
    </div>
  );
};

export default MyProjects;
