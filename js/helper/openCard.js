import { lockScroll } from './scroll.js';

export function openCard(card, imgFolder) {
    const cardPopup = document.createElement("div");
    cardPopup.classList.add('card');

    const galleryList = document.createElement('ul');
    galleryList.classList.add('card__gallery');

    let genre = card.gameGenre.join(', ');
    let publishers = card.publishers.join(', ');
    let dvelopers = card.dvelopers.join(', ');

    let gameRating = (card.gameRating) ? card.gameRating : '-';

    cardPopup.insertAdjacentHTML('afterbegin', `
        <div class="card__wrapper container">
            <div class="card__content">
                <button class="card__button-close">
                    <svg width="14" height="14" viewBox="0 0 12 12" stroke="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1L1 11" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11 11L1 1" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <div class="card__image">
                    <img src="img/${imgFolder}/${card.image}" alt="${card.title}">
                </div>
                <div class="card__info">
                    <h3 class="card__title">${card.title}</h3>
                    <ul class="card__list list-top">
                        <li class="card__item list-top__item"><span>Дата выхода:</span>${card.releaseDate}</li>
                        <li class="card__item list-top__item"><span>Рейтинг:</span>${gameRating}</li>
                        <li class="card__item list-top__item"><span>Жанр:</span>${genre}</li>
                        <li class="card__item list-top__item"><span>Издатель:</span>${publishers}</li>
                        <li class="card__item list-top__item"><span>Разработчик:</span>${dvelopers}</li>
                    </ul>
                </div>
                <div class="card__description">
                    <p class="card__text">${card.description}</p>
                </div>
            </div>
        </div>
        `);

    document.body.prepend(cardPopup);
    lockScroll()
    const cardContent = document.querySelector('.card__content');

    if (card.gallery) {
        card.gallery.forEach(img => {
            let galleryItem = document.createElement('li');
            galleryItem.classList.add('card__gallery-item')
            galleryItem.insertAdjacentHTML('afterbegin', `
                <img src="img/${imgFolder}/${img}" alt="#">
            `)
            galleryList.append(galleryItem)
        })
        cardContent.insertAdjacentElement('beforeend', galleryList);

        function openGalleryImage() {
            const cardBlock = document.querySelector('.card');
            const imageList = document.querySelectorAll('.card__gallery-item');
            let slider = document.createElement('div');
            slider.classList.add('card__slider');

            for (let image of imageList) {
                image.addEventListener('click', () => {
                    cardBlock.style.overflow = 'hidden';
                    slider.textContent = '';

                    slider.insertAdjacentHTML('afterbegin', `
                        <div class="card__slider-wrapper">
                            <div class="card__slider-image">${image.innerHTML}</div>
                            <button class="card__slider-button">
                                <svg width="14" height="14" viewBox="0 0 12 12" stroke="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 1L1 11" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11 11L1 1" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                            <ul class="card__slider-list"></ul>
                        </div>
                    `)
                    cardContent.append(slider);

                    const sliderList = document.querySelector('.card__slider-list');
                    card.gallery.forEach(img => {
                        let sliderItem = document.createElement('li');
                        sliderItem.classList.add('card__slider-item')
                        sliderItem.insertAdjacentHTML('afterbegin', `
                            <img src="img/${imgFolder}/${img}" alt="#">
                        `)
                        sliderList.append(sliderItem)
                    })

                    const sliderBtn = document.querySelector('.card__slider-button');
                    sliderBtn.addEventListener('click', () => {
                        document.querySelector('.card__slider').remove();
                        cardBlock.style.overflow = 'auto';
                    })

                    const sliderImage = document.querySelector('.card__slider-image');
                    sliderList.addEventListener('click', (event) => {
                        if (event.target.closest('.card__slider-item img')) {
                            const image = event.target;
                            sliderImage.textContent = '';
                            sliderImage.insertAdjacentHTML('afterbegin',
                                `<img src="${image.src}" alt="#">`)
                        }
                    })
                })
            }
        }
        openGalleryImage()
    }
}