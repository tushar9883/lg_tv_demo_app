var videoPlayer = videojs('video-player');

window.onload = function(e){ 
      makeAPICall();
    }
    
function makeAPICall() {
  fetch('https://www.panarmenian.tv/wp-json/platform/links')
    .then(response => response.json())
    .then(data => {
      const androidtv = data['android_tv_url'];
      console.log(androidtv);
      videoPlayer.src(androidtv);
      videoPlayer.play();
    //   hideLoader();
    })
    .catch(error => console.error(error));
}

videoPlayer.on('loadedmetadata', function() {
    videoPlayer.requestFullscreen();
  });

  document.addEventListener('keydown', function(event) {
    var keyCode = event.keyCode;
    if (keyCode === 179 || keyCode === 415 || keyCode === 19) { // play/pause button
      videoPlayer.paused() ? videoPlayer.play() : videoPlayer.pause();
    }
  });
  
  document.addEventListener('keyup', function(event) {
    var keyCode = event.keyCode;
    if (keyCode === 179 || keyCode === 415 || keyCode === 19) { // play/pause button
      event.preventDefault();
    }
  });

