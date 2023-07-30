import React, {useEffect, useState} from 'react';
import {archiveNote, deleteNote, editNote, Note, unzipNote} from "../../redux/slice/notesSlice"
import {useAppDispatch} from "../../hook";
import findDatesInString from "../../utils/findDatesInString";
import s from './NoteItem.module.scss';

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
        <div className={s.note}>
            <div className={s.nameBlock}>
                <img src={imgSrc} className={s.imgName} alt='iconName'/>
                {!isEdit && <span className={s.nameValue}>{item.nameValue}</span>}
                {isEdit && <input
                    className={s.inputActive}
                    name="nameNote"
                    type="text"
                    placeholder="Name"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    required
                />}
            </div>
            <span className={s.createdItem}>{item.formattedDate}</span>
            {!isEdit && <span className={s.createdItem}>{item.categoryValue}</span>}
            {isEdit &&
            <select className={s.categoryItem}
                    value={categoryValue}
                    name="category"
                    onChange={(e) => setCategoryValue(e.target.value)}
            >
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
            </select>
            }
            {!isEdit && <span className={s.contentValue}>{item.contentValue}</span>}
            {isEdit &&
                <input
                    className={s.inputActive}
                    name="nameNote"
                    type="text"
                    placeholder="Name"
                    value={contentValue}
                    onChange={(e) => setContentValue(e.target.value)}
                    required
                />
            }
            <span className={s.datesValue}>{item.datesValue}</span>
            <div className={s.btnChangeBlock}>
                {!isEdit && <button className={s.btnAction} onClick={() => setIsEdit(true)}>a</button>}
                {isEdit && <button className={s.btnAction} onClick={(e) => handleEdit(e)}>e</button>}
                {!item.archived &&   <button className={s.btnAction} onClick={()=> {dispatch(archiveNote(item.id))}}>c</button>}
                {item.archived &&   <button className={s.btnAction} onClick={() => dispatch(unzipNote(item.id))}>d</button>}
                <button className={s.btnAction} onClick={() => dispatch(deleteNote(item.id))}>b</button>
            </div>
        </div>
    );
};

export default NoteItem;



