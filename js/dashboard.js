import { getDashboardData } from "../services/dashboardService.js";

export async function initDashboard() {
  try {
    const data = await getDashboardData();

    const ruta = document.getElementById("badge-ruta");
    const finanzas = document.getElementById("badge-finanzas");
    const stock = document.getElementById("badge-stock");

    if (ruta) ruta.innerText = data.pendientes || 0;

    if (finanzas) {
      finanzas.innerText = `$${(data.total || 0).toFixed(2)}`;
    }

    if (stock) {
      stock.innerText = data.stockCritico || 0;
    }

  } catch (error) {
    console.error("Dashboard error:", error);

    // fallback visual (evita pantalla rota)
    const ruta = document.getElementById("badge-ruta");
    const finanzas = document.getElementById("badge-finanzas");
    const stock = document.getElementById("badge-stock");

    if (ruta) ruta.innerText = "0";
    if (finanzas) finanzas.innerText = "$0.00";
    if (stock) stock.innerText = "0";
  }
}
