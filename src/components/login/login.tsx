import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { userActions } from '../../store/user/actions';
import GoogleButton from '../google-button';
require('dotenv').config();

const { REACT_APP_GOOGLE_CLIENT_ID } = process.env;

const Login: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const handleLogin = (response: GoogleResponse): void => {
    userActions.login(response)(dispatch);
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

export default Login;
