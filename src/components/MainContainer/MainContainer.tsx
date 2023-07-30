import React from 'react';
import s from './MainContainer.module.scss';
import {useAppDispatch, useAppSelector} from '../../hook'
import NoteTable from "../NoteTable/NoteTable";
import NoteForm from "../NoteForm/NoteForm";
import {openForm} from "../../redux/slice/formSlice";
import NoteArchiveTable from "../NoteArchiveTable/NoteArchiveTable";
import TotalBlock from "../TotalBlock/TotalBlock";
import {closeArchiveBlock, openArchiveBlock} from "../../redux/slice/archiveBlockSlice";


const MainContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const isFormOpen = useAppSelector(state => state.form.openForm);
    const isArchivedBlockOpen = useAppSelector(state => state.archiveBlock.openArchiveBlock);
    return (
        <>
            <div className={s.content}>
                <NoteTable/>
                <div className={s.createBlock}>
                    <button onClick={() => dispatch(openForm())}>Create Note</button>
                    {!isArchivedBlockOpen && <button onClick={() => dispatch(openArchiveBlock())}>Show archived Notes</button>}
                    {isArchivedBlockOpen && <button onClick={() => dispatch(closeArchiveBlock())}>Hide archived Notes</button>}
                </div>
            </div>

            {isArchivedBlockOpen &&
                <div className={s.content}>
                    <NoteArchiveTable/>
                </div>
            }

            <div className={s.content}>
                <TotalBlock/>
            </div>

            {!!isFormOpen && <NoteForm/>}


        </>
    );
};

export default MainContainer;