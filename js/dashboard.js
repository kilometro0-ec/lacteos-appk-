import { get } from "./api.js";

export async function getDashboardData() {
  const ventas = await get("Ventas");
  const inventario = await get("Inventario");

  const pendientes = ventas.filter(v =>
    String(v.Estado || "").toUpperCase() === "PENDIENTE"
  );

  const total = pendientes.reduce((acc, v) =>
    acc + (parseFloat(v.Total || 0) || 0), 0
  );

  const stockCritico = inventario.filter(i =>
    (parseFloat(i["Stock Inicial"] || 0)) < 5
  ).length;

  return {
    pendientes: pendientes.length,
    total,
    stockCritico
  };
}
