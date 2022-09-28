/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

class footerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>

        .container {
            border-top: 1px solid #e7e7e7;
            color: #1B2631;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            padding: 0px 160px 0px 160px;
            text-align: center;
            justify-content: center;
            align-items: center;
        }

        .container .foot-title{
            font-size: 20px;
            font-weight: 600;
            margin-top: 20px;
        }

        .container p{
            margin: 15px 0 15px 0;
            font-size: 14px;
        }

        .social-media{
            display: flex;
            margin-bottom: 20px;
        }

        .social-media .social-media-item{
            padding: 0 10px 0 10px;
            margin: 0 10px 0 10px;
            border: 1px solid #e7e7e7;
            border-radius: 4px;
            cursor: pointer;
        }

        .social-media .social-media-item:hover{
            background-color: black;
            color: white;
        }

        .foot {
            border-top: 1px solid #e7e7e7;
            background-color: #fff;
            padding : 0px 15px 0px 15px;
        }

        .foot p {
            font-size: 13px;
            font-weight: 600;
            text-align: center;
            color: #1B2631;
            margin-bottom: 10px;
            margin-top: 10px;
        }

        @media screen and (max-width: 950px) {
            .container {
                padding: 0px 60px 0px 60px;
            }

        }

        @media screen and (max-width: 850px) {
            .container {
                padding: 0px 40px 0px 40px;
            }
            
        }

        @media screen and (max-width: 800px) {

        }

        @media screen and (max-width: 740px) {
            
        }

        @media screen and (max-width: 720px) {
            .container {
                padding: 0px 20px 0px 20px;
            }
        }

        @media screen and (max-width: 677px) {
            .container {
                padding: 0px 10px 0px 10px;
                flex-direction: column;
            }
        }
        </style>
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

customElements.define("footer-bar", footerBar);
