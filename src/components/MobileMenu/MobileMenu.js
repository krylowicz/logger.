import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right top, #ebebeb, #ededed, #f0f0f0, #f2f2f2, #f5f5f5);
  background-repeat: no-repeat;
  background-size: contain;
  color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9998;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.25s ease-in-out;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.bold};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.25s 0.2s ease-in-out;
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 150px;
  }
`;

const MobileMenu = ({ isOpen }) => (
  <Wrapper isOpen={isOpen}>
    {/* {Constants.MENU_ITEMS.map(item => ( */}
    {/*  <MenuLink isOpen={isOpen} key={item}> */}
    {/*    {item} */}
    {/*  </MenuLink> */}
    {/* ))} */}
    <Link exact to="/home" isOpen={isOpen}>
      home
    </Link>
    <Link exact to="/create-account" isOpen={isOpen}>
      create account
    </Link>
    <Link exact to="/about" isOpen={isOpen}>
      about
    </Link>
  </Wrapper>
);

export default MobileMenu;

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
