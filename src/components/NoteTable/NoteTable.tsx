import React from 'react';
import NoteTableTitle from "../NoteTableTitle/NoteTableTitle";
import NoteItem from "../NoteItem/NoteItem";
import {useAppSelector} from "../../hook";

export interface NoteTableProps {
    tableTitle: string;
    typeNotes: 'notes' | 'archivedNotes';
}

const NoteTable: React.FC<NoteTableProps> = ({tableTitle, typeNotes }) => {
    const notes = useAppSelector((state) => {
        if (typeNotes === 'notes') {
            return  state.notes.notes
        } else {
            return  state.notes.archivedNotes
        }});

    return (
       <div>
           <h3 className='mt-2.5 mx-0 mb-5 text-lg text-center text-gray-400 font-bold'>{tableTitle}</h3>
           <NoteTableTitle/>
           <div>
               {notes.length>0 && notes.map(item => <NoteItem key= {item.id} item={item} /> )}
               {notes.length === 0 && <div className='my-5 mx-0 text-center'>No notes</div>}
           </div>
        </div>
    );
};

export default NoteTable;
