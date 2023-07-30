import React from 'react';
import NoteTableTitle from "../NoteTableTitle/NoteTableTitle";
import NoteItem from "../NoteItem/NoteItem";
import './NoteTable.css';
import {useAppSelector} from "../../hook";
import {Note as NoteProps} from "../../redux/slice/notesSlice"


const NoteTable: React.FC = () => {
    const notes = useAppSelector((state) => state.notes.notes);
    // const dispatch = useDispatch();

    return (
       <div>
           <h3 className="titleContent">My Notes</h3>
           <NoteTableTitle/>
           <div>
               {notes.length>0 && notes.map(item => <NoteItem key= {item.id} item={item} /> )}
           </div>
        </div>
    );
};

export default NoteTable;
