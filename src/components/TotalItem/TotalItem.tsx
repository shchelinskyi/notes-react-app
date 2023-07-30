import React from 'react';
import s from './TotalItem.module.scss';

interface TotalItemProps {
    imgSrc: string;
    categoryName: string;
    categoryActive: number;
    categoryArchive: number;
}

const TotalItem: React.FC<TotalItemProps> = ({ imgSrc, categoryName, categoryActive, categoryArchive }) => {
    return (
        <div className={s.totalItem}>
            <div className={s.nameBlock}>
                <img src={imgSrc} className={s.imgName} alt='iconName' />
                <span>{categoryName}</span>
            </div>
            <span className={s.quantity}>{categoryActive}</span>
            <span className={s.quantity}>{categoryArchive}</span>
        </div>
    );
};

export default TotalItem;