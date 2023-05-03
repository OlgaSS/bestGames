export function displayCard(arr, block, imgFolder) {
    arr.forEach(item => {

        const cardTemplate = `
        <li data-card='${item.id}' class="item-card">
            <span class="item-card__label">${item.gameRating}</span>
            <a class="item-card__link" href="#">
                <img class="item-card__img" src="img/${imgFolder}/${item.image}" alt="${item.title}">
                <h3 class="item-card__title">${item.title}</h3>
            </a>
        </li>
        `;
        block.insertAdjacentHTML('beforeend', cardTemplate);
    })
}
