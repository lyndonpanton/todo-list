import "./styles.css";

import TodoList from "./TodoList";
import Project from "./Project";
import Todo from "./Todo";
import UI from "./UI";

let todoList = new TodoList();
let ui = new UI(todoList);
todoList.addProjectByObject(new Project("Shopping", "Items to buy for my weekly shopping list"));
todoList.addProjectByObject(new Project("Fitness", "A list of notes for my workout program"));
ui.displayTodoList();
let todo = new Todo("Buy eggs", "Go to tesco and buy eggs", false, new Date(2025, 6, 11), 5);

// const image = document.createElement("img");
// image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg/250px-Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg";

// document.body.appendChild(image);

console.log("Webpack has been configured successfully");
