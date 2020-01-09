import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHamburger = styled.button`
  padding: 15px;
  border: none;
  background-color: transparent;
  position: relative;
  right: -15px;
  z-index: 9999;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const InnerHamburger = styled.div`
  width: 22px;
  height: 2px;
  background-color: ${({ theme, isOpen }) => (isOpen ? 'transparent' : theme.color.light)};
  position: relative;
  transition: background-color 0.25s ease-out;

  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 22px;
    height: 2px;
    background-color: ${({ theme, isOpen }) => (isOpen ? theme.color.black : theme.color.light)};
    transition: transform 0.2s ease-out;
  }

  &::before {
    top: -6px;
    transform: translateY(${({ isOpen }) => (isOpen ? '6px' : '0')}) rotate(${({ isOpen }) => (isOpen ? '45deg' : '0')});
  }

  &::after {
    top: 6px;
    transform: translateY(${({ isOpen }) => (isOpen ? '-6px' : '0')}) rotate(${({ isOpen }) => (isOpen ? '-45deg' : '0')});
  }

  @media (min-width: 1024px) {
    width: 26px;

    &::after,
    &::before {
      width: 26px;
    }
  }
`;

const Hamburger = ({ isOpen, ...props }) => (
  <StyledHamburger {...props}>
    <InnerHamburger isOpen={isOpen} />
  </StyledHamburger>
);

export default Hamburger;

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
