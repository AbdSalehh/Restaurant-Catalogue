class skipToContent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <a class="skip-link">Skip to main content</a>
        `;
    }
}

customElements.define('skip-to-content', skipToContent);
