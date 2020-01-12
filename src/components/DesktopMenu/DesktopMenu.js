import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogOutButton from 'components/LogOutButton/LogOutButton';
import AuthUserContext from 'components/Session/SessionContext';

const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Link = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.color.light};

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const DesktopMenuAuth = () => (
  <ListWrapper>
    <Link exact to="/">
      home
    </Link>
    <Link exact to="/create-account">
      create account
    </Link>
    <Link exact to="/about">
      about
    </Link>
    <LogOutButton />
  </ListWrapper>
);

const DesktopMenuNonAuth = () => (
  <ListWrapper>
    <Link exact to="/">
      home
    </Link>
    <Link exact to="/create-account">
      create account
    </Link>
    <Link exact to="/about">
      about
    </Link>
  </ListWrapper>
);

const DesktopMenu = () => <AuthUserContext.Consumer>{authUser => (authUser ? <DesktopMenuAuth /> : <DesktopMenuNonAuth />)}</AuthUserContext.Consumer>;

export default DesktopMenu;
