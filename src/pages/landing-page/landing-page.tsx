import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FlexContainer } from '../../components/base/container';
import LandingNavbar from './components/landing-navbar';
import NewlyAdded from './components/newly-added';
import Login from '../../components/login';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../../store';

const LandingPage: React.FunctionComponent = () => {
  const { isAuthenticated } = useSelector((state: AppState) => state.user);

  useEffect(() => window.scroll(0, 0), []);

  if (isAuthenticated) return <Redirect to='/browse' />;

  return (
    <div>
      <LandingNavbar />
      <div style={{ marginTop: '30px' }}>
        <FlexContainer>
          <div>
            <Header>Participation Made Easy</Header>
            <SubHeader>
              Connecting Researchers and Research Participants
            </SubHeader>
            <ButtonContainer>
              <Login custom='Sign up as a Researcher' />
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
