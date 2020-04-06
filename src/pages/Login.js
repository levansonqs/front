/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { navigate, Link } from '@reach/router';

import { api, localStorageKey } from '../utils/api';
import useInput from '../hooks/useInput';

function Login() {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
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
    setLoading(true);
    setIsError(false);
    api('login', {
      body: {
        username,
        password,
      },
    })
      .then((data) => {
        window.localStorage.setItem(localStorageKey, data.token);
        setLoading(false);
        setIsError(false);
        navigate('dashboard');
      })
      .catch(() => {
        setLoading(false);
        setIsError(true);
      });
    resetUserName();
    resetPassword();
  }
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src="../../images/logo.svg" alt="logo" />
                </div>
                <h4>Hello! let get started</h4>
                <h6 className="font-weight-light">
                  Sign in to continue.
                </h6>
                {isError && (
                  <div className="alert alert-danger" role="alert">
                    Invalid username or password!
                  </div>
                )}
                <form className="pt-3">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      placeholder="Username"
                      {...bindUserName}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      {...bindPassword}
                    />
                  </div>
                  <div className="my-3">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={loading}
                      className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                    >
                      {loading && (
                        <span
                          className="spinner-border spinner-border-sm mr-1"
                          role="status"
                          aria-hidden="true"
                        />
                      )}
                      SIGN IN
                    </button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Do not have an account?
                    <Link to="/register" className="text-primary">
                      Create
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
