import { catalog } from './data/catalog.js';
import { displayCard } from './helper/createCards.js';
import { openCard } from './helper/openCard.js';
import { closeCard } from './helper/closeCard.js';

const cardsList = document.querySelector('.catalog__cards');

// Вывод карточки на экран
displayCard(catalog, cardsList, 'catalog');

cardsList.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.closest('.catalog__cards .item-card[data-card]')) {
        let ID = event.target.closest('.item-card').getAttribute('data-card');

        catalog.forEach(item => {
            if (item.id == ID) {
                openCard(item, 'catalog')
            }
        })
        closeCard()
    }
})

// Фильтр карточек
const filterList = document.querySelector('.catalog__filter');

filterList.addEventListener('click', (event) => {
    const messageBlock = document.querySelector('.catalog .message');

    function cleanUpBlock() {
        cardsList.textContent = '';
        if (messageBlock) {
            messageBlock.remove();
        }
    }

    if (event.target.closest('.catalog__filter-item')) {
        const value = event.target.textContent;
        let sortedСards = [];

        if (value === 'Все') {
            cleanUpBlock();
            displayCard(catalog, cardsList, 'catalog');
        } else {
            // Отсеиваем не нужные карточки и записываем в новый массив
            catalog.forEach(card => {
                for (let item of card.gameGenre) {
                    if (item === value) {
                        sortedСards.push(card);
                    }
                }
            })

            if (sortedСards.length !== 0) {
                cleanUpBlock();
                displayCard(sortedСards, cardsList, 'catalog')

            } else { // если ничего не найдено по выбранному жанру
                if (!messageBlock) {
                    const message = document.createElement('div');
                    message.classList.add('message');
                    message.style.textAlign = 'center';
                    message.textContent = 'К сожалению, ничего не было найдено';

                    cardsList.textContent = '';
                    cardsList.insertAdjacentElement('beforebegin', message)
                }
            }
        }
    }
})

