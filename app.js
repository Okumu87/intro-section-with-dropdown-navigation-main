
// Constants for image paths
const ARROW_UP_IMG_PATH = "./images/icon-arrow-up.svg";
const ARROW_DOWN_IMG_PATH = "./images/icon-arrow-down.svg";

// Menu open 
document.getElementById('hamburger-menu').addEventListener('click', function() {
const items = document.querySelectorAll('.item')
items.forEach(item =>{
    item.classList.remove('hidden')
})
    });

// menu-close 

document.getElementById('close-btn').addEventListener('click', function() {
    const items = document.querySelectorAll('.item')
    items.forEach(item =>{
        item.classList.add('hidden')
    })
        });


//collapse menus and down arrow 