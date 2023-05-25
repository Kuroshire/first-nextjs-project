import Link from "next/link";
import CreateNote from "./components/create-note";
import styles from './notes.module.css';

async function getNotes() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  console.log({data});
  return data?.items as any[]
}

export default async function NotePage() {
  const notes = await getNotes();
  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <Link href={`notes/${note.id}`}>
                <Note note={note} />
              </Link>
            </div>
          )
        })}
      </div>
      <CreateNote />
    </div>
  )
}

function Note({note}: any) {
  const { content, title, created} = note || {};
  return(
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
  )
}