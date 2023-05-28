import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { React, useState } from "react";

const LibaryProjectModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}
      <h5
        style={{ cursor: "pointer" }}
        className="text-primary my-shadow link  rounded m-4 p-2  text-light "
        onClick={handleShow}
      >
        <span className="text-primary">Click</span> to read about Libary
        Managment Project
      </h5>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>LIBARY Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">
            <mark className="fw-bold">Libary project</mark> is a web application
            that combines two Rest API servers and the client side is developed
            with React. <br />
            Architecture was planned before the start of development and divided
            into DAL and BLL layers
            <br />
            <span className="fw-bold">Server:</span> The servers were developed
            with Python, Flask. The communication between the servers is done bu
            CRUD calls. The servers manage databaases which are implemented by
            MongoDB and pyMongo, website login and security implemented by JWT.{" "}
            <br />
            <span className="fw-bold">Client:</span> React.js, Redux,
            React-Router-Dom. Designed with React-Material-UI and Biitstrap
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LibaryProjectModal;
