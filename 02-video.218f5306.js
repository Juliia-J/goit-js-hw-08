var iframe=document.querySelector("iframe"),player=new Player(iframe),throttle=new throttle,pauseTime=0,resumeTime=0,onPlay=function(e){pauseTime=e.seconds,localStorage.setItem("videoplayer-current-time")};player.on("timeupdate",throttle(pauseTime,1e3)),resumeTime=localStorage.getItem("videoplayer-current-time"),console.log("resumeTime",resumeTime);
//# sourceMappingURL=02-video.218f5306.js.map
