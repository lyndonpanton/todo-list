import "./styles.css";

import TodoList from "./TodoList";
import Project from "./Project";
import Todo from "./Todo";

let todoList = new TodoList();
todoList.addProjectByObject(new Project("Shopping"));
let todo = new Todo("Buy eggs", "Go to tesco and buy eggs", false, new Date(2025, 6, 11), 5);

const image = document.createElement("img");
image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg/250px-Aptenodytes_forsteri_-Snow_Hill_Island%2C_Antarctica_-adults_and_juvenile-8.jpg";

document.body.appendChild(image);

console.log("Webpack has been configured successfully");
