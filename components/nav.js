export function renderNav() {
  return `
    <div class="bottom-nav">
      <button onclick="go('../index.html')">🏠</button>
      <button onclick="go('pedidos.html')">📦</button>
      <button onclick="go('inventario.html')">📊</button>
      <button onclick="go('clientes.html')">👥</button>
      <button onclick="go('ajustes.html')">⚙️</button>
    </div>
  `;
}
