import { selectedNote, deleteNote } from "../store/store";

export const ViewNoteView = () => {
  const div = document.createElement("div");

  if (!selectedNote) {
    div.innerHTML = "<p>No note selected</p>";
    return div;
  }

  div.innerHTML = `
    <h2>${selectedNote.title}</h2>
    <p>${selectedNote.content}</p>
    <small>${selectedNote.timestamp}</small>
    <br/>
    <button id="edit">Edit</button>
    <button id="delete">Delete</button>
  `;

  (div.querySelector("#edit") as HTMLButtonElement).onclick = () => {
    history.pushState({}, "", "/edit");
    window.dispatchEvent(new Event("route"));
  };

  (div.querySelector("#delete") as HTMLButtonElement).onclick = () => {
    deleteNote(selectedNote.id);
    history.pushState({}, "", "/");
    window.dispatchEvent(new Event("route"));
  };

  return div;
};
