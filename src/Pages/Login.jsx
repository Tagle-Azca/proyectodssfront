import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "../css/Login.css"; // Importa el archivo CSS

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificación de usuario y redirección
    const isAuthenticated = login(email, password);
    if (isAuthenticated) {
      if (email === "employee@example.com") navigate("/employee");
      else if (email === "client@example.com") navigate("/client");
    } else {
      setError("Correo o contraseña incorrectos");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="header">
          <h2 className="header-title">Iniciar Sesión</h2>
        </div>

        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <label className="label" htmlFor="email">
            Correo
          </label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label className="label" htmlFor="password">
            Contraseña
          </label>
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="button" type="submit">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
