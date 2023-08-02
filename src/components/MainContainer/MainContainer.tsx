import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hook'
import NoteTable from "../NoteTable/NoteTable";
import NoteForm from "../NoteForm/NoteForm";
import NoteArchiveTable from "../NoteArchiveTable/NoteArchiveTable";
import TotalBlock from "../TotalBlock/TotalBlock";
import {openForm} from "../../redux/slice/formSlice";
import {closeArchiveBlock, openArchiveBlock} from "../../redux/slice/archiveBlockSlice";

const MainContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const isFormOpen = useAppSelector(state => state.form.openForm);
    const isArchivedBlockOpen = useAppSelector(state => state.archiveBlock.openArchiveBlock);

    return (
        <div className="p-2 max-w-7xl mx-auto mt-8 border-black">
            <div className="p-5 mb-8 border-2 border-slate-700 rounded-xl">
                <NoteTable/>
                <div className="flex gap-20 justify-end">
                    <button className="btn-item-archived" onClick={() => dispatch(openForm())}>Create Note</button>
                    {!isArchivedBlockOpen && <button className="btn-item-archived" onClick={() => dispatch(openArchiveBlock())}>Show archived Notes</button>}
                    {isArchivedBlockOpen && <button className="btn-item-archived" onClick={() => dispatch(closeArchiveBlock())}>Hide archived Notes</button>}
                </div>
            </div>
            {isArchivedBlockOpen &&
                <div className="p-5 border-2 border-slate-700 rounded-xl mb-8">
                    <NoteArchiveTable/>
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