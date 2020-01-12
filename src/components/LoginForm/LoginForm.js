import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from 'actions';
import * as ROUTES from 'constants/routes';
import Form from 'components/Form/Form';
import FormItem from 'components/FormItem/FormItem';
import Button from 'components/Button/Button';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class LoginFormBase extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  onSubmit = e => {
    const { email, password } = this.state;
    const { firebase, history } = this.props;

    firebase
      .doLogInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    e.preventDefault();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <Form onSubmitFn={this.onSubmit}>
        <FormItem name="email" id="email" type="email" content="e-mail" onChangeFn={this.onChange} htmlFor="email" />
        <FormItem name="password" id="password" type="password" content="password" onChangeFn={this.onChange} htmlFor="password" />
        <Button disabled={isInvalid}>log in</Button>

        {error && <p>error.message</p>}
      </Form>
    );
  }
}

const LoginForm = compose(withRouter, withFirebase)(LoginFormBase);

export default LoginForm;

LoginFormBase.propTypes = {
  firebase: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  doLogInWithEmailAndPassword: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};
