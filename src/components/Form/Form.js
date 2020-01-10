import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../../assets/index.css';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = ({ children, onSubmitFn }) => {
  return (
    <Wrapper>
      <StyledForm onSubmit={onSubmitFn}>{children}</StyledForm>
    </Wrapper>
  );
};

export default Form;

Form.propTypes = {
  children: PropTypes.object.isRequired,
  onSubmitFn: PropTypes.func.isRequired,
};
