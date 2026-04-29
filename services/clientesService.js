import { GET } from "./api.js";

export async function getClientes() {
  return await GET("Clientes");
}
