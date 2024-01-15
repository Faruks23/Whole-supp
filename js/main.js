

const LifestyleSlider = (mainClass) => {
  var swiper = new Swiper(`${mainClass}`, {
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

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
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 18,
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
    document.querySelector(".swiper-counter").textContent =
      currentSlide + " / " + totalSlides;
  }

  // Initial update of the counter
  updateCounter();
};

LifestyleSlider(".mySwiper");


const reviewSlider = () => {
  var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 1,
    spaceBetween: 10,
    lop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".custom-button-next-2",
      prevEl: ".custom-button-prev-2",
    },
    // on: {
    //   slideChange: function () {
    //     updateCounter();
    //   },
    // },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  // Add event listeners for custom buttons
  document
    .querySelector(".custom-button-next-2")
    .addEventListener("click", function () {
      swiper.slideNext();
    });

  document
    .querySelector(".custom-button-prev-2")
    .addEventListener("click", function () {
      swiper.slidePrev();
    });
}

reviewSlider()

const SupperFoodSlider = () => {
  var swiper = new Swiper(".SupperFoodSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    lop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".SupperFood-next",
      prevEl: ".SupperFood-prev",
    },
    // on: {
    //   slideChange: function () {
    //     updateCounter();
    //   },
    // },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  // Add event listeners for custom buttons
  document
    .querySelector(".SupperFood-next")
    .addEventListener("click", function () {
      swiper.slideNext();
    });

  document
    .querySelector(".SupperFood-prev")
    .addEventListener("click", function () {
      swiper.slidePrev();
    });
}

SupperFoodSlider();