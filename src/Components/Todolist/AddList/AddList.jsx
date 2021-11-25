import React      from "react";
import {NavLink}  from "react-router-dom";
import moment     from "moment";
import './AddList.css';
import {ADD_TODO} from "../../../Action/AddToDoAction";


const AddList = (props) => {

    let inputTextRef = React.createRef();                        /*сылка ref для заголовка title*/

    let inputTextAreaRef = React.createRef();                       /*сылка ref для описания description*/


    const addToDO = () => dispatch(addToDO(ADD_TODO))

    const dateToFormat = (moment().format('L'));

    return (
        <div className="AddList">
            <h1>Добавить задачу</h1>

            <p>Заголовок</p>

            {/*input*/}
            <input type="text" ref={inputTextRef}/>

            {/*textarea*/}
            <p>Описание</p>
            <textarea rows="10" cols="40" ref={inputTextAreaRef}/> {/*вставляем ref для сылки указатель откуда*/}

            <br/>
            <NavLink to="/list">
                <button className="btn" onClick={addToDo}>Add</button>
                {/*БАРДАК*/}
            </NavLink>

            <p>
                {dateToFormat}
            </p>

        </div>
    )
}


export default AddList