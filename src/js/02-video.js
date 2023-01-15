import throttle from 'lodash.throttle';
import Player from '@vimeo/player'; 

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));
if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}
function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}




// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
// import throttle from 'lodash.throttle';
// import player from '@vimeo/player';
// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);
// player.on('timeupdate', throttle(onPlay, 1000));
// function onPlay({ seconds }) {
//     localStorage.setItem('videoplayer-current-time', seconds);
// }
//           if (localStorage.getItem('videoplayer-current-time')) {
// player.setCurrentTime(localStorage.getItem('videoplayer-current-time')); 
// }  

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
