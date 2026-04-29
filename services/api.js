const API = window.APP_CONFIG.API_URL;

export async function get(sheet) {
  const res = await fetch(`${API}?pestaña=${sheet}`);
  return res.json();
}
