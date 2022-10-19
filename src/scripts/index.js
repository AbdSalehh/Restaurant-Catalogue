import "regenerator-runtime"; /* for async await transpile */
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/style.css";
import "../styles/responsive.css";
import "./component/skipToContent.js";
import "./component/headerBar.js";
import "./component/hero.js";
import "./component/restaurantDetail.js";
import "./component/contentList.js";
import "./component/footerBar.js";
import "./component/loader.js";
import App from "./views/app.js";
import swRegister from "./utils/sw-register.js";

const app = new App({
    button: document.querySelector("#hamburger"),
    drawer: document.querySelector("#navigation"),
    content: document.querySelector("main"),
    nav: document.querySelector("#navigation>li>a"),
    favNav: document.querySelector(".fav-nav"),
});

window.addEventListener("hashchange", () => {
    app.renderPage();
});

window.addEventListener("load", async () => {
    app.renderPage();
    await swRegister();

    const loader = document.querySelector("loader-component");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});
