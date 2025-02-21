document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('myVideo');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
  
    // Array of video sources
    const videos = [
      { src: 'video1.mp4', title: 'Video 1' },
      { src: 'video2.mp4', title: 'Video 2' },
      { src: 'video3.mp4', title: 'Video 3' }
    ];
  
    let currentVideoIndex = 0;
  
    // Function to load and play a video
    function loadVideo(index) {
      video.src = videos[index].src;
      video.load(); // Important:  Load the new source
      video.play();
    }
  
    // Initial video load
    loadVideo(currentVideoIndex);
  
    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function() {
      if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
      } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
      }
    });
  
    // Next video functionality
    nextBtn.addEventListener('click', function() {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      loadVideo(currentVideoIndex);
    });
  
    // Previous video functionality
    prevBtn.addEventListener('click', function() {
      currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length; // handles negative indices
      loadVideo(currentVideoIndex);
    });
  
    // Optional:  Handle video ending (play next video)
    video.addEventListener('ended', function() {
      currentVideoIndex = (currentVideoIndex + 1) % videos.length;
      loadVideo(currentVideoIndex);
    });
  });
  