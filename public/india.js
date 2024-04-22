// JavaScript for applying dynamic styles
document.addEventListener("DOMContentLoaded", function() {
    // Change heading color
    const welcomeHeading = document.getElementById("welcomeHeading");
    welcomeHeading.style.color = "peachpuff";
  
    // Change button background color on hover
    const exploreButton = document.getElementById("exploreButton");
    exploreButton.addEventListener("mouseenter", function() {
      this.style.backgroundColor = "rgb(21, 74, 74)";
    });
    exploreButton.addEventListener("mouseleave", function() {
      this.style.backgroundColor = "white";
    });
  });
  