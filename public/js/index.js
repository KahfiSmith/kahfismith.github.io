function goBackWithAnimation() {
  document.body.style.transition = "opacity 500ms ease-out";
  document.body.style.opacity = "0";
  setTimeout(function () {
    window.location.href = "index.html";
  }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
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

  const toggleTheme = document.getElementById('toggleTheme');

  if (toggleTheme) {
    toggleTheme.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior

      const iconSun = document.getElementById('toggleIconSun');
      const iconMoon = document.getElementById('toggleIconMoon');

      if (iconSun && iconMoon) {
        // Toggle visibility by adding or removing 'hidden'
        iconSun.classList.toggle('hidden');
        iconMoon.classList.toggle('hidden');
      } else {
        console.error('Icon elements are missing in the HTML document');
      }

      // Toggle the 'dark' class on the <html> element
      document.documentElement.classList.toggle('dark');
    });
  } else {
    console.error('Toggle theme div not found in the document');
  }
});
