function initNavigation() {
  const dropdownItems = document.querySelectorAll(".has-dropdown");

  dropdownItems.forEach((item) => {
    const arrow = item.querySelector(".arrow-down");

    item.addEventListener("mouseenter", () => {
      if (arrow) arrow.style.transform = "rotate(180deg)";
    });

    item.addEventListener("mouseleave", () => {
      if (arrow) arrow.style.transform = "rotate(0deg)";
    });
  });
}

// Ensure the DOM is fully loaded before running
document.addEventListener("DOMContentLoaded", initNavigation);

const hamburgerMenu = document.querySelector(".hamburger-menu-btn");
const navMenu = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  console.log("Hamburger menu clicked");
  console.log(navMenu);
  navMenu.classList.toggle("active");
});