// Theme switch
var switcher = document.querySelector("#switch-theme");
var icon = document.querySelector("#icon");
var shadowImage = document.querySelectorAll(".image-shadow");

switcher.onclick = function (e) {
  if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("dark", "");
    icon.classList.remove('uil-sun');
    icon.classList.add('uil-moon');
    shadowImage.forEach(function (el) {
      el.style.display = 'none'
    })
  } else {
    localStorage.removeItem("theme");
    document.documentElement.removeAttribute("dark");
    icon.classList.remove('uil-moon');
    icon.classList.add('uil-sun');
    shadowImage.forEach(function (el) {
      el.style.display = 'block'
    })
  };
  e.preventDefault();
};

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("dark", "");
  icon.classList.remove('uil-sun');
  icon.classList.add('uil-moon');
  shadowImage.forEach(function (el) {
    el.style.display = 'none'
  })
}


// Fix navbar on scroll
var nav = document.querySelector('nav');
var header = document.querySelector('.header');
var scrollObject = {};
window.onscroll = getScrollPosition;

function getScrollPosition() {
  scrollObject = {
    x: window.pageXOffset,
    y: window.pageYOffset
  }
  if (scrollObject.y > 100) {
    nav.classList.add("active");
    header.style.marginTop = "166px"; // 166 = nav height
  }

  else {
    nav.classList.remove("active");
    header.style.marginTop = "0";
  }
}