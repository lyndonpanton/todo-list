class TodoList {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects = [this.projects, project];
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
