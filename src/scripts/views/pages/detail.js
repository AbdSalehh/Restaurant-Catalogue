import UrlParser from "../../routes/url-parser";
import RestaurantDbSource from "../../data/restaurantdb-source";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
      <restaurant-detail></restaurant-detail>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('.detail_container');
    const hero = document.querySelector('hero-bar');
    hero.innerHTML = "";
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};
 
export default Detail;
