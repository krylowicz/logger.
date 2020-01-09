import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';

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

const HeroText = () => (
  <Wrapper>
    <Text>
      logger. is a login page that uses <span>firebase</span>
    </Text>
    <Button>log in</Button>
  </Wrapper>
);

export default HeroText;
