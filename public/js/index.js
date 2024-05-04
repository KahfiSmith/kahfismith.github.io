function goBackWithAnimation() {
  document.body.style.transition = "opacity 500ms ease-out";
  document.body.style.opacity = "0";
  setTimeout(function () {
    window.location.href = "/index.html";
  }, 500);
}

function adjustTheme() {
  const iconSun = document.getElementById("toggleIconSun");
  const iconMoon = document.getElementById("toggleIconMoon");
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    iconSun.classList.add("hidden");
    iconMoon.classList.remove("hidden");
  } else {
    document.documentElement.classList.remove("dark");
    iconSun.classList.remove("hidden");
    iconMoon.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  adjustTheme();

  let clickableElements = document.querySelectorAll(".clickable");
  clickableElements.forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      let url = this.getAttribute("data-url");

      document.body.style.transition = "opacity 500ms ease-out";
      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = url;
      }, 500);
    });
  });

  const toggleTheme = document.getElementById("toggleTheme");

  if (toggleTheme) {
    toggleTheme.addEventListener("click", function (event) {
      event.preventDefault();

      const iconSun = document.getElementById("toggleIconSun");
      const iconMoon = document.getElementById("toggleIconMoon");
      const body = document.documentElement;

      body.classList.toggle("dark");
      iconSun.classList.toggle("hidden");
      iconMoon.classList.toggle("hidden");

      if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  } else {
    console.error("Toggle theme div not found in the document");
  }
});
