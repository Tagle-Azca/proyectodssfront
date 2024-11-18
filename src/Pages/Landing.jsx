import React from "react";

const Landing = () => {
  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
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
    button: {
      padding: "0.5rem 1rem",
      backgroundColor: "#ffffff",
      color: "#004aad",
      fontSize: "1rem",
      fontWeight: "bold",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s, color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#d9d9d9",
      color: "#004aad",
    },
    hero: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      textAlign: "center",
    },
    heroContent: {
      maxWidth: "800px",
    },
    heroTitle: {
      fontSize: "2.5rem",
      color: "#004aad",
      marginBottom: "1rem",
    },
    heroText: {
      fontSize: "1.2rem",
      color: "#555",
      marginBottom: "2rem",
    },
    heroButton: {
      padding: "1rem 2rem",
      backgroundColor: "#004aad",
      color: "#ffffff",
      fontSize: "1rem",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    features: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2rem",
      padding: "3rem 2rem",
      backgroundColor: "#ffffff",
    },
    feature: {
      textAlign: "center",
      width: "300px",
      padding: "1rem",
      border: "1px solid #ddd",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    featureIcon: {
      fontSize: "3rem",
      color: "#004aad",
      marginBottom: "1rem",
    },
    featureTitle: {
      fontSize: "1.2rem",
      marginBottom: "0.5rem",
    },
    featureText: {
      fontSize: "0.9rem",
      color: "#555",
    },
    footer: {
      backgroundColor: "#004aad",
      color: "#ffffff",
      padding: "1rem 2rem",
      textAlign: "center",
      fontSize: "0.9rem",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>Banco Digital DSS</div>
      </header>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>
            Gestiona tu dinero de forma inteligente
          </h1>
          <p style={styles.heroText}>
            Descubre la nueva forma de manejar tus finanzas con seguridad,
            rapidez y comodidad.
          </p>
          <button
            style={styles.heroButton}
            onClick={() => (window.location.href = "/login")}
          >
            Iniciar Sesión
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={styles.features}>
        <div style={styles.feature}>
          <div style={styles.featureIcon}>💳</div>
          <h3 style={styles.featureTitle}>Cuentas Digitales</h3>
          <p style={styles.featureText}>
            Accede a tus cuentas en cualquier momento, desde cualquier
            dispositivo.
          </p>
        </div>
        <div style={styles.feature}>
          <div style={styles.featureIcon}>🔒</div>
          <h3 style={styles.featureTitle}>Seguridad Avanzada</h3>
          <p style={styles.featureText}>
            Tus datos están protegidos con las últimas tecnologías de cifrado.
          </p>
        </div>
        <div style={styles.feature}>
          <div style={styles.featureIcon}>📈</div>
          <h3 style={styles.featureTitle}>Análisis Financiero</h3>
          <p style={styles.featureText}>
            Recibe reportes detallados para tomar mejores decisiones
            financieras.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © 2024 Banco Digital DSS. Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default Landing;
