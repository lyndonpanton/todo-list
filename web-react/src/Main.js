import {useState} from "react";

/* Data */

const todos = [
    {
        key: 0,
        task: "Buy groceries",
        complete: false
    },
    {
        key: 1,
        task: "Feed cat",
        complete: false
    },
    {
        key: 2,
        task: "Email bob",
        complete: false
    }
];

/* Component functions */

function Add({ addTodo }) {
    const [name, setName] = useState("");

    function handleAdd() {
        let newKey = todos[todos.length - 1].key + 1;
        todos.push({ key: newKey, task: name, complete: false });
        addTodo(todos);
        setName("");
        console.log(todos);
    }

    function handleChange(event) {
        setName(event.target.value);
        console.log("Input edited");
    }

    return (
        <section>
            <input
                name={"add-todo"}
                type={"text"}
                placeholder="New list item…"
                onChange={handleChange}
            />
            <button onClick={handleAdd}>Add</button>
        </section>
    )
}

function Clear({ clearTodo }) {
    return (
        <section>
            <button onClick={clearTodoList}>Clear List</button>
        </section>
    )
}

function Edit({ stateChanger }) {
    return (
        <form onSubmit={preventDefaultRefresh}>
            <Add addTodo={ stateChanger } />
            <Clear clearTodo={ stateChanger } />
        </form>
    );
}

function Main() {
    return (
        <main id={"main-primary"}>
            <TodoList />
        </main>
    );
}

function TodoList() {
    const [todoList, setTodoList] = useState(todos);

    return (
        <article>
            <h2>My Todo List{ /* Editable list name*/ }</h2>
            <ul id="todo-list">
                {
                    todoList.map((item) => {
                        return (
                            <TodoItem
                                className={"nav-item"}
                                key={item.key}
                                task={item.task}
                            />
                        );
                    })
                }
            </ul>
            <Edit stateChanger={setTodoList} />
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

/* Helper functions */

function clearTodoList() {
    console.log("Todo list cleared…");
}

function preventDefaultRefresh(e) {
    e.preventDefault();
}

/* Exports */

export default Main;
