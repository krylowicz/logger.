import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../../assets/index.css';

const Label = styled.label`
  color: ${({ theme }) => theme.color.light};
`;

const Input = styled.input`
  background: none;
  color: ${({ theme }) => theme.color.light};
  font-family: inherit;
  font-size: 1.5rem;
  border: none;
  width: 100%;
  line-height: 2.2rem;
`;

const StyledFormItem = styled.div`
  width: 100%;
  margin: 24px 0;
  position: relative;
  flex-shrink: 0;
`;

const FormItemBar = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.color.light};
  transition: 0.1s all;
`;

const FormItem = ({ input }) => (
  <StyledFormItem>
    <Input className="input" type="text" name={input} id={input} placeholder=" " />
    <Label className="label" htmlFor={input}>
      {input}
    </Label>
    <FormItemBar />
  </StyledFormItem>
);

export default FormItem;

FormItem.propTypes = {
  input: PropTypes.string.isRequired,
};
