import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const ProtectedRoute = ({ role, children }) => {
  const { user } = useAuth(); // Obtener el usuario autenticado desde el contexto

  // Verificar si el usuario está autenticado
  if (!user) {
    return <Navigate to="/login" />;
  }

  // Verificar si el rol del usuario coincide con el requerido
  if (role && user.role !== role) {
    return <Navigate to="/" />; // Redirigir si el rol no coincide
  }

  return children;
};

export default ProtectedRoute;
