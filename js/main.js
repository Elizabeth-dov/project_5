

const swiperOne = new Swiper('.feedback__slider', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperTwo = new Swiper('.certificate__slider', {
  loop: true,
slidesPerView: 3,
spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    360: {
      slidesPerView: 1,
    }
  },
});

const accordeon = document.querySelector('.accordeon');
const accordeonTitles = accordeon.querySelectorAll('.accordeon__title');

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener('click', function() {

    const currentText = accordeonTitle.parentElement.querySelector('.accordeon__text');
 
    accordeonTitle.classList.toggle('accordeon__title--active');
    currentText.classList.toggle('accordeon__text--visible');

if (currentText.classList.contains('accordeon__text--visible')) {
currentText.style.maxHeight = currentText.scrollHeight + 'px'
} else {
  currentText.style.maxHeight = null
}


});
});

const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu__close')


menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list');
    menuShadow.classList.toggle('menu--open');
});
menuClose.addEventListener('click', ()=> {
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
});