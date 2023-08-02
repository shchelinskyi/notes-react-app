import React from 'react';
const NoteTableTitle: React.FC = () => {

    return (
            <div className='mb-4 grid grid grid-cols-[3fr_1.5fr_2fr_2fr_100px_1fr] bg-neutral-400 text-white text-18 font-bold'>
                <div className="py-2 text-center">Name</div>
                <div className="py-2 text-center">Created</div>
                <div className="py-2 text-center">Category</div>
                <div className="py-2 text-center">Content</div>
                <div className="py-2 text-center">Dates</div>
                <div className="py-2 flex justify-center gap-5">
                    <span className='text-lg font-code'>c</span>
                    <span className='text-lg font-code'>b</span>
                </div>
            </div>
    );
};

export default NoteTableTitle;
