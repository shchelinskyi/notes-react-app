import React from 'react';
import s from './NoteTableTitle.module.scss'
const NoteTableTitle: React.FC = () => {

    return (
        <div >
            <div className={s.titleBlock}>
                <div className={s.titleItem}>Name</div>
                <div className={s.titleItem}>Created</div>
                <div className={s.titleItem}>Category</div>
                <div className={s.titleItem}>Content</div>
                <div className={s.titleItem}>Dates</div>
                <div className={s.titleIcons}>
                    <span className={s.icon}>c</span>
                    <span className={s.icon}>b</span>
                </div>
            </div>
        </div>
    );
};

export default NoteTableTitle;
