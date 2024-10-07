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
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>About Me</li>
            </ul>
        </nav>
    )
}

export default Header;