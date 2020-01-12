import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import DesktopMenu from 'components/DesktopMenu/DesktopMenu';
import LogOutButton from 'components/LogOutButton/LogOutButton';
import AuthUserContext from 'components/Session/SessionContext';

const Wrapper = styled.nav`
  display: flex;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 9999;

  svg {
    width: 120px;
    height: auto;
  }

  @media (min-width: 1024px) {
    padding: 30px;

    svg {
      width: 150px;
      height: auto;
    }
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const StyledLogo = styled(Logo)`
  position: relative;
  z-index: 9999;

  svg {
    .logo-stroke {
      stroke: ${({ isOpen, theme }) => (isOpen ? theme.color.black : theme.color.light)};
    }

    .text-fill {
      fill: ${({ isOpen, theme }) => (isOpen ? theme.color.black : theme.color.light)};
    }
  }
`;

const HeaderAuth = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <Wrapper>
      <StyledLogo isOpen={isMenuOpen} />
      <InnerWrapper>
        <LogOutButton />
        <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
      </InnerWrapper>
      <MobileMenu isOpen={isMenuOpen} />
      <DesktopMenu />
    </Wrapper>
  );
};

const HeaderNonAuth = () => {
  const [isMenuOpen, setMenuState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  return (
    <Wrapper>
      <StyledLogo isOpen={isMenuOpen} />
      <Hamburger onClick={toggleMobileMenu} isOpen={isMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} />
      <DesktopMenu />
    </Wrapper>
  );
};

const Header = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <Wrapper>
          <HeaderAuth />
        </Wrapper>
      ) : (
        <Wrapper>
          <HeaderNonAuth />
        </Wrapper>
      )
    }
  </AuthUserContext.Consumer>
);

export default Header;
