import React, { useReducer, createContext } from 'react';
import { node } from 'prop-types';

export const UserContext = createContext();

const initialState = {
  users: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_USER':
      return {
        users: [...state.users, action.payload],
      };
    case 'START':
      return {
        loading: true,
      };
    case 'COMPLETE':
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: node.isRequired,
};
