import { GET, POST } from "./api.js";

// Obtener pedidos
export async function getPedidos() {
  return await GET("Pedidos");
}

// Crear pedido
export async function crearPedido(data) {
  return await POST({
    pestaña: "Pedidos",
    accion: "crear",
    ...data
  });
}

// Entregar pedido
export async function entregarPedido(id, usuario) {
  return await POST({
    pestaña: "Pedidos",
    accion: "entregar",
    ID: id,
    Usuario: usuario
  });
}
