document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const sidebarToggle = document.querySelector(".sidebar-toggle");
  const closeBtn = document.querySelector(".close-btn");
  
  // Function to toggle sidebar
  function toggleSidebar() {
    sidebar.classList.toggle("open");
    sidebarToggle.classList.toggle("active");
  }
  // Hamburger icon click event
  sidebarToggle.addEventListener("click", toggleSidebar);
  // Close button click event
  closeBtn.addEventListener("click", toggleSidebar);
});