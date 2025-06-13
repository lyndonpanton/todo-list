import Project from "./Project";
import Todo from "./Todo";

class UI {
    constructor(todoList) {
        this.todoList = todoList;
        this.main = document.getElementsByTagName("main")[0];

        this.newProjectName = "";
        this.newProjectDescription = "";

        this.updatedTodoTitle = "";
        this.updatedTodoIsComplete = "";
        this.updatedTodoPriority = "";
        this.updatedTodoDueDate = "";
        this.updatedTodoDescription = "";
    }

    clearDisplay() {
        while (this.main.firstChild) {
            this.main.removeChild(this.main.firstChild);
        }
    }

    closeTodoArea() {
        let todoArea = document.getElementById("todo-area");

        if (todoArea) {
            todoArea.parentElement.removeChild(todoArea);
        }
    }

    createProject(e) {
        e.preventDefault();

        this.todoList.addProjectByObject(new Project(
            this.newProjectName, this.newProjectDescription
        ));

        this.newProjectName = "";
        this.newProjectDescription = "";

        this.displayTodoList();
    }

    displayCreateProjectDialog() {
        // Project: name, description
        let form = document.createElement("form");
        form.setAttribute("id", "dialog-area");
        form.addEventListener("submit", this.createProject.bind(this));

        let projectName = document.createElement("input");
        projectName.type = "text";
        projectName.classList.add("dialog-project-name");
        projectName.addEventListener("keyup", this.updateNewProjectName.bind(this));

        let projectDescription = document.createElement("textarea");
        projectDescription.classList.add("dialog-project-description");
        projectDescription.addEventListener("keyup", this.updateNewProjectDescription.bind(this));

        let submitButton = document.createElement("button");
        submitButton.type = "submit";
        // submitButton.classList.add("");
        submitButton.textContent = "Create";

        form.appendChild(projectName);
        form.appendChild(projectDescription);
        form.appendChild(submitButton);
        
        this.main.appendChild(form);
    }

    displayProject(id) {
        this.clearDisplay();

        let projects = this.todoList.projects;

        for (let i = 0; i < projects.length; i++) {
            if (id === projects[i].id) {
                let project = document.createElement("section");
                project.setAttribute("id", "project");

                let projectHeading = document.createElement("h2");
                projectHeading.classList.add("project-heading");
                projectHeading.textContent = projects[i].name;

                let backButton = document.createElement("button");
                backButton.type = "button";
                backButton.classList.add("project-button-back");
                backButton.textContent = "<-";
                backButton.addEventListener("click", this.displayTodoList.bind(this));

                let projectTodos = document.createElement("ul");
                projectTodos.classList.add("project-todos");

                let todos = projects[i].todos;

                for (let j = 0; j < todos.length; j++) {
                    let todo = document.createElement("li");
                    todo.setAttribute("data-id", todos[j].id);
                    todo.classList.add("project-todo");
                    todo.addEventListener("click", this.displayTodo.bind(this, id, todos[j].id));

                    // Checkbox
                    let todoCheckbox = document.createElement("input");
                    todoCheckbox.setAttribute("type", "checkbox");
                    todoCheckbox.classList.add("project-todo-checkbox");

                    // Text
                    let todoName = document.createElement("p");
                    todoName.classList.add("project-todo-name");
                    todoName.textContent = todos[j].title;

                    // Delete
                    let todoDelete = document.createElement("span");
                    todoDelete.classList.add("project-todo-delete");
                    todoDelete.textContent = "Delete";

                    todo.appendChild(todoCheckbox);
                    todo.appendChild(todoName);
                    todo.appendChild(todoDelete);

                    projectTodos.appendChild(todo);
                }

                project.appendChild(projectHeading);
                project.appendChild(backButton);
                project.appendChild(projectTodos);

                this.main.appendChild(project);
                break;
            }
        }
    }

