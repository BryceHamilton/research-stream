import React from 'react';
import styled from 'styled-components';
import googleLogo from './google-logo';

const GoogleButton: React.FunctionComponent<{
  onClick: () => any;
  disabled?: boolean;
}> = ({ onClick, disabled }) => {
  return (
    <StyledLink onClick={onClick} disabled={disabled}>
      <StyledDiv>{googleLogo}</StyledDiv>
      <StyledSpan>Login with Google</StyledSpan>
    </StyledLink>
  );
};

export default GoogleButton;

const StyledLink = styled.button`
  &:hover {
    color: black;
  }
  text-decoration: none;
  background-color: rgb(255, 255, 255);
  display: inline-flex;
  align-items: center;
  padding: 0px;
  border-radius: 2px;
  border: 1px solid transparent;
  font-size: 0.9rem;
  font-weight: bold;
  color: #cdcfd6;

  &:hover {
    color: #082e6d;
  }
  &:focus {
    outline: none;
  }
`;

const StyledDiv = styled.div`
  margin-right: 10px;
  background: rgb(255, 255, 255);
  padding: 10px;
  border-radius: 2px;
`;

const StyledSpan = styled.span`
  padding: 10px 10px 10px 0px;
`;
