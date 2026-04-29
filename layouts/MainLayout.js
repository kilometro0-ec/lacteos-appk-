import { Header } from "../components/Header.js";
import { BottomNav } from "../components/BottomNav.js";

export function MainLayout(content) {
  return `
    ${Header()}
    <main>${content}</main>
    ${BottomNav()}
  `;
}