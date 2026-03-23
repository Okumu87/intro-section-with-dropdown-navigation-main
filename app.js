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