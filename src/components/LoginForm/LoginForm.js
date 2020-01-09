import React from 'react';
import styled from 'styled-components';
import 'components/LoginForm/LoginForm.css';
import Button from 'components/Button/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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

const FormItem = styled.div`
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

const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormItem>
          <Input className="input" type="text" name="username" id="username" placeholder=" " />
          <Label className="label" htmlFor="username">
            username
          </Label>
          <FormItemBar />
        </FormItem>
        <FormItem>
          <Input className="input" type="password" name="password" id="password" placeholder=" " />
          <Label className="label" htmlFor="password">
            password
          </Label>
          <FormItemBar />
        </FormItem>
        <Button>log in</Button>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;
