import React from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from 'actions';

const AuthUserContext = React.createContext(null);

export const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    state = {
      authUser: null,
    };

    componentDidMount() {
      const { firebase } = this.props;

      this.listener = firebase.auth.onAuthStateChanged(authUser => {
        authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
      });
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      const { authUser } = this.state;

      return (
        <AuthUserContext.Provider value={authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  WithAuthentication.propTypes = {
    firebase: PropTypes.any.isRequired,
  };

  return withFirebase(WithAuthentication);
};

export default AuthUserContext;
