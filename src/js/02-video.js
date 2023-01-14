import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);



player.on('timeupdate', throttle(onPlay, 1000));





function onPlay({ seconds }) {

  if (localStorage.getItem('videoplayer-current-time')) {
player.setCurrentTime(localStorage.getItem('videoplayer-current-time')); 
}  else {

  localStorage.setItem('videoplayer-current-time', seconds);

  }
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
