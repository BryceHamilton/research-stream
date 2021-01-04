import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FlexContainer } from '../../../components/base/container';
import Login from '../../../components/login';

const LandingNavbar: React.FunctionComponent = () => (
  <PaddingNav>
    <StyledContainer>
      <NavIcon to='/browse'>
        <img
          className='img-fluid'
          src='logo.png'
          height='150px'
          width='150px'
          alt=''
        />
      </NavIcon>
      <NavList>
        <li>
          <Login />
        </li>
      </NavList>
    </StyledContainer>
  </PaddingNav>
);

const PaddingNav = styled.nav`
  padding: 1rem;
`;
const StyledContainer = styled(FlexContainer)`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const NavLink = styled(Link)`
  padding: 0 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  color: #cdcfd6;

  &:hover {
    color: #082e6d;
  }
`;

const NavIcon = styled(NavLink)`
  height: auto;
  vertical-align: middle;
`;

export default LandingNavbar;
