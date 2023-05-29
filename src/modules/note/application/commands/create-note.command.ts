type CreateNotePort = ({ title, content }: { title: string; content: string }) => Promise<void>;

export function createNote(ports: { createNotePort: CreateNotePort }) {
  return async ({ title, content }: { title: string; content: string }) => {
    await ports.createNotePort({ title, content });
  };
}
