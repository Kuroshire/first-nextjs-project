import Link from "next/link";
import { NoteService } from "../application/note.service";
import { Note } from "./note.component";
import styles from './notes.module.css';

export default async function NoteList() {
  const notes = await NoteService.getNotes();
  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <Link href={`notes/${note.id}`}>
                {/* @ts-expect-error Server Component */}
                <Note id={note.id} />
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  ) 
}