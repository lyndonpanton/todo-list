import Project from "./Project";

class UI {
    constructor(todoList) {
        this.todoList = todoList;
        this.main = document.getElementsByTagName("main")[0];
    }

    // Contains projects
    displayTodoList() {
        let todoList = document.createElement("section");
        todoList.setAttribute("id", "todo-list");

        for (let i = 0; i < this.todoList.projects.length; i++) {
            let currentProject = this.todoList.projects[i];

            let project = document.createElement("article");
            project.classList.add("todo-list-project");
            
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
    displayProject() {

    }

    // Contains todo data
    displayTodo() {

    }
}

export default UI;
