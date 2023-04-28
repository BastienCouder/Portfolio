let loader = document.querySelector(".loading-container");
let textAnim = document.querySelector("h1");
let line = document.querySelector(".line");
let border = document.querySelector(".bloc2");
let buttons = document.querySelectorAll("button");
let cubes = document.querySelectorAll(".cube");

let root = document.querySelector(":root");
let rootStyles = getComputedStyle(root);
let translateX = rootStyles.getPropertyValue("--translateX");

// a = Math.random() * (100 - 0) + 0;
// a = parseInt(a);
// b = Math.random() * (100 - 0) + 0;
// b = parseInt(b);
// console.log(a, b);
// cubes.forEach((cube) => {
//   root.style.setProperty("--translateX", `${a}%`); // set the value of "--translateX" property on the root element
// });

addEventListener("mouseenter", () => {
  console.log("click");
});

setTimeout(() => {
  line.classList.add("active-line");
}, 3500);

function bloquerScroll(duree) {
  // Désactive le défilement
  document.body.style.overflow = "hidden";

  // Réactive le défilement après la durée spécifiée
  setTimeout(function () {
    document.body.style.overflow = "auto";
  }, duree);
}

bloquerScroll(3700);

function blockScroll() {
  stopScroll = false;
}
setTimeout(() => {
  border.classList.add("border");
}, 4000);

setTimeout(() => {
  left.classList.add("left-active");
}, 4200);

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("fondu");
  }, 3500);
  setTimeout(() => {
    loader.style.display = "none";
    loader = true;
  }, 6000);
});

new Typewriter(textAnim, {
  deleteSpeed: 30,
})
  .pauseFor(3500)
  .changeDeleteSpeed(20)
  .typeString("Lorem ipsum")
  .pauseFor(500)
  .typeString(
    "<br><strong style='font-size: 0.8em; color:#cdbab1;'>pour l'instant</strong>"
  )
  .pauseFor(1000)
  .deleteChars(14)
  .typeString(
    "<strong style='font-size: 0.8em; color:#cdbab1;'>jsp quoi mettre</strong>"
  )
  .start();

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    const paragraphe = card.querySelector("p");
    paragraphe.classList.add("active");
  });

  card.addEventListener("mouseout", () => {
    const paragraphe = card.querySelector("p");
    paragraphe.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 150) {
    const about = document.querySelector("#about");
    about.classList.add("active-about");
    console.log("click");
  }
});

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 1150) {
    const formu = document.querySelector("#formu");
    formu.classList.add("space-active");
  }
});
