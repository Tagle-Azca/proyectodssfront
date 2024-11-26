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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backbank-0w4g.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Redirecciona según el rol del usuario
        if (data.user.role === "administrador") {
          navigate("/admin");
        } else if (data.user.role === "cliente") {
          navigate("/client");
        }
      } else {
        setError(data.message || "Error al iniciar sesión");
      }
    } catch (err) {
      setError("Error al conectar con el servidor");
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
