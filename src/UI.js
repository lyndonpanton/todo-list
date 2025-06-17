import Todo from "./Todo";
import iconBack from "./icon/back.svg";
import iconCreate from "./icon/create.svg";
import iconDelete from "./icon/delete.svg";
import iconUpdate from "./icon/update.svg";

class UI {
    constructor(todoList) {
        this.todoList = todoList;
        this.main = document.getElementsByTagName("main")[0];

        this.newProjectName = "";
        this.newProjectDescription = "";

        this.updatedProjectName = "";
        this.updatedProjectDescription = "";

        this.newTodoTitle = "";
        this.newTodoPriority = 5;
        this.newTodoDueDate = new Date();
        this.newTodoDescription = "";

        this.updatedTodoTitle = "";
        this.updatedTodoIsComplete = "";
        this.updatedTodoPriority = "";
        this.updatedTodoDueDate = new Date();
        this.updatedTodoDescription = "";
    }

    clearDisplay() {
        while (this.main.firstChild) {
            this.main.removeChild(this.main.firstChild);
        }
    }

    closeArea(area) {
        // let newTodoArea = document.getElementById("new-todo-area");

        if (area) {
            area.parentElement.removeChild(area);
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

        this.todoList.addProjectByData(this.newProjectName, this.newProjectDescription);

        this.newProjectName = "";
        this.newProjectDescription = "";

        this.displayTodoList();
    }

    createTodo(projectId, e) {
        e.preventDefault();

        for (let i = 0; i < this.todoList.projects.length; i++) {
            let project = this.todoList.projects[i];

            if (project.id === projectId) {
                this.todoList.projects[i].addTodo(new Todo(
                    this.newTodoTitle,
                    this.newTodoDescription,
                    false,
                    this.newTodoDueDate,
                    this.newTodoPriority
                ));
            }
        }

        this.newTodoTitle = "";
        this.newTodoDueDate = 5;
        this.newTodoPriority = new Date();
        this.newTodoDescription = "";

        this.closeTodoArea();
        this.displayProject(null, projectId);
    }

    deleteProject(projectId) {
        for (let i = 0; i < this.todoList.projects.length; i++) {
            let project = this.todoList.projects[i];

            if (project.id === projectId) {
                this.todoList.projects.splice(i, 1);
                this.displayTodoList();
                
                return;
            }
        }
    }

    deleteTodo(projectId, todoId) {
        let todoFound = false;

        for (let i = 0; i < this.todoList.projects.length; i++) {
            let project = this.todoList.projects[i];

            if (project.id === projectId) {
                for (let j = 0; j < project.todos.length; j++) {
                    let todo = project.todos[j];

                    if (todo.id === todoId) {
                        this.todoList.projects[i].deleteTodo(todo.id);
                    }
                }
            }

            if (todoFound) break;
        }

        this.displayProject(projectId);
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
        submitButton.textContent = "Create";

        form.appendChild(projectName);
        form.appendChild(projectDescription);
        form.appendChild(submitButton);
        
        this.main.appendChild(form);
    }

    displayNewTodoArea(projectId) {
        let newTodoArea = document.createElement("section");
        newTodoArea.setAttribute("id", "new-todo-area");

        let newTodoAreaClose = document.createElement("button");
        newTodoAreaClose.classList.add("new-todo-area-close");
        newTodoAreaClose.textContent = "x";
        newTodoAreaClose.type = "button";
        newTodoAreaClose.addEventListener("click", () => this.closeArea(newTodoArea));

        let newTodoForm = document.createElement("form");
        newTodoForm.addEventListener("submit", this.createTodo.bind(this, projectId));

        let newTodoTitle = document.createElement("input");
        newTodoTitle.classList.add("new-todo-title");
        newTodoTitle.type = "text";
        newTodoTitle.addEventListener("keyup", this.updateNewTodoTitle.bind(this));

        let newTodoIsComplete = document.createElement("input");
        newTodoIsComplete.classList.add("new-todo-is-complete");
        newTodoIsComplete.type = "checkbox";

        let newTodoDueDate = document.createElement("input");
        newTodoDueDate.classList.add("new-todo-due-date");
        newTodoDueDate.type = "date";
        newTodoDueDate.addEventListener("change", this.updateNewTodoDueDate.bind(this));

        let newTodoPriority = document.createElement("select");
        newTodoPriority.classList.add("new-todo-priority");
        newTodoPriority.addEventListener("click", this.updateNewTodoPriority.bind(this));

        for (let i = 0; i < 5; i++) {
            let newTodoPriorityOption = document.createElement("option");
            newTodoPriorityOption.textContent = (i + 1);
            newTodoPriorityOption.value = (i + 1);

            newTodoPriority.appendChild(newTodoPriorityOption);
        }

        let newTodoDescription = document.createElement("textarea");
        newTodoDescription.classList.add("new-todo-description");
        newTodoDescription.addEventListener("keyup", this.updateNewTodoDescription.bind(this));

        let newTodoSubmit = document.createElement("input");
        newTodoSubmit.classList.add("new-todo-submit");
        newTodoSubmit.type = "submit";

        newTodoForm.appendChild(newTodoTitle);
        newTodoForm.appendChild(newTodoIsComplete);
        newTodoForm.appendChild(newTodoDueDate);
        newTodoForm.appendChild(newTodoPriority);
        newTodoForm.appendChild(newTodoDescription);
        newTodoForm.appendChild(newTodoSubmit);

        newTodoArea.appendChild(newTodoAreaClose);
        newTodoArea.appendChild(newTodoForm);

        this.main.appendChild(newTodoArea);
    }

    displayProject(id, e) {
        if (e !== undefined) {
            console.log(e);
            if (
                e.target.classList.contains("todo-list-project-update")
                || e.target.classList.contains("todo-list-project-delete")
            ) {
                return;
            }
        }
        
        this.clearDisplay();

        let projects = this.todoList.projects;

        for (let i = 0; i < projects.length; i++) {
            if (id === projects[i].id) {
                // Container
                let project = document.createElement("section");
                project.setAttribute("id", "project");

                let projectHeader = document.createElement("section");
                projectHeader.classList.add("project-header");

                // Header
                let projectHeading = document.createElement("h2");
                projectHeading.classList.add("project-heading");
                projectHeading.textContent = projects[i].name;

                // Create Todo Button
                let createButton = document.createElement("img");
                createButton.classList.add("project-button", "project-button-create");
                // createButton.textContent = "+";
                // createButton.type = "button";
                createButton.src = iconCreate;
                createButton.addEventListener("click", this.displayNewTodoArea.bind(this, id));

                // Back Button
                let backButton = document.createElement("img");
                backButton.classList.add("project-button", "project-button-back");
                // backButton.textContent = "<-";
                // backButton.type = "button";
                backButton.src = iconBack;
                backButton.addEventListener("click", this.displayTodoList.bind(this));

                // Update Button
                let updateButton = document.createElement("img");
                updateButton.classList.add("project-button", "project-button-update");
                // updateButton.textContent = "Update";
                // updateButton.type = "button";
                updateButton.src = iconUpdate;
                updateButton.addEventListener("click", this.displayProjectUpdateDialog.bind(this, id, true));

                // Delete Button
                let deleteButton = document.createElement("img");
                deleteButton.classList.add("project-button", "project-button-delete");
                // deleteButton.textContent = "Delete";
                // deleteButton.type = "button";
                deleteButton.src = iconDelete;
                deleteButton.addEventListener("click", this.deleteProject.bind(this, id));

                // Todo List
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
                    todoCheckbox.addEventListener("click", this.toggleTodoIsComplete.bind(this, projects[i].id, todos[j].id));

                    // Text
                    let todoName = document.createElement("p");
                    todoName.classList.add("project-todo-name");
                    todoName.textContent = todos[j].title;

                    // Due Date
                    let todoDueDate = document.createElement("span");
                    todoDueDate.classList.add("project-todo-due-date");
                    todoDueDate.textContent =
                            todos[j].dueDate.getDate()
                            + "/" + (todos[j].dueDate.getMonth() + 1)
                            + "/" + todos[j].dueDate.getFullYear();
                    
                    // console.log(todos[j].dueDate.getDate());
                    // console.log(todos[j].dueDate.getMonth());
                    // console.log(todos[j].dueDate.getFullYear());

                    // Priority
                    // let todoPriority = document.createElement("span");
                    // todoPriority.classList.add("project-todo-priority");

                    for (let i = 0; i < 5; i++) {
                        if (parseInt(todos[j].priority) === (i + 1)) {

                            // todoPriority.classList.add("project-todo-priority-" + (i + 1));
                            todo.classList.add("project-todo-priority-" + (i + 1));
                        }
                    }

                    // todoPriority.textContent = `(${todos[j].priority})`;

                    // Update
                    let todoUpdate = document.createElement("img");
                    todoUpdate.classList.add("project-todo-update");
                    // todoUpdate.textContent = "Update";
                    todoUpdate.src = iconUpdate;
                    todoUpdate.addEventListener("click", this.displayTodo.bind(this, id, todos[j].id));

                    // Delete
                    let todoDelete = document.createElement("img");
                    todoDelete.classList.add("project-todo-delete");
                    // todoDelete.textContent = "Delete";
                    todoDelete.src = iconDelete;
                    todoDelete.addEventListener("click", this.deleteTodo.bind(this, id, todos[j].id));

                    todo.appendChild(todoCheckbox);
                    todo.appendChild(todoName);
                    todo.appendChild(todoDueDate);
                    // todo.appendChild(todoPriority);
                    todo.appendChild(todoUpdate);
                    todo.appendChild(todoDelete);

                    projectTodos.appendChild(todo);
                }

                projectHeader.appendChild(backButton);
                projectHeader.appendChild(projectHeading);
                projectHeader.appendChild(updateButton);

                project.appendChild(projectHeader);
                project.appendChild(createButton);
                project.appendChild(projectTodos);
                project.appendChild(deleteButton);

                // project.appendChild(projectHeading);
                // project.appendChild(createButton);
                // project.appendChild(backButton);
                // project.appendChild(updateButton);
                // project.appendChild(deleteButton);
                // project.appendChild(projectTodos);

                this.main.appendChild(project);
                break;
            }
        }
    }

