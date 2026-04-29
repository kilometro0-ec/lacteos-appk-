export function showLoader() {
  document.body.insertAdjacentHTML("beforeend", `
    <div id="loader">🐄 Cargando...</div>
  `);
}

export function hideLoader() {
  document.getElementById("loader")?.remove();
}
