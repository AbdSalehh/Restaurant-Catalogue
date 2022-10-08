/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */

class skipToContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .skip-link {
                    position: absolute;
                    top: -40px;
                    left: 10px;
                    background: #fff;
                    color: #000;
                    padding: 10px 15px;
                    z-index: 200;
                    transition: all 0.3s ease-in-out;
                    text-decoration: none;
                }
                .skip-link:focus {
                    top: 10px;
                }
            </style>
            <a href="#main-content" class="skip-link">Skip to main content</a>
        `;
    }
}

customElements.define("skip-to-content", skipToContent);
