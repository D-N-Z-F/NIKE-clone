var typed = new Typed(".typewriter", {
  strings: [
    "Just Do It.",
    "Step Up Your Game.",
    "Look Good. Feel Good.",
    "Walk The Path Less Taken.",
    "You Don't Need Wings To Fly.^250",
    "Discover Your Sole Identity.^250",
  ],
  typeSpeed: 64,
  backSpeed: 25,
  loop: true,
});

const navbar = document.getElementById("navbarScrollspy");

window.addEventListener("scroll", () => {
  if (window.scrollY > 294) {
    navbar.style.borderBottom = "1px solid black";
  } else {
    navbar.style.borderBottom = "none";
  }
});

const first = document.getElementById("first-line");
const second = document.getElementById("second-line");

first.style.opacity = "1";
second.style.opacity = "0";
first.style.transform = "translate(-50%, -50%)";
second.style.transform = "translate(-50%, 100%)";

let counter = 0;

function swapText() {
  console.log("run");
  if (counter === 0) {
    first.style.opacity = "0";
    second.style.opacity = "1";
    first.style.transform = "translate(-50%, 100%)";
    second.style.transform = "translate(-50%, -50%)";
    counter = 1;
  } else {
    first.style.opacity = "1";
    second.style.opacity = "0";
    first.style.transform = "translate(-50%, -50%)";
    second.style.transform = "translate(-50%, 100%)";
    counter = 0;
  }
}

setInterval(swapText, 5000);
