function makeBigger() {
  alert("Button Clicked!");
  document.getElementById("textInput").style.fontSize = "24pt";
  }
function changeStyle() {
  alert("Radio button changed!");

  if (document.getElementById("fancyShmancy").checked) {
    document.getElementById("textInput").style.fontWeight = "bold";
  } else if (document.getElementById("boringBetty").checked) {
    document.getElementById("textInput").style.fontWeight = "normal";
  }
}
