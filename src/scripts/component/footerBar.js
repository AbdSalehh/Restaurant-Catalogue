class footerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container">
            <div class="foot-title">About Us</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div class="social-media">
                <div class="social-media-item"><i class="fa-brands fa-facebook-f"></i></div>
                <div class="social-media-item"><i class="fa-brands fa-twitter"></i></div>
                <div class="social-media-item"><i class="fa-brands fa-instagram"></i></div>
                <div class="social-media-item"><i class="fa-brands fa-youtube"></i></div>
            </div>
        </div>
        <div class="foot">
            <p>Belajar Menjadi Front-End Web Developer Expert &#169; 2022, Dicoding Academy</p>
        </div>
        `;
    }
}

customElements.define('footer-bar', footerBar);
