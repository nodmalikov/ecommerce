const elHamburger = document.querySelector('.site-header__hamburger');
const elSitenav = document.querySelector('.sitenav');
const elMenuClose = document.querySelector('.sitenav__close');
const elMobileBg = document.querySelector('.mobile-bg');
const elBasket = document.querySelector('.site-header__basket');
const elBasketModal = document.querySelector('.basket-modal');

if (elHamburger) {
    elHamburger.addEventListener('click', function () {
        elSitenav.classList.add('sitenav-active');
        elMobileBg.classList.add('mobile-bg-active')
    });
}

if (elMenuClose) {
    elMenuClose.addEventListener('click', function () {
        elSitenav.classList.remove('sitenav-active');
        elMobileBg.classList.remove('mobile-bg-active')
    });
}

if (elBasket) {
    elBasket.addEventListener('click', function () {
        elBasketModal.classList.toggle('basket-modal-active');
    });
}