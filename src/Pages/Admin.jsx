import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Admin = () => {
  const [selectedSection, setSelectedSection] = useState("Dashboard");

  // Generar faltas aleatorias para los días del mes
  const generateRandomFaltas = (dias = 30) => {
    return Array.from({ length: dias }, () => Math.random() < 0.2); // 20% de probabilidad de faltar
  };

  // Lista de empleados con faltas mensuales aleatorias
  const [empleados, setEmpleados] = useState([
    { id: 1, nombre: "Juan Pérez", faltas: generateRandomFaltas(30) },
    { id: 2, nombre: "María López", faltas: generateRandomFaltas(30) },
    { id: 3, nombre: "Carlos Gómez", faltas: generateRandomFaltas(30) },
    { id: 4, nombre: "Ana Ramírez", faltas: generateRandomFaltas(30) },
  ]);

  // Función para renderizar el contenido dinámico
  const renderContent = () => {
    switch (selectedSection) {
      case "Dashboard":
        return (
          <Box>
            <Typography variant="h4">Dashboard</Typography>
            <Typography variant="body1" sx={{ marginTop: "1rem" }}>
              Bienvenido al Panel de Administración.
            </Typography>
          </Box>
        );
      case "Empleados":
        return (
          <Box>
            <Typography variant="h4" sx={{ marginBottom: "1rem" }}>
              Gestión de Empleados - Faltas Mensuales
            </Typography>
            {/* Contenedor con scroll interno */}
            <Box
              sx={{
                maxHeight: "400px", // Altura máxima del contenedor
                overflowY: "auto", // Habilita el scroll vertical
                border: "1px solid #ddd", // Opcional: borde para resaltar el área
                borderRadius: "5px",
              }}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre</TableCell>
                    {Array.from({ length: 30 }, (_, index) => (
                      <TableCell key={index + 1}>{index + 1}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {empleados.map((empleado) => (
                    <TableRow key={empleado.id}>
                      <TableCell>{empleado.id}</TableCell>
                      <TableCell>{empleado.nombre}</TableCell>
                      {empleado.faltas.map((falta, index) => (
                        <TableCell
                          key={index}
                          style={{ color: falta ? "red" : "green" }}
                        >
                          {falta ? "Sí" : "No"}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Barra lateral */}
      <Box
        sx={{
          width: 240,
          backgroundColor: "#f5f5f5",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
          padding: "1rem",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
          Admin Panel
        </Typography>
        <List>
          {["Dashboard", "Empleados"].map((section) => (
            <ListItem
              button
              key={section}
              onClick={() => setSelectedSection(section)}
              sx={{
                backgroundColor:
                  selectedSection === section ? "#ddd" : "transparent",
                borderRadius: "5px",
                marginBottom: "0.5rem",
              }}
            >
              <ListItemText primary={section} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Contenido principal */}
      <Box sx={{ flexGrow: 1, padding: "2rem" }}>{renderContent()}</Box>
    </Box>
  );
};

export default Admin;
