import { unlockScroll } from './scroll.js';

export function closeCard() {
    const card = document.querySelector('.card');
    card.addEventListener('click', (event) => {
        if (event.target === card || event.target.closest('.card__button-close')) {
            unlockScroll();
            document.querySelector('.card').remove()
        }
    })
}