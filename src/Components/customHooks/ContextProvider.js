import React from 'react';
import { createContext, useState } from 'react';

export const StoreContext = createContext();
const Provider = StoreContext.Provider;
const store = {
  states: {},
};

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState();
  store.states = {
    user,
    setUser,
    email,
    setEmail,
    pass,
    setPass,
  };
  return <Provider value={store}>{children}</Provider>;
};

export default ContextProvider;
