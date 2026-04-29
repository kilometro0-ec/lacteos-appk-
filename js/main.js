async function loadPage(page) {
  const app = document.getElementById("app");

  const res = await fetch(`pages/${page}.html`);
  const html = await res.text();

  app.innerHTML = html;

  // activar lógica por página
  if (page === "pedidos") import("../services/pedidosService.js");
  if (page === "inventario") import("../services/inventarioService.js");
  if (page === "dashboard") import("../services/dashboardService.js");
}

function init() {
  loadPage("dashboard");
}

init();
