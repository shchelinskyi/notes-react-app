import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hook'
import NoteTable from "../NoteTable/NoteTable";
import NoteForm from "../NoteForm/NoteForm";
import TotalBlock from "../TotalBlock/TotalBlock";
import Button from "../Button/Button"
import {openForm} from "../../redux/slice/formSlice";
import {closeArchiveBlock, openArchiveBlock} from "../../redux/slice/archiveBlockSlice";
import { AnyAction } from 'redux';


const MainContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const isFormOpen = useAppSelector(state => state.form.openForm);
    const isArchivedBlockOpen = useAppSelector(state => state.archiveBlock.openArchiveBlock);

    const handleOpenForm = (): AnyAction => {
        return dispatch(openForm());
    };
    const handleOpenArchiveBlock = (): AnyAction => {
        return dispatch(openArchiveBlock());
    };
    const handleHideArchiveBlock = (): AnyAction => {
        return dispatch(closeArchiveBlock());
    };


    return (
        <div className="p-2 max-w-7xl mx-auto mt-8 border-black">
            <div className="p-5 mb-8 border-2 border-slate-700 rounded-xl">
                <NoteTable tableTitle='My Notes' typeNotes='notes'/>
                <div className="flex gap-20 justify-end">
                    <Button clickFunc='openForm' size="medium">Create Note</Button>
                    {!isArchivedBlockOpen &&
                        <Button clickFunc='openArchiveBlock' size="medium">Show archived Notes</Button>}
                    {isArchivedBlockOpen
                        && <Button clickFunc='closeArchiveBlock' size="medium">Hide archived Notes</Button>}
                </div>
            </div>
            {isArchivedBlockOpen &&
                <div className="p-5 border-2 border-slate-700 rounded-xl mb-8">
                    <NoteTable tableTitle='Archived Notes' typeNotes='archivedNotes'/>
                </div>
            }
            <div className="p-5 border-2 border-slate-700 rounded-xl">
                <TotalBlock/>
            </div>
            {!!isFormOpen && <NoteForm/>}
                {!!isFormOpen && <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 z-40"></div>}
        </div>
    );
};

export default MainContainer;