import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter.js';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb.js';
import FavoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-view.js';

describe('Searching restaurants', () => {
    let presenter;
    let favoriteRestaurants;
    let view;

    const searchRestaurants = (query) => {
        const queryElement = document.getElementById('query');
        queryElement.value = query;
        queryElement.dispatchEvent(new Event('change'));
    };

    const setRestaurantSearchContainer = () => {
        view = new FavoriteRestaurantSearchView();
        document.body.innerHTML = view.getTemplate();
    };

    const constructPresenter = () => {
        favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
        presenter = new FavoriteRestaurantSearchPresenter({
            favoriteRestaurants,
            view,
        });
    };

    beforeEach(() => {
        setRestaurantSearchContainer();
        constructPresenter();
    });

    describe('When query is not empty', () => {
        it('should be able to capture the query typed by the user', () => {
            searchRestaurants('restoran a');

            expect(presenter.latestQuery).toEqual('restoran a');
        });

        it('should ask the model to search for liked restaurants', () => {
            searchRestaurants('restoran a');

            expect(favoriteRestaurants.searchRestaurants)
                .toHaveBeenCalledWith('restoran a');
        });

        it('should show the found restaurants', () => {
            presenter._showFoundRestaurants([{ id: 1 }]);
            const foundRestaurants = document.querySelectorAll('.post-item');
            expect(foundRestaurants.length).toEqual(1);

            presenter._showFoundRestaurants([{ id: 1, name: 'Satu' }, { id: 2, name: 'Dua' }]);
            expect(document.querySelectorAll('.post-item').length).toEqual(2);
        });

        it('should show the name of the found restaurants', () => {
            presenter._showFoundRestaurants([{ id: 1, name: 'Satu' }]);
            expect(document.querySelectorAll('.restaurant_name').item(0).textContent)
                .toEqual('Satu');
        });

        it('should show - when the restaurant returned does not contain a name', (done) => {
            document.getElementById('posts').addEventListener('posts:updated', () => {
                const restaurantNames = document.querySelectorAll('.restaurant_name');
                expect(restaurantNames.item(0).textContent).toEqual('-');

                done();
            });

            favoriteRestaurants.searchRestaurants.withArgs('restoran a').and.returnValues([
                { id: 444 },
            ]);

            searchRestaurants('restoran a');
        });
    });

    describe('When query is empty', () => {
        it('should capture the query as empty', () => {
            searchRestaurants(' ');

            expect(presenter.latestQuery.length).toEqual(0);
        });

        it('should show all favorite restaurants', () => {
            searchRestaurants('    ');
            expect(favoriteRestaurants.getAllRestaurant)
                .toHaveBeenCalled();
        });
    });

    describe('When no favorite restaurants could be found', () => {
        it('should show the empty message', (done) => {
            document.getElementById('posts').addEventListener('posts:updated', () => {
                expect(document.querySelectorAll('.restaurantIsEmpty').length).toEqual(1);
                done();
            });

            favoriteRestaurants.searchRestaurants.withArgs('restoran a').and.returnValues([]);

            searchRestaurants('restoran a');
        });

        it('should not show any restaurant', (done) => {
            document.getElementById('posts').addEventListener('posts:updated', () => {
                expect(document.querySelectorAll('.post-item').length).toEqual(0);
                done();
            });

            favoriteRestaurants.searchRestaurants.withArgs('restoran a').and.returnValues([]);

            searchRestaurants('restoran a');
        });
    });
});
