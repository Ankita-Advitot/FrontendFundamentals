import type { Note } from "../model/Note";
import { selectNote, deleteNote } from "../store/store";

export const NoteItem = (note: Note) => {
  const div = document.createElement("div");
  div.className = "note-item";

  div.innerHTML = `
    <h3>${note.title}</h3>
    <small>${note.timestamp}</small>
    <button class="delete-btn">Delete</button>
  `;

  div.querySelector("h3")!.onclick = () => {
    selectNote(note);
    history.pushState({}, "", "/view");
    window.dispatchEvent(new Event("route"));
  };

  (div.querySelector(".delete-btn") as HTMLButtonElement).onclick = (e: MouseEvent) => {
    e.stopPropagation();
    deleteNote(note.id);
    window.dispatchEvent(new Event("route"));
  };

  return div;
};
