import { GET } from "./api.js";

export async function getInventario() {
  return await GET("Inventario");
}
