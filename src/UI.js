import Project from "./Project";

class UI {
    constructor(todoList) {
        this.todoList = todoList;
        this.main = document.getElementsByTagName("main")[0];
        this.newProjectName = "";
        this.newProjectDescription = "";
    }

    clearDisplay() {
        while (this.main.firstChild) {
            this.main.removeChild(this.main.firstChild);
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

    // Contains projects
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

    // Contains todo data
    displayTodo(id) {

    }

    updateNewProjectName(e) {
        this.newProjectName = e.target.value;
    }
    
    updateNewProjectDescription(e) {
        this.newProjectDescription = e.target.value;
    }
}

export default UI;
