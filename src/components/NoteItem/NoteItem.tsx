import React, {useEffect, useState} from 'react';
import {archiveNote, deleteNote, editNote, Note, unzipNote} from "../../redux/slice/notesSlice"
import {useAppDispatch} from "../../hook";
import findDatesInString from "../../utils/findDatesInString";


export interface NoteItemProps {
    item: Note;
}
const NoteItem: React.FC <NoteItemProps> = ({item}) => {

    const [nameValue, setNameValue] = useState(item.nameValue);
    const [categoryValue, setCategoryValue] = useState(item.categoryValue);
    const [contentValue, setContentValue] = useState(item.contentValue);
    const [imgSrc, setImgSrc] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useAppDispatch();

    console.log(item);
    useEffect(() => {
        if (item.categoryValue === 'Task') {
            setImgSrc('./img/task.png')
        } else if (item.categoryValue === 'Idea') {
            setImgSrc('./img/idea.png')
        } else {
            setImgSrc('./img/random.png')
        }
    }, [item.categoryValue])
    const handleEdit = (e: React.FormEvent) => {
        e.preventDefault();

        const  allData: string = nameValue + ' ' + contentValue;
        const newDates: string = findDatesInString(allData);

        const newNote: Note = {
            id: item.id,
            nameValue,
            formattedDate: item.formattedDate,
            categoryValue,
            contentValue,
            datesValue:newDates,
            archived: false
        };

        dispatch(editNote(newNote));
        setIsEdit(false);
        };

    return (
        <div className='py-2.5 pr-0 pl-2.5 mb-5 grid grid-cols-[3fr_1.5fr_2fr_2fr_100px_1fr] gap-5 items-center bg-gray-200'>
            <div className='flex gap-2 items-center'>
                <img src={imgSrc} className='w-10 h-10 object-cover' alt='iconName'/>
                {!isEdit && <span className='w-full h-auto bg-transparent text-base font-bold text-gray-400'>{item.nameValue}</span>}
                {isEdit && <input
                    className='w-full text-base font-bold text-gray-400 border-2 border-blue-500'
                    name="nameNote"
                    type="text"
                    placeholder="Name"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    required
                />}
            </div>
            <span className='bg-transparent text-base font-bold text-gray-400  text-center'>{item.formattedDate}</span>
            {!isEdit && <span className='bg-transparent text-base font-bold text-gray-400 text-center'>{item.categoryValue}</span>}
            {isEdit &&
            <select className='bg-transparent text-base font-bold text-gray-400 text-center border-2 border-blue-500 cursor-pointer'
                    value={categoryValue}
                    name="category"
                    onChange={(e) => setCategoryValue(e.target.value)}
            >
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
            </select>
            }
            {!isEdit && <span className=' h-auto bg-transparent text-base font-bold text-gray-400'>{item.contentValue}</span>}
            {isEdit &&
                <input
                    className='text-base font-bold text-gray-400 border-2 border-blue-500'
                    name="nameNote"
                    type="text"
                    placeholder="Name"
                    value={contentValue}
                    onChange={(e) => setContentValue(e.target.value)}
                    required
                />
            }
            <span className=' h-auto bg-transparent text-base font-bold text-gray-400 text-center'>{item.datesValue}</span>
            <div className='flex justify-end m-0 p-0'>
                {!isEdit && <button className='btn-item' onClick={() => setIsEdit(true)}>a</button>}
                {isEdit && <button className='btn-item' onClick={(e) => handleEdit(e)}>e</button>}
                {!item.archived &&   <button className='btn-item' onClick={()=> {dispatch(archiveNote(item.id))}}>c</button>}
                {item.archived &&   <button className='btn-item' onClick={() => dispatch(unzipNote(item.id))}>d</button>}
                <button className='btn-item' onClick={() => dispatch(deleteNote(item.id))}>b</button>
            </div>
        </div>
    );
};

export default NoteItem;



