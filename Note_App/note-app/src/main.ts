import "./style.css";
import { router } from "./router/router";

const app = document.getElementById("app")!;

const render = () => {
  app.innerHTML = "";
  router();
};

window.addEventListener("route", render);
window.addEventListener("popstate", render);

render();
