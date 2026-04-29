const BASE_URL = "https://script.google.com/macros/s/TU_API/exec";

export async function apiFetch(action, data = {}) {
  const res = await fetch(`${BASE_URL}?action=${action}`, {
    method: "POST",
    body: JSON.stringify(data)
  });

  return res.json();
}