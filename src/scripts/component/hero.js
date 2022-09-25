/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

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
                    min-height: 500px;
                    width: 100%;
                    text-align: center;
                    background-image: linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url("../public/images/heros/hero-image_1.jpg");
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

                button{
                    padding: 13px 25px 13px 25px;
                    outline: none;
                    background-color: transparent;
                    border: 1px solid #fff;
                    color: #fff;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 18px;
                    font-weight: 600;
                    margin-top: 30px;
                }

                button:hover{
                    background-color: #fff;
                    color: #000;
                }

                button:focus {
                    background-color: #fff;
                    color: #000;
                }
                
                @media screen and (max-width: 820px) {
                    .hero__title, .hero__tagline {
                        padding: 0 20px 0 20px;
                    }
                }

                @media screen and (max-width: 588px) {
                    .hero__title {
                        font-size: 25px;
                    }

                    .hero__tagline {
                        font-size: 18px;
                    }
                }

            </style>
            <div class="hero">
                <div class="hero__inner">
                <h1 class="hero__title">Selamat datang di Website Restoran</h1>
                <p class="hero__tagline">Disini kami menyediakan restoran dari beberapa wilayah di Indonesia yang bisa anda lihat dibawah ini</p>
                <button>Explore</button>
                </div>
            </div>
          `;
    }
}

customElements.define("hero-bar", Hero);
