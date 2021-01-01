import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
import { FlexContainer } from '../../components/base/container';
import PrimaryButton from '../../components/primary-button';
import LandingNavbar from './components/landing-navbar';
import NewlyAdded from './components/newly-added';
import Login from '../../components/login';

const LoginModal = ({ modalOpen, closeModal }: any) => (
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
);

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
      <LoginModal modalOpen={modalOpen} closeModal={closeModal} />
      <div style={{ marginTop: '30px' }}>
        <FlexContainer>
          <div>
            <Header>Participation Made Easy</Header>
            <SubHeader>
              Connecting Researchers and Research Participants
            </SubHeader>
            <ButtonContainer>
              <PrimaryButton to='/signup'>
                Create an account today!
              </PrimaryButton>
              <PrimaryButton to='/researcherSignup'>
                Sign up as a Researcher
              </PrimaryButton>
            </ButtonContainer>
          </div>
        </FlexContainer>
        <NewlyAdded />
      </div>
    </div>
  );
};

const Header = styled.h1`
  font-size: 3.2vw;
  text-align: left;
`;

const SubHeader = styled.p`
  font-size: 1.5vw;
  color: #209bde;
  font-weight: 300;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 101.5%;
  justify-content: space-between;
`;

export default LandingPage;
