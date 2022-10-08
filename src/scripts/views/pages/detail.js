import UrlParser from "../../routes/url-parser";
import RestaurantDbSource from "../../data/restaurantdb-source";
import postReview from "../../utils/addReview";
import { createRestaurantDetailTemplate } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
    async render() {
        return `
      <restaurant-detail></restaurant-detail>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestaurantDbSource.detailRestaurant(url.id);
        const detailContainer = document.querySelector(".detail_container");
        const hero = document.querySelector("hero-bar");

        hero.style.display = "none";
        detailContainer.innerHTML = createRestaurantDetailTemplate(resto);
        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector(".like_button"),
            restaurant: {
                id: resto.id,
                name: resto.name,
                pictureId: resto.pictureId,
                description: resto.description,
                city: resto.city,
                rating: resto.rating,
            },
        });

        const postReviewContainer = document.querySelector(".add_review");
        const nameInput = postReviewContainer.querySelector(".inputName");
        const reviewInput = postReviewContainer.querySelector(".inputDescription");

        postReviewContainer.addEventListener("submit", (event) => {
            event.preventDefault();

            postReview({
                url: url.id,
                name: nameInput.value,
                review: reviewInput.value,
            });

            postReviewContainer.reset();
        });
    },
};

export default Detail;
