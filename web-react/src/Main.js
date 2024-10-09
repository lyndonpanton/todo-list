import {useState} from "react";

function Add() {
    return (
        <section>
            <input type={"text"} placeholder="New list item…" />
            <button onClick={createTodo}>Add</button>
        </section>
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
    return (
        <article>
            <h2>My Todo List{ /* Editable list name*/ }</h2>
            <ul id="todo-list">
                <TodoItem
                    task={"Buy groceries"}
                />
                <TodoItem
                    task={"Feed cat"}
                />
                <TodoItem
                    task={"Email Bob"}
                />
            </ul>
            <Edit />
        </article>
    );
}

function TodoItem({ task }) {
    const [complete, setComplete] = useState(false);

    function handleChange() {
        setComplete(!complete);
    }

    let classString = "todo-list-item";
    if (complete) {
        classString += " todo-list-item-complete";
    }

    return (
        <li className={classString}>
            <input
                type={"checkbox"}
                onChange={handleChange}
                checked={complete}
            />
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
