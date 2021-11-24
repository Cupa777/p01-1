export default function addToDoReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                id: uuid(),
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

