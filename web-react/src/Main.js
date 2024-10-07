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
        </article>
    );
}

export default Main;
