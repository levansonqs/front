import React, { useEffect, useContext } from 'react';

import { UserContext } from '../contexts/UserContext';
import Layout from '../components/Layout';
import { api } from '../utils/api';

function Dashboard() {
  const [state, dispatch] = useContext(UserContext);
  useEffect(() => {
    function fetchUser() {
      dispatch({ type: 'START' });
      api('users').then((data) => {
        dispatch({ type: 'LOAD_USER', payload: data });
      });
    }
    fetchUser();
  }, []);

  if (state.loading)
    return (
      <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );

  return (
    <Layout>
      <div className="container-fluid page-body-wrapper">
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="../../index.html">
                <i className="ti-shield menu-icon" />
                <span className="menu-title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#ui-basic"
                aria-expanded="false"
                aria-controls="ui-basic"
              >
                <i className="ti-palette menu-icon" />
                <span className="menu-title">UI Elements</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="../../pages/ui-features/buttons.html"
                    >
                      Buttons
                    </a>
                  </li>
                  <li className="nav-item">
                    {' '}
                    <a
                      className="nav-link"
                      href="../../pages/ui-features/typography.html"
                    >
                      Typography
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="../../pages/forms/basic_elements.html"
              >
                <i className="ti-layout-list-post menu-icon" />
                <span className="menu-title">Form elements</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="../../pages/charts/chartjs.html"
              >
                <i className="ti-pie-chart menu-icon" />
                <span className="menu-title">Charts</span>
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link"
                href="../../pages/tables/basic-table.html"
              >
                <i className="ti-view-list-alt menu-icon" />
                <span className="menu-title">Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="../../pages/icons/themify.html"
              >
                <i className="ti-star menu-icon" />
                <span className="menu-title">Icons</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#auth"
                aria-expanded="false"
                aria-controls="auth"
              >
                <i className="ti-user menu-icon" />
                <span className="menu-title">User Pages</span>
                <i className="menu-arrow" />
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    {' '}
                    <a
                      className="nav-link"
                      href="../../pages/samples/login.html"
                    >
                      {' '}
                      Login{' '}
                    </a>
                  </li>
                  <li className="nav-item">
                    {' '}
                    <a
                      className="nav-link"
                      href="../../pages/samples/login-2.html"
                    >
                      {' '}
                      Login 2{' '}
                    </a>
                  </li>
                  <li className="nav-item">
                    {' '}
                    <a
                      className="nav-link"
                      href="../../pages/samples/register.html"
                    >
                      {' '}
                      Register{' '}
                    </a>
                  </li>
                  <li className="nav-item">
                    {' '}
                    <a
                      className="nav-link"
                      href="../../pages/samples/register-2.html"
                    >
                      {' '}
                      Register 2{' '}
                    </a>
                  </li>
                  <li className="nav-item">
                    {' '}
                    <a
                      className="nav-link"
                      href="../../pages/samples/lock-screen.html"
                    >
                      {' '}
                      Lockscreen{' '}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="../../documentation/documentation.html"
              >
                <i className="ti-write menu-icon" />
                <span className="menu-title">Documentation</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="main-panel">
          <div className="content-wrapper">
            <div className="row">
              <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">User Striped Table</h4>
                    <p className="card-description">
                      Add class <code>.table-striped</code>
                    </p>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Avatar.</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody>
                          {state.users &&
                            state.users.map((user) => (
                              <tr key={user.id}>
                                <td className="py-1">
                                  <img
                                    src={user.avatar}
                                    alt={user.name}
                                  />
                                </td>
                                <td>{user.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
