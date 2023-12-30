// #########################_Animation_#####################################################

function onEntry(entry) {
  entry.forEach((chang) => {
    if (chang.isIntersecting) {
      chang.target.classList.add("appearance");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(
  ".main__title-h1, .main__title-img, .section-right, .section-left, .services__title, .services__text, .services__card, .team, .they-already-trust-us__h2, .line-right, .line-left, .publications__title, .publications_h2, .publications__cards, .legal-services__section-2, .legal-services__section-1, .quality__section-1, .quality__section-2, .team-fon__title-h1, .achievements-slider, .achievements__title, .main__publications-button, .publications__flex, .employee-profile__body, .main__title, .main__section-2, .main__section-1, .oksana_kobzar__section-1, .oksana_kobzar__section-2, .gdrp__imag, .gdrp__title, .gdrp__title_3, .gdrp__title_2, .gdrp__text, .gdrp__line, .gdrp__data, .social-network-link, .gdrp__text-grey, .basket-img, .services_in_area__title, .it_and_e-commerce__title, .it_and_e-commerce__text, .it_and_e-commerce__button, .services_in_area__section-1, .services_in_area__section-2, .section__line, .section-left-swiper, .employee-profile__card, .publications__link, .they-already-trust-us_line-2__left, .they-already-trust-us_line-2__right"
);

for (let elm of elements) {
  observer.observe(elm);
}

//#####################_Slick-Slider_#######################################################

$(function () {
  $(".team").slick({
    dots: true,
    arrows: false,
    infinite: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 10000,
  });
});

$(function () {
  $(".section-left-swiper").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    cssEase: "linear",
    autoplay: true,
    autoplay: false,
  });
});

$(".publications__cards_swiper").slick({
  infinite: true,
  arrows: true,
  swipe: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 10000,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".achievements-slider").slick({
  infinite: true,
  dots: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 10000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 921,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 651,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
