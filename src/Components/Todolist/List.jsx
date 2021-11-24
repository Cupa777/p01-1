import React     from "react";
import {NavLink} from "react-router-dom";
import "./List.css"
import TodoLists from "./ToDoList/ToDoLists";


const List = (props) => {

    // let ToDoListsEl = props.todolist.map(d => <TodoLists title={d.title} description={d.description}
    //                                                      dete={d.dete}
    //                                                      dedline={d.dedline} progress={d.progress}/>);

    return (
        <div className="List">
            <h1>Список Задач</h1>
            <div>
                {/*{ToDoListsEl}*/}
                <div>{props.user}</div>
                <TodoLists/>
            </div>
            <div>
                <NavLink to="/list/add">
                    <button>Add+</button>
                </NavLink>
            </div>


        </div>
    )
}
export default List