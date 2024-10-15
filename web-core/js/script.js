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
    
    let todoHeaderEditIcons =
        document.getElementsByClassName("todo-list-header-edit");
    
    for (let i = 0; i < todoHeaderEditIcons.length; i++) {
        todoHeaderEditIcons[i].addEventListener(
            "click", toggleTodoHeaderEditable, false
        );
    }
    
    let todoHeaderHeadings =
        document.getElementsByClassName("todo-list-header-title");
    
    for (let i = 0; i < todoHeaderHeadings.length; i++) {
        todoHeaderHeadings[i].addEventListener("keypress", handleHeaderHeadingEdit);
    }

    function addTodo(event) {
        event.preventDefault();
        
        // Check if todo list has default empty text, and if it does remove this
        // text before adding a new item
        if (todoList.children.length === 1
                && todoList.children[0].id === "todo-list-empty") {
            todoList.children[0].remove();
        }

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
    
    function addTodoListEmpty() {
        // Check if todo list is empty
        if (todoList.children.length === 0) {
            // Add empty todo list element
            let container = document.createElement("div");
            container.id = "todo-list-empty";
            let element = document.createElement("p");
            let text =
                document.createTextNode("Add some todos to me!");

            element.appendChild(text);
            container.appendChild(element);

            todoList.appendChild(container);
        }
    }

    function checkTodo(event) {
        // event.target.parentElement.classList.toggle("todo-list-item-complete");
        let classList = event.target.parentElement.classList;
        
        if (classList
                .contains("todo-list-item-complete")) {
            classList.remove("todo-list-item-complete");
        } else {
            classList.add("todo-list-item-complete");
        }
    }

    function clearTodoList(event) {
        event.preventDefault();

        todoList.replaceChildren();
        addTodoListEmpty();
    }
    
    function handleHeaderHeadingEdit(event) {
        console.log(event.keyCode);
        
        if (event.keyCode === 13) {
            event.preventDefault();
            
            toggleTodoHeaderEditable(event);
        }
    }

    function removeTodo(event) {
        event.target.parentElement.remove();
        
        addTodoListEmpty();
    }
    
    function toggleTodoHeaderEditable(event) {
        let header = event.target.parentElement
            .getElementsByClassName("todo-list-header-title")[0];
        let editIcon = event.target.parentElement
            .getElementsByClassName("todo-list-header-edit")[0];
        
        if (header.contentEditable === "true") {
            header.classList.remove("todo-list-header-title-active");
            editIcon.classList.remove("todo-list-header-edit-active");
            header.contentEditable = "false";
            
            // If the user attempts to make an empty heading…
            if (header.textContent === "") {
                header.textContent = "My Todo List";
            }
        } else {
            header.classList.add("todo-list-header-title-active");
            editIcon.classList.add("todo-list-header-edit-active");
            header.contentEditable = "true";
            header.focus();
        }
    }
});
