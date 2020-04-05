import React, { useEffect } from 'react';
import { api } from '../utils/api';

function Dashboard() {
  useEffect(() => {
    function fetchUser() {
      api('users').then((data) => {
        console.log(data);
      });
    }
    fetchUser();
  }, []);
  return <div>Protected dashboard</div>;
}

export default Dashboard;
