document.addEventListener("DOMContentLoaded", function () {
  var carouselElement = document.querySelector("#carouselExample");

  carouselElement.addEventListener("mouseover", function () {
    carouselElement.carousel("pause");
  });

  carouselElement.addEventListener("mouseout", function () {
    carouselElement.carousel("cycle");
  });
});
