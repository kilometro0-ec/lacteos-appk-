import { fetchData } from "./api.js";

export async function getDashboardData() {
  const [ventas, inventario] = await Promise.all([
    fetchData("Ventas"),
    fetchData("Inventario")
  ]);

  const pendientes = ventas.filter(v =>
    String(v.Estado || "").trim().toUpperCase() === "PENDIENTE"
  );

  const total = pendientes.reduce((acc, v) => {
    let t = String(v.Total || "0").replace(',', '.').replace(/[^\d.-]/g, '');
    return acc + (parseFloat(t) || 0);
  }, 0);

  const critico = inventario.filter(i => {
    let s = String(i["Stock Inicial"] || "0").replace(',', '.').replace(/[^\d.-]/g, '');
    return (parseFloat(s) || 0) < 5;
  }).length;

  return {
    pedidosPendientes: pendientes.length,
    totalPendiente: total,
    stockCritico: critico
  };
}
