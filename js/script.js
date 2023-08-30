//Меню в мобильной версии
const burgerIcon = document.querySelector('.header__burger-icon');
const crossIcon = document.querySelector('.header__cross-icon');
const mobMenu = document.querySelector('.menu._mob');

const footer = document.querySelector('footer');
const content = document.querySelector('main');

burgerIcon.addEventListener('click', function() {
    this.classList.toggle('_active');
    crossIcon.classList.toggle('_active');
    mobMenu.classList.add('_active');
    mobMenu.classList.remove('_closed');
    footer.style.display = 'none';
    content.style.display = 'none';
});

crossIcon.addEventListener('click', function() {
    this.classList.toggle('_active');
    burgerIcon.classList.toggle('_active');
    mobMenu.classList.remove('_active');
    mobMenu.classList.add('_closed');
    footer.style.display = 'block';
    content.style.display = 'block';
});


//Выпадающий список
const dropdown = document.querySelector('.contacts__dropdown');
const dropdownList = document.querySelector('.contacts__dropdown-list');
const dropdownItem = document.querySelectorAll('.contacts__dropdown-item');
const dropdownBtn = document.querySelector('.contacts__dropdown-btn');
const dropdownArrow = document.querySelector('.contacts__dropdown-arrow');

dropdownBtn.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownList.classList.toggle('_hidden');
});

dropdownList.addEventListener('click', function() {
    this.classList.add('_hidden');
});

dropdownItem.forEach(function(item) {
    item.addEventListener('click', function() {
        dropdownBtn.querySelector('button').innerText = this.querySelector('p:first-child').innerText;
    });
});

//Стрелка выпадающего списка
dropdown.addEventListener('click', function(event) {
    dropdownArrow.classList.toggle('_inverted');
    event.stopPropagation();
});

document.body.addEventListener('click', function() {
    if (dropdownArrow.classList.contains('_inverted')) {
        dropdownArrow.classList.remove('_inverted');
    }
    dropdownList.classList.add('_hidden');
});


//Слайдер (портфолио)
const swiper = new Swiper('.portfolio__slider', {
    spaceBetween: 37,
    slidesPerView: 2.62,

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 23,
        },
        769: {
            spaceBetween: 37,
            slidesPerView: 2.62,
        }
    }
});