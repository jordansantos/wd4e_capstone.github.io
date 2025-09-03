const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const skipTopButton = document.querySelector('.skip_top');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('is-active');
  menuToggle.classList.toggle('is-active');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    skipTopButton.classList.add('visible');
  } else {
    skipTopButton.classList.remove('visible');
  }
});