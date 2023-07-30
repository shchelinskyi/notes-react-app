import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type Note = {
    id: number;
    nameValue: string,
    formattedDate: string,
    categoryValue: string,
    contentValue: string,
    datesValue: string,
    archived: boolean
}

type NotesState = {
    notes: Note[];
    archivedNotes: Note[];
}

const initialState: NotesState = {
    notes: [],
    archivedNotes: [],
};

const notesSlice = createSlice({
        name: 'notes',
        initialState,
        reducers: {
            addNote: (state, action: PayloadAction<Note>) => {
                state.notes.push(action.payload);
            },
            editNote: (state, action: PayloadAction<Note>) => {
                const {
                    id,
                    nameValue,
                    categoryValue,
                    contentValue,
                    datesValue
                } = action.payload;

                const note = state.notes.find((note) => note.id === id);
                const arNote = state.archivedNotes.find((note) => note.id === id);

                if (note) {
                    note.nameValue = nameValue;
                    note.categoryValue = categoryValue;
                    note.contentValue = contentValue;
                    note.datesValue = datesValue;
                }
                else if (arNote) {
                    arNote.nameValue = nameValue;
                    arNote.categoryValue = categoryValue;
                    arNote.contentValue = contentValue;
                    arNote.datesValue = datesValue;
                }
            },
            deleteNote: (state, action: PayloadAction<number>) => {
                const noteElement = state.notes.find((note) => note.id === action.payload)
                if (noteElement) {
                    state.notes = state.notes.filter((note) => note.id !== action.payload);
                } else {
                    state.archivedNotes = state.archivedNotes.filter((note) => note.id !== action.payload);
                }

            },
            archiveNote: (state, action: PayloadAction<number>) => {
                const noteToArchive = state.notes.find((note) => note.id === action.payload);
                if (noteToArchive) {
                    noteToArchive.archived =  !noteToArchive.archived;
                    state.archivedNotes.push(noteToArchive);
                    state.notes = state.notes.filter((note) => note.id !== action.payload);
                }
            },
            unzipNote: (state, action: PayloadAction<number>) => {
                const noteToUnzip = state.archivedNotes.find((note) => note.id === action.payload);
                if (noteToUnzip) {
                    noteToUnzip.archived = !noteToUnzip.archived;
                    state.notes.push(noteToUnzip);
                    state.archivedNotes = state.archivedNotes.filter((note) => note.id !== action.payload);
                }
            }
            ,
        },
    })
;

export const {
    addNote,
    editNote,
    deleteNote,
    archiveNote,
    unzipNote
} = notesSlice.actions;

export default notesSlice.reducer;