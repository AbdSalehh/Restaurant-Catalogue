class headerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <nav class="header-name">
                <div class="logo" href="#" tabindex="0" alt="logo">
                    <i class="fa fa-utensils"></i>
                    <a class="name">Hunger Apps</a>
                </div>
                <a id="hamburger" aria-label="navigation-menu" href="">☰</a>
                <ul class="nav" id="navigation">
                    <li><a href="#/home">Home</a></li>
                    <li><a href="#/favorite" class="fav-nav">Favorite</a></li>
                    <li><a href="https://github.com/Saleh-387/">About Us</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define("header-bar", headerBar);
