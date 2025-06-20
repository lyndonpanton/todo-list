class Footer {
    constructor(copyRightHolder, copyRightRights) {
        this.copyRightHolder = copyRightHolder;
        this.copyRightRights = copyRightRights;
        this.footer = document.getElementsByTagName("footer")[0];
    }

    displayFooter() {
        this.footer.appendChild(this.getCopyright());
    }

    getTechnology() {
        let technology = document.createElement("section");
        technology.setAttribute("id", "footer-technology");

        return technology;
    }

    getTechnologyDeveloper() {
        let list = document.createElement("ul");
        list.classList.add("technology-list");

        return list;
    }

    // html, css, 
    getTechnologyLanguagesFrameworks() {
        // HTML, CSS, JavaScript, Webpack
        let list = document.createElement("ul");
        list.classList.add("technology-list");

        return list;
    }

    getTechnologyProjects() {
        let list = document.createElement("ul");
        list.classList.add("technology-list");

        return list;
    }
    
    // npm, webpack, date-fns, { icon library }, { font library }
    getTechnologyManagersPackagesLibraries() {
        let list = document.createElement("ul");
        list.classList.add("technology-list");

        return list;
    }

    getExternal() {

    }

    getExternalLegal() {

    }

    getExternalSocial() {

    }

    getCopyright() {
        let copyright = document.createElement("article");
        copyright.setAttribute("id", "footer-copyright");

        let copyrightSymbol = document.createElement("span");
        copyrightSymbol.innerHTML = "&copy;";
        
        let copyRightYear = document.createElement("span");
        copyRightYear.textContent = " " + new Date().getFullYear();

        let copyrightHolder = document.createElement("span");
        copyrightHolder.textContent = this.copyRightHolder;

        let copyRightRights = document.createElement("span");
        copyRightRights.textContent = this.copyRightRights;

        let space = document.createTextNode(" ");
        let divider = document.createTextNode(" | ");

        copyright.appendChild(copyrightSymbol);
        copyright.appendChild(space);
        copyright.appendChild(copyRightYear);
        copyright.appendChild(space);
        copyright.appendChild(copyrightHolder);
        copyright.appendChild(divider);
        copyright.appendChild(copyRightRights);

        return copyright;
    }
}

export default Footer;
