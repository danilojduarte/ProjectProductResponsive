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


/*=============== SWIPER CLOTHING ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/