import { expectedGames } from './data/expectedGames.js';
import { displayCard } from './helper/createCards.js';
import { openCard } from './helper/openCard.js';
import { closeCard } from './helper/closeCard.js';
import { slider } from './helper/slider.js';

const expectedGamesSection = document.getElementById('expectedGames');
const expectedGamesList = document.querySelector('.expected-games__list');

// Вывод карточки на экран
displayCard(expectedGames, expectedGamesList, 'expectedGames');

const slides = expectedGamesList.querySelectorAll('.item-card');
const labels = expectedGamesList.querySelectorAll('.item-card__label');

slides.forEach(slide => {
    slide.classList.add('slide');
});

labels.forEach(label => {
    label.remove()
});

// подключаем слайдер
slider(expectedGamesSection);

expectedGamesList.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.closest('.expected-games__list .item-card[data-card]')) {
        let ID = event.target.closest('.item-card').getAttribute('data-card');

        expectedGames.forEach(item => {
            if (item.id == ID) {
                openCard(item, 'expectedGames')
            }
        })
        closeCard()
    }
})




