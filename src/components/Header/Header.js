import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import Heading from 'components/Heading/Heading';

const Wrapper = styled.div`
  padding: 40px 0 0 100px;
  display: flex;
  align-items: center;

  svg {
    width: 70px;
    height: 70px;
    margin-right: 20px;
  }
`;

const Header = () => (
  <Wrapper>
    <Logo />
    <Heading>logger.</Heading>
  </Wrapper>
);

export default Header;
