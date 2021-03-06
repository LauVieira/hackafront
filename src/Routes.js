import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Login,
  Signup,
  Profile,
  Home,
  Categories,
  Members,
  UserProfile,
} from './import';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/cadastro" component={ Signup } />
      <Route exact path="/perfil" component={ Profile } />
      <Route exact path="/perfil/:id" component={ UserProfile } />
      <Route path="/home" component={ Home } />
      <Route path="/categorias" component={ Categories } />
      <Route path="/membros/:id" component={ Members } />
    </Switch>
  );
}

export default Routes;
