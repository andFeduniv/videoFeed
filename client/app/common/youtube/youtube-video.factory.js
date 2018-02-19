let YoutubeFactory = function () {
  let videoList = [];
  let isInit = false;
  let scriptId = 'youtube-api';

  let addVideo = (videoId) => {
    if (!isInit) {
      videoList.push(videoId);
    } else {
      createPlayer(videoId);
    }
  };

  let initVideo = (videoId) => {
    if (!document.getElementById(scriptId)) {
      window.onYouTubeIframeAPIReady = () => {
        initVideos();
      };
      let tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      tag.id = scriptId;
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      addVideo(videoId);
    } else {
      addVideo(videoId);
    }
  };

  let createPlayer = (videoId) => {
    return new YT.Player(videoId, {
      height: '100%',
      width: '100%',
      videoId: videoId,
      events: {
      }
    });
  };

  let initVideos = () => {
    isInit = true;

    if(!videoList.length)
      return;

    for (let i = 0; i < videoList.length; i++) {
      let player = createPlayer(videoList[i]);
    }
  };

  return { initVideo };
};

export default YoutubeFactory;
