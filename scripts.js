const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  watchSlidesProgress: true,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    100: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
    },
    600: {
      slidesPerView: 3,
      grid: {
        rows: 2,
      },
    },
    1100: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
    },
  },
});

const btnNav = document.querySelector(".nav_icon-btn");
const nav = document.querySelector(".nav");

btnNav.addEventListener("click", () => {
  nav.classList.toggle("active");
});
