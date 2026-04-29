import { getDashboardData } from "./services/dairyService.js";

async function init() {
  try {
    const data = await getDashboardData();

    setBadge("badge-ruta", data.pedidos);
    setBadge("badge-finanzas", data.total > 0 ? `$${data.total.toFixed(2)}` : 0);
    setBadge("badge-stock", data.critico > 0 ? "!" : 0);

    document.getElementById('main-panel').classList.remove('loading-state');

    saludo();
  } catch (e) {
    document.getElementById('main-panel').classList.remove('loading-state');
  }
}

function setBadge(id, val) {
  const el = document.getElementById(id);
  if (!el) return;

  if (val && val !== 0) {
    el.innerText = val;
    el.style.display = "flex";
  } else {
    el.style.display = "none";
  }
}

function saludo() {
  const hr = new Date().getHours();
  const s = document.getElementById('saludo');

  if (hr < 12) s.innerText = "¡Buenos días!";
  else if (hr < 18) s.innerText = "¡Buenas tardes!";
  else s.innerText = "¡Buenas noches!";
}

init();
