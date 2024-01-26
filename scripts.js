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
});
