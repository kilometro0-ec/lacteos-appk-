import { getDashboardData } from "../services/dashboardService.js";

export async function initDashboard() {
  const data = await getDashboardData();

  const ruta = document.getElementById("badge-ruta");
  const finanzas = document.getElementById("badge-finanzas");
  const stock = document.getElementById("badge-stock");

  if (ruta) ruta.innerText = data.pendientes;

  if (finanzas) {
    finanzas.innerText = `$${data.total.toFixed(2)}`;
  }

  if (stock) {
    stock.innerText = data.stockCritico;
  }
}
