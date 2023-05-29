import CreateNote from "@/modules/note/presentation/create-note.component";
import NoteList from "@/modules/note/presentation/note-list.component";

export default async function NotePage() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <NoteList />
      <CreateNote />
    </div>
  )
}
