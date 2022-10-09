class contentList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>

            .content {
                padding: 0px 100px 0px 100px;
                width: 100%;
                margin: 60px auto;
                text-align: center;
            }

            .content__label {
                font-size: 32px;
                font-weight: bold;
            }

            .content__label::after {
                content: '';
                margin-top: 16px;
                display: block;
                border-bottom: 1px solid #eeeeee;
            }

            /*
            * post
            */

            .posts{
                margin: 32px auto auto;
                text-align: left;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 18px 16px;
            }
            
            /*
            * post item
            */

            .post-item {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                width: 100%;
                border-radius: 5px;
                overflow: hidden;
            }

            .post-item img{
                object-fit: cover;
                height: 200px;
            }

            .post-item__content {
                padding: 16px;
            }

            .post-item__content i{
                font-size: 14px;
                color: #F1C40F;
            }

            .post-item__content span {
                font-size: 14px;
                margin-top: 2px;
            }

            .location{
                text-align: center;
                border-radius: 0 3px 3px 0;
                padding: 5px 10px 5px 10px;
                display: flex;
                position: absolute;
                font-size: 15px;
                background: rgb(229, 231, 233);
                margin-top: 20px;
                font-weight: 600;
                z-index: 1;
            }

            .post-item__thumbnail {
                width: 100%;
                z-index: 0;
            }

            .post-item__thumbnail:hover{
                transform: scale(1.1);
                transition: transform 0.7s ease-in-out;
            }
            
            .post-item__date {
                font-size: 15px;
                font-weight: 600;
            }

            .post-item__date__author {
                color: red;
                text-decoration: none;
            }

            .post-item__title {
                font-weight: 600;
                font-size: 18px;
                margin-top: 16px;
                transition: 0.3s opacity;
            }

            .post-item__title:hover {
                opacity: 0.5;
            }

            .post-item__title a {
                text-decoration: none;
                color: inherit;
                padding: 10px 0 10px 0;
            }

            .post-item__description {
                margin-top: 16px;
                font-size: 14px;
                line-height: 1.5em;
                text-align: justify;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;
            }

            .another-restaurants{
                width: 100%;
                background: #F8F9F9;
                padding: 20px 100px 20px 100px;
            }

            .another-restaurants h1{
                text-align: center;
                border-bottom: 1px solid #BDC3C7;
            }

            .recommendation {
                width: 100%;
                border-bottom: 1px solid #eeeeee;
                display: flex;
                padding: 30px 0 30px 0;
            }

            .recommendation:last-child {
                border-bottom: none;
            }

            .recommendation img {
                width: 50%;
                max-height: 350px;
                border-radius: 7px;
            }

            .middle {
                flex-direction: row-reverse;
            }
            
            .card-content {
                width: 50%;
                margin-left: 20px;
            }

            .card-content p{
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 6;
                -webkit-box-orient: vertical;
            }

            .middle .card-content {
                margin-left: 0;
                margin-right: 20px;
            }

            .card-content p {
                text-align: justify;
            }

            .card-content h2, .card-content .post-item__date, .card-content .recom-location, .card-content p {
                margin-bottom: 10px;
            }

            .post-item__date i {
                color: #F1C40F;
            }

            .card-content button{
                padding: 13px 25px 13px 25px;
                outline: none;
                background-color: transparent;
                border: 1px solid #000;
                color: #000;
                border-radius: 5px;
                cursor: pointer;
                font-size: 18px;
                font-weight: 600;
                margin-top: 5px;
            }

            .card-content button:hover, .card-content button:focus{
                background-color: #000;
                color: #fff;
            }

            .service{
                width: 100%;
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
            }

            .service-item {
                padding: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 20px;
                background: #F8F9F9;
                border-radius: 7px;
            }

            .service-item:hover{
                box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
                background-color: white;
                transition: all 0.3s ease-in-out;
            }

            .service-item .icon {
                display: flex;
                font-size: 30px;
                color: #000;
                border: 2px solid #000;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                justify-content: center;
                align-items: center;
            }

            .service-item i {
                padding: 7px;
            }

            .service-item p {
                font-size: 15px;
            }

            .skeleton {
                background: #c1c1c1;
                min-height: 30px;
                position: relative;
                overflow: hidden;
            }

            .skeleton::before {
                content: '';
                position: absolute;
                display: block;
                width: 100%;
                height: 100%;
                background: linear-gradient(to right, transparent, #d3d3d3, transparent);
                transform: translate(-100%);
                animation: loading 1s linear infinite alternate;
            }

            .renderImg img {
                width: 1px;
                height: 1px;
            }

            @keyframes loading {
                100% {
                    transform: translate(100%);
                }
            }
            @media screen and (max-width: 1149px) {
                .card-content p{
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 5;
                    -webkit-box-orient: vertical;
                }
            }

            @media screen and (max-width: 1000px) {
                .recommendation{
                    flex-direction: column;
                    padding: 30px 0 30px 0;
                }

                .recommendation img{
                    width: 100%;
                    margin-bottom: 20px;
                }

                .card-content{
                    width: 100%;
                    margin: 0;
                }
            }

            @media screen and (max-width: 950px) {
                .content {
                    padding: 0px 80px 0px 80px;
                }

                .another-restaurants{
                    padding: 20px 80px 20px 80px;
                }

                .posts, .service{
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media screen and (max-width: 850px) {
                .content {
                    padding: 0px 60px 0px 60px;
                }

                .another-restaurants{
                    padding: 20px 60px 20px 60px;
                }
            }

            @media screen and (max-width: 720px) {
                .content {
                    padding: 0px 40px 0px 40px;
                }

                .another-restaurants{
                    padding: 20px 40px 20px 40px;
                }
            }

            @media screen and (max-width: 677px) {

                .content {
                    padding: 0px 30px 0px 25px;
                }

                .another-restaurants{
                    padding: 20px 30px 20px 25px;
                }
            }

            @media screen and (max-width: 566px) {
                .posts{
                    grid-template-columns: repeat(1, 1fr);
                }
            }

            @media screen and (max-width: 500px) {
                .service{
                    grid-template-columns: repeat(1, 1fr);
                }
            }

            </style>
            <div class="content">
                <h1 class="content__label" id="main-content main-post">Explore Restaurants</h1>
                <div class="posts"></div>
            </div>
            <div class="another-restaurants">
                <div class="recommendation first"></div>
                <div class="recommendation middle"></div>
                <div class="recommendation third"></div>
            </div>
            <div class="content">
                <h1 class="content__label menuLabel" id="main-content">Our Menu</h1>
                <div class="service">
                    <div class="service-item">
                        <div class="icon"><i class="fa-solid fa-bowl-food"></i></div>
                        <h2>Japanese Food</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .</p>
                    </div>
                    <div class="service-item">
                        <div class="icon"><i class="fa-solid fa-wine-glass"></i></div>
                        <h2>Fresh drinks</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .</p>
                    </div>
                    <div class="service-item">
                        <div class="icon"><i class="fa-solid fa-fish"></i></div>
                        <h2>Seafood</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .</p>
                    </div>
                </div>  
            </div>
            <div class="renderImg">
                <img src="../../../public/images/error.webp" alt="404">
            </div>
        `;
    }
}

customElements.define("content-list", contentList);
