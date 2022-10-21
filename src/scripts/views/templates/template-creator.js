import CONFIG from '../../globals/config.js';

const small = 'small/';
const medium = 'medium/';
const large = 'large/';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail">
        <div class="restaurant_item">
            <div class="restaurant_img">
                <div class="button">
                    <div class="like_button"></div>
                </div>
                <picture>
                    <source class="lazyload" media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + small + restaurant.pictureId}">
                    <source class="lazyload" media="(max-width: 1200px)" srcset="${CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId}">
                    <img class="lazyload" src="${CONFIG.BASE_IMAGE_URL + large + restaurant.pictureId}" alt="Restoran ${restaurant.name || '-'} Kota ${restaurant.city}" width="100" height="333">
                </picture>
            </div>
            <div class="restaurant_detail">
                <div class="restaurant_name">${restaurant.name}</div>
                <p class="restaurant_rating">Rating : <i class="fa-solid fa-star"></i><span> ${restaurant.rating}</span></p>
                <p class="address"><i class="fa-solid fa-map-marker-alt"></i> <span>${restaurant.address}, ${restaurant.city}</span></p>
                <p class="categories">Kategori : <span>${restaurant.categories.map((categorie) => categorie.name).join(', ')}</span></p>
                <p>Makanan : </p>
                <span>${restaurant.menus.foods.map((food) => food.name).join(', ')}</span>
                <p>Minuman : </p>
                <span>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</span>
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
            `).join('')}
        </div>
    </div>
    <form class="add_review">
        <h2>Add Review</h2>
        <label for="name">Name</label>
        <input type="text" name="name" placeholder="Name" class="inputName" />
        <label for="review">Review</label>
        <textarea type="text" name="review" placeholder="Review" class="inputDescription"></textarea>
        <div class="submit">
            <button type="submit">Submit</button>
        </div>
    </form>
`;

const createSkeletonRestaurantTemplate = (count) => {
    let template = '';

    for (let i = 0; i < count; i += 1) {
        template += `
      <article class="post-item" >
        <img class="post-item__thumbnail lazyload" src="../../../public/images/placeholder.png" alt="skeleton" width="100%" height="350px">
        <div class="post-item__content">
            <p class="skeleton">Lorem ipsum</p>
            <h1 class="skeleton">Lorem ipsum dolor sit amet</h1>
            <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci</p>
        </div>
    </article>
    `;
    }
    return template;
};

const createRestaurantListTemplate = (restaurant) => `
    <article class="post-item" >
        <p class="location">Kota. ${restaurant.city || '-'}</p>
        <picture>
            <source class="lazyload" media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL + small + restaurant.pictureId}">
            <source class="lazyload" media="(max-width: 1200px)" srcset="${CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId}">
            <img class="post-item__thumbnail lazyload" src="${CONFIG.BASE_IMAGE_URL + large + restaurant.pictureId}" alt="Restoran ${restaurant.name || '-'} Kota ${restaurant.city}">
        </picture>
        <div class="post-item__content">
            <p class="post-item__date">Rating : <i class="fa-solid fa-star"></i><span> ${restaurant.rating || '-'}</span></p>
            <h1 class="restaurant_name"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h1>
            <p class="post-item__description">${restaurant.description || '-'}</p>
        </div>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like red">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaurantListTemplate,
    createRestaurantDetailTemplate,
    createSkeletonRestaurantTemplate,
    createLikeRestaurantButtonTemplate,
    createUnlikeRestaurantButtonTemplate,
};
