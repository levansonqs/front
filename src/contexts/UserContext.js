import React, { useReducer, createContext } from 'react';
import { node } from 'prop-types';

export const UserContext = createContext();

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_USER':
      return {
        users: [...action.payload],
        loading: false,
      };
    case 'START':
      return {
        ...state,
        loading: true,
      };
    case 'COMPLETE':
      return {
        ...state,
        loading: false,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.payload,
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
