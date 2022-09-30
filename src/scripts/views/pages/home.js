import RestaurantDbSource from "../../data/restaurantdb-source";
import { createRestaurantListTemplate } from "../templates/template-creator";

const Home = {
    async render() {
        return `
      <content-list></content-list>
    `;
    },

    async afterRender() {
        const restaurants = await RestaurantDbSource.restaurantList();
        const restoList = document.querySelector(".posts");
        const popularRestoList = document.querySelector(".popular-posts");
        restaurants.forEach((restaurant) => {
            if (restaurant.rating < 4.8) {
                restoList.innerHTML += createRestaurantListTemplate(restaurant);
            } else {
                popularRestoList.innerHTML += createRestaurantListTemplate(restaurant);
            }
        });
    },
};

export default Home;
