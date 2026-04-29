import { API } from "../config/apiConfig.js";

export async function getDashboardData() {
  const [ventas, inventario] = await Promise.all([
    fetch(`${API.DAIRY_URL}?pestaña=Ventas`).then(r => r.json()),
    fetch(`${API.DAIRY_URL}?pestaña=Inventario`).then(r => r.json())
  ]);

  const pendientes = ventas.filter(v =>
    String(v.Estado || "").trim().toUpperCase() === "PENDIENTE"
  );

  const total = pendientes.reduce((acc, v) => {
    let t = String(v.Total || "0")
      .replace(',', '.')
      .replace(/[^\d.-]/g, '');
    return acc + (parseFloat(t) || 0);
  }, 0);

  const critico = inventario.filter(i => {
    let s = String(i["Stock Inicial"] || "0")
      .replace(',', '.')
      .replace(/[^\d.-]/g, '');
    return (parseFloat(s) || 0) < 5;
  }).length;

  return {
    pedidos: pendientes.length,
    total,
    critico
  };
}
