var swiper = new Swiper(".mySwiper", {
  spaceBetween: 45,
  navigation: {
    nextEl: ".btnNext",
    prevEl: ".btnPrev",
  },
  pagination: {
    el: ".pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var instSwiper;
let wh = document.documentElement.clientWidth;

function instSwiperSize() {
  if (wh <= 854) {
    instSwiper = new Swiper(".instSwiper", {
      slidesPerView: 3,
      spaceBetween: 65,
      centeredSlides: true,
      loop: true,
      direction: "vertical",

      navigation: {
        nextEl: ".instNext",
        prevEl: ".instPrev",
      },
    });
  } else {
    instSwiper = new Swiper(".instSwiper", {
      slidesPerView: 3,
      spaceBetween: 45,
      centeredSlides: true,
      loop: true,

      navigation: {
        nextEl: ".instNext",
        prevEl: ".instPrev",
      },
    });
  }
}
instSwiperSize();
var partnersSwiper;
function partnersSwiperSize() {
  if (wh <= 700) {
    partnersSwiper = new Swiper(".partnersSwiper", {
      slidesPerView: "3",
      spaceBetween: 0,
      slidesPerGroup: 3,
      direction: "vertical",
      navigation: {
        nextEl: ".partners-btnNext",
        prevEl: ".partners-btnPrev",
      },
      pagination: {
        el: ".partners-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    });
  } else {
    partnersSwiper = new Swiper(".partnersSwiper", {
      slidesPerView: "3",
      spaceBetween: 40,
      slidesPerGroup: 3,

      navigation: {
        nextEl: ".partners-btnNext",
        prevEl: ".partners-btnPrev",
      },
      pagination: {
        el: ".partners-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    });
  }
}
partnersSwiperSize();

window.addEventListener("resize", function () {
  wh = document.documentElement.clientWidth;
  instSwiperSize();
  partnersSwiperSize();
});
