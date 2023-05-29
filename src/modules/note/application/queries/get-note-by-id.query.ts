import { NoteModel } from '../../domain/note.model';
import { GetNoteByIdPort } from '../note.ports';

export function getNoteById(ports: { getNoteByIdPort: GetNoteByIdPort }) {
  return async ({ id }: { id: NoteModel['id'] }) => {
    const note = await ports.getNoteByIdPort({ id });
    return note;
  };
}
