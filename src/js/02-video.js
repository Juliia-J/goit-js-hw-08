
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('handstick');
let pauseTime = 0;
let resumeTime = 0;

const onPlay = function(data) {
    pauseTime = data.seconds;
    localStorage.setItem('videoplayer-current-time');
};

player.on('timeupdate', throttle(pauseTime, 1000));

resumeTime = localStorage.getItem('videoplayer-current-time');
console.log('resumeTime', resumeTime);

