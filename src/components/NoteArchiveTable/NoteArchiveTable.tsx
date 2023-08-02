import React from 'react';
import NoteTableTitle from "../NoteTableTitle/NoteTableTitle";
import NoteItem from "../NoteItem/NoteItem";
import {useAppSelector} from "../../hook";


const NoteArchiveTable: React.FC = () => {
    const notes = useAppSelector((state) => state.notes.archivedNotes);

    return (
       <div>
           <h3 className='mt-2.5 mx-0 mb-5 text-lg text-center text-gray-400 font-bold'>Archived Notes</h3>
           <NoteTableTitle/>
           <div>
               {notes.length>0 && notes.map(item => <NoteItem key= {item.id*2} item={item} /> )}
               {notes.length === 0 &&  <div className='my-5 mx-0 text-center'>No notes</div>}
           </div>
        </div>
    );
};

export default NoteArchiveTable;
