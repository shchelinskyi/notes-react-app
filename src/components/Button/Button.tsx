import React from 'react';
import {useAppDispatch} from "../../hook";
import {AnyAction} from 'redux';
import {openForm} from "../../redux/slice/formSlice";
import {closeArchiveBlock, openArchiveBlock} from "../../redux/slice/archiveBlockSlice";

export interface ButtonProps {
    children: string;
    clickFunc: string;
    size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({children, clickFunc, size = 'medium'}) => {
        const dispatch = useAppDispatch();

        let handleClick;
        if (clickFunc === "openForm") {
            handleClick = (): AnyAction => {
                return dispatch(openForm());
            };
        } else if (clickFunc === "openArchiveBlock") {
            handleClick = (): AnyAction => {
                return dispatch(openArchiveBlock());
            };
        } else if (clickFunc === "closeArchiveBlock") {
            handleClick = (): AnyAction => {
                return dispatch(closeArchiveBlock());
            }
        }

        const buttonStyle = `bg-zinc-400 rounded 
            ${size === 'small' ? 'py-1 px-2 text-xs' : 
            size === 'medium' ? 'py-2 px-4 text-sm' : 'py-3 px-6 text-base'} 
            cursor-pointer hover:bg-zinc-400  font-bold rounded text-gray-600`;

        return (
            <button className={buttonStyle} onClick={handleClick}>
                {children}
            </button>
        );
    };
export default Button;
