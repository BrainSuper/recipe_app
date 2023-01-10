import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpoon } from '@fortawesome/free-solid-svg-icons'
import { faMugHot} from '@fortawesome/free-solid-svg-icons'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import App from './App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App spoon={<FontAwesomeIcon icon={faSpoon} className={'hover:text-white'}/>} cup={<FontAwesomeIcon icon={faMugHot} className={'hover:text-white'} />}/>
    </BrowserRouter>


);

