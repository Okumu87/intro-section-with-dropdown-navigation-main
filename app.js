
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

const dropdownFeatures = document.getElementById('arrow-down-features');

dropdownFeatures.addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-features');
    const arrowIcon = dropdownFeatures.querySelector('img');

    // Toggle visibility of dropdown content
    dropdownContent.classList.toggle('hidden');

    // Change arrow icon based on visibility
    if (dropdownContent.classList.contains('hidden')) {
        arrowIcon.src = ARROW_DOWN_IMG_PATH;
    } else {
        arrowIcon.src = ARROW_UP_IMG_PATH;
    }
});
// company dropdown
const dropdownCompany = document.getElementById('arrow-down-company');

dropdownCompany.addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-company');
    const arrowIcon = dropdownCompany.querySelector('img');

    // Toggle visibility of dropdown content
    dropdownContent.classList.toggle('hidden');

    // Change arrow icon based on visibility
    if (dropdownContent.classList.contains('hidden')) {
        arrowIcon.src = ARROW_DOWN_IMG_PATH;
    } else {
        arrowIcon.src = ARROW_UP_IMG_PATH;
    }
});

