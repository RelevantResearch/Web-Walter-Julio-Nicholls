document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".menu-item.has-sub"); // Parent items with submenus
    const subNavLinks = document.querySelectorAll(".sub-nav a"); // Submenu links
    const sections = document.querySelectorAll('.page__content h2, .page__content h3'); // Sections on the page

    // Toggle submenu on click
    navItems.forEach(item => {
        const navLink = item.querySelector("a");
        navLink.addEventListener("click", (e) => {
            // Prevent default behavior if there's a submenu
            e.preventDefault();

            // Toggle the "open" class to show or hide the submenu
            const isOpen = item.classList.contains("open");
            navItems.forEach(i => i.classList.remove("open")); // Close all other submenus
            if (!isOpen) {
                item.classList.add("open");
            } else {
                item.classList.remove("open");
            }
        });
    });

    // Highlight submenu link on click (without navigating)
    subNavLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Prevent page redirection
            e.preventDefault();

            // Remove active class from all submenu links
            subNavLinks.forEach(l => l.classList.remove("active"));

            // Add active class to clicked submenu link
            link.classList.add("active");

            // Optionally, you can manually redirect after marking the active link (if you need it to navigate)
            window.location.href = link.getAttribute("href");
        });
    });

    // Function to handle the scroll event and update active submenu link
    const updateActiveSection = () => {
        let currentSection = null;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            // Check if the section is within 20% of the viewport or at least partially in view
            const isSectionInView = rect.top < window.innerHeight * 0.3 && rect.bottom >= 0;

            if (isSectionInView && !currentSection) {
                currentSection = section.id; // Get the ID of the section in view
            }
        });

        // If no section is in view, keep the last active link highlighted
        if (!currentSection) {
            return;
        }

        // Remove active class from all submenu links
        subNavLinks.forEach(link => link.classList.remove("active"));

        // Add active class to the submenu link that corresponds to the current section
        const activeLink = document.querySelector(`.sub-nav a[href*="#${currentSection}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    };

    // Use IntersectionObserver or scroll event to call updateActiveSection
    window.addEventListener("scroll", updateActiveSection);
    // Call it initially in case we load the page in the middle of the content
    updateActiveSection();
});
