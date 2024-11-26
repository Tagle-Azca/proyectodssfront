import React, { useState, useEffect } from "react";

const Employee = () => {
  const [users, setUsers] = useState([]); // Almacena todos los usuarios
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [filteredUsers, setFilteredUsers] = useState([]); // Usuarios filtrados
  const apiUrl = process.env.REACT_APP_API_URL;

  // Fetch de usuarios desde el backend
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users`);
        if (!response.ok) {
          console.error("Error al obtener usuarios");
          return;
        }
        const data = await response.json();
        setUsers(data.users);
        setFilteredUsers(data.users);
      } catch (error) {
        console.error("Error de conexión:", error);
      }
    };
    fetchUsers();
  }, [apiUrl]);

  // Manejar la búsqueda
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(term) ||
        user.rfc.toLowerCase().includes(term)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard Bancario</h1>

      {/* Resumen del Dashboard */}
      <div style={styles.summary}>
        <p style={styles.summaryItem}>Clientes Totales: {users.length}</p>
        <input
          type="text"
          placeholder="Buscar por nombre o RFC"
          value={searchTerm}
          onChange={handleSearch}
          style={styles.searchInput}
        />
      </div>

      {/* Tabla de Clientes */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Nombre</th>
            <th style={styles.th}>RFC</th>
            <th style={styles.th}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.rfc}>
                <td style={styles.td}>{user.name}</td>
                <td style={styles.td}>{user.rfc}</td>
                <td style={styles.td}>
                  <button style={styles.button}>Ver Detalles</button>
                  <button style={styles.button}>Editar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" style={styles.noResults}>
                No se encontraron resultados
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "28px",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  summary: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  summaryItem: {
    fontSize: "18px",
    color: "#555",
  },
  searchInput: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    textAlign: "left",
  },
  td: {
    border: "1px solid #ddd",
    padding: "10px",
  },
  button: {
    padding: "8px 12px",
    margin: "0 5px",
    fontSize: "14px",
    color: "#fff",
    backgroundColor: "#4facfe",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  noResults: {
    textAlign: "center",
    color: "#777",
    padding: "20px",
    fontSize: "16px",
  },
};

export default Employee;
