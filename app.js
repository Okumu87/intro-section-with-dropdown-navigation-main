// 1. Select all elements at the top
const hamburgerBtn = document.querySelector('.hamburger-menu-btn');
const navWrapper = document.querySelector('.nav-wrapper');
const overlay = document.querySelector('.overlay');
const dropdowns = document.querySelectorAll('.has-dropdown');

// 2. Main Navigation Toggle (Hamburger & Overlay)
function toggleMenu() {
  const isOpen = navWrapper.classList.toggle('active');
  overlay.classList.toggle('active');
  
  // Handle body scroll
  document.body.style.overflow = isOpen ? 'hidden' : 'auto';

  // Toggle Hamburger/Close Icon (Assuming you're using the background-image CSS method)
  hamburgerBtn.classList.toggle('is-open');
}

// Single click listener for hamburger
if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', toggleMenu);
}

// Single click listener for overlay (to close menu)
if (overlay) {
  overlay.addEventListener('click', toggleMenu);
}

// 3. Dropdown Logic
dropdowns.forEach(item => {
  // Select the link specifically to trigger the dropdown
  const trigger = item.querySelector('a'); 
  const subMenu = item.querySelector('.sub-nav');
  const arrowImg = item.querySelector('.arrow-down'); 

  if (trigger && subMenu) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault(); 
      e.stopPropagation(); // Prevents click from bubbling up
      
      const isHidden = subMenu.classList.toggle('hidden');
      const isOpen = !isHidden;
      
      // Swap Arrow Image
      if (arrowImg) {
        arrowImg.src = isOpen 
          ? './images/icon-arrow-up.svg' 
          : './images/icon-arrow-down.svg';
      }
    });
  }
});