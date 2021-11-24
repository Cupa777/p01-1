import React     from "react";
import {NavLink} from "react-router-dom";
import './ToDoList.css'


const TodoLists = (props) => {
    /*дополнительный компонент*/
    // let pach = "/list/" + props.title;npm

    return (<div className="Todolist">
            <div className="D1"></div>
            <div className="D2"></div>
            <div className="D3"></div>
            <div className="D4"></div>
            <div className="D5"></div>
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
