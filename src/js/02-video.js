
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttle = require('lodash.throttle');

let pauseTime = 0;
let resumeTime = 0;

const onPlay = function(data) {
    pauseTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', pauseTime);
};

player.on('timeupdate', throttle(pauseTime, 1000));

resumeTime = localStorage.getItem('videoplayer-current-time');
console.log('resumeTime', resumeTime);

player.getVideoTitle().then(function (title) {
    console.log('title', title);
});

player.setCurrentTime(resumeTime).then(onPlay(pauseTime));

