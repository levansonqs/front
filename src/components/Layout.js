import React from 'react';
import { node } from 'prop-types';

import Nav from './Nav';

function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
