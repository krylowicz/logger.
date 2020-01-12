import React from 'react';
import styled from 'styled-components';
import HeroText from 'components/HeroText/HeroText';
import HeroTextAuth from 'components/HeroTextAuth/HeroTextAuth';
import AuthUserContext from 'components/Session/SessionContext';

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
`;

const HeroTemplateAuth = () => (
  <Wrapper>
    <HeroTextAuth />
  </Wrapper>
);

const HeroTemplateNonAuth = () => (
  <Wrapper>
    <HeroText />
  </Wrapper>
);

const HeroTemplate = () => <AuthUserContext.Consumer>{authUser => (authUser ? <HeroTemplateAuth /> : <HeroTemplateNonAuth />)}</AuthUserContext.Consumer>;

export default HeroTemplate;
