class Header {
    constructor(title) {
        this.title = title;
        this.header = document.getElementsByTagName("header")[0];
    }

    displayHeader() {
        let h1 = document.createElement("h1");
        h1.textContent = this.title;

        this.header.appendChild(h1);
    }
}

export default Header;
