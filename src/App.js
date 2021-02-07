import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { Provider } from './contexts/Provider';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Provider>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}
