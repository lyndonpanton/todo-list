function Header() {
    return (
        <header id={"header-primary"}>
            <Navigation>

            </Navigation>

            <h1>Todo List</h1>
        </header>
    )
}

function Navigation() {
    return (
        <nav>
            <ul id={"nav-primary-list"}>
                <li className={"nav-primary-list-item"}>Home</li>
                <li className={"nav-primary-list-item"}>Projects</li>
                <li className={"nav-primary-list-item"}>About Me</li>
            </ul>
        </nav>
    )
}

export default Header;
