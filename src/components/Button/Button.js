import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.light};
  font-family: inherit;
  font-weight: ${({ theme }) => theme.bold};
  font-size: 1.8rem;
  border-radius: 20px;
  border: none;
  width: 150px;
  padding: 10px;
  margin-top: 10px;
`;

const Button = ({ children, disabled }) => <StyledButton disabled={disabled}>{children}</StyledButton>;

export default Button;

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: null,
};
