let displayedImages = 12;  // Initialize with the first 12 images displayed

function loadMoreImages() {
  const container = document.getElementById('image-container');
  
  // Calculate the next set of images to load
  const nextImages = window.imagesData.slice(displayedImages, displayedImages + 12);
  
  if (nextImages.length > 0) {
    // Loop through the next images and append them to the container
    nextImages.forEach(image => {
      const imageColumn = document.createElement('div');
      imageColumn.classList.add('image-column');
      
      const imgHoverZoom = document.createElement('div');
      imgHoverZoom.classList.add('img-hover-zoom');
      
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
      
      imgHoverZoom.appendChild(img);
      imageColumn.appendChild(imgHoverZoom);
      container.appendChild(imageColumn);
    });
    
    // Update the number of displayed images
    displayedImages += nextImages.length;
    
    // If there are no more images, hide the load more button
    if (displayedImages >= window.imagesData.length) {
      document.getElementById('loadMoreBtn').style.display = 'none';
    }

    // Add event listeners to newly loaded images
    addImageClickListeners();
  }
}
