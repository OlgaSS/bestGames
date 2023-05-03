const navigationalLinks = document.querySelectorAll('.link[data-goto]');
const gameItem = document.querySelectorAll('.ad-block__game-item');
const gameLink = document.querySelectorAll('.ad-block__game-link');
const videoPlayButton = document.querySelectorAll('.ad-block__video-button');
const videoBlocks = document.querySelectorAll('.ad-block__video');
const videoImage = document.querySelectorAll('.ad-block__video-img');
const videos = document.querySelectorAll('.video');

// open navigation
if (document.body.clientWidth < 551) {
    const headerButton = document.querySelector('.header__button');
    const headerNav = document.querySelector('.header__nav');

    const headerHeight = document.querySelector('.header').offsetHeight;
    headerNav.style.marginTop = headerHeight + 'px';

    headerButton.addEventListener('click', () => {
        headerNav.classList.toggle('open');
    })
}

// tabs
gameItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        let id = item.getAttribute('data-tab');
        gameItem.forEach((item, index) => {
            item.classList.remove('active')
            gameLink[index].classList.remove('active')
        })
        item.classList.add('active');
        gameLink[index].classList.add('active')
        videoBlocks[index].classList.add('active')

        videoBlocks.forEach((video, index) => {
            if (video.getAttribute('data-id') === id) {
                video.classList.add('active');
                videoPlayButton[index].classList.add('active')
                videoImage[index].classList.add('active')
                videos[index].classList.add('active')
            } else {
                video.classList.remove('active');
                videoPlayButton[index].classList.remove('active')
                videoImage[index].classList.remove('active')
                videos[index].classList.remove('active')
            }
        })
        playVideo()
    })
})

function playVideo() {
    videoPlayButton.forEach(btn => {
        btn.style.opacity = '1';
        btn.classList.remove('hide')

        for (let img of videoImage) {
            img.classList.remove('hide')
        }

        videos.forEach((video) => {
            if (video.classList.contains('addEnd') && !video.classList.contains('active')) {
                video.src = video.src.replace('&amp;autoplay=1', '');
                video.classList.remove('addEnd')
            }
        })

        if (btn.classList.contains('active')) {
            let image = document.querySelector('.ad-block__video-img.active');
            let activeVideo = document.querySelector('.video.active');

            btn.addEventListener('click', () => {
                activeVideo.src = activeVideo.src.replace('&amp;autoplay=1', '');
                activeVideo.classList.add('addEnd');
                activeVideo.src = activeVideo.src + '&amp;autoplay=1'

                setTimeout(() => {
                    btn.style.opacity = '0';
                    image.classList.add('hide');
                }, 700)
                setTimeout(() => {
                    btn.classList.add('hide')
                }, 1000)
            })
        }
    })
}
playVideo()








