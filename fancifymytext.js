function makeBigger() {
  alert("Button Clicked!");
  document.getElementById("textInput").style.fontSize = "24pt";
  }
function changeStyle() {
  alert("Radio button changed!");

  if (document.getElementById("fancyShmancy").checked) {
    document.getElementById("textInput").style.fontWeight = "bold";
    document.getElementById("textInput").style.color = "blue";
    document.getElementById("textInput").style.textDecoration = "underline";
  } else if (document.getElementById("boringBetty").checked) {
    document.getElementById("textInput").style.fontWeight = "normal";
    document.getElementById("textInput").style.color = "black";
    document.getElementById("textInput").style.textDecoration = "none";
  }
}
