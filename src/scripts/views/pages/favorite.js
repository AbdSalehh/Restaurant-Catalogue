import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view.js';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter.js';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter.js';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
    async render() {
        return view.getTemplate();
    },

    async afterRender() {
        const restoList = document.querySelector('.posts');
        const skipLink = document.querySelector('skip-to-content>a');
        const mainContent = document.querySelector('#main-post');
        const hero = document.querySelector('hero-bar');

        hero.style.display = 'none';
        mainContent.setAttribute('tabindex', '-1');
        skipLink.setAttribute('href', '#main-post');

        restoList.style.marginTop = '110px';
        new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
        new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    },
};

export default Favorite;
