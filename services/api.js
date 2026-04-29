const API_URL = "https://script.google.com/macros/s/AKfycbwglNauq2RBBZqcPkamIBqioTShRzO_Jo9Afjo7r0OWC7AKy6740QEeOywZ26Pssm6u/exec";

export async function get(sheet) {
  const res = await fetch(`${API_URL}?pestaña=${sheet}`);
  return await res.json();
}
