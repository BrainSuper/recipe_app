import React from 'react';
import RecipeBlock from "./RecipeBlock";

const RecipeBlockPage = ({meals, setActiveMeal}) => {
    return (
        <div className={'flex flex-col items-center'}>
            {meals.map(meal => <RecipeBlock setActiveMeal={setActiveMeal} key={meal.id} meal={meal}/>)}

        </div>
    );
};

export default RecipeBlockPage;