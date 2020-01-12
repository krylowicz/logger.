import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '../../assets/index.css';

const Label = styled.label`
  color: ${({ theme }) => theme.color.light};
  position: absolute;
  top: 3px;
  left: 0;
  transition: 0.2s ease-out all;
  font-size: 16px;
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

const FormItem = ({ name, type, id, content, onChangeFn, htmlFor }) => (
  <StyledFormItem>
    <Input className="input" type={type} name={name} id={id} placeholder=" " onChange={onChangeFn} />
    <Label className="label" htmlFor={htmlFor}>
      {content}
    </Label>
    <FormItemBar />
  </StyledFormItem>
);

export default FormItem;

FormItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  onChangeFn: PropTypes.func.isRequired,
};
