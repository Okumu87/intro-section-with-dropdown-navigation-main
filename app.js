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

// mobile menu toggle
const hamburgerMenuBtn = document.querySelector(".hamburger-menu-btn");
const menuIcon = hamburgerMenuBtn.querySelector("img");
hamburgerMenuBtn.addEventListener("click", () => {
    // Check if the menu is currently open (you can use a class on the nav or a data-attribute)
    const isOpened = navMenu.classList.contains("open");

    if (isOpened) {
        // Change back to Hamburger icon
        menuIcon.src = "./images/icon-menu.svg";
    } else {
        // Change to Close (X) icon
        menuIcon.src = "./images/icon-close-menu.svg";
    }
    
    // Don't forget to actually toggle your menu!
    navMenu.classList.toggle("open");
});