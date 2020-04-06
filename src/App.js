import React from 'react';
import { Router } from '@reach/router';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import { AuthRoute, PrivateRoute } from './utils/router';
import { UserContextProvider } from './contexts/UserContext';
import '../scss/style.scss';
import '../vendors/ti-icons/css/themify-icons.css';

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Home path="/" />
        <AuthRoute as={Register} path="/register" />
        <AuthRoute as={Login} path="/login" />
        <PrivateRoute as={Dashboard} path="/dashboard" />
        <NotFound default />
      </Router>
    </UserContextProvider>
  );
}

export default App;
