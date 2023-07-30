import React from 'react';
import NoteTableTitle from "../NoteTableTitle/NoteTableTitle";
import NoteItem from "../NoteItem/NoteItem";
import './NoteArchiveTable.css';
import {useAppSelector} from "../../hook";
import {Note as NoteProps} from "../../redux/slice/notesSlice"


const NoteArchiveTable: React.FC = () => {
    const notes = useAppSelector((state) => state.notes.archivedNotes);
    // const dispatch = useDispatch();

    return (
       <div>
           <h3 className="titleContent">Archived Notes</h3>
           <NoteTableTitle/>
           <div>
               {notes.length>0 && notes.map(item => <NoteItem key= {item.id*2} item={item} /> )}
           </div>
        </div>
    );
};

export default NoteArchiveTable;
