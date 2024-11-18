import React from "react";

const ClientDashboard = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#f5f5f5",
      fontFamily: "'Arial', sans-serif",
    },
    header: {
      backgroundColor: "#004aad",
      padding: "1rem 2rem",
      color: "#ffffff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    logo: {
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    userInfo: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
    },
    button: {
      padding: "0.5rem 1rem",
      backgroundColor: "#ffffff",
      color: "#004aad",
      fontSize: "1rem",
      fontWeight: "bold",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    },
    main: {
      padding: "2rem",
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      gap: "2rem",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "1.5rem",
      textAlign: "center",
    },
    cardTitle: {
      fontSize: "1.2rem",
      color: "#004aad",
      marginBottom: "1rem",
    },
    cardContent: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#333",
    },
    transactions: {
      gridColumn: "1 / span 2",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "1.5rem",
    },
    transactionsTitle: {
      fontSize: "1.5rem",
      color: "#004aad",
      marginBottom: "1rem",
    },
    transactionItem: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0.5rem 0",
      borderBottom: "1px solid #ddd",
    },
  };

  const transactions = [
    { date: "18 Nov", description: "Compra en Amazon", amount: "-$120.00" },
    { date: "17 Nov", description: "Depósito", amount: "+$500.00" },
    { date: "16 Nov", description: "Pago Netflix", amount: "-$15.00" },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Banco Digital DSS</div>
        <div style={styles.userInfo}>
          <span>Hola, Cliente</span>
          <button style={styles.button}>Cerrar Sesión</button>
        </div>
      </header>

      {/* Main Dashboard */}
      <main style={styles.main}>
        {/* Saldo Actual */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Saldo Actual</h3>
          <p style={styles.cardContent}>$12,345.67</p>
        </div>

        {/* Acceso Rápido */}
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>Acceso Rápido</h3>
          <button style={styles.button}>Transferencias</button>
          <button style={styles.button}>Pagos</button>
        </div>

        {/* Historial de Transacciones */}
        <div style={styles.transactions}>
          <h3 style={styles.transactionsTitle}>Historial de Transacciones</h3>
          {transactions.map((tx, index) => (
            <div key={index} style={styles.transactionItem}>
              <span>{tx.date}</span>
              <span>{tx.description}</span>
              <span>{tx.amount}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;
