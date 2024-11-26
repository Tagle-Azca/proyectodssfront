import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext"; // Asegúrate de tener este contexto

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth(); // Verifica si el usuario está autenticado

  // Si no está autenticado, redirige al login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Si está autenticado, renderiza el componente hijo
  return children;
};

export default ProtectedRoute;
