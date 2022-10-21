import { createSkeletonRestaurantTemplate } from '../views/templates/template-creator.js';

class contentList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
            <div class="renderImg">
                <img src="../../public/images/error.webp" alt="404" width="1" height="1">
                <img src="../../public/images/Waiters.webp" alt="Restaurant is empty" width="1" height="1">
            </div>
            <div class="content">
                <h1 class="content__label" id="main-content">Explore Restaurants</h1>
                <div class="posts">
                    ${createSkeletonRestaurantTemplate(17)}
                </div>
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
        `;
    }
}

customElements.define('content-list', contentList);
