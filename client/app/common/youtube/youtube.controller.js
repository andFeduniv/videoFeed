class YoutubeController {
  constructor(YoutubeVideo) {
    this.uVideo = YoutubeVideo;
  }

  $onInit() {
    this.uVideo.initVideo(this.videoId);
  }
}

YoutubeController.$inject = ['YoutubeVideo'];

export default YoutubeController;
