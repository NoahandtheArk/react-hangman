// HelpModal using React Bootstrap

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function HelpModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>How to Play Hangman</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
          <li>A random word is chosen.</li>
          <li>Guess letters one at a time.</li>
          <li>Each wrong guess brings the hangman closer to being complete.</li>
          <li>You lose after 6 wrong guesses.</li>
          <li>Guess all letters correctly to win!</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Got it!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}