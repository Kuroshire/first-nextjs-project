import store from '@/store/redux.store';
import { createSlice } from '@reduxjs/toolkit';
import { NoteModel } from '../../domain/note.model';
import NoteList from '../../presentation/note-list.component';

// export enum NoteActionEnum {
//   addNote = 'note/add',
//   deleteNote = 'note/delete',
// }

// export type NoteState = {
//   notes: NoteModel[];
// };

// export type NoteAction = {
//   type: NoteActionEnum;
//   note: NoteModel;
// };

// export function noteReducer(state: NoteState = { notes: [] }, action: NoteAction) {
//   const { notes } = state;
//   switch (action.type) {
//     case NoteActionEnum.addNote:
//       return { notes: notes.push(action.note) };
//     case NoteActionEnum.deleteNote:
//       return { value: notes.filter((note) => note.id != action.note.id) };
//     default:
//       return state;
//   }
// }

type NoteActionPayload = {
  payload: NoteModel;
  type: string;
};

const noteSlice = createSlice({
  name: 'notes',
  initialState: {
    entities: [] as NoteModel[],
  },
  reducers: {
    createNote: (state, action: NoteActionPayload) => {
      state.entities.push(action.payload);
    },
    removeNote: (state, action: NoteActionPayload) => {
      state.entities.filter((note) => note.id != action.payload.id);
    },
  },
});

store.subscribe(NoteList);

export const { createNote, removeNote } = noteSlice.actions;
export default noteSlice.reducer;
