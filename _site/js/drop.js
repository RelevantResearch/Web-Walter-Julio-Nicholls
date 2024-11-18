// Add event listener to menu items with submenus
document.querySelectorAll('.menu-item.has-sub > a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        // Prevent the default link behavior
        e.preventDefault();

        // Find the submenu associated with the clicked item
        const submenu = this.nextElementSibling; // This assumes the submenu is a sibling to the <a> tag

        // Toggle the 'show' class to open or close the submenu
        submenu.classList.toggle('show');

        // Optionally, close other submenus when one is opened
        document.querySelectorAll('.menu-item.has-sub .sub-nav').forEach(function(otherSubmenu) {
            if (otherSubmenu !== submenu) {
                otherSubmenu.classList.remove('show');
            }
        });
    });
});
