import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hook'
import NoteTable from "../NoteTable/NoteTable";
import NoteForm from "../NoteForm/NoteForm";
import NoteArchiveTable from "../NoteArchiveTable/NoteArchiveTable";
import TotalBlock from "../TotalBlock/TotalBlock";
import {openForm} from "../../redux/slice/formSlice";
import {closeArchiveBlock, openArchiveBlock} from "../../redux/slice/archiveBlockSlice";
import s from './MainContainer.module.scss';

const MainContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const isFormOpen = useAppSelector(state => state.form.openForm);
    const isArchivedBlockOpen = useAppSelector(state => state.archiveBlock.openArchiveBlock);


    return (
        <div>

            <div>
            <div className={s.content}>
                <NoteTable/>
                <div className={s.createBlock}>
                    <button className={s.btn} onClick={() => dispatch(openForm())}>Create Note</button>
                    {!isArchivedBlockOpen && <button className={s.btn} onClick={() => dispatch(openArchiveBlock())}>Show archived Notes</button>}
                    {isArchivedBlockOpen && <button className={s.btn} onClick={() => dispatch(closeArchiveBlock())}>Hide archived Notes</button>}
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
                {!!isFormOpen && <div className={s.overlay}></div>}
            </div>
        </div>
    );
};

export default MainContainer;