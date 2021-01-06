import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// import Login from "../Login.jsx";

const StudyModal: React.FunctionComponent<{
  modalOpen: boolean;
  closeModal: () => void;
  _id: string;
  user?: User;
  title: string;
}> = ({ modalOpen, closeModal, _id, user, title }) => (
  <Modal
    show={modalOpen}
    style={{ opacity: '1' }}
    onHide={closeModal}
    className={user ? 'studyModal' : 'login-modal'}
  >
    {user && <Modal.Header closeButton />}
    <Modal.Body>
      {user && (
        <div style={{ textAlign: 'center' }}>{'Applied for ' + title}</div>
      )}
    </Modal.Body>
    {user && (
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    )}
  </Modal>
);

export default StudyModal;
