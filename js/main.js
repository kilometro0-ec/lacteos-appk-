async function loadPage(page) {
  const app = document.getElementById("app");

  const res = await fetch(`./pages/${page}.html`);
  const html = await res.text();

  app.innerHTML = html;

  console.log("Página cargada:", page);

  // activar lógica por página
  if (page === "dashboard") {
    const { initDashboard } = await import("../services/dashboardService.js");
    initDashboard();
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

initRouter();
