import restaurants from '../data/DATA.json';

const main = () => {

    const renderRestaurant = () => {
        restaurants.restaurants.forEach(restaurant => {
            const restoList = document.querySelector(".posts");
            restoList.innerHTML += `
                <article class="post-item">
                    <p class="location">Kota. ${restaurant.city}</p>
                    <img class="post-item__thumbnail" src="${restaurant.pictureId}"
                        alt="${restaurant.name}">
                    <div class="post-item__content">
                        <p class="post-item__date">Rating : <i class="fa-solid fa-star"></i><span> ${restaurant.rating}</span></p>
                        <h1 class="post-item__title"><a href="#">${restaurant.name}</a></h1>
                        <p class="post-item__description">${restaurant.description}</p>
                        <a class="read-more" href="">Read More</a>
                    </div>
                </article>
            `;
        });
    }

    renderRestaurant();
}

export default main;