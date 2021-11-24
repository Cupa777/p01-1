export function addToDoAction(id, title, description, date, dedline, progress) {

    return {
        type: 'ADD_TODO',
        id: id,
        title: title,
        description: description,
        date: date,
        dedline: dedline,
        progress: progress
    }
}