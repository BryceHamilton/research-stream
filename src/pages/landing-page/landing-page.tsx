import React, { useState } from 'react';
import LandingNavbar from './components/landing-navbar.jsx';
import LandingPageBody from './components/landing-body.jsx';
import Modal from 'react-bootstrap/Modal';
import Login from '../../components/login';

const LandingPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <LandingNavbar openModal={openModal} />
      <Modal
        show={modalOpen}
        style={{ opacity: '1' }}
        onHide={closeModal}
        className='login-modal'
      >
        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>
      <LandingPageBody openModal={openModal} closeModal={closeModal} />
    </div>
  );
};

export default LandingPage;
