import React from 'react';

import './App.css';
import Header from "./Components/Header/Header";
import Navi from "./Components/Navi/Navi";
import Profile from "./Components/Profile/Profile";
import List from "./Components/Todolist/List";
import Home from "./Components/Home/Home";
import NoteFound from "./Components/NoteFound";
import {Route, Routes} from "react-router-dom";
import AddList from "./Components/Todolist/AddList/AddList";
import Editlist from "./Components/Todolist/EditList/Editlist";
import {addToDo} from "./Redux/State";

const App = (props) => {
    return (

        <div className="App">

            <div className="Header">        {/*Шапка*/}
                <Header/>
            </div>

            <div className="Body">          {/*Навигация*/}
                <div className="Nav">
                    <Navi/>
                </div>

                <div className="Content">

                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        {/*<Route path="/login" element={<Login/>}/>*/}
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/list" element={<List todolist={props.state.todolist}/>}/>
                        <Route path="*" element={<NoteFound/>}/>
                        <Route path="/list/add" element={<AddList addToDo={addToDo}/>}/>
                        <Route path="/list/editlist" element={<Editlist/>}/>

                    </Routes>
                </div>
            </div>
            {/*<Route path='*' component={NoteFound}/> /!*смена адресса переход, смена адресса в Nav*!/*/}


        </div>

    )

}

export default App;
