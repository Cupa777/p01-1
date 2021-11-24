import React from "react";
import {NavLink} from "react-router-dom";
import moment from "moment";
import './AddList.css';


const AddList = (props) => {

    let newTitle = React.createRef();                        /*сылка ref для заголовка title*/

    let newDescription = React.createRef();                       /*сылка ref для описания description*/


    let addToDo = () => {
        let newTitleP = newTitle.current.value;
        let newDescriptionP = newDescription.current.value;
        props.addToDo(newTitleP, newDescriptionP);
    }

    const dateToFormat = (moment().format('L'));

    return (
        <div className="AddList">
            <h1>Добавить задачу</h1>

            <p>Заголовок</p>

            <p>
                <input rows="2" cols="20" ref={newTitle}></input>
            </p>
            /*вставляем ref для сілки указатель откуда*/
            <p>Описание</p>
            <p><textarea rows="10" cols="40" ref={newDescription}></textarea></p> /*вставляем ref для сілки указатель откуда*/

            <p>
                <NavLink to="/list">
                    <button className="btn" onClick={addToDo}>Add</button>
                </NavLink>
            </p>
            <p>
                {dateToFormat}
            </p>

        </div>
    )
}
export default AddList