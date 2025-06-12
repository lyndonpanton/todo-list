import Project from "./Project";

class UI {
    constructor(todoList) {
        this.todoList = todoList;
        this.main = document.getElementsByTagName("main")[0];
    }

    clearDisplay() {
        while (this.main.firstChild) {
            this.main.removeChild(this.main.firstChild);
        }
    }

    // Contains projects
    displayTodoList() {
        this.clearDisplay();

        let todoList = document.createElement("section");
        todoList.setAttribute("id", "todo-list");

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

            todoList.appendChild(project);
        }

        this.main.appendChild(todoList);
    }

    // Contains todos
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

                let projectTodos = document.createElement("ul");
                projectTodos.classList.add("project-todos");

                let todos = projects[i].todos;

                for (let j = 0; j < todos.length; j++) {
                    let todo = document.createElement("li");
                    todo.setAttribute("data-id", todos[j].id);
                    todo.classList.add("project-todo");

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
                project.appendChild(projectTodos);

                this.main.appendChild(project);
                break;
            }
        }
    }

    // Contains todo data
    displayTodo(id) {

    }
}

export default UI;
