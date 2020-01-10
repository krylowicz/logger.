import React from 'react';
import Form from 'components/Form/Form';
import FormItem from 'components/FormItem/FormItem';
import Button from 'components/Button/Button';

const LoginForm = () => (
  <Form>
    <FormItem input="username" />
    <FormItem input="password" />
    <Button>log in</Button>
  </Form>
);

export default LoginForm;
