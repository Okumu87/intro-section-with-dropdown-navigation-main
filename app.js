// toggle sub-nav

// 1. Select all the links that should trigger a dropdown
const toggles = document.querySelectorAll('.dropdown-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', function(e) {
    e.preventDefault(); // Stop the '#' from jumping the page
    
    // 2. Find the submenu (it's the next sibling of the link)
    const subNav = this.nextElementSibling;
    
    // 3. Find the arrow inside the clicked link
    const arrow = this.querySelector('.arrow');
    
    // 4. Toggle the visibility class on the menu
    subNav.classList.toggle('hidden');
    
    // 5. Toggle the rotation class on the arrow
    arrow.classList.toggle('rotate');
  });
});