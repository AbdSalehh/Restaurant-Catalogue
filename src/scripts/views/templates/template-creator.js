import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail" id="main-post">
        <div class="restaurant_item">
            <div class="restaurant_img">
                <div class="button">
                    <div class="like_button"></div>
                </div>
                <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restaurant Image">
            </div>
            <div class="restaurant_detail">
                <div class="restaurant_name">${restaurant.name}</div>
                <p class="restaurant_rating">Rating : <i class="fa-solid fa-star"></i><span> ${restaurant.rating}</span></p>
                <p class="address"><i class="fa-solid fa-map-marker-alt"></i> <span>${restaurant.address}, ${restaurant.city}</span></p>
                <p class="categories">Kategori : <span>${restaurant.categories.map((categorie) => categorie.name).join(", ")}</span></p>
                <p>Makanan : </p>
                <span>${restaurant.menus.foods.map((food) => food.name).join(", ")}</span>
                <p>Minuman : </p>
                <span>${restaurant.menus.drinks.map((drink) => drink.name).join(", ")}</span>
            </div>
        </div>
        <div class="restaurant_desc">
            <div class="menu">Deskripsi :</div>
            <p>${restaurant.description}</p>
        </div>
    </div>
    <div class="review">
        <h2>Review</h2>
        <div class="card_review">
            ${restaurant.customerReviews.map((review) => `
            <div class="review_item">
                <div class="reviewer_item">
                    <i class="fa-solid fa-circle-user"></i>
                    <div class="reviewer">
                        <p>${review.name}</p>
                        <p>${review.date}</p>
                    </div>
                </div>
                <div class="desc">
                    <p>${review.review}</p>
                </div>
            </div>
            `).join("")}
        </div>
    </div>
    <form class="add_review">
        <h2>Tambahkan Review</h2>
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="Name" class="inputName" />
        <label for="review">Review</label>
        <textarea type="text" name="review" placeholder="Review" class="inputDescription"></textarea>
        <div class="submit">
            <button type="submit">Submit</button>
        </div>
    </form>
`;

const createRestaurantListTemplate = (restaurant) => `
    <article class="post-item" >
        <p class="location">Kota. ${restaurant.city}</p>
        <img class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restoran ${restaurant.name} Kota ${restaurant.city}">
        <div class="post-item__content">
            <p class="post-item__date">Rating : <i class="fa-solid fa-star"></i><span> ${restaurant.rating}</span></p>
            <h1 class="post-item__title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
            <p class="post-item__description">${restaurant.description}</p>
        </div>
    </article>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like red">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaurantListTemplate,
    createRestaurantDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
