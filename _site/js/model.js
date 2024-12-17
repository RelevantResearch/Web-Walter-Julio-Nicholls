let currentIndex = 0;
let imageSources = [];

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.img-hover-zoom img');
    imageSources = Array.from(images).map(img => img.src);

    // Add event listeners to each image (initial ones)
    images.forEach((img) => {
        img.addEventListener("click", function() {
            openModal(img.src);
        });
    });
});

// Open the modal and display the clicked image
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    // Set the image source for the modal
    modalImage.src = imageSrc;
    currentIndex = imageSources.indexOf(imageSrc);

    // Wait until the image is loaded before displaying the modal
    modalImage.onload = function() {
        modal.style.display = "block";   // Make the modal visible
        setTimeout(() => modal.style.opacity = "1", 100);  // Fade-in effect
    };

    // If the image is already loaded, show the modal immediately
    if (modalImage.complete) {
        modal.style.display = "block";
        modal.style.opacity = "1";
    }
}

// Close the modal with fade-out effect
function closeModal() {
    const modal = document.getElementById("imageModal");

    // Fade-out effect for the modal
    modal.style.opacity = "0";
    
    setTimeout(function() {
        modal.style.display = "none";  // Hide the modal after fade-out
    }, 500);
}

// Change the image in the modal (next or previous)
function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex >= imageSources.length) {
        currentIndex = 0;  // Loop back to the first image
    } else if (currentIndex < 0) {
        currentIndex = imageSources.length - 1;  // Loop to the last image
    }

    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageSources[currentIndex];
}

// Function to add event listeners to newly loaded images (called by loadMoreImages)
function addImageClickListeners() {
    const images = document.querySelectorAll('.img-hover-zoom img');
    imageSources = Array.from(images).map(img => img.src);  // Update imageSources array

    // Add click event listener for each image
    images.forEach((img) => {
        img.addEventListener("click", function() {
            openModal(img.src);
        });
    });
}
