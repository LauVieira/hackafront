import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Login,
  Signup,
} from './import';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/cadastro" component={ Signup } />
    </Switch>
  );
}

export default Routes;
