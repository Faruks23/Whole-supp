

// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 50,
//     },
//   },
// });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".custom-button-next",
      prevEl: ".custom-button-prev",
    },
    on: {
      slideChange: function () {
        updateCounter();
      },
    },
    breakpoints: {
      // When window width is <= 576px
      576: {
        slidesPerView: 1,
      },
      // When window width is <= 768px
      768: {
        slidesPerView: 2,
      },
      // When window width is <= 992px
      992: {
        slidesPerView: 3,
      },
    },
  });
 // Add event listeners for custom buttons
 document
   .querySelector(".custom-button-next")
   .addEventListener("click", function () {
     swiper.slideNext();
   });

 document
   .querySelector(".custom-button-prev")
   .addEventListener("click", function () {
     swiper.slidePrev();
   });

    // Function to update the counter
  function updateCounter() {
    var currentSlide = swiper.realIndex + 1;
    var totalSlides = swiper.slides.length;
    document.querySelector('.swiper-counter').textContent = currentSlide + ' / ' + totalSlides;
  }

  // Initial update of the counter
  updateCounter();


