import React, { useState, useEffect } from "react";

const Employee = () => {
  const [users, setUsers] = useState([]); // Almacena todos los usuarios
  const [filteredUsers, setFilteredUsers] = useState([]); // Almacena los usuarios filtrados
  const [searchTerm, setSearchTerm] = useState(""); // Almacena el término de búsqueda
  const [filterAlphabet, setFilterAlphabet] = useState(""); // Almacena el filtro por letra

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
        setUsers(data.users); // Asegúrate de que el backend devuelve un array `users`
        setFilteredUsers(data.users);
      } catch (error) {
        console.error("Error de conexión:", error);
      }
    };
    fetchUsers();
  }, [apiUrl]);

  // Manejar el término de búsqueda
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterUsers(term, filterAlphabet);
  };

  // Manejar el filtro alfabético
  const handleFilterAlphabet = (letter) => {
    setFilterAlphabet(letter);
    filterUsers(searchTerm, letter);
  };

  // Filtrar usuarios basado en búsqueda y filtro alfabético
  const filterUsers = (term, letter) => {
    let result = users;

    // Filtrar por búsqueda
    if (term) {
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(term) ||
          user.rfc.toLowerCase().includes(term)
      );
    }

    // Filtrar por alfabeto
    if (letter) {
      result = result.filter((user) => user.name.startsWith(letter));
    }

    setFilteredUsers(result);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Usuarios</h1>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar por nombre o RFC"
        value={searchTerm}
        onChange={handleSearch}
        style={styles.searchInput}
      />

      {/* Filtro alfabético */}
      <div style={styles.alphabetContainer}>
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
          <button
            key={letter}
            style={{
              ...styles.alphabetButton,
              backgroundColor: filterAlphabet === letter ? "#4facfe" : "#fff",
              color: filterAlphabet === letter ? "#fff" : "#333",
            }}
            onClick={() => handleFilterAlphabet(letter)}
          >
            {letter}
          </button>
        ))}
        <button
          style={{
            ...styles.alphabetButton,
            backgroundColor: filterAlphabet === "" ? "#4facfe" : "#fff",
            color: filterAlphabet === "" ? "#fff" : "#333",
          }}
          onClick={() => handleFilterAlphabet("")}
        >
          Todos
        </button>
      </div>

      {/* Lista de usuarios */}
      <div style={styles.userList}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.rfc} style={styles.userCard}>
              <p style={styles.userName}>{user.name}</p>
              <p style={styles.userRFC}>RFC: {user.rfc}</p>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No se encontraron resultados</p>
        )}
      </div>
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
  searchInput: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    outline: "none",
  },
  alphabetContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: "20px",
  },
  alphabetButton: {
    padding: "10px",
    fontSize: "14px",
    margin: "5px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "#fff",
    color: "#333",
    transition: "background-color 0.3s ease",
  },
  userList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  userCard: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  userName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  userRFC: {
    fontSize: "14px",
    color: "#777",
  },
  noResults: {
    textAlign: "center",
    color: "#777",
    fontSize: "16px",
  },
};

export default Employee;
