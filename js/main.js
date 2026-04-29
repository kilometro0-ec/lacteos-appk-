async function loadPage(page) {
  const app = document.getElementById("app");

  try {
    // cargar HTML de la página
    const res = await fetch(`./pages/${page}.html`);
    const html = await res.text();

    app.innerHTML = html;

    console.log("Página cargada:", page);

    // ejecutar lógica según página
    if (page === "dashboard") {
      const module = await import("./dashboard.js");
      module.initDashboard();
    }

  } catch (error) {
    console.error("Error cargando página:", error);

    app.innerHTML = `
      <div style="padding:20px;font-family:sans-serif">
        <h2>Error cargando la página</h2>
        <p>Revisa consola (F12)</p>
      </div>
    `;
  }
}

function initRouter() {
  const page = location.hash.replace("#", "") || "dashboard";

  loadPage(page);

  window.addEventListener("hashchange", () => {
    const newPage = location.hash.replace("#", "") || "dashboard";
    loadPage(newPage);
  });
}

// iniciar app
initRouter();
