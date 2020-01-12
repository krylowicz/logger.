import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withFirebase } from 'actions';

const Button = styled.button`
  border: none;
  background: none;
  font-family: inherit;
  color: ${({ theme }) => theme.color.light};
  font-size: 1.2rem;
  padding: 5px;
`;

const LogOutButton = ({ firebase }) => (
  <Button type="button" onClick={firebase.doSignOut}>
    Sign out
  </Button>
);

export default withFirebase(LogOutButton);

LogOutButton.propTypes = {
  firebase: PropTypes.any.isRequired,
  doSignOut: PropTypes.func.isRequired,
};
