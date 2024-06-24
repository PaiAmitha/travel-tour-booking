import React, { useState, useEffect } from "react";
import "./BuildPackage.css";
import { Modal, Button, Form } from "react-bootstrap";

function BuildPackageModal({ show, onHide }) {
  const [selectedDestination, setSelectedDestination] =
    useState("Choose Destination");
  const [selectedDays, setSelectedDays] = useState("Number of Days");

  useEffect(() => {
    if (show) {
      setSelectedDestination("Choose Destination");
      setSelectedDays("Number of Days");
    }
  }, [show]);

  const handleBuildPackage = () => {
    console.log("Selected Destination:", selectedDestination);
    console.log("Number of Days:", selectedDays);
  };

  return (
    <Modal show={show} onHide={onHide} centered className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>Build Your Own Package</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-center w-100">
          <Button variant="primary" onClick={handleBuildPackage}>
            Build Package
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default BuildPackageModal;
