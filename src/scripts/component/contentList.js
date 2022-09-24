class contentList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>

            .latest {
                padding: 0px 100px 0px 100px;
                width: 100%;
                margin: 60px auto;
                text-align: center;
            }

            .latest__label {
                font-size: 32px;
                font-weight: bold;
            }

            .latest__label::after {
                content: '';
                margin-top: 16px;
                display: block;
                border-bottom: 1px solid #eeeeee;
            }

            /*
            * post
            */

            .posts {
                margin: 32px auto auto;
                text-align: left;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                gap: 20px;
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
            }

            .post-item__description {
                margin-top: 16px;
                font-size: 14px;
                line-height: 1.5em;
                text-align: justify;
                text-overflow: ellipsis;
                overflow: hidden;
            }

            .read-more{
                display: flex;
                margin-top: 10px;
                font-size: 14px;
                font-weight: 600;
                color: #3498DB;
                justify-content: flex-end;
            }

            @media screen and (max-width: 950px) {
                .latest {
                    padding: 0px 80px 0px 80px;
                }
            }

            @media screen and (max-width: 850px) {
                .latest {
                    padding: 0px 60px 0px 60px;
                }
            }

            @media screen and (max-width: 720px) {
                .latest {
                    padding: 0px 40px 0px 40px;
                }
            }

            @media screen and (max-width: 677px) {
                .posts {
                    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
                    gap: 15px;
                }

                .latest {
                    padding: 0px 30px 0px 25px;
                }
            }
            </style>
            <div class="latest">
                <h1 class="latest__label"  id="main-content">Explore Restaurant</h1>
                <div class="posts">
                </div>
            </div>
        `;
    }
}

customElements.define("content-list", contentList);