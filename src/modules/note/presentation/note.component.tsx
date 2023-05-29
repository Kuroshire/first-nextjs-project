import { NoteService } from '../application/note.service';
import { NoteModel } from '../domain/note.model';
import styles from './notes.module.css';

export async function Note({ id }: { id: NoteModel['id'] }) {
  const {title, content, created} = await NoteService.getNoteById({id});
  return(
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
  )
}