import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user/actions';
import GoogleButton from '../google-button';
import PrimaryButton from '../primary-button';
require('dotenv').config();

const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

const Login: React.FunctionComponent<{ custom?: string }> = ({ custom }) => {
  const dispatch = useDispatch();
  const handleLogin = (response: GoogleResponse): void => {
    userActions.login(dispatch)(response);
  };

  const LoginButton: React.FunctionComponent<{
    onClick: any;
    disabled?: boolean;
  }> = ({ onClick, disabled }) =>
    custom ? (
      <PrimaryButton to='' onClick={onClick}>
        {custom}
      </PrimaryButton>
    ) : (
      <GoogleButton onClick={onClick} disabled={disabled} />
    );

  return (
    <GoogleLogin
      clientId={REACT_APP_GOOGLE_CLIENT_ID || ''}
      render={(renderProps) => <LoginButton {...renderProps} />}
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default Login;
