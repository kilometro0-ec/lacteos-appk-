import { MainLayout } from "../layouts/MainLayout.js";
import { getPedidos } from "../services/pedidosService.js";

export async function PedidosScreen() {
  const pedidos = await getPedidos();

  const list = pedidos.map(p => `
    <div class="card">
      <h3>${p.cliente}</h3>
      <p>${p.direccion}</p>
    </div>
  `).join("");

  return MainLayout(`
    <h2>Pedidos</h2>
    ${list}
  `);
}