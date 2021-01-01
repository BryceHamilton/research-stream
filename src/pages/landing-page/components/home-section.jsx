import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer } from '../../../components/base/container';

const Header = styled.h1`
  font-size: 3.2vw;
`;

const SubHeader = styled.p`
  font-size: 1.5vw;
  color: #209bde;
  font-weight: 300;
`;

const PrimaryButton = styled(Link)`
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  background-color: #209bde;
  border-color: #209bde;
  user-select: none;
  padding: 0.525rem 0.75rem;
  font-size: 0.8rem;
  border-radius: 0.4rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: #fff;
    text-decoration: none;
    background-color: #2946f7;
    border-color: #1d3cf6;
  }

  &:active {
    color: #fff;
    text-decoration: none;
    background-color: #1d3cf6;
  }

  &:focus {
    color: #fff;
    text-decoration: none;
    box-shadow: 0 0 0 0.2rem rgba(105, 125, 249, 0.5);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 101.5%;
  justify-content: space-between;
`;

const HomeSection = () => (
  <FlexContainer>
    <div>
      <Header>Participation Made Easy</Header>
      <SubHeader>Connecting Researchers and Research Participants</SubHeader>
      <ButtonContainer>
        <PrimaryButton to='/signup'>Create an account today!</PrimaryButton>
        <PrimaryButton to='/researcherSignup'>
          Sign up as a Researcher
        </PrimaryButton>
      </ButtonContainer>
    </div>
  </FlexContainer>
);

export default HomeSection;
export { PrimaryButton };
