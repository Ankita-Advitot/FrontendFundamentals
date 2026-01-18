import { notes } from "../store/store";
import { NoteItem } from "./NoteItem";

export const NoteList = () => {
  const div = document.createElement("div");

  if (notes.length === 0) {
    div.innerHTML = "<p>No notes yet</p>";
    return div;
  }

  notes.forEach(note => div.appendChild(NoteItem(note)));
  return div;
};
