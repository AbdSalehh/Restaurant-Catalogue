import RestaurantDbSource from '../data/restaurantdb-source.js';
import cardReview from '../component/addReview.js';

const postReview = async ({ url, name, review }) => {
    const userInputData = {
        id: url,
        name,
        review,
    };

    const reviewContainer = document.querySelector('.card_review');
    const restaurant = await RestaurantDbSource.postReviewRestaurant(userInputData);
    reviewContainer.innerHTML = restaurant.customerReviews.map((reviewData) => cardReview(reviewData)).join('');
};

export default postReview;
