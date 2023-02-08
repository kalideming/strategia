import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/home")
      .then((r) => r.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <UserContext.Provider value={{user, setUser}}>
      { children }
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider }