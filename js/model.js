let currentIndex = 0;
let imageSources = [];

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.img-hover-zoom img');
    imageSources = Array.from(images).map(img => img.src);

    images.forEach((img) => {
        img.addEventListener("click", function() {
            openModal(img.src);
        });
    });
});

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

    // In case image is already loaded, directly show the modal
    if (modalImage.complete) {
        modal.style.display = "block";
        modal.style.opacity = "1";
    }
}

function closeModal() {
    const modal = document.getElementById("imageModal");

    // Fade-out effect for the modal
    modal.style.opacity = "0";
    
    setTimeout(function() {
        modal.style.display = "none";  // Hide the modal after fade-out
    }, 500);
}

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
