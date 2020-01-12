import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;

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

const DesktopMenu = () => (
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

export default DesktopMenu;
