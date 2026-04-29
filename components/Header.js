import { CONFIG } from "../config.js";

export function renderHeader() {
  return `
    <div class="header">
      <span>${CONFIG.APP_NAME}</span>
      <span>v${CONFIG.VERSION}</span>
    </div>
  `;
}
