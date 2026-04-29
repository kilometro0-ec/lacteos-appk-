import { GET } from "./api.js";

export async function getDashboardData() {

  const pedidos = await GET("Pedidos");
  const inventario = await GET("Inventario");

  const pendientes = pedidos.filter(p => p.Estado === "PENDIENTE");

  const total = pendientes.reduce((acc, p) => {
    let val = parseFloat(p.Total || 0);
    return acc + val;
  }, 0);

  const critico = inventario.filter(i => {
    return parseFloat(i.Stock) < parseFloat(i.Mínimo);
  }).length;

  return {
    pedidos: pendientes.length,
    total,
    critico
  };
}
