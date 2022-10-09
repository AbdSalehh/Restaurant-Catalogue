const errorPage = (error) => {
    const body = document.querySelector("body");
    const errorPg = document.createElement("div");
    errorPg.setAttribute("class", "error-page");
    body.innerHTML = "";
    errorPg.innerHTML = `
        <style>
        
        .error-page__content {
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 100px 0 100px;
            font-family: 'Roboto', sans-serif;
        }
        
        .error-page__content img {
            max-width: 450px;
            max-height: 450px;
        }

        .error-page__title {
            margin-top: -10px;
            font-size: 50px;
            font-weight: 800;
        }

        .error-page__message {
            font-size: 25px;
            font-weight: 500;
            margin-top: 40px;
            margin-bottom: 20px;
        }
        .error-page__desc {
            font-size: 25px;
            font-weight: 500;
            margin-bottom: 15px;
        }

        .error-page__content__text button{
            padding: 13px 25px 13px 25px;
            outline: none;
            background-color: transparent;
            border: 1px solid #000;
            color: #000;
            border-radius: 5px;
            cursor: pointer;
            font-size: 18px;
            font-weight: 600;
        }

        .error-page__content__text button:hover, .error-page__content__text button:focus{
            background-color: #000;
            color: #fff;
        }

        .click-here {
            font-size: 20px;
            font-weight: 400;
            color: #839192;
            margin-bottom: 20px;
        }

        @media screen and (max-width: 1074px) {
            .error-page__content {
                padding: 0 70px 0 70px;
            }
        }

        @media screen and (max-width: 1050px) {
            .error-page__content {
                padding: 0 50px 0 50px;
            }
        }

        @media screen and (max-width: 1030px) {
            .error-page__content {
                padding: 0 30px 0 30px;
            }

            .error-page__content img {
                max-width: 350px;
                max-height: 350px;
            }

            .error-page__title {
                font-size: 30px;
            }

            .error-page__message {
                font-size: 19px;
            }
            .error-page__desc {
                font-size: 19px;
            }
            .click-here {
                font-size: 16px;
            }
        }

        @media screen and (max-width: 772px) {
            .error-page__content img {
                max-width: 300px;
                max-height: 300px;
            }
        }

        @media screen and (max-width: 1030px) {

            .error-page__title {
                font-size: 25px;
            }

            .error-page__message {
                font-size: 17px;
            }
            .error-page__desc {
                font-size: 17px;
            }
            .click-here {
                font-size: 14px;
            }
        }

        @media screen and (max-width: 672px) {
            .error-page__message {
                margin-top: 30px;
                margin-bottom: 15px;
            }

            .error-page__content {
                flex-direction: column-reverse;
                align-items: center;
                justify-content: center;
            }

            .error-page__title {
                margin-top: 10px;
            }

            .error-page__content img {
                margin-top: 40px;
            }

            .error-page__content__text button {
                margin-bottom: 40px;
            }            

        }

        </style>
        <div class="error-page__content">
            <div class="error-page__content__text">
                <div class="error-page__title">ERROR</div>
                <p class="error-page__message">${error}</p>
                <div class="error-page__desc">Your device is offline. Check your internet connection, then refresh the page.</div>
                <p class="click-here">Click the reload button below to refresh the page</p>
                <button onclick="window.location.reload()">Refresh</button>
            </div>
            <img src="../../../public/images/error.webp" alt="404">
        </div>
    `;
    body.appendChild(errorPg);
};

export default errorPage;
