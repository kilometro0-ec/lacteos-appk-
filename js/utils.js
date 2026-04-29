export function moneda(valor) {
  return `$${parseFloat(valor || 0).toFixed(2)}`;
}

export function fecha() {
  return new Date().toISOString();
}
