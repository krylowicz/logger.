import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.color.light};
  color: ${({ theme }) => theme.color.black};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 9998;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  transition: transform 0.25s ease-in-out;
`;

const MenuLink = styled.p`
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.25s 0.2s ease-in-out;

  &:last-child {
    margin-bottom: 150px;
  }
`;

const menuItems = ['home', 'login', 'about'];

const MobileMenu = ({ isOpen }) => (
  <Wrapper isOpen={isOpen}>
    {menuItems.map(item => (
      <MenuLink isOpen={isOpen} key={item}>
        {item}
      </MenuLink>
    ))}
  </Wrapper>
);

export default MobileMenu;

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
