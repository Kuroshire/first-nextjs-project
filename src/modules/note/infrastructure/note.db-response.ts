import { NoteEntity } from './note.entity';

export type GetNotesResponse = {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: NoteEntity[];
};

export type GetNoteByIdResponse = NoteEntity;
