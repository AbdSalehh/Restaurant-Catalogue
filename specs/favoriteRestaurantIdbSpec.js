import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract.js';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb.js';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
            await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
        });
    });

    itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
