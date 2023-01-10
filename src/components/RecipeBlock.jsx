import React from 'react';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const RecipeBlock = ({meal, setActiveMeal}) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => {
            setActiveMeal(meal);
            navigate('/info');
        }}
             className={'h-20 w-96 rounded-md flex items-center justify-center border-4 bg-lime-400 border-none mt-6 hover:bg-lime-500 hover:cursor-pointer'}>{meal.name}</div>
    );
};

export default RecipeBlock;