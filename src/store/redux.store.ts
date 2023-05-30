import noteReducer from '@/modules/note/infrastructure/store/note.reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    note: noteReducer,
  },
});

export default store;
