import {useState} from "react";

function Add() {
    return (
        <section>
            <input type={"text"} placeholder="New list item…" />
            <button onClick={createTodo}>Add</button>
        </section>
    )
}

function Checkbox() {
    return (
        <input
            type={"checkbox"}
        />
    )
}

function Clear() {
    return (
        <section>
            <button onClick={clearTodoList}>Clear List</button>
        </section>
    )
}

function Edit() {
    return (
        <div>
            <Add />
            <Clear />
        </div>
    );
}

function Main() {
    return (
        <main>
            <TodoList />
        </main>
    );
}

function TodoList() {
    const [complete, setComplete] = useState(false);

    function handleClick() {
        console.log(complete);
        setComplete(!complete);
    }

    return (
        <article>
            <h2>My Todo List{ /* Editable list name*/ }</h2>
            <ul id="todo-list">
                <TodoItem
                    task={"Buy groceries"}
                    complete={complete}
                />
                <TodoItem
                    task={"Feed cat"}
                    complete={complete}
                />
                <TodoItem
                    task={"Email Bob"}
                    complete={complete}
                />
            </ul>
            <Edit />
        </article>
    );
}

function TodoItem({ task, complete }) {
    complete = !complete;

    return (
        <li className={"todo-list-item"}>
            <Checkbox />
            { task }
        </li>
    );
}

function createTodo() {
    console.log("New todo created");
}

function clearTodoList() {
    console.log("Todo list cleared");
}

export default Main;
