import React from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../css/Employee.css";

const EmployeeDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="employee-container">
      {/* Encabezado */}
      <header className="employee-header">
        <h1>Bienvenido, {user?.email}</h1>
        <button className="logout-button" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </header>

      {/* Contenido principal */}
      <main className="employee-main">
        <section className="employee-section">
          <h2>Tareas principales</h2>
          <ul>
            <li>Verificar cuentas de clientes</li>
            <li>Gestionar transferencias</li>
            <li>Actualizar información de clientes</li>
          </ul>
        </section>

        <section className="employee-section">
          <h2>Accesos rápidos</h2>
          <div className="quick-actions">
            <button className="action-button">Crear reporte</button>
            <button className="action-button">Consultar movimientos</button>
            <button className="action-button">Solicitudes pendientes</button>
          </div>
        </section>
      </main>

      {/* Pie de página */}
      <footer className="employee-footer">
        <p>&copy; 2024 Banco Digital DSS. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default EmployeeDashboard;