    displayProjectUpdateDialog(id, isInProjectView) {
        for (let i = 0; i < this.todoList.projects.length; i++) {
            let project = this.todoList.projects[i];

            if (project.id === id) {
                this.updatedProjectName = this.todoList.projects[i].name;
                this.updatedProjectDescription = this.todoList.projects[i].description;
                
                let projectArea = document.createElement("section");
                projectArea.setAttribute("id", "project-area");

                let projectAreaClose = document.createElement("button");
                projectAreaClose.textContent = "x";
                projectAreaClose.setAttribute("type", "button");
                projectAreaClose.addEventListener("click", () => this.closeArea(projectArea));

                let projectForm = document.createElement("form");
                projectForm.classList.add("project-form");
                projectForm.addEventListener("submit", this.updateProject.bind(this, id, isInProjectView));

                let projectFormName = document.createElement("input");
                projectFormName.classList.add("project-form-name");
                projectFormName.setAttribute("type", "text");
                projectFormName.value = this.todoList.projects[i].name;
                projectFormName.addEventListener("keydown", this.updateEditedProjectName.bind(this));
                projectFormName.addEventListener("keyup", this.updateEditedProjectName.bind(this));
                
                let projectFormDescription = document.createElement("textarea");
                projectFormDescription.classList.add("project-form-description");
                projectFormDescription.value = this.todoList.projects[i].description;
                projectFormDescription.addEventListener("keydown", this.updateEditedProjectDescription.bind(this));
                projectFormDescription.addEventListener("keyup", this.updateEditedProjectDescription.bind(this));

                let projectFormSubmit = document.createElement("input");
                projectFormSubmit.classList.add("project-form-submit");
                projectFormSubmit.setAttribute("type", "submit");
                projectFormSubmit.value = "Update";

                projectForm.appendChild(projectFormName);
                projectForm.appendChild(projectFormDescription);
                projectForm.appendChild(projectFormSubmit);
                
                projectArea.appendChild(projectAreaClose);
                projectArea.appendChild(projectForm);

                this.main.appendChild(projectArea);
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
                        todoAreaClose.textContent = "x";
                        todoAreaClose.type = "button";
                        todoAreaClose.classList.add("todo-area-close");
                        todoAreaClose.addEventListener("click", () => this.closeArea(todoArea));

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
                        todoDueDate.valueAsDate = todo.dueDate;
                        todoDueDate.addEventListener("change", this.updateEditedTodoDueDate.bind(this));

                        let todoPriority = document.createElement("select");
                        todoPriority.classList.add("todo-priority");
                        
                        for (let i = 0; i < 5; i++) {
                            let todoPriorityOption = document.createElement("option");
                            todoPriorityOption.value = (i + 1);
                            todoPriorityOption.textContent = (i + 1);

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
                        todoModify.addEventListener("click", this.updateTodo.bind(this, projectId, todoId, todoArea));
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

        let createProject = document.createElement("img");
        createProject.classList.add("todo-list-project-create");
        createProject.src = iconCreate;
        // createProject.textContent = "+";
        createProject.addEventListener("click", this.displayCreateProjectDialog.bind(this));

        todoList.appendChild(createProject);

        let todoListProjects = document.createElement("section");
        todoListProjects.setAttribute("id", "todo-list-projects");

        for (let i = 0; i < this.todoList.projects.length; i++) {
            let currentProject = this.todoList.projects[i];

            let project = document.createElement("article");
            project.classList.add("todo-list-project");
            project.setAttribute("data-id", currentProject.id);
            project.addEventListener("click", this.displayProject.bind(this, currentProject.id));
            
            let projectName = document.createElement("h2");
            projectName.classList.add("todo-list-project-name");
            projectName.textContent = currentProject.name;

            let projectDescription = document.createElement("p");
            projectDescription.classList.add("todo-list-project-description");
            
            projectDescription.textContent = currentProject.description;

            let projectUpdate = document.createElement("img");
            projectUpdate.classList.add("todo-list-project-update");
            projectUpdate.src = iconUpdate;
            // projectUpdate.textContent = "Update";
            projectUpdate.addEventListener("click", this.displayProjectUpdateDialog.bind(this, currentProject.id, false));

            let projectDelete = document.createElement("img");
            projectDelete.classList.add("todo-list-project-delete");
            projectDelete.src = iconDelete;
            // projectDelete.textContent = "Delete";
            projectDelete.addEventListener("click", this.deleteProject.bind(this, currentProject.id));

            project.appendChild(projectName);
            project.appendChild(projectDescription);
            project.appendChild(projectUpdate);
            project.appendChild(projectDelete);

            todoListProjects.appendChild(project);
        }

        todoList.appendChild(todoListProjects);

        this.main.appendChild(todoList);
    }

    toggleTodoIsComplete(projectId, todoId) {
        for (let i = 0; i < this.todoList.projects.length; i++) {
            let project = this.todoList.projects[i];

            if (project.id === projectId) {
                for (let j = 0; j < project.todos.length; j++) {
                    let todo = project.todos[j];

                    if (todo.id === todoId) {
                        this.todoList.projects[i].todos[j].setIsComplete(
                            !this.todoList.projects[i].todos[j].getIsComplete()
                        );
                    }
                }
            }
        }
    }

    updateNewTodoDescription(e) {
        this.newTodoDescription = e.target.value;}

    updateNewTodoDueDate(e) {
        this.newTodoDueDate = e.target.valueAsDate;}

    updateNewTodoPriority(e) {
        this.newTodoPriority = e.target.value;}
    
    updateNewTodoTitle(e) {
        this.newTodoTitle = e.target.value;}

    updateNewProjectName(e) {
        this.newProjectName = e.target.value;
    }
    
    updateNewProjectDescription(e) {
        this.newProjectDescription = e.target.value;
    }

    updateEditedProjectDescription(e) {
        this.updatedProjectDescription = e.target.value;
        console.log(this.updatedProjectDescription);
    }

    updateEditedProjectName(e) {
        this.updatedProjectName = e.target.value;
        console.log(this.updatedProjectName);
    }

    updateEditedTodoTitle(e) {
        this.updatedTodoTitle = e.target.value;
    }

    updateEditedTodoIsComplete(e) {
        this.updatedTodoIsComplete = e.target.checked;
        console.log(this.updatedTodoIsComplete);
    }
    
    updateEditedTodoDueDate(e) {
        this.updatedTodoDueDate = e.target.valueAsDate;
    }

    updateEditedTodoPriority(e) {
        this.updatedTodoPriority = e.target.value;
    }

    updateEditedTodoDescription(e) {
        this.updatedTodoDescription = e.target.value;
    }

    updateProject(projectId, isInProjectView, e) {
        e.preventDefault();

        // Find project and display dialog for updating it with data prefilled
        for (let i = 0; i < this.todoList.projects.length; i++) {
            let project = this.todoList.projects[i];

            if (project.id === projectId) {
                console.log(`Updated project name: ${this.updatedProjectName}`);
                console.log(`Updated project description: ${this.updatedProjectDescription}`);

                this.todoList.projects[i].name = this.updatedProjectName;
                this.todoList.projects[i].description = this.updatedProjectDescription;

                this.updatedProjectName = "";
                this.updatedProjectDescription = "";

                this.clearDisplay();
                
                if (isInProjectView) this.displayProject(projectId);
                else this.displayTodoList();

                break;
            }
        }
    }

    updateTodo(projectId, todoId, todoArea) {
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
                        this.todoList.projects[i].todos[j].setDueDate(this.updatedTodoDueDate);
                        this.todoList.projects[i].todos[j].setPriority(this.updatedTodoPriority);

                        this.updatedTodoTitle = "";
                        this.updatedTodoDescription = "";
                        this.updatedTodoIsComplete = false;
                        this.updatedTodoDueDate = new Date();
                        this.updatedTodoPriority = "";

                        this.closeArea(todoArea);
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
