document.addEventListener("DOMContentLoaded", function(e) {
    let todoList = document.getElementById("todo-list");
    let todoCheckboxes = document.getElementsByClassName("todo-list-checkbox");
    let todoCrosses = document.getElementsByClassName("todo-list-cross");

    for (let i = 0; i < todoCheckboxes.length; i++) {
        todoCheckboxes[i].addEventListener("click", checkTodo);
        // All todo list items have checkbox and cross icon
        todoCrosses[i].addEventListener("click", removeTodo);
    }

    let addTodoInput = document.getElementById("todo-add-input");
    let addTodoButton = document.getElementById("todo-add-button");
    addTodoButton.addEventListener("click", addTodo);

    let clearTodoListButton = document.getElementById("clear-todo-list-button");
    clearTodoListButton.addEventListener("click", clearTodoList);

    function addTodo(event) {
        event.preventDefault();

        let todoText = document.createTextNode(
            " " + addTodoInput.value + " "
        );

        let todoItem = document.createElement("li");
        todoItem.classList.add("todo-list-item");

        let todoCheckbox = document.createElement("input");
        todoCheckbox.type = "checkbox";
        todoCheckbox.classList.add("todo-list-checkbox");
        todoCheckbox.addEventListener("click", checkTodo);

        let todoDeleteIcon = document.createElement("i");
        todoDeleteIcon.classList.add("fa-solid", "fa-xmark", "todo-list-cross");
        todoDeleteIcon.addEventListener("click", removeTodo);

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

    function removeTodo(event) {
        event.target.parentElement.remove();
    }
});
