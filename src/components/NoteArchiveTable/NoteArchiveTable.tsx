import React from 'react';
import NoteTableTitle from "../NoteTableTitle/NoteTableTitle";
import NoteItem from "../NoteItem/NoteItem";
import {useAppSelector} from "../../hook";
import s from './NoteArchiveTable.module.scss';

const NoteArchiveTable: React.FC = () => {
    const notes = useAppSelector((state) => state.notes.archivedNotes);

    return (
       <div>
           <h3 className={s.titleContent}>Archived Notes</h3>
           <NoteTableTitle/>
           <div>
               {notes.length>0 && notes.map(item => <NoteItem key= {item.id*2} item={item} /> )}
               {notes.length === 0 &&  <div className={s.noItems}>No notes</div>}
           </div>
        </div>
    );
};

export default NoteArchiveTable;
