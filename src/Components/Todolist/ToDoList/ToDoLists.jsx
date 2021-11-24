import React from "react";
import {NavLink} from "react-router-dom";
import './ToDoList.css'


const TodoLists = (props) => {
    /*дополнительный компонент*/
    // let pach = "/list/" + props.title;npm

    return (<div className="Todolist">
            <div className="D1">{props.title}</div>
            <div className="D2">{props.description}</div>
            <div className="D3">{props.dete}</div>
            <div className="D4">{props.dedline}</div>
            <div className="D5">{props.progress}</div>
            <input type="checkbox"/>
            <div className="D6">
                <NavLink to="/list/editlist">
                    <button>Edit</button>
                </NavLink>
            </div>
        </div>

    )


}

export default TodoLists
