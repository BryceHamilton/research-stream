import React from 'react';
import GoogleLogin from 'react-google-login';
import styled from 'styled-components';
import googleLogo from './google-logo';
// import userActions from '../../actions/user-actions';
require('dotenv').config();

const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

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

const NavGoogleButton: React.FunctionComponent = () => {
  const handleLogin = (response: any): void => {
    console.log(response);
  };
  return (
    <GoogleLogin
      clientId={REACT_APP_GOOGLE_CLIENT_ID || ''}
      render={(renderProps) => <GoogleButton {...renderProps} />}
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default NavGoogleButton;

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
