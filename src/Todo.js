class Todo {
    constructor(title, description, isComplete, dueDate, priority) {
        this.id = self.crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.isComplete = isComplete;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getIsComplete() {
        return this.isComplete;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }

    setIsComplete(isComplete) {
        this.isComplete = isComplete;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    setPriority(priority) {
        this.priority = priority;
    }
}

export default Todo;
