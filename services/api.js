import { CONFIG } from "../config.js";

// ==========================
// GET (leer datos)
// ==========================
export async function GET(pestaña) {
  try {
    const res = await fetch(`${CONFIG.API_URL}?pestaña=${pestaña}`);
    return await res.json();
  } catch (e) {
    console.error("GET error:", e);
    return [];
  }
}

// ==========================
// POST (guardar datos)
// ==========================
export async function POST(data) {
  try {
    const res = await fetch(CONFIG.API_URL, {
      method: "POST",
      body: JSON.stringify(data)
    });

    return await res.text();
  } catch (e) {
    console.error("POST error:", e);
    return "ERROR";
  }
}
