import { renderHeader } from "../components/header.js";
import { renderNav } from "../components/nav.js";

function initLayout() {
  const h = document.getElementById("header");
  const n = document.getElementById("nav");

  if (h) h.innerHTML = renderHeader();
  if (n) n.innerHTML = renderNav();
}

initLayout();
