import { APP_CONFIG } from "../config/appConfig.js";

export function Header() {
  return `
    <header class="header">
      <h1>${APP_CONFIG.appName}</h1>
      <span>v${APP_CONFIG.version}</span>
    </header>
  `;
}