class Project {
    constructor(name) {
        this.id = self.crypto.randomUUID();
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos = [...this.todos, todo];
    }
    
    getTodo(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                return this.todos[i];
            }
        }
    }

    getTodos() {
        return this.todos;
    }

    updateTodo(id, param, data) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
                switch (param) {
                    case "title":
                        this.todos[i].setTitle(data);
                        break;
                    case "description":
                        this.todos[i].setDescription(data);
                        break;
                    case "dueDate":
                        this.todos[i].setDueDate(data);
                        break;
                    case "priority":
                        this.todos[i].setPriority(data);
                        break;
                }

                return;
            }
        }
    }

    deleteTodo(id) {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].id == id) {
                this.todos.splice(i, 1);
                return;
            }
        }
    }
}

export default Project;
