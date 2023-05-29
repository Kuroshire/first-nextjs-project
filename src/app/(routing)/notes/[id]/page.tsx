import { NoteModel } from '@/modules/note/domain/note.model';
import { Note } from '@/modules/note/presentation/note.component';

type NotePageParams = {
  id: NoteModel['id'];
}

export default async function NotePage({params}: {params: NotePageParams}) {
  return (
    <div>
      <h3>note/{params.id}</h3>
      {/* @ts-expect-error Server Component */}
      <Note id={params.id}></Note>
    </div>
  )
}