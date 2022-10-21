import UrlParser from '../../routes/url-parser.js';
import RestaurantDbSource from '../../data/restaurantdb-source.js';
import postReview from '../../utils/addReview.js';
import { createRestaurantDetailTemplate } from '../templates/template-creator.js';
import LikeButtonPresenter from '../../utils/like-button-presenter.js';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';

const Detail = {
    async render() {
        return `
      <restaurant-detail></restaurant-detail>
    `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestaurantDbSource.detailRestaurant(url.id);
        const detailContainer = document.querySelector('.detail_container');
        const hero = document.querySelector('hero-bar');
        const skipLink = document.querySelector('skip-to-content>a');
        const mainContent = document.querySelector('#main-post');

        mainContent.setAttribute('tabindex', '-1');
        skipLink.setAttribute('href', '#likeButton');

        hero.style.display = 'none';
        detailContainer.innerHTML = createRestaurantDetailTemplate(resto);

        LikeButtonPresenter.init({
            likeButtonContainer: document.querySelector('.like_button'),
            favoriteRestaurants: FavoriteRestaurantIdb,
            restaurant: {
                id: resto.id,
                name: resto.name,
                pictureId: resto.pictureId,
                description: resto.description,
                city: resto.city,
                rating: resto.rating,
            },
        });

        const postReviewContainer = document.querySelector('.add_review');
        const nameInput = postReviewContainer.querySelector('.inputName');
        const reviewInput = postReviewContainer.querySelector('.inputDescription');

        postReviewContainer.addEventListener('submit', (event) => {
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
