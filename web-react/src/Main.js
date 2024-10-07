function Add() {
    return (
        <section>
            <input type={"text"} placeholder="New list item…" />
            <button>Add</button>
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
                <li>Buy groceries</li>
                <li>Feed cat</li>
                <li>Email Bob</li>
            </ul>
            <Edit />
        </article>
    );
}

export default Main;
