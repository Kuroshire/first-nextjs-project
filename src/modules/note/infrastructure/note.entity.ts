import { NoteModel } from '../domain/note.model';

export type PocketBaseEntity = {
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
};

export type NoteEntity = {
  id: string;
  title: string;
  content: string;
} & PocketBaseEntity;

export function NoteEntityToNoteModel({ noteEntity }: { noteEntity: NoteEntity }) {
  const note: NoteModel = {
    id: noteEntity.id as NoteModel['id'],
    title: noteEntity.title,
    content: noteEntity.content,
    created: noteEntity.created,
  };

  return note;
}
