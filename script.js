"use strict";

const logoName = document.querySelectorAll("#animatedLogo path");

// for (let i = 0; i < logoName.length; i++) {
//     console.log(`Letter ${i} is ${logoName[i].getTotalLength()}`);
// }

let rule = ``;

function addCss(rule) {
  var inter = setInterval(function () {
    let css = document.createElement("style");
    css.type = "text/css";
    if (css.styleSheet) css.styleSheet.cssText = rule;
    // Support for IE
    else css.appendChild(document.createTextNode(rule)); // Support for the rest
    document.getElementsByTagName("head")[0].appendChild(css);
    clearInterval(inter);
  }, 10);
}

let runner = 1;
let delay = 0.3;
for (let i = 0; i < logoName.length; i++) {
  rule += `#animatedLogo path:nth-child(${i + 1}) {
        stroke-dasharray: ${logoName[i].getTotalLength()};
        stroke-dashoffset: ${logoName[i].getTotalLength()};
        animation: line-anim 2s ease forwards ${delay}s;
    }\n`;
  runner += 2;
  delay += 0.3;
}

window.onload = function () {
  addCss(rule);
};
var typed;
// console.log(rule);
setTimeout(() => {
  typed = new Typed(".auto-type", {
    strings: ["FULL STACK DEVELOPER", "OPEN SOURCE ENTHUIST", "LEETCODER"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
}, 4000);
// var

// window.onscroll = function() {myFunction()};

// let navbar = document.getElementsByTagName("nav");
// console.log(navbar)
// let sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
