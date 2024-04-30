const hb = document.querySelector('#hamburgerBtn');

hb,addEventListener('click', () => {
  document.querySelector('#primaryNav').classList.toggle('open')
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  effect: 'slide',
  speed: 2000,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
// start autoplay
  autoplay: {
    delay: 5000,
  },
});

// inject current year in footer
const numberOne = new Date();
document.querySelector('#year').textContent = numberOne.getFullYear();