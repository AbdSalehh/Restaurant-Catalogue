class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
          <style>
                    
            .hero {
                display: flex;
                align-items: center;
                min-height: 420px;
                width: 100%;
                text-align: center;
                margin-top: 30px;
                background: url("../public/images/heros/hero-image_1.jpg");
                background-position: center;
                background-color: green;
            }

            .hero__inner {
                margin: 0 auto;
                max-width: 800px;
            }

            .hero__title {
                color: #fff;
                font-weight: 600;
                font-size: 36px;
            }

            .hero__tagline {
                color: #fff;
                margin-top: 16px;
                font-size: 18px;
                font-weight: 300;
            }

          </style>
            <div class="hero">
                <div class="hero__inner">
                <h1 class="hero__title">Bangun Karirmu Sebagai Developer Profesional</h1>
                <p class="hero__tagline">Jadilah tuan rumah di negeri sendiri dengan belajar langsung dari para inovator dan
                    developer expert</p>
                </div>
            </div>
          `;
    }
}

customElements.define("hero-bar", Hero);