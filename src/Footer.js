import iconX from "./icon/x.svg";
import iconFacebook from "./icon/facebook.svg";
import iconInstagram from "./icon/instagram.svg";

class Footer {
    constructor(copyRightHolder, copyRightRights) {
        this.copyRightHolder = copyRightHolder;
        this.copyRightRights = copyRightRights;
        this.footer = document.getElementsByTagName("footer")[0];
    }

    displayFooter() {
        this.footer.appendChild(this.getTechnology());
        this.footer.appendChild(this.getExternal());
        this.footer.appendChild(this.getCopyright());
    }

    getTechnology() {
        let technology = document.createElement("article");
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

        let simpleIcons = document.createElement("li");
        let simpleIconsLink = document.createElement("a");
        simpleIconsLink.setAttribute("href", "https://simpleicons.org/");
        simpleIconsLink.setAttribute("target", "_blank");
        simpleIconsLink.textContent = "Simple Icons";
        simpleIcons.appendChild(simpleIconsLink);

        let fontSource = document.createElement("li");
        let fontSourceLink = document.createElement("a");
        fontSourceLink.setAttribute("href", "https://fontsource.org/");
        fontSourceLink.setAttribute("target", "_blank");
        fontSourceLink.text = "Font Source";
        fontSource.appendChild(fontSourceLink);

        list.appendChild(npm);
        list.appendChild(webpack);
        list.appendChild(dateFNS);
        list.appendChild(simpleIcons);
        list.appendChild(fontSource);

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
        let external = document.createElement("article");
        external.setAttribute("id", "footer-external");

        external.appendChild(this.getExternalLegal());
        external.appendChild(this.getExternalSocial());

        return external;
    }

    getExternalLegal() {
        let legal = document.createElement("ul");
        legal.classList.add("external-list");

        let privacyPolicy = document.createElement("li");
        let privacyPolicyLink = document.createElement("a");
        privacyPolicyLink.setAttribute("href", "#");
        privacyPolicyLink.textContent = "Privacy Policy";
        privacyPolicy.appendChild(privacyPolicyLink);

        let termsAndConditions = document.createElement("li");
        let termsAndConditionsLink = document.createElement("a");
        termsAndConditionsLink.setAttribute("href", "#");
        termsAndConditionsLink.textContent = "Terms and Conditions";
        termsAndConditions.appendChild(termsAndConditionsLink);

        let cookies = document.createElement("li");
        let cookiesLink = document.createElement("a");
        cookiesLink.setAttribute("href", "#");
        cookiesLink.textContent = "Cookies";
        cookies.appendChild(cookiesLink);

        legal.appendChild(privacyPolicy);
        legal.appendChild(termsAndConditions);
        legal.appendChild(cookies);

        return legal;
    }

    getExternalSocial() {
        let social = document.createElement("ul");
        social.classList.add("external-list");

        let x = document.createElement("li");
        let xLink = document.createElement("a");
        xLink.setAttribute("href", "https://x.com/");
        xLink.setAttribute("target", "_blank");
        let xIcon = document.createElement("img");
        xIcon.setAttribute("alt", "X social media icon");
        xIcon.setAttribute("src", iconX);
        xLink.appendChild(xIcon);
        x.appendChild(xLink);

        let facebook = document.createElement("li");
        let facebookLink = document.createElement("a");
        facebookLink.setAttribute("href", "https://www.facebook.com/");
        facebookLink.setAttribute("target", "_blank");
        let facebookIcon = document.createElement("img");
        facebookIcon.setAttribute("alt", "Facebook social media icon");
        facebookIcon.setAttribute("src", iconFacebook);
        facebookLink.appendChild(facebookIcon);
        facebook.appendChild(facebookLink);

        let instagram = document.createElement("li");
        let instagramLink = document.createElement("a");
        instagramLink.setAttribute("href", "https://www.instagram.com/");
        instagramLink.setAttribute("target", "_blank");
        let instagramIcon = document.createElement("img");
        instagramIcon.setAttribute("alt", "Instagram social media icon");
        instagramIcon.setAttribute("src", iconInstagram);
        instagramLink.appendChild(instagramIcon);
        instagram.appendChild(instagramLink);

        social.appendChild(x);
        social.appendChild(facebook);
        social.appendChild(instagram);

        return social;
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
