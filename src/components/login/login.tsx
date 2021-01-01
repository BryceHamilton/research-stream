import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    const response = await fetch('/login', { method: 'POST', body: data });
    const responseBody = await response.text();
    const parsed = JSON.parse(responseBody);

    if (!parsed.success) {
      alert('Invalid email or password');
      setEmail('');
      setPassword('');
      return;
    }

    dispatch({
      type: 'loginSuccess',
      email: email,
      isResearcher: parsed.isResearcher,
    });

    // const redirect = studyId
    //   ? `/study/${studyId}`
    //   : parsed.isResearcher
    //   ? "/researcherPage"
    //   : "/browse";

    // history.push(redirect);
  };

  return (
    <div>
      <LoginForm onSubmit={submitHandler}>
        <LoginHeader>Please sign in</LoginHeader>
        <Label>Email address</Label>
        <FormControl
          type='email'
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email address'
          required
          autoFocus
        />
        <Label>Password</Label>
        <FormControl
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
        <div>
          <Margin>
            <input type='checkbox' value='remember-me' /> Remember me
          </Margin>
        </div>
        <SubmitButton type='submit' value='Sign in' />
        <br />
        <p>
          Don't have an account? Sign up
          <StyledLink to='/signup'>here</StyledLink>
        </p>
        <CopyRight>&copy; 2018</CopyRight>
      </LoginForm>
    </div>
  );
};

const LoginForm = styled.form`
  text-align: center;
  max-width: 330px;
  padding: 15px;
  margin: auto;
`;

const LoginHeader = styled.h1`
  font-weight: 400 !important;
  margin-bottom: 1rem !important;
  font-size: 1.75rem;
  line-height: 1.3;
  margin-top: 60px;
`;

const Label = styled.label`
  height: 1px;
  overflow: hidden;
  position: absolute;
`;

const Margin = styled.label`
  margin: 1rem 0;
`;

const FormControl = styled.input`
  font-family: inherit;
  font-size: inherit;
  border: 1px solid #ced4da;
  border-radius: 0.4rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width: 100%;
  padding: 0.375rem 0.75rem;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(78, 102, 248, 0.25);
  }
`;

const SubmitButton = styled.input`
  letter-spacing: 0.3em;
  width: 100%;
  border: 1px solid transparent;
  display: block;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  font-family: inherit;
  line-height: inherit;
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

const CopyRight = styled.p`
  color: #868e96 !important;
  margin-top: 3rem !important;
  margin-bottom: 1rem !important;
`;

const StyledLink = styled(Link)`
  color: #868e96 !important;
  text-decoration: none;
`;

export default Login;
