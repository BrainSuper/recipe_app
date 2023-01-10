import React from 'react';
import Button from "./Button";
import Ingridient from "./Ingridient";
import ChangeForm from "./ChangeForm";
import {useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const MealInfo = ({activeMeal, isChanged, setIsChanged, meals, setMeals, setActiveMeal}) => {
    const navigate = useNavigate()
    if (!activeMeal) {
        return <div>Loading....</div>
    }
    console.log(activeMeal);
    return (
        <div className={'border border-r-2 border-b-2 border-yellow-900 shadow-orange-900 shadow-md flex justify-around w-5/6 h-screen mx-auto items-center'}>
            <img src={activeMeal.image} alt="" className={'w-5/12 h-3/4 ml-20'}/>
             <div className={'w-7/12 ml-10 h-1/2 mb-20 mr-20'}>
                 {isChanged
                 ? <ChangeForm setIsChanged={setIsChanged} setActiveMeal={setActiveMeal} activeMeal={activeMeal} meals={meals} setMeals={setMeals}/>
                 : <div className={'h-full'}>
                         <FontAwesomeIcon icon={faXmark} className={'float-right'} onClick={() => navigate('/meals')}/>
                         <h1 className={'text-center text-5xl text-lime-500 mb-5'}>{activeMeal.name}</h1>
                         <div className={'w-full flex justify-between'}>
                             <a href={activeMeal.source}><Button style={{width: '170px', backgroundColor: 'rgb(132 204 22)', border: 'none'}}>Джерело</Button></a>
                             <Button onClick={() => setIsChanged(true)} style={{width: '170px', backgroundColor: 'rgb(132 204 22)', border: 'none'}}>Редагувати</Button>
                             <Button onClick={() => {
                                 setMeals(meals.filter(meal => meal.id != activeMeal.id))
                                 navigate('/meals');
                             }} style={{width: '170px', backgroundColor: 'rgb(132 204 22)', border: 'none'}}>Видалити</Button>
                         </div>
                         <div className={'border bg-lime-300/75 h-4/5 mt-5 pl-10 flex flex-col h-full'}>
                             <h3 className={'text-4xl text-black my-5'}>Ingridients</h3>
                             <div className={'flex flex-wrap flex-col h-5/6'}>
                                 {activeMeal.ingridients.map(ingridient => <Ingridient key={ingridient} ingridient={ingridient}/>)}
                             </div>
                         </div>
                     </div>}


                </div>
            }

        </div>
    );
};

export default MealInfo;