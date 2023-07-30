import React from 'react';
import NoteTableTitle from "../NoteTableTitle/NoteTableTitle";
import NoteItem from "../NoteItem/NoteItem";
import s from './NoteTable.module.scss';
import {useAppSelector} from "../../hook";

const NoteTable: React.FC = () => {
    const notes = useAppSelector((state) => state.notes.notes);

    return (
       <div>
           <h3 className={s.titleContent}>My Notes</h3>
           <NoteTableTitle/>
           <div>
               {notes.length>0 && notes.map(item => <NoteItem key= {item.id} item={item} /> )}
               {notes.length === 0 && <div className={s.noItems}>No notes</div>}
           </div>
        </div>
    );
};

export default NoteTable;
