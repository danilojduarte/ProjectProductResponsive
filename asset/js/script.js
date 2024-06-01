/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

//Menu Show
  if ( navToggle ) {
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    });
  };

//Menu Hidden
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  });
};

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')


const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
} 
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER CLOTHING ===============*/
let swiperHome = new Swiper('.home__swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView:'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/