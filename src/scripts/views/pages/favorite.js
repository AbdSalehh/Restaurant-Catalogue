import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb.js";
import { createRestaurantListTemplate } from "../templates/template-creator.js";

const Favorite = {
    async render() {
        return `
      <content-list></content-list>
    `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
        const restoList = document.querySelector(".posts");
        const hero = document.querySelector("hero-bar");
        const contentLabel = document.querySelector(".content__label");
        const contentLabelMenu = document.querySelector(".menuLabel");
        const anotherRestaurants = document.querySelector(".another-restaurants");
        const menu = document.querySelector(".service");
        const skipLink = document.querySelector("skip-to-content>a");
        const mainContent = document.querySelector("#main-post");

        mainContent.setAttribute("tabindex", "-1");
        skipLink.setAttribute("href", "#main-post");

        restoList.style.marginTop = "110px";
        hero.style.display = "none";
        contentLabel.style.display = "none";
        contentLabelMenu.style.display = "none";
        anotherRestaurants.style.display = "none";
        menu.style.display = "none";
        restaurants.forEach((restaurant) => {
            restoList.innerHTML += createRestaurantListTemplate(restaurant);
        });
    },
};

export default Favorite;
