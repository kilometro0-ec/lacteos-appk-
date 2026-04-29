import { apiFetch } from "./api.js";

export function getPedidos() {
  return apiFetch("getPedidos");
}

export function crearPedido(pedido) {
  return apiFetch("crearPedido", pedido);
}