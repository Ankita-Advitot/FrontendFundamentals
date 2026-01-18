import type { Note } from "../model/Note";

export const notes: Note[] = [];
export let selectedNote: Note | null = null;
export let message = "";

export const addNote = (title: string, content: string) => {
  notes.push({
    id: Date.now(),
    title,
    content,
    timestamp: new Date().toLocaleString(),
  });

  alert("Note created successfully");
};


export const selectNote = (note: Note) => {
  selectedNote = note;
};

export const updateNote = (title: string, content: string) => {
  if (!selectedNote) return;

  selectedNote.title = title;
  selectedNote.content = content;
  selectedNote.timestamp = new Date().toLocaleString();

  alert("Note updated successfully");
};

export const deleteNote = (id: number) => {
  const index = notes.findIndex(n => n.id === id);

  if (index !== -1) {
    notes.splice(index, 1);
    alert("Note deleted successfully");
  }

  selectedNote = null;
};
