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
    clearTodoListButton.addEventListener("click", clearTodoList);

    function addTodo(event) {
        event.preventDefault();

        let todoText = document.createTextNode(addTodoInput.value);

        let todoItem = document.createElement("li");
        todoItem.classList.add("todo-list-item");

        let todoCheckbox = document.createElement("input");
        todoCheckbox.type = "checkbox";
        todoCheckbox.classList.add("todo-list-checkbox");
        todoCheckbox.addEventListener("click", checkTodo);

        let todoDeleteIcon = document.createElement("i");
        todoDeleteIcon.classList.add("fa-solid", "fa-xmark");

        todoItem.append(todoCheckbox);
        todoItem.append(todoText);
        todoItem.append(todoDeleteIcon);

        todoList.append(todoItem);

        addTodoInput.value = "";
    }

    function checkTodo(event) {
       event.target.parentElement.classList.toggle("todo-list-item-complete");
    }

    function clearTodoList(event) {
        event.preventDefault();

        todoList.replaceChildren();
    }
});