    displayTodo(projectId, todoId) {
        for (let i = 0; i < this.todoList.projects.length; i++) {
            let project = this.todoList.projects[i];

            if (project.id === projectId) {
                for (let j = 0; j < project.todos.length; j++) {
                    let todo = project.todos[j];

                    if (todo.id === todoId) {
                        let todoArea = document.createElement("section");
                        todoArea.setAttribute("id", "todo-area");

                        let todoAreaClose = document.createElement("button");
                        todoAreaClose.type = "button";
                        todoAreaClose.classList.add("todo-area-close");
                        todoAreaClose.addEventListener("click", this.closeTodoArea.bind(this));

                        let todoElement = document.createElement("article");
                        todoElement.classList.add("todo");

                        let todoTitle = document.createElement("input");
                        todoTitle.type = "text";
                        todoTitle.value = todo.getTitle();
                        todoTitle.classList.add("todo-title");
                        todoTitle.addEventListener("keyup", this.updateEditedTodoTitle.bind(this));

                        let todoIsComplete = document.createElement("input");
                        todoIsComplete.type = "checkbox";
                        todoIsComplete.checked = todo.isComplete;
                        todoIsComplete.classList.add("todo-is-complete");
                        todoIsComplete.addEventListener("click", this.updateEditedTodoIsComplete.bind(this));

                        let todoDueDate = document.createElement("input");
                        todoDueDate.type = "date";
                        todoDueDate.classList.add("todo-due-date");
                        // Convert to appropriate format
                        // todoDueDate.value = todo.dueDate;

                        let todoPriority = document.createElement("select");
                        todoPriority.classList.add("todo-priority");
                        
                        for (let i = 0; i < 5; i++) {
                            let todoPriorityOption = document.createElement("option");
                            todoPriorityOption.value = (i + 1);
                            todoPriorityOption.textContent = (i + 1);

                            console.log(todo.getPriority());
                            if ((i + 1) == todo.getPriority()) todoPriorityOption.selected = true;

                            todoPriorityOption.classList.add("todo-priority-option");
                            
                            todoPriority.appendChild(todoPriorityOption);
                        }

                        todoPriority.addEventListener("click", this.updateEditedTodoPriority.bind(this));

                        let todoDescription = document.createElement("textarea");
                        todoDescription.classList.add("todo-description");
                        todoDescription.textContent = todo.description;
                        todoDescription.addEventListener("keyup", this.updateEditedTodoDescription.bind(this));

                        let todoModify = document.createElement("button");
                        todoModify.type = "button";
                        todoModify.classList.add("todo-modify");
                        todoModify.addEventListener("click", this.updateTodo.bind(this, projectId, todoId));
                        todoModify.textContent = "Update";

                        todoElement.appendChild(todoTitle);
                        todoElement.appendChild(todoIsComplete);
                        todoElement.appendChild(todoDueDate);
                        todoElement.appendChild(todoPriority);
                        todoElement.appendChild(todoDescription);
                        todoElement.appendChild(todoModify);

                        todoArea.appendChild(todoAreaClose);
                        todoArea.appendChild(todoElement);

                        this.updatedTodoTitle = todo.getTitle();
                        this.updatedTodoIsComplete = todo.getIsComplete();
                        this.updatedTodoDescription = todo.getDescription();
                        this.updatedTodoDueDate = todo.getDueDate();
                        this.updatedTodoPriority = todo.getPriority();

                        document.body.appendChild(todoArea);

                        break;
                    }
                }
            }
        }
    }

    displayTodoList() {
        this.clearDisplay();

        let todoList = document.createElement("section");
        todoList.setAttribute("id", "todo-list");

        let createProject = document.createElement("button");
        createProject.classList.add("todo-list-project-create");
        createProject.textContent = "+";
        createProject.addEventListener("click", this.displayCreateProjectDialog.bind(this));

        todoList.appendChild(createProject);

        let todoListProjects = document.createElement("section");
        todoListProjects.setAttribute("id", "todo-list-projects");

        for (let i = 0; i < this.todoList.projects.length; i++) {
            let currentProject = this.todoList.projects[i];

            let project = document.createElement("article");
            project.classList.add("todo-list-project");
            project.setAttribute("data-id", currentProject.id);
            project.addEventListener("click", () => this.displayProject(currentProject.id));
            
            let projectName = document.createElement("h2");
            projectName.classList.add("todo-list-project-name");
            projectName.textContent = currentProject.name;

            let projectDescription = document.createElement("p");
            projectDescription.classList.add("todo-list-project-description");

            // Leave empty if not description is present
            // Cut off description length using an ellipsis
            projectDescription.textContent = currentProject.description;

            project.appendChild(projectName);
            project.appendChild(projectDescription);

            todoListProjects.appendChild(project);
        }

        todoList.appendChild(todoListProjects);

        this.main.appendChild(todoList);
    }

    updateNewProjectName(e) {
        this.newProjectName = e.target.value;
    }
    
    updateNewProjectDescription(e) {
        this.newProjectDescription = e.target.value;
    }

    updateEditedTodoTitle(e) {
        this.updatedTodoTitle = e.target.value;
    }

    updateEditedTodoIsComplete(e) {
        this.updatedTodoIsComplete = e.target.checked;
        console.log(this.updatedTodoIsComplete);
    }

    updateEditedTodoDueDate(e) {
        this.updatedTodoDueDate = e.target.value;
    }

    updateEditedTodoPriority(e) {
        this.updatedTodoPriority = e.target.value;
        console.log(this.updatedTodoPriority);
    }

    updateEditedTodoDescription(e) {
        this.updatedTodoDescription = e.target.value;
    }

    updateTodo(projectId, todoId) {
        let todoFound = false;
        for (let i = 0; i < this.todoList.projects.length; i++) {
            let project = this.todoList.projects[i];

            if (project.id === projectId) {
                for (let j = 0; j < project.todos.length; j++) {
                    let todo = project.todos[j];

                    if (todo.id === todoId) {
                        // If empty, set to default
                        this.todoList.projects[i].todos[j].setTitle(this.updatedTodoTitle);
                        this.todoList.projects[i].todos[j].setDescription(this.updatedTodoDescription);
                        this.todoList.projects[i].todos[j].setIsComplete(this.updatedTodoIsComplete);
                        // this.todoList.projects[i].todos[j].setDueDate(this.updateTodoDueDate);
                        this.todoList.projects[i].todos[j].setPriority(this.updatedTodoPriority);

                        this.updatedTodoTitle = "";
                        this.updatedTodoDescription = "";
                        this.updatedTodoIsComplete = false;
                        this.updatedTodoDueDate = "";
                        this.updatedTodoPriority = "";

                        this.closeTodoArea();
                        this.displayProject(projectId);

                        break;
                    }
                }
            }

            if (todoFound) break;
        }
    }
}

export default UI;
