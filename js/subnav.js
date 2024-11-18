document.addEventListener("DOMContentLoaded", function() {
    const subNavLinks = document.querySelectorAll(".sub-nav a");
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle"); // Add class to elements that should trigger the dropdown

    subNavLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove 'active' class from all submenu links
            subNavLinks.forEach(item => item.classList.remove("active"));

            // Add 'active' class to the clicked link
            this.classList.add("active");
        });
    });

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener("click", function(event) {
            
            
            // Toggle dropdown visibility
            const dropdownMenu = this.nextElementSibling; // Assuming the dropdown menu is the next sibling
            if (dropdownMenu) {
                dropdownMenu.classList.toggle("show");
            }
        });
    });
});
