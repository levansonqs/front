/* eslint-disable consistent-return */
const localStorageKey = '___token__';

function logout() {
  window.localStorage.removeItem(localStorageKey);
}

function api(endpoint, { body, ...customConfig } = {}) {
  const token = window.localStorage.getItem(localStorageKey);
  const headers = { 'content-type': 'application/json' };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
  }

  return window
    .fetch(`${process.env.API_HOST}${endpoint}`, config)
    .then(async (r) => {
      if (r.status === 401) {
        logout();
        // refresh the page for them
        window.location.assign(window.location);
        return;
      }
      const data = await r.json();
      if (r.ok) {
        return data;
      }
      return Promise.reject(data);
    });
}

export { api, localStorageKey, logout };
