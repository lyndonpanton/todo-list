function Header() {
    return (
        <header>
            <Navigation>

            </Navigation>

            <h1>Todo List</h1>
        </header>
    )
}

function Navigation() {
    return (
        <nav>
            <ul id={"nav-main"}>
                <li className={"nav-main-item"}>Home</li>
                <li className={"nav-main-item"}>Projects</li>
                <li className={"nav-main-item"}>About Me</li>
            </ul>
        </nav>
    )
}

export default Header;
