import { NoteList } from "../components/NoteList";

export const HomeView = () => {
  const div = document.createElement("div");

  div.innerHTML = `
    <h1>My Notes</h1>
    <button id="create">Create Note</button>
  `;

  (div.querySelector("#create") as HTMLButtonElement)!.addEventListener("click", () => {
    history.pushState({}, "", "/create");
    window.dispatchEvent(new Event("route"));
  });

  div.appendChild(NoteList());
  return div;
};
