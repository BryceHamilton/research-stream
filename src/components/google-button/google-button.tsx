import React from 'react';
import googleLogo from './google-logo';
import styled from 'styled-components';
import { apiCall } from '../../api';

const GoogleButton: React.FunctionComponent = ({ ...rest }) => {
  return (
    <StyledLink href={apiCall('/auth/google')} {...rest}>
      <StyledDiv>{googleLogo}</StyledDiv>
      <StyledSpan>Sign in with Google</StyledSpan>
    </StyledLink>
  );
};
export default GoogleButton;

const StyledLink = styled.a`
  &:hover {
    color: black;
  }
  text-decoration: none;
  background-color: rgb(255, 255, 255);
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.54);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px,
    rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
  padding: 0px;
  border-radius: 2px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
`;

const StyledDiv = styled.div`
  margin-right: 10px;
  background: rgb(255, 255, 255);
  padding: 10px;
  border-radius: 2px;
`;

const StyledSpan = styled.span`
  padding: 10px 10px 10px 0px;
  font-weight: 500;
`;
