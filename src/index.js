import "./styles.css";

import TodoList from "./TodoList";
import Project from "./Project";
import Todo from "./Todo";
import UI from "./UI";

console.log("Webpack has been configured successfully");

let todoList = new TodoList();
let ui = new UI(todoList);

let project1 = new Project("Shopping", "Items to buy for my weekly shopping list");
let project2 = new Project("Fitness", "A list of notes for my workout program");

project1.addTodo(new Todo("Buy eggs", "Get them on discount", false, new Date("2000-01-01"), 5));
project1.addTodo(new Todo("Buy milk", "Check expiration date", false, new Date("2000-01-01"), 5));
project1.addTodo(new Todo("Buy bread", "With seeds", false, new Date("2000-01-01"), 5));
project1.addTodo(new Todo("Buy butter", "Dairy-free alternative", false, new Date("2000-01-01"), 5));
project1.addTodo(new Todo("Buy flour", "All purpose", false, new Date("2000-01-01"), 5));

project2.addTodo(new Todo("Go to gym", "Bench press, deadlift, shoulder press", false, new Date("2000-01-01"), 5));
project2.addTodo(new Todo("Go to swimming pool", "Do 400m medley", false, new Date("2000-01-01"), 5));
project2.addTodo(new Todo("Go to athletics track", "Compete in 4x100m", false, new Date("2000-01-01"), 5));
project2.addTodo(new Todo("Go to football", "5-a-side on Thursday", false, new Date("2000-01-01"), 5));

todoList.addProjectByObject(project1);
todoList.addProjectByObject(project2);

ui.displayTodoList();
