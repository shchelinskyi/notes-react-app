import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type FormState = {
    openForm: boolean
}

const initialState: FormState = {
    openForm: false
};

const formSlice = createSlice({
        name: 'isForm',
        initialState,
        reducers: {
            openForm: (state) => {
                state.openForm = true;
            },
            closeForm: (state) => {
                state.openForm = false;
            },
        },
    });

export const {
    openForm,
    closeForm,
} = formSlice.actions;

export default formSlice.reducer;