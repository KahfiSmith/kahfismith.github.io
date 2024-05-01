function goBackWithAnimation() {
  document.body.style.transition = 'opacity 500ms ease-out';
  document.body.style.opacity = '0';
  setTimeout(function() {
    window.location.href = 'index.html'; 
  }, 500);
}

document.addEventListener("DOMContentLoaded", function() {
  let clickableElements = document.querySelectorAll(".clickable");
  clickableElements.forEach(function(element) {
    element.addEventListener("click", function(event) {
      event.preventDefault(); 
      let url = this.getAttribute("data-url");

      document.body.style.transition = 'opacity 500ms ease-out';
      document.body.style.opacity = '0';

      setTimeout(() => {
        window.location.href = url;
      }, 500);  
    });
  });
});
