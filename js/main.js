const API = "TU_URL_AQUI";

// =======================
// 🚀 INICIO
// =======================
async function init() {
  try {

    const res = await fetch(`${API}?pestaña=Pedidos`);
    const pedidos = await res.json();

    const pendientes = pedidos.filter(p => p.Estado === "PENDIENTE");

    // 🔢 métricas
    const total = pendientes.reduce((acc, p) => acc + (parseFloat(p.Total) || 0), 0);

    setBadge("badge-ruta", pendientes.length);
    setBadge("badge-finanzas", total > 0 ? `$${total.toFixed(2)}` : 0);

    document.getElementById('main-panel').classList.remove('loading-state');

    saludo();

  } catch (e) {
    document.getElementById('main-panel').classList.remove('loading-state');
    console.error(e);
  }
}

// =======================
// 🔴 BADGES
// =======================
function setBadge(id, val) {
  const el = document.getElementById(id);
  if (!el) return;

  if (val && val !== 0) {
    el.innerText = val;
    el.style.display = "flex";
  } else {
    el.style.display = "none";
  }
}

// =======================
// 🕐 SALUDO
// =======================
function saludo() {
  const hr = new Date().getHours();
  const s = document.getElementById('saludo');

  if (hr < 12) s.innerText = "¡Buenos días!";
  else if (hr < 18) s.innerText = "¡Buenas tardes!";
  else s.innerText = "¡Buenas noches!";
}

// =======================
// 📦 CREAR PEDIDO
// =======================
async function crearPedido() {

  await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      pestaña: "Pedidos",
      accion: "crear",
      Cliente: "Juan",
      Dirección: "Carcelén",
      Zona: "NORTE",
      Total: 10,
      Usuario: "Darwin",
      Productos: [
        { nombre: "Leche", cantidad: 2 }
      ]
    })
  });

  alert("Pedido creado");
}

// =======================
// 🚚 ENTREGAR
// =======================
async function entregarPedido(id) {

  await fetch(API, {
    method: "POST",
    body: JSON.stringify({
      pestaña: "Pedidos",
      accion: "entregar",
      ID: id,
      Usuario: "Darwin"
    })
  });

  alert("Pedido entregado");
}

// =======================
// 🧠 RUTA DE HOY
// =======================
async function rutaHoy() {

  const res = await fetch(`${API}?pestaña=Pedidos`);
  const data = await res.json();

  const pendientes = data.filter(p => p.Estado === "PENDIENTE");

  const zonas = {};

  pendientes.forEach(p => {
    if (!zonas[p.Zona]) zonas[p.Zona] = [];
    zonas[p.Zona].push(p);
  });

  let html = "";

  Object.keys(zonas).forEach(z => {

    html += `<h2 style="font-weight:bold;margin-top:10px;">Zona ${z}</h2>`;

    zonas[z].forEach(p => {
      html += `
        <div style="padding:10px;border-bottom:1px solid #ddd;">
          📦 <b>${p.Cliente}</b><br>
          📍 ${p.Dirección}
        </div>
      `;
    });

  });

  document.getElementById("main-panel").innerHTML = html;
}

// =======================
// 🌍 GLOBAL
// =======================
window.crearPedido = crearPedido;
window.entregarPedido = entregarPedido;
window.rutaHoy = rutaHoy;

// INICIAR
init();
