import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));
if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
function onPlay({ seconds, duration }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  if (seconds === duration) {
    localStorage.removeItem('videoplayer-current-time');
  }
}


