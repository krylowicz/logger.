import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Firebase, { FirebaseContext } from 'actions';
import HomeView from 'views/HomeView';
import CreateAccountView from 'views/CreateAccountView';
import LoginView from 'views/LoginView';
import AboutView from 'views/AboutView';

const Root = () => (
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/login" component={LoginView} />
      <Route exact path="/create-account" component={CreateAccountView} />
      <Route exact path="/about" component={AboutView} />
    </BrowserRouter>
  </FirebaseContext.Provider>
);

export default Root;
