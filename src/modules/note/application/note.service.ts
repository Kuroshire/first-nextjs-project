import {
  createNoteAdapter,
  getNoteByIdAdapter,
  getNotesAdapter,
} from '../infrastructure/note.repository';
import { createNote } from './commands/create-note.command';
import { getNoteById } from './queries/get-note-by-id.query';
import { getNotes } from './queries/get-notes.query';

export const NoteService = {
  createNote: createNote({
    createNotePort: createNoteAdapter,
  }),
  getNotes: getNotes({
    getNotesPort: getNotesAdapter,
  }),
  getNoteById: getNoteById({
    getNoteByIdPort: getNoteByIdAdapter,
  }),
};
