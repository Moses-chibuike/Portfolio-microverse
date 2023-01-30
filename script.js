const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const cancel = document.querySelector('.cancel');
const body = document.querySelector('body');
const mobileLinks = document.querySelectorAll('.nav-mobile');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('show');
  body.classList.add('overflowHidden');
});
cancel.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
  body.classList.remove('overflowHidden');

});

mobileLinks.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
    body.classList.remove('overflowHidden');
  });
});