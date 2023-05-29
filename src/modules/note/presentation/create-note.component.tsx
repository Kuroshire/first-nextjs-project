'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { NoteService } from "../application/note.service";

// Server actions can also be used to create a form and gives a better user experience.
// However, this feature is currently in alpha.
export default function CreateNote() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async () => {
    await NoteService.createNote({ title, content });

    setTitle('');
    setContent('');
    router.refresh();
  } 

  return(
    <form onSubmit={create}>
      <h3>Create new Note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        Create note
      </button>
    </form>
  )
}