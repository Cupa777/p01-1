import {combineReducers, createStore} from "redux";
import {initialState, rootReducer}    from "../Reducer/RootReducer";
import addToDoReducer                 from "../Reducer/AddToDoReducer";


const reducer = combineReducers({
    root: rootReducer,
    add: addToDoReducer()
})
//Создание набора редюсоров

export const store = createStore(reducer, initialState);        //создание хранилища 1 аргумент 1обработчик изменений 1
//2 аргумент - начальное состояние

