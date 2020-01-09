import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeView from 'views/HomeView';
import CreateAccountView from 'views/CreateAccountView';
import LoginView from 'views/LoginView';

const Root = () => (
  <BrowserRouter>
    <Route exact path="/" component={HomeView} />
    <Route exact path="/login" component={LoginView} />
    <Route exact path="/create-account" component={CreateAccountView} />
  </BrowserRouter>
);

export default Root;
