import React     from "react";
import {NavLink} from "react-router-dom";
import moment    from "moment";
import './AddList.css';


const AddList = (props) => {

    let inputTextRef = React.createRef();                        /*сылка ref для заголовка title*/

    let inputTextAreaRef = React.createRef();                       /*сылка ref для описания description*/


    let addToDo = () => {
        let newTitleP = inputTextRef.current.value;
        let newDescriptionP = inputTextAreaRef.current.value;
        props.addToDo(newTitleP, newDescriptionP);
    }


    const dateToFormat = (moment().format('L'));

    return (
        <div className="AddList">
            <h1>Добавить задачу</h1>

            <p>Заголовок</p>

            {/*input*/}
            <input type="text" ref={inputTextRef}/>

            {/*textarea*/}
            <p>Описание</p>
            <textarea rows="10" cols="40" ref={inputTextAreaRef}/> {/*вставляем ref для сілки указатель откуда*/}

            <br/>
            <NavLink to="/list">
                <button className="btn" onClick={addToDo}>Add</button>
            </NavLink>

            <p>
                {dateToFormat}
            </p>

        </div>
    )
}
export default AddList