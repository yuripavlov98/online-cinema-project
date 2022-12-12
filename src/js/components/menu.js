const openBtn = document.querySelector('.header__burger-btn');
const navigation = document.querySelector('.navigation');
const closeBtn = document.querySelectorAll('.navigation__link, .navigation__close');


openBtn.addEventListener('click', () => {
    navigation.classList.add('navigation_active');
});
closeBtn.forEach(item => {
    item.addEventListener('click', () => {
        navigation.classList.remove('navigation_active');
    })
});
