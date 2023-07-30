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
    notes: [ {
        id:1690743110204,
        nameValue:"Сook food 05.08.2023 or 07/08/2023",
        formattedDate:"July 27, 2023",
        categoryValue:"Idea",
        contentValue:"Bake a pie",
        datesValue:"05/08/2023, 07/08/2023",
        archived:false
    },
        {
            id:1690743110210,
            nameValue:"Go to the dentist 01/08/2023",
            formattedDate:"July 27, 2023",
            categoryValue:"Task",
            contentValue:"Examine teeth",
            datesValue:"01/08/2023",
            archived:false
        },
        {
            id:1690743110224,
            nameValue:"Read book",
            formattedDate:"July 27, 2023",
            categoryValue:"Task",
            contentValue:"A Smarter Way to Learn JavaScript",
            datesValue:"",
            archived:false
        },
        {
            id:1690743110234,
            nameValue:"Develop mobile App for language learning",
            formattedDate:"July 27, 2023",
            categoryValue:"Idea",
            contentValue:"React Native, MUI",
            datesValue:"",
            archived:false
        },
        {
            id:1690743110274,
            nameValue:"Complete project report",
            formattedDate:"July 27, 2023",
            categoryValue:"Task",
            contentValue:"Deadline 03.08.2023",
            datesValue:"03/08/2023",
            archived:false
        }],
    archivedNotes: [
        {
            id:1690743110367,
            nameValue:"Design a smart home automation system",
            formattedDate:"July 27, 2023",
            categoryValue:"Random Thought",
            contentValue:"Lighting, smart sockets",
            datesValue:"",
            archived:true
        },
        {
            id:1690743110575,
            nameValue:"Prepare presentation",
            formattedDate:"July 27, 2023",
            categoryValue:"Task",
            contentValue:"Must use Canva or PowerPoint",
            datesValue:"",
            archived:true
        },
    ],
};

const notesSlice = createSlice({
        name: 'notes',
        initialState,
        reducers: {
            addNote: (state, action: PayloadAction<Note>) => {
                state.notes.unshift(action.payload);
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
                    state.archivedNotes.unshift(noteToArchive);
                    state.notes = state.notes.filter((note) => note.id !== action.payload);
                }
            },
            unzipNote: (state, action: PayloadAction<number>) => {
                const noteToUnzip = state.archivedNotes.find((note) => note.id === action.payload);
                if (noteToUnzip) {
                    noteToUnzip.archived = !noteToUnzip.archived;
                    state.notes.unshift(noteToUnzip);
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