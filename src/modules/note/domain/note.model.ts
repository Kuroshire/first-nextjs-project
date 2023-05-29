export type NoteModel = {
  id: string & { _brand: 'NoteId' };
  title: string;
  content: string;
  created: string;
};
