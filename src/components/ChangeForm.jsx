import React, {useState} from 'react';
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ChangeForm = ({activeMeal, setIsChanged, meals, setMeals}) => {
    const [activeIngridients, setActiveIngridients] = useState(activeMeal.ingridients.join(', '))
    const [newName, setNewName] = useState(activeMeal.name)
    const [newImage, setNewImage] = useState(activeMeal.image)
    const [newSource, setNewSource] = useState(activeMeal.source)
    const navigate = useNavigate()
    console.log(activeMeal);
    return (
        <form className={'w-ful h-full'} onSubmit={(e) => {
            e.preventDefault();
            let newMeal = {
                id: activeMeal.id,
                name: newName,
                instruction: activeMeal.instruction,
                image: newImage,
                source: newSource,
                youtube: activeMeal.youtube,
                ingridients: activeIngridients.split(', ')

            }
            setMeals(meals.map(meal => {
                    if (meal.id === activeMeal.id) {
                        return {...newMeal}
                    }
                    return meal;
                }))
            setIsChanged(false);
        }}>
            <FontAwesomeIcon icon={faXmark} className={'float-right'} onClick={() => setIsChanged(false)}/>
            <h1 className={'text-5xl text-black text-center mb-10'}>Змінити рецепт</h1>
            <h3 className={'mt-5'}>Нова назва страви</h3>
            <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} className={'border p-2 w-full ml-3 mt-2 border-slate-900 outline-none'}/>
            <h3 className={'mt-5'}>Нові інгрідієнти</h3>
            <input type="text" value={activeIngridients} onChange={(e) => setActiveIngridients(e.target.value)} className={'border p-2 w-full ml-3 mt-2 border-slate-900 outline-none'}/>
            <h3 className={'mt-5'}>Нове посилання на зображення страви</h3>
            <input type="text" value={newImage} onChange={(e) => setNewImage(e.target.value)} className={'border p-2 w-full ml-3 mt-2 border-slate-900 outline-none'}/>
            <h3 className={'mt-5'}>Адреса джерела рецепту</h3>
            <input type="text" value={newSource} onChange={(e) => setNewSource(e.target.value)} className={'border p-2 w-full ml-3 mt-2 border-slate-900 outline-none'}/>
            <button className={'w-40 h-10 borden-none rounded-sm bg-lime-500 ml-3 mt-5'}>Змінити</button>
        </form>
    )
};

export default ChangeForm;