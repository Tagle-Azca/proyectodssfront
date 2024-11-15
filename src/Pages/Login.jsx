import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ReusableButton from "../Components/Buttons";
import ReusableTextField from "../Components/TextField";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (username === "usuarioBanco" && password === "1234") {
      alert("Inicio de sesión exitoso");
      setError("");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f9",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 4,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Banco Online
        </Typography>
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Inicia sesión en tu cuenta bancaria
        </Typography>

        <ReusableTextField
          label="Usuario"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Ingrese su usuario"
          fullWidth
          error={Boolean(error)}
          helperText={error && "Usuario o contraseña incorrectos"}
          sx={{ mb: 3 }}
        />

        <ReusableTextField
          label="Contraseña"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Ingrese su contraseña"
          fullWidth
          error={Boolean(error)}
          helperText={error && "Usuario o contraseña incorrectos"}
          sx={{ mb: 3 }}
        />

        <ReusableButton
          label="Iniciar Sesión"
          onClick={handleLogin}
          color="primary"
          fullWidth
          sx={{ mb: 2 }}
        />
      </Box>
    </Box>
  );
};

export default Login;
