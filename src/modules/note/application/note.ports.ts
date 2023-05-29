import { NoteModel } from '../domain/note.model';

export type GetNoteByIdPort = ({ id }: { id: NoteModel['id'] }) => Promise<NoteModel>;
export type GetNotesPort = () => Promise<NoteModel[]>;
