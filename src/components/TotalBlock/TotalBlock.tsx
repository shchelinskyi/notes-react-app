import React, {useEffect, useState} from 'react';

import './TotalBlock.css';
import {useAppSelector} from "../../hook";
import changeTotalData from "../../utils/changeTotalData";
import {TotalData} from "../../utils/changeTotalData";


const TotalBlock: React.FC = () => {
    const initialState = {
        taskActive: 0,
        taskArchive:0,
        randomActive: 0,
        randomArchive: 0,
        ideaActive:0,
        ideaArchive:0
    }

    const notes = useAppSelector((state) => state.notes.notes);
    const archivedNotes = useAppSelector((state) => state.notes.archivedNotes);
    const [totalData, setTotalData] = useState<TotalData>(initialState);


    useEffect(() => {
        if (notes.length > 0 || archivedNotes.length > 0) {
           const totalResult: TotalData = changeTotalData(notes, archivedNotes)
            setTotalData(totalResult);
        } else {
            setTotalData(initialState);
        }

    }, [notes, archivedNotes])

    return (
       <div>
           <div className="titleBlockTotal">
               <div className="titleItem">Note Category</div>
               <div className="titleItem">Active</div>
               <div className="titleItem">Archived</div>
           </div>
           <div id="totalList" className="notesBlock">
               {(totalData.taskActive > 0 || totalData.taskArchive > 0) &&
               <div className="totalItem">
                   <div className="nameBlock">
                       <img src='./img/task.png' className='imgName' alt='iconName'/>
                       <span>Task</span>
                   </div>
                   <span className='quantity'>{totalData.taskActive}</span>
                   <span className='quantity'>{totalData.taskArchive}</span>
               </div>
               }
               {(totalData.randomActive > 0 || totalData.randomArchive > 0) &&
               <div className="totalItem">
                   <div className="nameBlock">
                       <img src='./img/random.png' className='imgName' alt='iconName'/>
                       <span>Random Thought</span>
                   </div>
                   <span className='quantity'>{totalData.randomActive}</span>
                   <span className='quantity'>{totalData.randomArchive}</span>
               </div>
               }
               {(totalData.ideaActive > 0 || totalData.ideaArchive > 0) &&
               <div className="totalItem">
                   <div className="nameBlock">
                       <img src='./img/idea.png' className='imgName' alt='iconName'/>
                       <span>Idea</span>
                   </div>
                   <span className='quantity'>{totalData.ideaActive}</span>
                   <span className='quantity'>{totalData.ideaArchive}</span>
               </div>
               }
           </div>
        </div>
    );
};

export default TotalBlock;
