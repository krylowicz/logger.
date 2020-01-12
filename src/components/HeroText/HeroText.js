import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 120px;
  padding: 20px;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const Text = styled.h2`
  color: ${({ theme }) => theme.color.light};
`;

const Link = styled(NavLink)`
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.light};
  font-family: inherit;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.8rem;
  border-radius: 20px;
  border: none;
  width: 130px;
  padding: 10px;
  position: absolute;
  right: 55px;
  text-align: center;
  text-decoration: none;
`;

const HeroText = () => (
  <Wrapper>
    <Text>
      logger. is a login page that uses <span>firebase</span>
    </Text>
    <Link exact to="/login">
      log in
    </Link>
  </Wrapper>
);

export default HeroText;
