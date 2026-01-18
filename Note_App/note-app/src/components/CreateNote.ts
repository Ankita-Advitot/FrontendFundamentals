import { addNote, selectedNote, updateNote } from "../store/store";

export const CreateNote = () => {
  const isEdit = !!selectedNote;
  const form = document.createElement("form");

  form.innerHTML = `
    <h2>${isEdit ? "Edit Note" : "Create Note"}</h2>
    <input name="title" placeholder="Title" required />
    <textarea name="content" placeholder="Content" required></textarea>
    <button>${isEdit ? "Update" : "Create"}</button>
  `;

  const title = form.elements.namedItem("title") as HTMLInputElement;
  const content = form.elements.namedItem("content") as HTMLTextAreaElement;

  if (isEdit && selectedNote) {
    title.value = selectedNote.title;
    content.value = selectedNote.content;
  }

  form.onsubmit = e => {
    e.preventDefault();

    if (isEdit) {
      updateNote(title.value, content.value);
    } else {
      addNote(title.value, content.value);
    }

    history.pushState({}, "", "/");
    window.dispatchEvent(new Event("route"));
  };

  return form;
};
