'use client';

import { useRouter } from "next/navigation";
// import PocketBase from 'pocketbase';
import { useState } from "react";

export default function CreateNote() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async() => {

/*    const pb = new PocketBase('http://127.0.0.1:8090');

    const data = {
        title,
        content,
    };

    const record = await pb.collection('notes').create(data);
*/

    console.log({title, content});
    const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title, 
        content,
      })
    });

    console.log({res});

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