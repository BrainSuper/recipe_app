import React from 'react';
import {useNavigate} from "react-router-dom";

const RecipeCard = ({meal, setActiveMeal}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => {
            setActiveMeal(meal);
            navigate('/info');
        }} className={'hover:cursor-pointer w-52 h-80 border border-r-2 border-b-2 border-yellow-900 shadow-orange-900 shadow-md flex flex-col items-center rounded-sm mx-5 my-5'}>
            <img src={meal.image} alt="recipe" className={'w-11/12 h-5/6 mt-3 rounded'}/>
            <div className={'mt-2 text-lg text-zinc-700 font-medium' }>{meal.name}</div>
        </div>
    );
};

export default RecipeCard;