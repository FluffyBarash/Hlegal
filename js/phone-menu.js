//#####################_Phone-menu_#######################################################

const phone_menu = document.querySelector(".phone-menu__body");
const phone_menu__fon = document.querySelector(".phone-menu__fon");
const cross_2 = document.querySelector(".phone-menu__cross");
const body_2 = document.querySelector("body");
const burger = document.querySelector(".burger");
const wrapper = document.querySelector(".wrapper");

burger.addEventListener("click", () => {
  phone_menu.style.transition = "all 1s ease";
  phone_menu.style.opacity = "1";
  phone_menu.style.transform = "translateY(0px)";
  body_2.style.overflow = "hidden";
  phone_menu__fon.style.transform = "translateX(0px)";
});

cross_2.addEventListener("click", () => {
  phone_menu.style.transition = "all 1s ease";
  phone_menu.style.opacity = "0";
  phone_menu.style.transform = "translateY(150px)";
  phone_menu__fon.style.transform = "translateX(20000px)";
});
