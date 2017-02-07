(function() {

var play_button = document.getElementById('play-button'),
    dash_url = document.getElementById('dash-url'),
    player;

function play() {
  if ( player ) player.reset();
  player = dashjs.MediaPlayer().create();
  player.initialize(document.getElementById('dash-video'), dash_url.value, true);
  player.play();
}

play_button.addEventListener('click', function(e) {
  e.preventDefault();
  play();
});

}).call();
