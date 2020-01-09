import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Constants from 'utils/constants';

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

const MenuLink = styled.p`
  font-size: 2.2rem;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  transition: opacity 0.25s 0.2s ease-in-out;

  &:last-child {
    margin-bottom: 150px;
  }
`;

const MobileMenu = ({ isOpen }) => (
  <Wrapper isOpen={isOpen}>
    {Constants.MENU_ITEMS.map(item => (
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
