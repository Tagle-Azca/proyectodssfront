import React from "react";
import "../css/404.css";
const SimpleErrorPage = () => {
  return (
    <main className="container">
      <article className="content">
        <p>
          <strong>Aún no creamos esta pagina</strong>
        </p>
        <p>Parece que nuestro programador se quedó dormido.</p>
        <p>
          <button onClick={() => window.history.back()}>
            Regresar a la Pagina.
          </button>
        </p>
      </article>
    </main>
  );
};

export default SimpleErrorPage;
