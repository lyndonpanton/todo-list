class Footer {
    constructor(copyRightHolder, copyRightRights) {
        this.copyRightHolder = copyRightHolder;
        this.copyRightRights = copyRightRights;
        this.footer = document.getElementsByTagName("footer")[0];
    }

    displayFooter() {
        this.footer.appendChild(this.getCopyright());
        this.footer.appendChild(this.getTechnology());
    }

    getTechnology() {
        let technology = document.createElement("section");
        technology.setAttribute("id", "footer-technology");

        technology.appendChild(this.getTechnologyDeveloper());
        technology.appendChild(this.getTechnologyLanguagesFrameworks());
        technology.appendChild(this.getTechnologyManagersPackagesLibraries());
        technology.appendChild(this.getTechnologyProjects());

        return technology;
    }

    getTechnologyDeveloper() {
        let list = document.createElement("ul");
        list.classList.add("technology-list");

        let github = document.createElement("li");
        let githubLink = document.createElement("a");
        githubLink.setAttribute("href", "https://github.com/lyndonpanton");
        githubLink.textContent = "GitHub";
        github.appendChild(githubLink);

        let portfolio = document.createElement("li");
        let portfolioLink = document.createElement("a");
        portfolioLink.setAttribute("href", "https://lyndonpanton.co.uk");
        portfolioLink.textContent = "Portfolio";
        portfolio.appendChild(portfolioLink);

        let linkedIn = document.createElement("li");
        let linkedInLink = document.createElement("a");
        linkedInLink.setAttribute("href", "https://linkedin.com/lyndonpanton");
        linkedInLink.textContent = "LinkedIn";
        linkedIn.appendChild(linkedInLink);

        list.appendChild(github);
        list.appendChild(portfolio);
        list.appendChild(linkedIn);

        return list;
    }

    getTechnologyLanguagesFrameworks() {
        let list = document.createElement("ul");
        list.classList.add("technology-list");

        let html = document.createElement("li");
        html.textContent = "HTML";

        let css = document.createElement("li");
        css.textContent = "CSS";

        let javaScript = document.createElement("li");
        javaScript.textContent = "JavaScript";

        let nodeJS = document.createElement("li");
        nodeJS.textContent = "NodeJS";

        list.appendChild(html);
        list.appendChild(css);
        list.appendChild(javaScript);
        list.appendChild(nodeJS);

        return list;
    }
    
    getTechnologyManagersPackagesLibraries() {
        let list = document.createElement("ul");
        list.classList.add("technology-list");

        let npm = document.createElement("li");
        let npmLink = document.createElement("a");
        npmLink.setAttribute("href", "https://www.npmjs.com/");
        npmLink.setAttribute("target", "_blank");
        npmLink.textContent = "npm";
        npm.appendChild(npmLink);

        let webpack = document.createElement("li");
        let webpackLink = document.createElement("a");
        webpackLink.setAttribute("href", "https://webpack.js.org/");
        webpackLink.setAttribute("target", "_blank");
        webpackLink.textContent = "Webpack";
        webpack.appendChild(webpackLink);

        let dateFNS = document.createElement("li");
        let dateFNSLink = document.createElement("a");
        dateFNSLink.setAttribute("href", "https://date-fns.org/");
        dateFNSLink.setAttribute("target", "_blank");
        dateFNSLink.textContent = "date-fns";
        dateFNS.appendChild(dateFNSLink);

        let pictogrammers = document.createElement("li");
        let pictogrammersLink = document.createElement("a");
        pictogrammersLink.setAttribute("href", "https://pictogrammers.com/");
        pictogrammersLink.setAttribute("target", "_blank");
        pictogrammersLink.textContent = "Pictogrammers";
        pictogrammers.appendChild(pictogrammersLink);

        let fontLibrary = document.createElement("li");
        let fontLibraryLink = document.createElement("a");
        fontLibraryLink.setAttribute("href", "#");
        fontLibraryLink.setAttribute("target", "_blank");
        fontLibraryLink.text = "{ font library }";
        fontLibrary.appendChild(fontLibraryLink);

        list.appendChild(npm);
        list.appendChild(webpack);
        list.appendChild(dateFNS);
        list.appendChild(pictogrammers);
        list.appendChild(fontLibrary);

        return list;
    }

    getTechnologyProjects() {
        let list = document.createElement("ul");
        list.classList.add("technology-list");

        let taskList = document.createElement("li");
        let taskListLink = document.createElement("a");
        taskListLink.setAttribute("href", "https://github.com/lyndonpanton/task-list");
        taskListLink.setAttribute("target", "_blank");
        taskListLink.textContent = "Task List";
        taskList.appendChild(taskListLink);

        let wordCounter = document.createElement("li");
        let wordCounterLink = document.createElement("a");
        wordCounterLink.setAttribute("href", "https://github.com/lyndonpanton/word-counter");
        wordCounterLink.setAttribute("target", "_blank");
        wordCounterLink.textContent = "Word Counter";
        wordCounter.appendChild(wordCounterLink);

        let currencyConverter = document.createElement("li");
        let currencyConverterLink = document.createElement("a");
        currencyConverterLink.setAttribute("href", "https://github.com/lyndonpanton/currency-converter");
        currencyConverterLink.setAttribute("target", "_blank");
        currencyConverterLink.textContent = "Currency Converter";
        currencyConverter.appendChild(currencyConverterLink);

        let pixelArtEditor = document.createElement("li");
        let pixelArtEditorLink = document.createElement("a");
        pixelArtEditorLink.setAttribute("href", "https://github.com/lyndonpanton/pixel-art-editor");
        pixelArtEditorLink.setAttribute("target", "_blank");
        pixelArtEditorLink.textContent = "Pixel Art Editor";
        pixelArtEditor.appendChild(pixelArtEditorLink);

        list.appendChild(taskList);
        list.appendChild(wordCounter);
        list.appendChild(currencyConverter);
        list.appendChild(pixelArtEditor);

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
