import {createSlice} from '@reduxjs/toolkit';

type ArchiveBlockState = {
    openArchiveBlock: boolean
}

const initialState: ArchiveBlockState = {
    openArchiveBlock: false
};

const archiveBlockSlice = createSlice({
        name: 'archivedBlock',
        initialState,
        reducers: {
            openArchiveBlock: (state) => {
                state.openArchiveBlock = true;
            },
            closeArchiveBlock: (state) => {
                state. openArchiveBlock= false;
            },
        },
    });

export const {
    openArchiveBlock,
    closeArchiveBlock,
} =  archiveBlockSlice.actions;

export default  archiveBlockSlice.reducer;