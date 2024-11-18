import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Simulación de autenticación (aquí deberías conectar con el backend)

    if (email === "employee@example.com" && password === "employee123") {
      setUser({ role: "employee", email });
      return true;
    }
    if (email === "client@example.com" && password === "client123") {
      setUser({ role: "client", email });
      return true;
    }
    return false; // Credenciales incorrectas
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
