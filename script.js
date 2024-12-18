const list = document.querySelectorAll('.list');

function activeLink() {
    // Remove the 'active' class from all menu items
    list.forEach((item) => {
        item.classList.remove('active');
    });
    
    // Add the 'active' class to the clicked item
    this.classList.add('active');
}

// Add event listener for click on each menu item
list.forEach((item) => {
    item.addEventListener('click', activeLink);
});
