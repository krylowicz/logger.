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
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class CreateAccountFormBase extends React.Component {
  state = {
    ...INITIAL_STATE,
  };

  onSubmit = e => {
    const { email, passwordOne } = this.state;
    const { firebase, history } = this.props;

    firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
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
    const { email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '';

    return (
      <Form onSubmitFn={this.onSubmit}>
        <FormItem name="email" type="email" id="email" content="e-mail" onChangeFn={this.onChange} />
        <FormItem name="passwordOne" type="password" id="password" content="password" onChangeFn={this.onChange} />
        <FormItem name="passwordTwo" type="password" id="password" content="confirm password" onChangeFn={this.onChange} />
        <Button disabled={isInvalid}>create account</Button>

        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const CreateAccountForm = compose(withRouter, withFirebase)(CreateAccountFormBase);

export default CreateAccountForm;

CreateAccountFormBase.propTypes = {
  firebase: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  doCreateUserWithEmailAndPassword: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};
