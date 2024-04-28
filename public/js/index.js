document.addEventListener("DOMContentLoaded", function () {
  let clickableElements = document.querySelectorAll(".clickable");
  clickableElements.forEach(function (element) {
    element.addEventListener("click", function () {
      let url = this.getAttribute("data-url");
      window.location.href = url;
    });
  });
});
