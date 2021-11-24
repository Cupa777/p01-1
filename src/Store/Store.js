import {createStore}               from "redux";
import {initialState, rootReducer} from "../Reducer/RootReducer";


export const store = createStore(rootReducer, initialState);

