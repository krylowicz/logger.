import React from 'react';
import Form from 'components/Form/Form';
import FormItem from 'components/FormItem/FormItem';
import Button from 'components/Button/Button';

const CreateAccountForm = () => (
  <Form>
    <FormItem input="email" />
    <FormItem input="password" />
    <Button>create account</Button>
  </Form>
);

export default CreateAccountForm;
