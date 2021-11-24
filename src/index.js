import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addToDo} from "./Redux/State";
import reportWebVitals from "./reportWebVitals";

{/*подключение state.js c данными*/
}


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App state={state} addToDo={addToDo}/> {/*передаем state в props c данными*/}
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
