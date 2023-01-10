import React from 'react';
import RecipeCard from "./RecipeCard";

const RecipeCardPage = ({meals, setActiveMeal}) => {
    console.log(meals)
    return (
        <div className={'flex flex-wrap justify-center w-5/6 mx-auto'}>
            {meals.map(meal => <RecipeCard setActiveMeal={setActiveMeal} key={meal.id} meal={meal}/>)}
        </div>
    );
};

export default RecipeCardPage;