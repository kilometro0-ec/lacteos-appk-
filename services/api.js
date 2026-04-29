import { API } from "../config/apiConfig.js";

export async function fetchData(sheet) {
  const res = await fetch(`${API.BASE_URL}?pestaña=${sheet}`);
  return res.json();
}
