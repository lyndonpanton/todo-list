import "./styles.css";

import Header from "./Header";
import TodoList from "./TodoList";
import Project from "./Project";
import Todo from "./Todo";
import UI from "./UI";

console.log("Webpack has been configured successfully");

// let header = new Header("Todo List");

// let todoList;

// if (localStorage) {
//     if (localStorage.getItem("todo-list")) {
//         todoList = JSON.parse(localStorage.getItem("todo-list"));
//         loadLocalStorage(todoList);
//     } else {
//         todoList = new TodoList();
//     }
// } else {
//     todoList = new TodoList();
// }

// console.log(todoList.prototype);
// // todoList.prototype = TodoList.prototype;
// Object.assign(todoList, TodoList.prototype);
// console.log(todoList.prototype);

// let ui = new UI(todoList);

// // console.log(ui);

function loadLocalStorage(todoList) {
    // An object with a "projects" key
    let storage = JSON.parse(localStorage.getItem("todo-list"));

    let projects = storage.projects;

    for (const project in projects) {
        // Create projects
        let currentProject = new Project(projects[project].name, projects[project].description);
        
        todoList.addProjectByObject(currentProject);

        let todos = projects[project].todos;

        for (const todo in todos) {
            let currentTodo = new Todo(
                todos[todo].title,
                todos[todo].description,
                todos[todo].isComplete,
                new Date(todos[todo].dueDate),
                todos[todo].priority
            );

            currentProject.addTodo(currentTodo);

            console.log(currentTodo);
        }

        console.log(currentProject);
    }
}

let header = new Header("Todo List");

let todoList = new TodoList();

if (localStorage) {
    if (localStorage.getItem("todo-list")) {
        loadLocalStorage(todoList);
    }
}

let ui = new UI(todoList);

// let project1 = new Project("Shopping", "Items to buy for my weekly shopping list");
// let project2 = new Project("Fitness", "A list of notes for my workout program");

// project1.addTodo(new Todo("Buy eggs", "Get them on discount", false, new Date("2025-07-30"), 5));
// project1.addTodo(new Todo("Buy milk", "Check expiration date", false, new Date("2025-09-05"), 3));
// project1.addTodo(new Todo("Buy bread", "With seeds", false, new Date("2025-06-24"), 1));
// project1.addTodo(new Todo("Buy butter", "Dairy-free alternative", false, new Date("2025-10-11"), 2));
// project1.addTodo(new Todo("Buy flour", "All purpose", false, new Date("2025-08-23"), 4));

// project2.addTodo(new Todo("Go to gym", "Bench press, deadlift, shoulder press", false, new Date("2025-09-19"), 3));
// project2.addTodo(new Todo("Go to swimming pool", "Do 400m medley", false, new Date("2025-06-22"), 1));
// project2.addTodo(new Todo("Go to athletics track", "Compete in 4x100m", false, new Date("2025-12-03"), 5));
// project2.addTodo(new Todo("Go to football", "5-a-side on Thursday", false, new Date("2025-07-08"), 2));

// todoList.addProjectByObject(project1);
// todoList.addProjectByObject(project2);

header.displayHeader();
ui.displayTodoList();
