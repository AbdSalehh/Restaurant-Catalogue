import { createRestaurantListTemplate } from '../../templates/template-creator.js';

class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
        <div class="content">
            <div class="fav-card">
                <div class="fav-title">Favorite Restaurants</div>
                <div class="search-container"> 
                    <input id="query" type="text" placeholder="Type restaurants name here..">
                    <div id="searchIcon">
                        <i class="fas fa-search"></i>
                    </div>
                </div>
            </div>
            <div class="posts" id="posts">
        </div>
    `;
    }

    runWhenUserIsSearching(callback) {
        document.getElementById('query').addEventListener('change', (event) => {
            callback(event.target.value);
        });
    }

    showFavoriteRestaurants(restaurants = []) {
        let html;
        if (restaurants.length) {
            html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantListTemplate(restaurant)), '');
        } else {
            html = this._getEmptyRestaurantTemplate();
        }

        document.getElementById('posts').innerHTML = html;

        document.getElementById('posts').dispatchEvent(new Event('posts:updated'));
    }

    _getEmptyRestaurantTemplate() {
        return `
        <style>
            #posts {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        </style>
        <div class="restaurantIsEmpty">
            <img src="../../../../public/images/illustrations/Waiters.webp" alt="Restaurant is empty">
            <p>Oops.. Restaurant is empty</p>
        </div>`;
    }
}

export default FavoriteRestaurantSearchView;
