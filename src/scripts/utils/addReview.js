import RestaurantDbSource from "../data/restaurantdb-source";
import cardReview from "../component/addReview";

const postReview = async ({ url, name, review }) => {
    const userInputData = {
        id: url,
        name,
        review,
    };

    try {
        const reviewContainer = document.querySelector(".card_review");
        const data = await RestaurantDbSource.postReviewRestaurant(userInputData);
        reviewContainer.innerHTML = data.customerReviews.map((reviewData) => cardReview(reviewData)).join("");
    } catch (error) {
        alert(error.message);
    }
};

export default postReview;
