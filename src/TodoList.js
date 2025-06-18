import Project from "./Project";

class TodoList {
    constructor(storage) {
        if (storage === undefined) {
            this.projects = [];
        } else {
            this.projects = storage;
        }
    }

    addProjectByObject(project) {
        // this.projects = [...this.projects, project];
        this.projects.push(project);
    }

    addProjectByData(name, description) {
        let project = new Project(name, description);
        this.addProjectByObject(project);
    }

    deleteProject(id) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].id === id) {
                this.projects.splice(i, 1);
                return;
            }
        }
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
}

export default TodoList;
