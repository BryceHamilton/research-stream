import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AppState } from '../../store';
import { userActions } from '../../store/user/actions';
import Login from '../login';

const Navbar: React.FunctionComponent<{ redirect: string }> = ({
  redirect = '/browse',
}) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state: AppState) => state.user);

  return (
    <header>
      <StyledNav>
        <ContainerFluid>
          <div>
            <Link to={redirect}>
              <LogoImg src='/logo.png' height='150px' width='150px' alt='' />
            </Link>
          </div>
          <NavList>
            <li>
              {/* <NavLink to={isAuthenticated ? '/myStudies' : '/signup'}>
                {isAuthenticated ? 'My Studies' : 'Sign Up'}
              </NavLink> */}
            </li>
            <li>
              {isAuthenticated ? (
                <NavLink to='' onClick={userActions.logout(dispatch)}>
                  Logout
                </NavLink>
              ) : (
                <Login />
              )}
            </li>
          </NavList>
        </ContainerFluid>
      </StyledNav>
    </header>
  );
};

const StyledNav = styled.nav`
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15) !important;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff !important;
  padding: 1rem 1rem;
`;

const ContainerFluid = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
`;

const NavList = styled.ul`
  display: flex;
  margin-bottom: 0;
  list-style: none;
  margin-left: auto;
`;

const NavLink = styled(Link)`
  color: rgba(0, 0, 0, 0.5);
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  font-size: 0.9rem;
  font-weight: bold;

  &:hover {
    text-decoration: none;
  }
`;

const LogoImg = styled.img`
  height: auto;
  vertical-align: middle;
  padding: 0.25rem 0 !important;
`;

export default Navbar;
