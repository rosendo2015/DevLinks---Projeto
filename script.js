const page = document.documentElement;
const img = document.querySelector("header img");
const ButtonSwitch = document.getElementById("switch");

ButtonSwitch.addEventListener("click", function () {
  page.classList.toggle("light");
});

if (page.classList.contains("")) {
  img.setAttribute("src", "./assets/img-perfil-darck.jpg")
} else {
  img.setAttribute("src", "./assets/img-perfil-light.jpg")
}
