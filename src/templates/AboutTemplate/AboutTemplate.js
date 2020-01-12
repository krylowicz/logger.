import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right top, #3051b6, #415bc7, #5166d8, #6170e9, #717bfb);
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 45px;
  letter-spacing: 1px;
  line-height: 2.2rem;
  text-align: justify;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.color.light};
`;

const AboutTemplate = () => (
  <Wrapper>
    <Text>logger is my first project that connects react.js and firebase. It allows you to create account and for now that&aposs all. I just wanted to learn how to use firebase with react.</Text>
  </Wrapper>
);

export default AboutTemplate;
