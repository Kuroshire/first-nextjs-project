import { NoteModel } from '../domain/note.model';
import { NoteEntityToNoteModel } from './note.entity';
import { GetNoteByIdResponse, GetNotesResponse } from './note.db-response';

const baseUrl = 'http://127.0.0.1:8090/api/collections/notes/records';

export async function getNoteByIdAdapter({ id }: { id: NoteModel['id'] }): Promise<NoteModel> {
  const res = await fetch(`${baseUrl}/${id}`, {
    next: { revalidate: 10 },
  });
  const noteEntity: GetNoteByIdResponse = await res.json();
  const noteModel = NoteEntityToNoteModel({ noteEntity });
  return noteModel;
}

export async function getNotesAdapter(): Promise<NoteModel[]> {
  const res = await fetch(`${baseUrl}?page=1&perPage=30`, {
    cache: 'no-store',
  });
  const data: GetNotesResponse = await res.json();
  const { items: noteEntities } = data;
  const noteModels = noteEntities.map((noteEntity) => NoteEntityToNoteModel({ noteEntity }));
  return noteModels;
}

export async function createNoteAdapter({ title, content }: { title: string; content: string }) {
  await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content,
    }),
  });
}
