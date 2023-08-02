import React, {useState} from 'react';
import {useAppDispatch} from "../../hook";
import setDataFormat from "../../utils/setDataFormat";
import findDatesInString from "../../utils/findDatesInString";
import {closeForm} from "../../redux/slice/formSlice";
import {addNote} from "../../redux/slice/notesSlice";
import {Note} from "../../redux/slice/notesSlice"

const NoteForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const [nameValue, setNameValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');
    const [contentValue, setContentValue] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const allData: string = nameValue + '' + contentValue;
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
        dispatch(closeForm());
    };

    return (
            <div className='w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-md shadow-md z-50'>
                <h3 className='text-center mb-4 text-lg font-bold text-gray-700'>Create Note</h3>
                <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
                    <input
                        className='h-8 px-2 border-2 border-slate-400'
                        name="nameNote"
                        type="text"
                        placeholder="Name"
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                        required
                    />
                    <select
                        className='h-8 px-2 border-2 border-slate-400 cursor-pointer'
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
                        className='h-14 p-2 min-h-[50px] border-2 border-slate-400'
                        name="content"
                        value={contentValue}
                        onChange={(e) => setContentValue(e.target.value)}
                        placeholder="Content"
                        required
                    >
                </textarea>
                    <div className='flex justify-around mt-4'>
                        <button className='btn-form' type="submit">Add Note</button>
                        <button className='btn-form' onClick={() => dispatch(closeForm())}>Close</button>
                    </div>
                </form>
            </div>
    );
};

export default NoteForm;