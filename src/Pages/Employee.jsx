import React, { useState, useEffect } from "react";

const Employee = () => {
  const [users, setUsers] = useState([]); // Almacena todos los usuarios
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
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
      } catch (error) {
        console.error("Error de conexión:", error);
      }
    };
    fetchUsers();
  }, [apiUrl]);

  // Manejar la búsqueda
  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  // Filtrar usuarios por nombre
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Dashboard Bancario</h1>

      {/* Barra de búsqueda */}
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={handleSearch}
          style={styles.searchInput}
        />
      </div>

      {/* Tabla de Clientes */}
      <div style={styles.cardContainer}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.rfc} style={styles.card}>
              <p style={styles.cardName}>{user.name}</p>
              <p style={styles.cardRFC}>{user.rfc}</p>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No se encontraron clientes</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  title: {
    fontSize: "28px",
    color: "#333",
    textAlign: "center",
    marginBottom: "20px",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  searchInput: {
    width: "50%",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    outline: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  cardName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  cardRFC: {
    fontSize: "14px",
    color: "#777",
    marginTop: "5px",
  },
  noResults: {
    textAlign: "center",
    color: "#777",
    fontSize: "16px",
    marginTop: "20px",
  },
};

export default Employee;
