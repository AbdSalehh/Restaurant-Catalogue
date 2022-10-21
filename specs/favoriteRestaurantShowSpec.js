import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view.js';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter.js';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb.js';

describe('Showing all favorite restaurants', () => {
    let view;

    const renderTemplate = () => {
        view = new FavoriteRestaurantSearchView();
        document.body.innerHTML = view.getTemplate();
    };

    beforeEach(() => {
        renderTemplate();
    });

    describe('When no restaurants have been liked', () => {
        it('should ask for the favorite restaurants', () => {
            const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
            new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });
            expect(favoriteRestaurants.getAllRestaurant).toHaveBeenCalledTimes(1);
        });

        it('should show the information that no restaurants have been liked', (done) => {
            document.getElementById('posts').addEventListener('posts:updated', () => {
                expect(document.querySelectorAll('.restaurantIsEmpty').length).toEqual(1);
                done();
            });

            const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
            favoriteRestaurants.getAllRestaurant.and.returnValues([]);

            new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });
        });
    });

    describe('When favorite restaurants exist', () => {
        it('should show the restaurants', (done) => {
            document.getElementById('posts').addEventListener('posts:updated', () => {
                expect(document.querySelectorAll('.post-item').length).toEqual(2);
                done();
            });

            const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb, false);
            favoriteRestaurants.getAllRestaurant.and.returnValues([{
                id: 11,
                city: 'C',
                name: 'A',
                rating: 3,
                description: 'Sebuah restoran A',
            },
            {
                id: 22,
                city: 'D',
                name: 'B',
                rating: 4,
                description: 'Sebuah restoran B',
            },
            ]);

            new FavoriteRestaurantShowPresenter({
                view,
                favoriteRestaurants,
            });
        });
    });
});
