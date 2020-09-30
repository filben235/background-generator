var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var input=document.querySelector("#input");

function setGradient() {
  body.style.background="linear-gradient(to right, "+color1.value+", "+color2.value+")";

  input.value=body.style.background + ";";
}

function copyText() {
  var copyText=document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

setGradient();


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

