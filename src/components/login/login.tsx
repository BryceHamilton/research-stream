import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GoogleButton from '../google-button';

const Login: React.FunctionComponent = () => {
  return (
    <div>
      <LoginForm>
        <LoginHeader>Please sign in</LoginHeader>
        <MarginGoogleButton />
        <br />
        <p>
          Don't have an account? Sign up
          <StyledLink to='/signup'>&nbsp;here</StyledLink>
        </p>
        <CopyRight>&copy; 2020</CopyRight>
      </LoginForm>
    </div>
  );
};

const MarginGoogleButton = styled(GoogleButton)`
  margin: 2rem;
`;

const LoginForm = styled.div`
  text-align: center;
  max-width: 330px;
  padding: 15px;
  margin: auto;
`;

const LoginHeader = styled.h1`
  font-weight: 400;
  margin-bottom: 0;
  font-size: 1.75rem;
  line-height: 1.3;
  margin-top: 60px;
`;

const CopyRight = styled.p`
  color: #868e96;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  color: #868e96;
  text-decoration: none;
  &:hover {
    color: black;
  }
`;
export default Login;
