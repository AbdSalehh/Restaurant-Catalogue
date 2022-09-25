/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */

class headerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                   
            nav {
                background-color: #fff;
                color: #e7e7e7;
                display: flex;
                top: 0;
                align-items: center;
                position: sticky;
                border-bottom-width: 1px;
                border-bottom-style: solid;
                width: 100%;
                font-family: 'Boogaloo', cursive;
                padding: 15px 100px 15px 100px;
                justify-content: space-between;
            }

            nav li {
                display: inline;
                padding: 0 10px 0 10px;
                list-style-type: none;
                font-family: 'Poppins',
                    sans-serif;
            }

            nav li a {
                padding: 9px;
                display: inline-block;
                font-size: 18px;
                font-weight: 600;
                text-decoration: none;
                color: #1B2631;
            }

            .navigation {
                display: flex;
                width: 100%;
                padding: 0px;
                padding-bottom: 0;
            }

            .name {
                color: #1B2631;
                font-size: 39px;
                font-weight:bolder;
                text-decoration: none;
            }

            .nav a:hover {
                color: #95A5A6;
            }

            .logo{
                font-size: 30px;
                color: black;
                white-space: nowrap;
                cursor: pointer;
            }

            #hamburger {
                font-size: 40px;
                padding: 7px;
                text-decoration: none;
                color: black;
                display: none;
            }

            @media screen and (max-width: 950px) {
                nav {
                    padding: 15px 80px 15px 80px;
                }
            }

            @media screen and (max-width: 850px) {
                nav {
                    padding: 15px 60px 15px 60px;
                }
            }

            @media screen and (max-width: 720px) {
                nav {
                    padding: 15px 40px 15px 40px;
                }
            }

            @media screen and (max-width: 680px) {

                #hamburger {
                    display: block;
                }

                nav ul {
                    top: 98px;
                    width: 100%;
                    height: 100%;
                    position: fixed;
                    background: #fff;
                    transform: translate(1000px,0);
                    transition: transform 0.3s ease-in-out;
                }

                nav ul.open {
                    transform: translate(20%,0);
                    transition: transform 0.3s ease-in-out;
                }

                nav ul li {
                    display: block;
                    margin: 30px 0px 30px 0px;
                    line-height: 30px;
                    border-bottom: 1px solid #e7e7e7;
                }

                nav ul li a {
                    font-size: 20px;
                    color: black;
                    margin-left: 5px;
                }
            }

            @media screen and (max-width: 677px) {
                nav {
                    padding: 15px 30px 15px 30px;
                }
            }

            </style>
            <nav class="header-name">
                <div class="logo" href="#" tabindex="0" alt="logo">
                    <i class="fa fa-utensils"></i>
                    <a class="name">Hunger Apps</a>
                </div>
                <ul class="nav" id="navigation">
                    <li><a href="">Home</a></li>
                    <li><a href="#">Favorite</a></li>
                    <li><a href="https://github.com/Saleh-387/">About Us</a></li>
                </ul>
                <a id="hamburger" aria-label="navigation-menu" href="#">☰</a>
            </nav>
        `;
    }
}

customElements.define("header-bar", headerBar);
