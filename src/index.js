import "normalize.css";
import "./styles/styles.scss";
import "swiper/swiper.min.css";

import Swiper, { Navigation, Autoplay } from "swiper";

const gallery = new Swiper("#gallery-slider", {
  modules: [Navigation, Autoplay],
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1680: {
      slidesPerView: 6,
      spaceBetween: 50,
      centeredSlides: false,
    },
  },
});

const videos = new Swiper("#videos-slider", {
  modules: [Navigation],
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
