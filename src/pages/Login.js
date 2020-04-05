/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { navigate } from '@reach/router';

import { api, localStorageKey } from '../utils/api';
import useInput from '../hooks/useInput';

function Login() {
  const {
    value: username,
    bind: bindUserName,
    reset: resetUserName,
  } = useInput('');
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword,
  } = useInput('');
  function handleSubmit(e) {
    e.preventDefault();
    api('login', {
      body: {
        username,
        password,
      },
    }).then((data) => {
      window.localStorage.setItem(localStorageKey, data.token);
      navigate('dashboard');
    });
    resetUserName();
    resetPassword();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...bindUserName} />
      <input type="password" {...bindPassword} />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Login;
