document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.image');
  const nextButton = document.getElementById('nextButton');
  const paginationDots = document.getElementById('paginationDots');
  
  let currentIndex = 0;

  // Show the initial image
  function showImage(index) {
    images.forEach((image, i) => {
      image.style.opacity = (i === index) ? '1' : '0'; // Show only the current image
    });

    updatePaginationDots(index);
  }

  // Update pagination dots
  function updatePaginationDots(index) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('is-active'));
    dots[index].classList.add('is-active');
  }

  // Add pagination dots dynamically
  function createPaginationDots() {
    for (let i = 0; i < images.length; i++) {
      const dot = document.createElement('li');
      dot.classList.add('dot');
      dot.addEventListener('click', function() {
        currentIndex = i;
        showImage(currentIndex);
      });
      paginationDots.appendChild(dot);
    }
  }

  // Handle next button click
  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Initialize
  createPaginationDots();
  showImage(currentIndex); // Show the first image initially
});
