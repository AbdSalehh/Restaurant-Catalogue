import restaurants from '../data/DATA.json';

const main = () => {

    const hamburgerButtonElement = document.querySelector('#hamburger');
    const drawerElement = document.querySelector('#navigation');

    const renderRestaurant = () => {
        restaurants.restaurants.forEach(restaurant => {
            const restoList = document.querySelector(".posts");
            restoList.innerHTML += `
                <article class="post-item" >
                    <p class="location">Kota. ${restaurant.city}</p>
                    <img class="post-item__thumbnail" src="${restaurant.pictureId}"
                        tabindex="0" alt="Restoran ${restaurant.name} Kota ${restaurant.city}">
                    <div class="post-item__content">
                        <p class="post-item__date">Rating : <i class="fa-solid fa-star"></i><span> ${restaurant.rating}</span></p>
                        <h1 class="post-item__title"><a href="#" tabindex="-1">${restaurant.name}</a></h1>
                        <p class="post-item__description">${restaurant.description}</p>
                    </div>
                </article>
            `;
        });
    }

    hamburgerButtonElement.addEventListener('click', event => {
        drawerElement.classList.toggle('open');
        event.stopPropagation();
        event.preventDefault();
    });

    renderRestaurant();
}

export default main;