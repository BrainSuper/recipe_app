import './App.css';
import Header from "./components/Header";
import React, {useEffect, useState} from "react";
import RecipeBlockPage from "./components/RecipeBlockPage";
import RecipeCardPage from "./components/RecipeCardPage";
import {Routes, Route} from 'react-router-dom';
import {allMeals} from "./data/meals";
import MealInfo from "./components/MealInfo";
import {Navigate} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Modal from "./components/Modal";

function App(props) {
    const [active, setActive] = useState(false);
    const [meals, setMeals] = useState([]);
    const [activeMeal, setActiveMeal] = useState(null);
    const [isChanged, setIsChanged] = useState(false);
    const [modal, setModal] = useState(false)
    const navigate= useNavigate();
    useEffect(() => {
        setMeals(allMeals);
        navigate('/meals')
    }, [])

    return (
        <div className="container mx-auto relative">
            {modal && <Modal meals={meals} setMeals={setMeals} setModal={setModal}/>}
            <Header isChanged={isChanged} setIsChanged={setIsChanged} setModal={setModal} spoon={props.spoon} cup={props.cup} active={active} setActive={setActive}/>
            <div className={'mt-20'}>
                {meals.length === 0 && <div>Рецептів не знайдено</div>}
                <Routes>
                    <Route path={'/meals'}
                           element={active ? <RecipeCardPage setActiveMeal={setActiveMeal} meals={meals}/> : <RecipeBlockPage setActiveMeal={setActiveMeal} meals={meals}/>}/>
                    <Route path={'/info'} element={<MealInfo isChanged={isChanged} setIsChanged={setIsChanged} activeMeal={activeMeal} setActiveMeal={setActiveMeal} meals={meals} setMeals={setMeals}/>}/>
                </Routes>
            </div>

        </div>
    );
}

export default App;
