import { ROUTES } from "../config/routes.js";

export function BottomNav() {
  return `
    <nav class="bottom-nav">
      <button onclick="navigate('${ROUTES.PEDIDOS}')">Pedidos</button>
      <button onclick="navigate('${ROUTES.CLIENTES}')">Clientes</button>
      <button onclick="navigate('${ROUTES.TRANSPORTADORAS}')">Transp.</button>
    </nav>
  `;
}