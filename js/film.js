const videoUrls = [
    'https://www.youtube.com/embed/A92_0quXvNU',
    'https://www.youtube.com/embed/h36aIJg2wrU',
    'https://www.youtube.com/embed/EiOHTA3XEOM'
  ];
  
  let currentVideoIndex = null;
  let isPaused = false; // Keep track of the paused state
  
  // Function to change video
  function changeVideo(index) {
    const videoFrame = document.getElementById('video-frame');
    videoFrame.src = videoUrls[index] + '?autoplay=1';
  
    // Reset play/pause states for previous video
    if (currentVideoIndex !== null) {
      document.getElementById(`indicator-${currentVideoIndex}`).style.display = 'none';
      document.querySelectorAll('.video-item')[currentVideoIndex].classList.remove('playing');
      document.querySelectorAll('.video-item')[currentVideoIndex].classList.remove('paused');
      document.querySelectorAll('.video-item')[currentVideoIndex].classList.remove('stopped');
    }
  
    // Update the current video state
    document.getElementById(`indicator-${index}`).style.display = 'inline';
    document.querySelectorAll('.video-item')[index].classList.add('playing');
    currentVideoIndex = index;
    isPaused = false;
  }
  
  // Set the default video to be the first one on page load
  window.onload = function() {
    changeVideo(0);
  };
  
  // Function to handle pause and stop states
  function togglePauseStop(index) {
    const videoFrame = document.getElementById('video-frame');
    if (isPaused) {
      document.getElementById(`paused-${index}`).style.display = 'none';
      document.getElementById(`indicator-${index}`).style.display = 'inline';
      document.querySelectorAll('.video-item')[index].classList.remove('paused');
      document.querySelectorAll('.video-item')[index].classList.add('playing');
      isPaused = false;
      videoFrame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    } else {
      document.getElementById(`paused-${index}`).style.display = 'inline';
      document.getElementById(`indicator-${index}`).style.display = 'none';
      document.querySelectorAll('.video-item')[index].classList.remove('playing');
      document.querySelectorAll('.video-item')[index].classList.add('paused');
      isPaused = true;
      videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
  }
  
  // Function to stop video
  function stopVideo(index) {
    const videoFrame = document.getElementById('video-frame');
    document.getElementById(`stopped-${index}`).style.display = 'inline';
    document.getElementById(`indicator-${index}`).style.display = 'none';
    document.querySelectorAll('.video-item')[index].classList.remove('playing');
    document.querySelectorAll('.video-item')[index].classList.add('stopped');
    videoFrame.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    isPaused = false;
  }
  