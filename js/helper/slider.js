export const slider = (block) => {
    let position = 0;
    let slidesToShow = 5;
    let slidesToScroll = 1;
    let gapWidth = 25;
    let gapCount = 4;
    let windowWidth = window.innerWidth;
    const container = block.querySelector('.slider-container');
    const track = block.querySelector('.slider-track');
    const slides = block.querySelectorAll('.slide');
    const btnPrev = block.querySelector('.arrow-prev');
    const btnNext = block.querySelector('.arrow-next');

    if (windowWidth <= 1600) {
        slidesToShow = 6;
        gapWidth = 15;
        gapCount = 5;
    }
    if (windowWidth <= 1300) {
        gapWidth = 10;
    }
    if (windowWidth <= 1100) {
        slidesToShow = 5;
        gapCount = 4;
    }
    if (windowWidth <= 900) {
        slidesToShow = 4;
        gapCount = 3;
    }
    if (windowWidth <= 550) {
        slidesToShow = 3;
        gapWidth = 7;
        gapCount = 2;
    }
    if (windowWidth <= 350) {
        slidesToShow = 2;
        gapCount = 1;
    }

    track.style.gap = `${gapWidth}px`;

    const slidesCount = slides.length;
    const slideWidth = (container.clientWidth - (gapWidth * gapCount)) / slidesToShow;
    const movePosition = (slidesToScroll * slideWidth) + (slidesToScroll * gapWidth);

    slides.forEach((slide) => {
        slide.style.minWidth = `${slideWidth}px`
    })

    btnPrev.addEventListener('click', () => {
        // получаем количество отсавших слайдов (не проскролленных)
        const slidesLeft = Math.abs(position) / slideWidth;

        position += slidesLeft >= slidesToScroll ? movePosition : slidesLeft * slideWidth;
        track.style.transform = `translateX(${position}px)`
        checkBtns()
    })

    btnNext.addEventListener('click', () => {
        //высчитываем сколько слайдов проскролили и сколько в итоге слайдов осталось 
        const slidesLeft = slidesCount - (Math.abs(position) + slidesToShow * (slideWidth - gapWidth)) / (slideWidth + gapWidth);

        position -= slidesLeft >= slidesToScroll ? movePosition : slidesLeft * slideWidth;
        track.style.transform = `translateX(${position}px)`
        checkBtns()
    })

    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(slidesCount - slidesToShow) * slideWidth;
    }
    checkBtns()
}