import { HomeView } from "../views/HomeView";
import { CreateView } from "../views/CreateView";
import { ViewNoteView } from "../views/ViewNoteView";

export const router = () => {
  const app = document.getElementById("app")!;
  app.innerHTML = "";

  switch (location.pathname) {
    case "/":
      app.appendChild(HomeView());
      break;
    case "/create":
    case "/edit":
      app.appendChild(CreateView());
      break;
    case "/view":
      app.appendChild(ViewNoteView());
      break;
    default:
      app.innerHTML = "<h2>404</h2>";
  }
};

window.addEventListener("popstate", router);
window.addEventListener("route", router);
