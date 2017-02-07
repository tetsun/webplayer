(function() {

var play_button = document.getElementById('play-button'),
    player = videojs('hls-video', {controls: true, width: 640}),
    m3u8_url = document.getElementById('m3u8-url')
    ;

function play() {
  player.pause();
  player.src({ type: 'application/x-mpegURL', src: m3u8_url.value });
  player.play();
}

play_button.addEventListener('click', function(e) {
  e.preventDefault();
  play();
});

window.player = player;

}).call();
