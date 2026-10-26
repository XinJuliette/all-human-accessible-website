const navbtn = document.querySelector(".navbtn");
const menubtn = document.querySelector(".hamburgmenu");
const deNav = document.querySelector(".dropdownnav")


menubtn.addEventListener("click", openMenu);


function openMenu(){
  deNav.classList.add("toonMenu")
}

navbtn.addEventListener("click", closeMenu);

function closeMenu(){
  deNav.classList.remove("toonMenu");
}