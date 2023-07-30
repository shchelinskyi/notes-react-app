import React, { useState } from 'react';
import './NoteForm.css';
import {useAppDispatch, useAppSelector} from "../../hook";
import {closeForm} from "../../redux/slice/formSlice";
import setDataFormat from "../../utils/setDataFormat";
import findDatesInString from "../../utils/findDatesInString";
import {addNote} from "../../redux/slice/notesSlice";
import {Note} from "../../redux/slice/notesSlice"

const NoteForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const [nameValue, setNameValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [contentValue, setContentValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const  allData: string = nameValue + '' + contentValue;
        const datesValue: string = findDatesInString(allData);
        const newNote: Note = {
            id: Date.now(),
            nameValue,
            formattedDate: setDataFormat(),
            categoryValue,
            contentValue,
            datesValue,
            archived: false
        };


        dispatch(addNote(newNote));
        setNameValue('');
        setCategoryValue('');
        setContentValue('');

        dispatch(closeForm());
    };

    return (
        <div className='formContainer'>
            <h3 className="formTitle">Create Note</h3>
            <form onSubmit={handleSubmit}>
                <input
                    className='formInput'
                    name="nameNote"
                    type="text"
                    placeholder="Name"
                    value={nameValue}
                    onChange={(e) => setNameValue(e.target.value)}
                    required
                />
                <select
                        className='categorySelect'
                        name="category"
                        value={categoryValue}
                        onChange={(e) => setCategoryValue(e.target.value)}
                        required>
                    <option disabled value="">Select category</option>
                    <option value="Task">Task</option>
                    <option value="Random Thought">Random Thought</option>
                    <option value="Idea">Idea</option>
                </select>
                <textarea
                    className="formTextArea"
                    name="content"
                    value={contentValue}
                    onChange={(e) => setContentValue(e.target.value)}
                    placeholder="Content"
                >
                </textarea>
                <p className="error">Please fill in all fields</p>
                <div className="btnBlock">
                    <button className="btnForm" type="submit">Add Note</button>
                    <button className="btnForm" onClick={() => dispatch(closeForm())}>Close</button>
                </div>
            </form>
        </div>

    );
};

export default NoteForm;