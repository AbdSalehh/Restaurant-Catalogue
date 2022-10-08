import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantDbSource {
    static async restaurantList() {
        const response = await fetch(API_ENDPOINT.RESTO_LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }

    static async postReviewRestaurant(data) {
        const response = await fetch(API_ENDPOINT.POST_REVIEW, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return response.json();
    }
}

export default RestaurantDbSource;
