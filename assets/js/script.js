
// Toggle menu

const Navmenu = document.querySelector(".nav__list");
const menuBar = document.querySelector(".nav__bar");
const close = document.querySelector(".nav__close");
menuBar.addEventListener("click", () => {
  Navmenu.classList.add("active");
  close.style.display = "block";


})
close.addEventListener("click", () => {
  Navmenu.classList.remove("active");
  menuBar.style.display = "block";

})

// swiper slider

// destinations
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  grid: {
    rows: 1,
  },
  pagination: {
    el: ".swiperDset-pagination",
    clickable: true,
  },
  spaceBetween: 35,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }

});

// Testmonial section 
var swiper = new Swiper(".Swiper", {
  slidesPerView: 1,
  direction: "vertical",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    direction: "vertical",
  },
  spaceBetween: 10,
  freeMode: true,
  loop: true,
  on: {
    init: (swiper) => {
      let totalGap = swiper.passedParams.spaceBetween * (swiper.passedParams.slidesPerView - 1);
      let containerHeight = swiper.passedParams.slidesPerView * swiper.slides[0].clientHeight + totalGap;
      swiper.el.style.height = containerHeight + 'px';
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

// Banner 
var swiper = new Swiper(".bannerSwiper", {
  slidesPerView: 5,
  grid: {
    rows: 1,
  },
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 100,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }

});

