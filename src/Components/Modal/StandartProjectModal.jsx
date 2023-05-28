import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { React, useState } from "react";

const StandartProjectModal = () => {
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
        <span className="text-primary">Click</span> to read about STANDART
        Project
      </h5>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>STANDART Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">
            <mark className="fw-bold">STANDART</mark> is a social network for
            musicians designed to include all music related needs in one place.
            Posts can always be seen, but to create your own posts, you must
            create an account and log in. <br /> <br /> Server side was built
            using node.js and express Client side was built using React
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

export default StandartProjectModal;
