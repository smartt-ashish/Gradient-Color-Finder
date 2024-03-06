// Created Refrences

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let p2 = document.getElementById("p2");
let copyCode = document.getElementById("copyCode");

// Define Variables

let rgb1 = "#29f305";
let rgb2 = "#e00a9c";
let hexaValues = "0123456789abcdef";

// Function For Random Color

const findColor = () => {
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors += hexaValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

// Click Function

const handleBtn1 = () => {
  rgb1 = findColor();
  console.log(rgb1);
  document.body.style.backgroundImage = `linear-gradient(to right ,${rgb1},${rgb2})`;
  btn1.innerText = `${rgb1}`;
  p2.innerText = `background-image:linear-gradient(to right ,${rgb1},${rgb2});`;
};
const handleBtn2 = () => {
  rgb2 = findColor();
  console.log(rgb2);
  document.body.style.backgroundImage = `linear-gradient(to right ,${rgb1},${rgb2})`;
  btn2.innerText = `${rgb2}`;
  p2.innerText = `background-image:linear-gradient(to right ,${rgb1},${rgb2});`;
};

// Copy Code Button Click Function

copyCode.addEventListener("click", () => {
  navigator.clipboard.writeText(p2.innerText);
  copyCode.innerText = "Copied!";

  // Toggle Copy Button

  setTimeout(() => {
    copyCode.innerText = "Copy Code";
  }, 2000);
});

// Call Color Button

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);
