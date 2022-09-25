/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable max-len */

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

            .posts, .popular-posts {
                margin: 32px auto auto;
                text-align: left;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 20px;
            }

            .popular-posts {
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 30px;
            }

            .content .popular {
                margin-top: 40px;
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
            }

            .post-item__thumbnail {
                width: 100%;
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
            }

            @media screen and (max-width: 950px) {
                .content {
                    padding: 0px 80px 0px 80px;
                }
            }

            @media screen and (max-width: 850px) {
                .content {
                    padding: 0px 60px 0px 60px;
                }
            }

            @media screen and (max-width: 720px) {
                .content {
                    padding: 0px 40px 0px 40px;
                }
            }

            @media screen and (max-width: 677px) {
                .posts, .popular-posts {
                    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
                    gap: 15px;
                    grid-row-gap: 25px;
                }

                .content {
                    padding: 0px 30px 0px 25px;
                }
            }

            </style>
            <div class="content">
                <h1 class="content__label" id="main-content">Explore Restaurants</h1>
                <div class="posts">
                </div>
                <h1 class="content__label popular" id="main-content">Popular Restaurants</h1>
                <div class="popular-posts">
                </div>
            </div>
        `;
    }
}

customElements.define("content-list", contentList);
