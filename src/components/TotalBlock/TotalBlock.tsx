import React, {useEffect, useState} from 'react';
import s from './TotalBlock.module.scss';
import {useAppSelector} from "../../hook";
import changeTotalData from "../../utils/changeTotalData";
import {TotalData} from "../../utils/changeTotalData";
import TotalItem from "../TotalItem/TotalItem";

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
           <div className={s.titleBlockTotal}>
               <div className={s.titleItem}>Note Category</div>
               <div className={s.titleItem}>Active</div>
               <div className={s.titleItem}>Archived</div>
           </div>
           <div id="totalList" className={s.notesBlock}>
               {(totalData.taskActive > 0 || totalData.taskArchive > 0) &&
                   <TotalItem imgSrc='./img/task.png'
                              categoryName="Task"
                              categoryActive={totalData.taskActive}
                              categoryArchive={totalData.taskArchive}
                   />
               }
               {(totalData.randomActive > 0 || totalData.randomArchive > 0) &&
                   <TotalItem imgSrc='./img/random.png'
                              categoryName="Random Thought"
                              categoryActive={totalData.randomActive}
                              categoryArchive={totalData.randomArchive}
                   />
               }
               {(totalData.ideaActive > 0 || totalData.ideaArchive > 0) &&
                   <TotalItem imgSrc='./img/idea.png'
                              categoryName="Idea"
                              categoryActive={totalData.ideaActive}
                              categoryArchive={totalData.ideaArchive}
                   />
               }

               {notes.length === 0 && <div className={s.noItems}>No data</div>}
           </div>
        </div>
    );
};

export default TotalBlock;
