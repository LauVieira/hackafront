import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Login,
  Signup,
  Profile,
  Home,
  Categories,
} from './import';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/cadastro" component={ Signup } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/home" component={ Home } />
      <Route exact path="/categorias" component={ Categories } />
    </Switch>
  );
}

export default Routes;
