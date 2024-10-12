document.addEventListener("DOMContentLoaded", function(e) {
    let todoList = document.getElementById("todo-list");
    let todoCheckboxes = document.getElementsByClassName("todo-list-checkbox");

    for (let i = 0; i < todoCheckboxes.length; i++) {
        todoCheckboxes[i].addEventListener("click", checkTodo);
    }

    let addTodoInput = document.getElementById("add-todo-input");
    let addTodoButton = document.getElementById("add-todo-button");
    addTodoButton.addEventListener("click", addTodo);

    let clearTodoListButton = document.getElementById("clear-todo-list-button");

    function addTodo(event) {
        event.preventDefault();

        let todoText = document.createTextNode(addTodoInput.value);
        console.log(addTodoInput.value);
        let todoItem = document.createElement("li");
        todoItem.classList.add("todo-list-item");

        todoItem.append(todoText);
        todoList.append(todoItem);
    }

    function checkTodo(event) {
       event.target.parentElement.classList.toggle("todo-list-item-complete");
    }
});
