import RestaurantDbSource from "../../data/restaurantdb-source";
import { createRestaurantListTemplate } from "../templates/template-creator";
import CONFIG from "../../globals/config";

const Home = {
    async render() {
        return `
      <content-list></content-list>
    `;
    },

    async afterRender() {
        const restaurants = await RestaurantDbSource.restaurantList();
        const firstRecommendation = document.querySelector(".first");
        const secondRecommendation = document.querySelector(".middle");
        const thirdRecommendation = document.querySelector(".third");
        const restoList = document.querySelector(".posts");

        const hero = document.querySelector("hero-bar");
        hero.style.display = "block";
        restaurants.forEach((restaurant) => {
            if (restaurant.rating < 4.8) {
                restoList.innerHTML += createRestaurantListTemplate(restaurant);
            } else if (restaurant.rating === 5) {
                firstRecommendation.innerHTML += `
                        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="recommendation">
                        <div class="card-content">
                            <h2>${restaurant.name}</h2>
                            <div class="post-item__date">Rating : <i class="fa-solid fa-star"></i> ${restaurant.rating}</div>
                            <div class="recom-location"><i class="fa-solid fa-map-marker-alt"></i> ${restaurant.city}</div>
                            <p>${restaurant.description}</p>
                            <button onclick="window.location.href = '/#/detail/${restaurant.id}';">Read More</button>
                        </div>
                    `;
            } else if (restaurant.rating === 4.9) {
                secondRecommendation.innerHTML += `
                        <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="recommendation">
                        <div class="card-content">
                            <h2>${restaurant.name}</h2>
                            <div class="post-item__date">Rating : <i class="fa-solid fa-star"></i> ${restaurant.rating}</div>
                            <div class="recom-location"><i class="fa-solid fa-map-marker-alt"></i> ${restaurant.city}</div>
                            <p>${restaurant.description}</p>
                            <button onclick="window.location.href = '/#/detail/${restaurant.id}';">Read More</button>
                        </div>
                    `;
            } else {
                thirdRecommendation.innerHTML += `
                    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="recommendation">
                        <div class="card-content">
                            <h2>${restaurant.name}</h2>
                            <div class="post-item__date">Rating : <i class="fa-solid fa-star"></i> ${restaurant.rating}</div>
                            <div class="recom-location"><i class="fa-solid fa-map-marker-alt"></i> ${restaurant.city}</div>
                            <p>${restaurant.description}</p>
                            <button onclick="window.location.href = '/#/detail/${restaurant.id}';">Read More</button>
                        </div>
                    `;
            }
        });
    },
};

export default Home;
