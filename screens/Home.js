import { APP } from "../config/appConfig.js";
import { getDashboardData } from "../services/dashboardService.js";

export function renderHome() {

  setTimeout(loadData, 100);

  return `
    <header class="mb-8 flex justify-between items-center">
      <div>
        <h1 class="text-2xl font-black uppercase">${APP.name}</h1>
        <p id="saludo" class="text-primary text-xs">Cargando...</p>
      </div>
    </header>

    <main id="panel" class="grid grid-cols-2 gap-4 opacity-50">

      <div class="bg-primary text-white p-6 rounded-3xl col-span-2">
        <h2 class="text-xl font-bold">Ventas</h2>
        <span id="badge-finanzas"></span>
      </div>

      <div class="bg-white p-4 rounded-3xl">
        Pedidos
        <span id="badge-pedidos"></span>
      </div>

      <div class="bg-white p-4 rounded-3xl">
        Inventario
        <span id="badge-stock"></span>
      </div>

    </main>

    <footer class="mt-6 text-center text-xs">
      ${APP.company} • v${APP.version}
    </footer>
  `;
}

async function loadData() {
  const data = await getDashboardData();

  document.getElementById("panel").classList.remove("opacity-50");

  setBadge("badge-pedidos", data.pedidosPendientes);
  setBadge("badge-finanzas", `$${data.totalPendiente.toFixed(2)}`);
  setBadge("badge-stock", data.stockCritico > 0 ? "!" : "");

  saludo();
}

function setBadge(id, val) {
  const el = document.getElementById(id);
  if (el) el.innerText = val;
}

function saludo() {
  const h = new Date().getHours();
  const el = document.getElementById("saludo");

  if (h < 12) el.innerText = "Buenos días";
  else if (h < 18) el.innerText = "Buenas tardes";
  else el.innerText = "Buenas noches";
}
