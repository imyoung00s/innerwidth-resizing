// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const bgTarget = document.querySelector("body");
const bgColors = ["#1abc9c", "#f1c40f", "#3498db", "#e74c3c"];
const title = document.querySelector("#title");
bgTarget.style.backgroundColor = "#1abc9c";
function titleColor() {
  title.style.color = "#FFF";
}

titleColor();

function changeBg() {
  const winW = window.innerWidth;
  if (winW >= 1200) {
    bgTarget.style.backgroundColor = bgColors[0];
  } else if (winW < 1200 && winW >= 1000) {
    bgTarget.style.backgroundColor = bgColors[1];
  } else if (winW < 1000 && winW >= 800) {
    bgTarget.style.backgroundColor = bgColors[2];
  } else {
    bgTarget.style.backgroundColor = bgColors[3];
  }
}

window.addEventListener("resize", changeBg);
