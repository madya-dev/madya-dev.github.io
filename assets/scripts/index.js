// scripts for menu

window.onscroll = function () {
  stickyHeader();
};
let header = document.querySelector("#header");

const sticky = header.offsetTop;
console.log(sticky);

function stickyHeader() {
  if (window.pageYOffset >= sticky + 68) {
    header.classList.add("sticky");
  } else if (window.pageYOffset >= sticky + 65) {
    header.classList.add("toSticky");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("toSticky");
  }
}

const body = document.getElementsByTagName("body")[0];
if (header.classList.contains("show")) {
  body.style.overflow = "hidden";
}

const btnCloseMenu = document.querySelector("#btn-close-navbar");
btnCloseMenu.addEventListener("click", () => {
  header.classList.remove("show");
  body.style.overflow = "";
});
