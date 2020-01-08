import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.h1`
  color: ${({ theme }) => theme.color.light};
  font-weight: ${({ theme }) => theme.medium};
  font-size: 3rem;
`;

const Heading = ({ children }) => <Text>{children}</Text>;

export default Heading;

Heading.propTypes = {
  children: PropTypes.string.isRequired,
};
