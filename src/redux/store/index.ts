import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../slice/notesSlice';
import formReducer from '../slice/formSlice'
import archiveBlockReducer from "../slice/archiveBlockSlice";

const store = configureStore({
        reducer: {
            notes: notesReducer,
            form : formReducer,
            archiveBlock: archiveBlockReducer
        }
    });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;