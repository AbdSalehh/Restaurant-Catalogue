class restaurantDetail extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="detail_container"></div>
        `;
    }
}

customElements.define('restaurant-detail', restaurantDetail);
