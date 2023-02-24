let navigationElement = document.getElementById("navbar");
let burgerElement = document.getElementById("burgerbar");

burgerElement.addEventListener("click", function () {
  navigationElement.classList.add("activeNav");
});
