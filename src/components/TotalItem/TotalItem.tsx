import React from 'react';

interface TotalItemProps {
    imgSrc: string;
    categoryName: string;
    categoryActive: number;
    categoryArchive: number;
}

const TotalItem: React.FC<TotalItemProps> = ({ imgSrc, categoryName, categoryActive, categoryArchive }) => {
    return (
        <div className='py-2.5 pr-0 pl-2.5 mb-5 grid grid-cols-[3fr_2fr_2fr_3fr] bg-gray-200 items-center'>
            <div className='flex gap-2 items-center text-gray-400 font-bold'>
                <img src={imgSrc} className='w-10 h-10 object-cover' alt='iconName' />
                <span>{categoryName}</span>
            </div>
            <span className='text-gray-400 font-bold text-center'>{categoryActive}</span>
            <span className='text-gray-400 font-bold text-center'>{categoryArchive}</span>
        </div>
    );
};

export default TotalItem;