import { GetNotesPort } from '../note.ports';

export function getNotes(ports: { getNotesPort: GetNotesPort }) {
  return async () => {
    const notes = await ports.getNotesPort();
    return notes;
  };
}
