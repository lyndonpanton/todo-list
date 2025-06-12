import Project from "./Project";

class TodoList {
    constructor() {
        this.projects = [];
        console.log("Todo List was created");
    }

    addProjectByObject(project) {
        // this.projects = [...this.projects, project];
        this.projects.push(project);
    }

    addProjectByName(name, description) {
        let project = new Project(name, description);
        this.addProjectByObject(project);
    }

    getProject(id) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id === id) {
                return this.projects[i];
            }
        }
    }

    getProjects() {
        return this.projects;
    }

    deleteProject(id) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id === id) {
                this.projects.splice(i, 1);
                return;
            }
        }
    }
}

export default TodoList;
