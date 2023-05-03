import { topGames } from './data/topGames.js';

const topGamesList = document.querySelector('.top-games__cards');
topGamesList.textContent = '';

function displayCard() {
  topGames.forEach(item => {
    let genre = item.gameGenre.join(', ');
    let publishers = item.publishers.join(', ');
    let dvelopers = item.dvelopers.join(', ');

    const cardTemplate = `
            <li class="top-games__card">
                <img class="top-games__card-img" src="img/topGames/${item.image}" alt="${item.title}">
                <div class="top-games__card-info">
                  <div class="top-games__card-top">
                    <h3 class="top-games__card-title">${item.title}</h3>
                    <div class="top-games__card-rating">
                      <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.5 0L9.18386 5.18237H14.6329L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237H5.81614L7.5 0Z"
                          fill="#FFC700" />
                      </svg>
                      <span>${item.gameRating}</span>
                    </div>
                  </div>
                  <ul class="top-games__card-list">
                    <li class="top-games__card-item">Год выпуска: ${item.releaseDate}</li>
                    <li class="top-games__card-item">Жанр: ${genre}</li>
                    <li class="top-games__card-item">Разработчик: ${dvelopers}</li>
                    <li class="top-games__card-item">Издатель: ${publishers}</li>
                  </ul>
                </div>
            </li>
        `;
    topGamesList.insertAdjacentHTML('beforeend', cardTemplate);
  })
}

displayCard();

// gallery
function galleryPlugin(activeSlide = 0) {
  const cards = document.querySelectorAll('.top-games__card');
  cards[activeSlide].classList.add('active');

  for (const card of cards) {
    card.addEventListener('click', () => {
      clearActiveClasses();
      card.classList.add('active');
    })
  }

  function clearActiveClasses() {
    cards.forEach((card) => {
      card.classList.remove('active');
    })
  }
}
galleryPlugin(3)