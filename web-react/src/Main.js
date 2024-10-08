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
            <button>Clear List</button>
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
            <Todo />
        </main>
    );
}

function Todo() {
    return (
        <article>
            <h2>My Todo List{ /* Editable list name*/ }</h2>
            <ul id="todo-list">
                <li className={"todo-list-item"}>
                    <input type={"checkbox"} />
                    Buy groceries
                </li>
                <li className={"todo-list-item"}>
                    <input type={"checkbox"} />
                    Feed cat
                </li>
                <li className={"todo-list-item"}>
                    <input type={"checkbox"} />
                    Email Bob
                </li>
            </ul>
            <Edit />
        </article>
    );
}

function TodoItem() {

}

function createTodo() {
    console.log("New todo created");
}

export default Main;
