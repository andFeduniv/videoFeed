import angular from 'angular';
import YoutubeVideoFactory from './youtube-video.factory';

let youtubeVideoModule = angular.module('youtubeVideo', [])

  .factory('YoutubeVideo', YoutubeVideoFactory)

  .name;

export default youtubeVideoModule;
