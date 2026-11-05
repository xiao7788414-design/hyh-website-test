document.querySelectorAll(".home-latest-video").forEach((video) => {
  // Set the initial volume before enabling autoplay; later control changes persist.
  video.volume = 0.5;
  video.defaultMuted = false;
  video.muted = false;
  video.autoplay = true;
});
