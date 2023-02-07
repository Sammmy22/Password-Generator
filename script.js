const slider = document.querySelector("#slider");

slider.addEventListener("change", function () {
  console.log(this.value);

  document.querySelector("#slider-value").innerHTML = this.value;
});
