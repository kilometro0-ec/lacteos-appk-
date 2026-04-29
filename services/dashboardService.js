export async function getDashboardData() {
  try {
    const ventas = await get("Ventas") || [];
    const inventario = await get("Inventario") || [];

    const pendientes = ventas.filter(v =>
      String(v.Estado || "").toUpperCase() === "PENDIENTE"
    );

    const total = pendientes.reduce((a, v) =>
      a + (parseFloat(v.Total || 0) || 0), 0
    );

    const stockCritico = inventario.filter(i =>
      (parseFloat(i["Stock Inicial"] || 0)) < 5
    ).length;

    return { pendientes: pendientes.length, total, stockCritico };

  } catch (e) {
    console.error("Error API:", e);
    return { pendientes: 0, total: 0, stockCritico: 0 };
  }
}
