class Loader extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .loader {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: #f7f9fb;
                    transition: opacity 0.75s, visibility 0.75s;
                    z-index: 999;
                }

                .loader-hidden{
                    opacity: 0;
                    visibility: hidden;
                }

                .loader::after {
                    content: "";
                    width: 75px;
                    height: 75px;
                    border: 15px solid #dddddd;
                    border-top-color: #2E4053;
                    border-radius: 50%;
                    animation: loading 0.75s ease infinite;
                }

                @keyframes loading {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

            </style>

            <div class="loader"></div>
    `;
    }
}

customElements.define("loader-component", Loader);
