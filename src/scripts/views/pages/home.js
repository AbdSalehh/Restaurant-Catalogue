import RestaurantDbSource from '../../data/restaurantdb-source.js';
import { createRestaurantListTemplate } from '../templates/template-creator.js';
import CONFIG from '../../globals/config.js';

const Home = {
    async render() {
        return `
      <content-list></content-list>
    `;
    },

    async afterRender() {
        const restaurants = await RestaurantDbSource.restaurantList();
        const firstRecommendation = document.querySelector('.first');
        const secondRecommendation = document.querySelector('.middle');
        const thirdRecommendation = document.querySelector('.third');
        const restoList = document.querySelector('.posts');
        const skipLink = document.querySelector('skip-to-content>a');
        const hero = document.querySelector('hero-bar');
        const mainContent = document.querySelector('#main-post');

        const small = 'small/';
        const medium = 'medium/';
        const large = 'large/';

        mainContent.setAttribute('tabindex', '-1');
        skipLink.setAttribute('href', '#main-post');

        restoList.innerHTML = '';
        hero.style.display = 'block';

        restaurants.forEach((restaurant) => {
            const template = `
                <picture>
                    <source class="lazyload" media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + small + restaurant.pictureId}" width="560" height="350">
                    <source class="lazyload" media="(max-width: 1200px)" srcset="${CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId}" width="560" height="350">
                    <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + large + restaurant.pictureId}" alt="Restoran ${restaurant.name || '-'} Kota ${restaurant.city}"width="560" height="350">
                </picture>
                <div class="card-content">
                    <h2>${restaurant.name}</h2>
                    <div class="post-item__date">Rating : <i class="fa-solid fa-star"></i> ${restaurant.rating}</div>
                    <div class="recom-location"><i class="fa-solid fa-map-marker-alt"></i> ${restaurant.city}</div>
                    <p>${restaurant.description}</p>
                    <button onclick="window.location.href = '/#/detail/${restaurant.id}';">Read More</button>
                </div>
            `;

            if (restaurant.rating < 4.8) {
                restoList.innerHTML += createRestaurantListTemplate(restaurant);
            } else if (restaurant.rating === 5) {
                firstRecommendation.innerHTML += template;
            } else if (restaurant.rating === 4.9) {
                secondRecommendation.innerHTML += template;
            } else {
                thirdRecommendation.innerHTML += template;
            }
        });
    },
};

export default Home;
