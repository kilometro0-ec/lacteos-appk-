import { ROUTES } from "./config/routes.js";
import { PedidosScreen } from "./screens/Pedidos.js";

window.navigate = async function(route) {
  let content = "";

  switch(route) {
    case ROUTES.PEDIDOS:
      content = await PedidosScreen();
      break;
  }

  document.getElementById("app").innerHTML = content;
};