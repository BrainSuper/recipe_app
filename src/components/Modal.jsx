import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const Modal = ({setModal, meals, setMeals}) => {
    const [newMeal, setNewMeal] = useState({
        name: '',
        source: '',
        image: '',
        ingridients: '',
        id: meals.length + 1
    })
    const [added, setAdded] = useState(false);
    return (
        <div className={'fixed w-screen h-screen inset-0 bg-black/25'}>
            {added
            ? <h1 className={'text-5xl text-black mt-40 w-4/12 rounded p-10 h-40 bg-white mx-auto text-center'}>Рецепт доданий</h1>
            : <form className={'flex flex-col w-4/12 mx-auto bg-white mt-32 p-5 rounded'} onSubmit={(e) => {
                    e.preventDefault();
                    const newOurMeal = {
                        name: newMeal.name,
                        source: newMeal.source,
                        image: newMeal.image,
                        ingridients: newMeal.ingridients.split(', '),
                        id: newMeal.id
                    }
                    setMeals([...meals, newOurMeal]);
                    setTimeout(() => {
                        setModal(false)
                    }, 2000)
                    setAdded(true)


                }}>
                    <FontAwesomeIcon icon={faXmark} className={'self-end'} onClick={() => setModal(false)}/>
                    <h3 className={'mb-10 text-center text-4xl'}>Додайте новий рецепт</h3>
                    <input value={newMeal.name} onChange={(e) => {
                        setNewMeal({...newMeal, name: e.target.value});
                    }} className={'border border-lime-100 p-3 outline-none mb-3 h-8 rounded placeholder:text-neutral-900'} type="text" placeholder={'Назва рецепту'}/>
                    <input value={newMeal.source} onChange={(e) => {
                        setNewMeal({...newMeal, source: e.target.value})
                    }} className={'border border-lime-100 p-3 outline-none mb-3 h-8 rounded placeholder:text-neutral-900'} type="text" placeholder={'Джерело рецепту'}/>
                    <input value={newMeal.image} onChange={(e) => {
                        setNewMeal({...newMeal, image: e.target.value})
                    }} className={'border border-lime-100 p-3 outline-none mb-3 h-8 rounded placeholder:text-neutral-900'} type="text" placeholder={'Посилання на зображення рецепту'}/>
                    <input value={newMeal.ingridients} onChange={(e) => {
                        setNewMeal({...newMeal, ingridients: e.target.value})
                    }} className={'border border-lime-100 p-3 outline-none mb-3 h-8 rounded placeholder:text-neutral-900'} type="text" placeholder={'Інгрідієнти (перечислити через кому з відступом)'}/>
                    <button className={'mx-auto w-40 h-10 rounded-xl bg-lime-500'}>Додати рецепт</button>
                </form>}

        </div>

    );
};

export default Modal;