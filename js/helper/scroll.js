// Заблокировать прокрутку страницы
var bodyScrollTop = null;
var locked = false;

function lockScroll() {
    if (!locked) {
        bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        document.body.classList.add('scroll-locked');
        document.body.style.top = `-${bodyScrollTop}px`;
        locked = true;
    };
}

// Включить прокрутку страницы
function unlockScroll() {
    if (locked) {
        document.body.classList.remove('scroll-locked');
        document.body.style.top = null;
        window.scrollTo(0, bodyScrollTop);
        locked = false;
    }
}

export { lockScroll, unlockScroll }