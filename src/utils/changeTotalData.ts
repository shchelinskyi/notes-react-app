import {Note} from "../redux/slice/notesSlice";

export type TotalData = {
    taskActive: number;
    taskArchive: number;
    randomActive: number;
    randomArchive: number;
    ideaActive: number;
    ideaArchive: number;
};


const changeTotalData = (activeData:Note[], archiveData:Note[]): TotalData => {
    const taskActive: Note[] = activeData.filter(item =>  item.categoryValue === 'Task');
    const randomActive: Note[] = activeData.filter(item =>  item.categoryValue === 'Random Thought');
    const ideaActive: Note[] = activeData.filter(item =>  item.categoryValue === 'Idea');

    const taskArchive: Note[] = archiveData.filter(item =>  item.categoryValue === 'Task');
    const randomArchive: Note[] = archiveData.filter(item =>  item.categoryValue === 'Random Thought');
    const ideaArchive: Note[] = archiveData.filter(item =>  item.categoryValue === 'Idea');

    return {
        taskActive:taskActive.length,
        taskArchive:taskArchive.length,
        randomActive:randomActive.length,
        randomArchive:randomArchive.length,
        ideaActive:ideaActive.length,
        ideaArchive:ideaArchive.length
    }
}



export default changeTotalData;