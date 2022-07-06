var img = document.querySelector("img");
var increaseButton = document.getElementById("increase");
var decreaseButton = document.getElementById("decrease");

increaseButton.addEventListener("click", function () {
  var currentSize = img.width;
  img.style.width = currentSize + 20 + "px";
});
decreaseButton.addEventListener("click", function () {
  var currentSize = img.width;
  img.style.width = currentSize - 20 + "px";
});
