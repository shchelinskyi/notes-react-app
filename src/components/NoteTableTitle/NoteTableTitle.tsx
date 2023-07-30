import React from 'react';
import './NoteTableTitle.css'


const NoteTableTitle: React.FC = () => {


    return (
        <div >
            <div className="titleBlock">
                <div className="titleItem">Name</div>
                <div className="titleItem">Created</div>
                <div className="titleItem">Category</div>
                <div className="titleItem">Content</div>
                <div className="titleItem">Dates</div>
                <div className="titleIcons">
                    <span className="icon">c</span>
                    <span className="icon">b</span>
                </div>
            </div>
        </div>
    );
};

export default NoteTableTitle;
