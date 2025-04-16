import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const PopUp = ({ show, handleClose, title, content }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="sm" className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="popup-content">
          {content}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} className="popup-close-button">
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}; 