import React, {useEffect, useState} from 'react';
import './NoteItem.css';
import {archiveNote, deleteNote, editNote, Note, unzipNote} from "../../redux/slice/notesSlice"
import {useAppDispatch} from "../../hook";
import setDataFormat from "../../utils/setDataFormat";
import findDatesInString from "../../utils/findDatesInString";

interface NoteItemProps {
    item: Note;
}
const NoteItem: React.FC <NoteItemProps> = ({item}) => {

    const [nameValue, setNameValue] = useState(item.nameValue);
    const [categoryValue, setCategoryValue] = useState(item.categoryValue);
    const [contentValue, setContentValue] = useState(item.contentValue);
    const [imgSrc, setImgSrc] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useAppDispatch();

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
        <div className='note'>
            <div className='nameBlock'>
                <img src={imgSrc} className='imgName' alt='iconName'/>
                {!isEdit && <span className='nameValue'>{item.nameValue}</span>}
                {isEdit && <input
                    className='inputActive'
                    name="nameNote"
                    type="text"
                    placeholder="Name"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    required
                />}
            </div>
            <span className='createdItem'>{item.formattedDate}</span>
            {!isEdit && <span className='createdItem'>{item.categoryValue}</span>}
            {isEdit &&
            <select className='categoryItem'
                    value={categoryValue}
                    name="category"
                    onChange={(e) => setCategoryValue(e.target.value)}
            >
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
            </select>
            }
            {!isEdit && <span className='contentValue'>{item.contentValue}</span>}
            {isEdit &&
                <input
                    className='inputActive'
                    name="nameNote"
                    type="text"
                    placeholder="Name"
                    value={contentValue}
                    onChange={(e) => setContentValue(e.target.value)}
                    required
                />
            }
            <span className='datesValue'>{item.datesValue}</span>
            <div className='btnChangeBlock'>
                {!isEdit && <button className='btnAction' onClick={() => setIsEdit(true)}>a</button>}
                {isEdit && <button className='btnAction' onClick={(e) => handleEdit(e)}>e</button>}
                {!item.archived &&   <button className='btnAction' onClick={()=> {dispatch(archiveNote(item.id))}}>c</button>}
                {item.archived &&   <button className='btnAction' onClick={() => dispatch(unzipNote(item.id))}>d</button>}
                <button className='btnAction' onClick={() => dispatch(deleteNote(item.id))}>b</button>
            </div>
        </div>
    );
};

export default NoteItem;



