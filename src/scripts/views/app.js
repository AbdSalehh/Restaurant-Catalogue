import DrawerInitiator from "../utils/drawer-initiator.js";
import UrlParser from "../routes/url-parser.js";
import routes from "../routes/routes.js";
import "../component/skipToContent.js";

class App {
    constructor({
        button, drawer, content, nav, favNav,
    }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;
        this._nav = nav;
        this._favNav = favNav;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            nav: this._nav,
            favNav: this._favNav,
        });
    // kita bisa menginisiasikan komponen lain bila ada
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._content.innerHTML = await page.render();
        await page.afterRender();

        const skipLinkElem = document.querySelector(".skip-link");
        skipLinkElem.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector("#main-post").focus();
        });
    }
}

export default App;
