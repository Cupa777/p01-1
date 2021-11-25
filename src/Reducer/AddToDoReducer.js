import {ADD_TODO} from "../Action/AddToDoAction"; //передача константы из action


export default function addToDoReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: Math.floor(Math.random() * 1000),         //рандом ID
                title: action.title,
                description: action.description,
                date: action.dete,
                dedline: action.dedline,
                progress: action.progress
            }]
        case 'EDIT_TODO':
            return [...state, {
                id: action.id,
                title: action.title,
                description: action.description,
                date: action.dete,
                dedline: action.dedline,
                progress: action.progress
            }]

        default:
            return state;
    }
}
// Бардак+-
