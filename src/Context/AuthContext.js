import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // Guarda al usuario en el estado
    localStorage.setItem("user", JSON.stringify(userData)); // Persistencia local
  };

  const logout = () => {
    setUser(null); // Elimina al usuario del estado
    localStorage.removeItem("user"); // Limpia el almacenamiento local
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
