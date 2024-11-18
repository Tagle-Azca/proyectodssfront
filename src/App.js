// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import LandingPage from "./Pages/Landing";
import NotFound from "./Pages/404";
import Admin from "./Pages/Admin";
import Employee from "./Pages/Employee";
import Client from "./Pages/Client";
import { AuthProvider } from "./Context/AuthContext";
import ProtectedRoute from "./Routes/ProtectRoutes";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Ruta pública para la página principal */}
          <Route path="/" element={<LandingPage />} />

          {/* Ruta pública para login */}
          <Route path="/login" element={<Login />} />

          <Route
            path="/employee"
            element={
              <ProtectedRoute role="employee">
                <Employee />
              </ProtectedRoute>
            }
          />
          <Route
            path="/client"
            element={
              <ProtectedRoute role="client">
                <Client />
              </ProtectedRoute>
            }
          />

          {/* Ruta para manejar errores 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
