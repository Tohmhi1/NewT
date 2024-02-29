const red =document.getElementById("red");
const yellow=document.getElementById("yellow");
const green=document.getElementById("green");
const Output=document.getElementById("Output");

//declaring the functions
function showRed() {
red.style.opacity=1;
yellow.style.opacity=0.3;
green.style.opacity=0.3;
Output.innerHTML="<b>STOP</b>";
setTimeout(showYellow, 3000);
}
function showYellow() {
yellow.style.opacity=1
red.style.opacity=0.3;
green.style.opacity=0.3;
Output.innerHTML="<b>READY</b>";
setTimeout(showGreen, 5000);
}
function showGreen() {
  red.style.opacity=0.3;
  yellow.style.opacity=0.3;
  green.style.opacity=1;
  Output.innerHTML="<b>GO!</b>";
  setTimeout(showRed, 5000);
}
showRed();
//SETTING TIMER USING SETTIMEOUT FUNCTION
// setTimeout(showRed(), 5000);
// setTimeout(showYellow(), 3000);
// setTimeout(showGreen(), 5000);