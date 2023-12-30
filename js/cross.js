//#####################_Cross_#######################################################

const button = document.querySelector(".it_and_e-commerce__button");
const modal_windows = document.querySelector(".modal-windows__body");
const cross = document.querySelector(".form__cross");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  modal_windows.style.display = "flex";
  body.style.overflow = "hidden";
});

cross.addEventListener("click", () => {
  modal_windows.style.display = "none";
  body.style.overflow = "auto";
});
