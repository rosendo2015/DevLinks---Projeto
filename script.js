const page = document.documentElement;
const img = document.querySelector("header img");
const ButtonSwitch = document.getElementById("switch");

ButtonSwitch.addEventListener("click", function () {
  page.classList.toggle("light");
  if (page.classList.contains("light")) {
    img.setAttribute("src", "./assets/perfil-darck.jpg")
  } else {
    img.setAttribute("src", "https://github.com/rosendo2015.png")
}
});


