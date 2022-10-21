const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', (I) => {
    I.seeElement('#query');
    I.see('Tidak ada film untuk ditampilkan', '.restaurantIsEmpty');
});

Scenario('liking one restaurant', async (I) => {
    I.see('Tidak ada film untuk ditampilkan', '.restaurantIsEmpty');

    I.amOnPage('/');

    I.seeElement('.restaurant_name a');

    const firstRestaurant = locate('.restaurant_name a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post-item');

    const likedRestaurantName = await I.grabTextFrom('.restaurant_name');
    assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async (I) => {
    I.see('Tidak ada film untuk ditampilkan', '.restaurantIsEmpty');

    I.amOnPage('/');

    I.seeElement('.restaurant_name a');

    const firstRestaurant = locate('.restaurant_name a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.post-item');

    const likedRestaurantName = await I.grabTextFrom('.restaurant_name');
    assert.strictEqual(firstRestaurantName, likedRestaurantName);

    I.click(likedRestaurantName);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');

    const FavoriteRestaurantIsEmpty = await I.grabTextFrom('.restaurantIsEmpty');
    assert.strictEqual('Tidak ada film untuk ditampilkan', FavoriteRestaurantIsEmpty);
});

Scenario('Add Review', async (I) => {
    I.see('Tidak ada film untuk ditampilkan', '.restaurantIsEmpty');

    I.amOnPage('/');

    I.seeElement('.restaurant_name a');
    I.click(locate('.restaurant_name a').first());

    I.seeElement('.add_review');

    const textReview = 'Makanannya enak dan murah';
    const outputTextReview = 'Makanannya enak dan murah';
    I.fillField('input', 'Wahyu');
    I.fillField('textarea', textReview);

    I.click('button[type="submit"]');

    I.waitForElement('.desc p', 10);
    I.seeElement('.desc p');

    const lastReview = locate('.desc p').last();
    const lastReviewText = await I.grabTextFrom(lastReview);

    assert.strictEqual(outputTextReview, lastReviewText);
});

Scenario('searching restaurants', async (I) => {
    I.see('Tidak ada film untuk ditampilkan', '.restaurantIsEmpty');

    I.amOnPage('/');

    I.seeElement('.restaurant_name a');

    const names = [];

    for (let i = 1; i <= 3; i++) {
        I.click(locate('.restaurant_name a').at(i));
        I.waitForElement('#likeButton', 20);
        I.seeElement('#likeButton');
        I.click('#likeButton');
        names.push(await I.grabTextFrom('.restaurant_name'));
        I.amOnPage('/');
    }

    I.amOnPage('/#/favorite');
    I.seeElement('#query');

    const searchQuery = names[1].substring(1, 3);
    const matchingRestaurants = names.filter((title) => title.indexOf(searchQuery) !== -1);

    I.fillField('#query', searchQuery);
    I.pressKey('Enter');

    const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.post-item');
    assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

    matchingRestaurants.forEach(async (title, index) => {
        const visibleName = await I.grabTextFrom(locate('.restaurant_name').at(index + 1));
        assert.strictEqual(title, visibleName);
    });
});
