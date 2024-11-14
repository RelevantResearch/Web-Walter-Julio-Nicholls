document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item.has-sub');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            // Only toggle sub-menu on smaller screens
            if (window.innerWidth <= 768) {
                const subNav = item.querySelector('.sub-nav');
                const isVisible = subNav.style.display === 'block';
                
                // Hide all submenus first
                document.querySelectorAll('.sub-nav').forEach(nav => nav.style.display = 'none');

                // Toggle the clicked one
                subNav.style.display = isVisible ? 'none' : 'block';

                // Prevent the parent link from navigating
                e.preventDefault();
            }
        });
    });
});
