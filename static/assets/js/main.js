// Theme switch
var switcher = document.querySelector("#switch-theme");
var icon = document.querySelector("#icon.uil-sun, #icon.uil-moon");
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
var search = document.querySelector("#search");
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
    search.classList.add("scroll")
  }

  else {
    nav.classList.remove("active");
    header.style.marginTop = "0";
    search.classList.remove("scroll")
  }
}

// Search
var jets = new Jets({
  searchTag: '#search',
  contentTag: '#searchContent'
});

var searchIcon = document.querySelector(".search i.uil-search");

searchIcon.addEventListener("click", event => {

  searchIcon.classList.toggle('uil-search');
  searchIcon.classList.toggle('uil-multiply');
  var searchInput = document.querySelector("input");
  searchInput.value = '';
  searchInput.classList.toggle('active');
  jets.search()

  event.preventDefault;
});
