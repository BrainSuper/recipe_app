import React, {useState} from 'react';
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "./Button";
import {useNavigate} from "react-router-dom";
const Header = ({spoon, cup, active, setActive, setIsChanged, setModal}) => {
    const navigate= useNavigate()
    return (
        <div className=' top-0 left-0 right-0  bg-lime-400 px-2 flex h-16 rounded-md justify-between items-center fixed shadow-md'>
            <div className={'flex items-center w-56 justify-between'}>
                <div>{spoon}</div>
                <div className={'font-sans text-xl'}>Скринька рецептів</div>
                <div>{cup}</div>

            </div>
            <div className={'flex items-center w-56 justify-around'}>
                <FontAwesomeIcon icon={active ? faBars : faCaretDown} onClick={() => {
                    setActive(prev => !prev);
                        navigate('/meals');
                        setIsChanged(false);
                }}/>
                <Button onClick={() => setModal(true)}>Добавити рецепт</Button>
            </div>
        </div>
    );
};

export default Header;