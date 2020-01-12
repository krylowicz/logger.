import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 120px;
  padding: 20px;
`;

const Text = styled.h2`
  color: ${({ theme }) => theme.color.light};
`;

const HeroTextAuth = () => (
  <Wrapper>
    <Text>you are logged in</Text>
  </Wrapper>
);

export default HeroTextAuth;
