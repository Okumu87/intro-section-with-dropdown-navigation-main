const dropdowns = document.querySelectorAll('.has-dropdown');

dropdowns.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault(); 
    
    const subMenu = item.querySelector('.sub-nav');
    const arrowImg = item.querySelector('.arrow-down'); 
    subMenu.classList.toggle('hidden');
  
    const isOpen = !subMenu.classList.contains('hidden');
    
    if (arrowImg) {

      arrowImg.src = isOpen
        ? './images/icon-arrow-up.svg'
        : './images/icon-arrow-down.svg';
    }
  });
});