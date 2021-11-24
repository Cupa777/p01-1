let state = {
    todolist: [
        {title: "", description: "", dete: "", dedline: "", progress: ""},

    ]
}
/*функция на кнопку візівается из UI callback*/

/*добавление новой задчи*/

/*push запись в масив полученых данных*/

export let addToDo = (Title, Descrip) => {
    let newToDo = {
        title: Title,
        description: Descrip,
        progress: 1
    }

    state.todolist.push(newToDo);
}

export default state;